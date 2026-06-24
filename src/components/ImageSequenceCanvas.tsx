"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

const FRAME_COUNT = 200;

const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/frames/${paddedIndex}.png`;
};

export default function ImageSequenceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll();

  // Preload frames and extract background color
  useEffect(() => {
    let isCancelled = false;
    const loadedImages: HTMLImageElement[] = [];

    const extractBackgroundColor = (img: HTMLImageElement) => {
      const c = document.createElement("canvas");
      c.width = 1;
      c.height = 1;
      const ctx = c.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0, 1, 1);
        const data = ctx.getImageData(0, 0, 1, 1).data;
        document.documentElement.style.setProperty(
          "--color-background",
          `rgb(${data[0]}, ${data[1]}, ${data[2]})`
        );
      }
    };

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        if (!isCancelled) {
          if (i === 1) {
            extractBackgroundColor(img);
            setImages([...loadedImages]);
          }
        }
      };
      loadedImages.push(img);
    }
    
    setImages(loadedImages);

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    let animationFrameId: number;

    const renderLoop = () => {
      const progress = scrollYProgress.get();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Map full progress to frameIndex
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(progress * FRAME_COUNT))
      );

      const img = images[frameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) {
        animationFrameId = requestAnimationFrame(renderLoop);
        return;
      }

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      
      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
      } else {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
      }
      
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = (canvas.height - drawHeight) / 2;

      // Draw the frame centered and scaled
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();
    return () => cancelAnimationFrame(animationFrameId);
  }, [images, scrollYProgress]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  );
}
