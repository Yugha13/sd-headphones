"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

const FRAME_COUNT = 30;

const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/frames/ezgif-frame-${paddedIndex}.jpg`;
};

export default function ImageSequenceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange(setProgress);
  }, [scrollYProgress]);

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

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // PHASE 1: Sequence Scrubbing (0.0 to 0.15)
      // Map progress 0 -> 0.15 to frameIndex 0 -> 29
      let frameProgress = 0;
      if (progress <= 0.15) {
        frameProgress = progress / 0.15;
      } else {
        frameProgress = 1; // Locked to last frame
      }
      
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(frameProgress * FRAME_COUNT))
      );

      const img = images[frameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) return;

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

      // PHASE 2: 3D Explosion on the last frame (0.15 to 0.85)
      let explosionProgress = 0;
      if (progress > 0.15) {
        explosionProgress = Math.min(1, (progress - 0.15) / 0.7);
      }

      ctx.save();
      // Center translation for ease
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);

      const easeP = 1 - Math.pow(1 - explosionProgress, 3);

      const w = img.width;
      const h = img.height;

      // Draw standard frame if not exploding
      if (easeP < 0.01) {
        ctx.globalCompositeOperation = "lighten";
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        ctx.restore();
        return;
      }

      // Explosion slices
      const drawHeadband = () => {
        ctx.save();
        const sx = 0, sy = 0, sw = w, sh = h * 0.45;
        const dxOffset = 0, dyOffset = -easeP * (drawHeight * 0.3), rot = 0;
        
        const dx = offsetX + (sx / w) * drawWidth;
        const dy = offsetY + (sy / h) * drawHeight;
        const dw = (sw / w) * drawWidth;
        const dh = (sh / h) * drawHeight;

        const cx = dx + dw / 2;
        const cy = dy + dh / 2;

        ctx.translate(cx + dxOffset, cy + dyOffset);
        ctx.rotate(rot);
        
        ctx.beginPath();
        ctx.ellipse(0, -dh*0.1, dw/2, dh/1.5, 0, 0, Math.PI * 2);
        ctx.clip();
        
        ctx.drawImage(img, sx, sy, sw, sh, -dw / 2, -dh / 2, dw, dh);
        ctx.restore();
      };

      const drawLeftEarcup = () => {
        ctx.save();
        const sx = 0, sy = h * 0.45, sw = w * 0.5, sh = h * 0.55;
        const dxOffset = -easeP * (drawWidth * 0.4), dyOffset = easeP * (drawHeight * 0.1), rot = -easeP * 0.5;
        
        const dx = offsetX + (sx / w) * drawWidth;
        const dy = offsetY + (sy / h) * drawHeight;
        const dw = (sw / w) * drawWidth;
        const dh = (sh / h) * drawHeight;

        const cx = dx + dw / 2;
        const cy = dy + dh / 2;

        ctx.translate(cx + dxOffset, cy + dyOffset);
        ctx.rotate(rot);
        
        ctx.beginPath();
        ctx.ellipse(0, 0, dw/1.2, dh/1.2, 0, 0, Math.PI * 2);
        ctx.clip();
        
        ctx.drawImage(img, sx, sy, sw, sh, -dw / 2, -dh / 2, dw, dh);
        ctx.restore();
      };

      const drawRightEarcup = () => {
        ctx.save();
        const sx = w * 0.5, sy = h * 0.45, sw = w * 0.5, sh = h * 0.55;
        const dxOffset = easeP * (drawWidth * 0.4), dyOffset = easeP * (drawHeight * 0.1), rot = easeP * 0.5;
        
        const dx = offsetX + (sx / w) * drawWidth;
        const dy = offsetY + (sy / h) * drawHeight;
        const dw = (sw / w) * drawWidth;
        const dh = (sh / h) * drawHeight;

        const cx = dx + dw / 2;
        const cy = dy + dh / 2;

        ctx.translate(cx + dxOffset, cy + dyOffset);
        ctx.rotate(rot);
        
        ctx.beginPath();
        ctx.ellipse(0, 0, dw/1.2, dh/1.2, 0, 0, Math.PI * 2);
        ctx.clip();
        
        ctx.drawImage(img, sx, sy, sw, sh, -dw / 2, -dh / 2, dw, dh);
        ctx.restore();
      };

      ctx.globalCompositeOperation = "lighten";
      drawHeadband();
      drawLeftEarcup();
      drawRightEarcup();
      
      ctx.restore();
    };

    const animationFrameId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationFrameId);
  }, [progress, images]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full object-cover mix-blend-screen"
    />
  );
}
