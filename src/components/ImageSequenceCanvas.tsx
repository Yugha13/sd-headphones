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
      let explosionProgress = 0;
      if (progress > 0.15) {
        explosionProgress = Math.min(1, (progress - 0.15) / 0.7);
      }

      // Subtle zoom out effect when scrolling from 0 to 0.15
      const scaleP = progress < 0.15 ? 1 - (progress / 0.15) * 0.1 : 0.9;
      
      ctx.save();
      // Center scale
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(scaleP, scaleP);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);

      const easeP = 1 - Math.pow(1 - explosionProgress, 3);

      const w = img.width;
      const h = img.height;
      
      // 1. Headband (Top portion)
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
        
        // Soften the cut edge with a clip
        ctx.beginPath();
        ctx.ellipse(0, -dh*0.1, dw/2, dh/1.5, 0, 0, Math.PI * 2);
        ctx.clip();
        
        ctx.drawImage(img, sx, sy, sw, sh, -dw / 2, -dh / 2, dw, dh);
        ctx.restore();
      };

      // 2. Left Earcup
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

      // 3. Right Earcup
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

      // Draw with lighten composite to blend backgrounds smoothly
      ctx.globalCompositeOperation = "lighten";
      
      // If fully assembled, draw the whole image to avoid clip seams
      if (easeP < 0.01) {
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      } else {
        drawHeadband();
        drawLeftEarcup();
        drawRightEarcup();
      }
      
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
