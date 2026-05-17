"use client";

import { useEffect, useRef } from "react";

/**
 * Aesthetic black & white flowing line waves.
 * Inspired by minimalist topographic art.
 */
export default function MonoWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = c.clientWidth;
      h = c.clientHeight;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);

      const lines = 50;
      for (let i = 0; i < lines; i++) {
        const progress = i / lines;
        const y = progress * h;
        const opacity = 0.05 + progress * 0.35;
        ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 4) {
          const wave1 = Math.sin(x * 0.005 + t * 0.5 + i * 0.15) * 30;
          const wave2 = Math.sin(x * 0.012 + t * 0.3 - i * 0.08) * 18;
          const wave3 = Math.cos(x * 0.003 + t * 0.2) * 12;
          const offset = wave1 + wave2 + wave3;
          if (x === 0) ctx.moveTo(x, y + offset);
          else ctx.lineTo(x, y + offset);
        }
        ctx.stroke();
      }

      t += 0.012;
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-20 noise" />
    </div>
  );
}
