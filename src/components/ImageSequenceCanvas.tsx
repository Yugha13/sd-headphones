"use client";

import { useEffect, useRef, useState } from "react";

interface ImageSequenceCanvasProps {
  progress: number;
}

export default function ImageSequenceCanvas({ progress }: ImageSequenceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [img, setImg] = useState<HTMLImageElement | null>(null);

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
      
      // Calculate drawing dimensions to maintain aspect ratio covering the canvas
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      
      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      // Fit the image within the canvas (contain) so we can see the explosion clearly
      if (imgRatio > canvasRatio) {
        drawWidth = canvas.width * 0.8;
        drawHeight = drawWidth / imgRatio;
      } else {
        drawHeight = canvas.height * 0.8;
        drawWidth = drawHeight * imgRatio;
      }
      
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = (canvas.height - drawHeight) / 2;

      // Ensure progress is smooth
      const p = Math.max(0, Math.min(1, progress));

      // Ease out cubic for explosion effect
      const easeP = 1 - Math.pow(1 - p, 3);

      // Define slices (Headband, Left Earcup, Right Earcup, Center mechanism)
      // We will slice the image source coordinates
      const w = img.width;
      const h = img.height;
      
      const drawSlice = (
        sx: number, sy: number, sw: number, sh: number,
        dxOffset: number, dyOffset: number, rot: number
      ) => {
        ctx.save();
        
        // Target destination rect
        const dx = offsetX + (sx / w) * drawWidth;
        const dy = offsetY + (sy / h) * drawHeight;
        const dw = (sw / w) * drawWidth;
        const dh = (sh / h) * drawHeight;

        // Move to center of destination rect for rotation
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
