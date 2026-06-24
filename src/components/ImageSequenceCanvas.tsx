"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

export default function ImageSequenceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange(setProgress);
  }, [scrollYProgress]);

  useEffect(() => {
    const image = new Image();
    image.src = "/images/headphone.png";
    image.onload = () => setImg(image);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      
      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        drawWidth = canvas.width * 0.8;
        drawHeight = drawWidth / imgRatio;
      } else {
        drawHeight = canvas.height * 0.8;
        drawWidth = drawHeight * imgRatio;
      }
      
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = (canvas.height - drawHeight) / 2;

      // The hero section is ~15-20% of the total scroll height.
      // We want the headphones to stay assembled in the hero, then start breaking.
      // Let's make the explosion start at progress 0.15 and finish at 0.85
      let explosionProgress = 0;
      if (progress > 0.15) {
        explosionProgress = Math.min(1, (progress - 0.15) / 0.7);
      }

      // We can also add a subtle zoom out effect when scrolling from 0 to 0.15
      const scaleP = progress < 0.15 ? 1 - (progress / 0.15) * 0.1 : 0.9;
      
      ctx.save();
      // Center scale
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(scaleP, scaleP);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);

      const easeP = 1 - Math.pow(1 - explosionProgress, 3);

      const w = img.width;
      const h = img.height;
      
      const drawSlice = (
        sx: number, sy: number, sw: number, sh: number,
        dxOffset: number, dyOffset: number, rot: number
      ) => {
        ctx.save();
        
        const dx = offsetX + (sx / w) * drawWidth;
        const dy = offsetY + (sy / h) * drawHeight;
        const dw = (sw / w) * drawWidth;
        const dh = (sh / h) * drawHeight;

        const cx = dx + dw / 2;
        const cy = dy + dh / 2;

        ctx.translate(cx + dxOffset, cy + dyOffset);
        ctx.rotate(rot);
        
        ctx.drawImage(
          img,
          sx, sy, sw, sh,
          -dw / 2, -dh / 2, dw, dh
        );
        
        ctx.restore();
      };

      // 1. Headband (Top portion)
      drawSlice(
        0, 0, w, h * 0.45,
        0, -easeP * (drawHeight * 0.3), // moves up
        0
      );

      // 2. Left Earcup (Bottom left)
      drawSlice(
        0, h * 0.45, w * 0.5, h * 0.55,
        -easeP * (drawWidth * 0.4), easeP * (drawHeight * 0.1), // moves left and slightly down
        -easeP * 0.5 // rotates counter-clockwise
      );

      // 3. Right Earcup (Bottom right)
      drawSlice(
        w * 0.5, h * 0.45, w * 0.5, h * 0.55,
        easeP * (drawWidth * 0.4), easeP * (drawHeight * 0.1), // moves right and slightly down
        easeP * 0.5 // rotates clockwise
      );
      
      ctx.restore();
    };

    const animationFrameId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationFrameId);
  }, [progress, img]);

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
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  );
}
