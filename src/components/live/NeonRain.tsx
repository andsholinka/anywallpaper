"use client";

import { useEffect, useRef } from "react";

export default function NeonRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    type Drop = { x: number; y: number; len: number; vy: number; hue: number };
    let drops: Drop[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = c.clientWidth;
      h = c.clientHeight;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drops = Array.from({ length: 220 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        len: Math.random() * 18 + 6,
        vy: Math.random() * 6 + 4,
        hue: Math.random() < 0.5 ? 190 : 320
      }));
    };

    const draw = () => {
      ctx.fillStyle = "rgba(2, 4, 14, 0.25)";
      ctx.fillRect(0, 0, w, h);
      drops.forEach((d) => {
        const grad = ctx.createLinearGradient(d.x, d.y, d.x, d.y + d.len);
        grad.addColorStop(0, `hsla(${d.hue}, 100%, 70%, 0)`);
        grad.addColorStop(1, `hsla(${d.hue}, 100%, 70%, 0.9)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.len);
        ctx.stroke();
        d.y += d.vy;
        if (d.y > h) {
          d.y = -d.len;
          d.x = Math.random() * w;
        }
      });
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
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #050818 0%, #0a0a25 50%, #14062a 100%)"
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    </div>
  );
}
