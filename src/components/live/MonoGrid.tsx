"use client";

import { useEffect, useRef } from "react";

/**
 * Minimalist white grid on black with a soft moving spotlight.
 * Bauhaus-inspired aesthetic.
 */
export default function MonoGrid() {
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
      // Background
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, w, h);

      // Soft spotlight
      const cx = w * (0.5 + Math.sin(t * 0.4) * 0.25);
      const cy = h * (0.5 + Math.cos(t * 0.3) * 0.2);
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.6);
      grad.addColorStop(0, "rgba(255,255,255,0.18)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Grid lines
      ctx.strokeStyle = "rgba(255,255,255,0.08)";
      ctx.lineWidth = 1;
      const step = 60;
      ctx.beginPath();
      for (let x = 0; x <= w; x += step) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = 0; y <= h; y += step) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();

      // Highlighted dots near spotlight
      for (let x = 0; x <= w; x += step) {
        for (let y = 0; y <= h; y += step) {
          const dist = Math.hypot(x - cx, y - cy);
          const intensity = Math.max(0, 1 - dist / 280);
          if (intensity > 0.05) {
            ctx.fillStyle = `rgba(255,255,255,${intensity * 0.9})`;
            ctx.beginPath();
            ctx.arc(x, y, 1.5 + intensity * 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      t += 0.01;
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_50%,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}
