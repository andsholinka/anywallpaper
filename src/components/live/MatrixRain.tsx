"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let drops: number[] = [];
    const fontSize = 16;
    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF".split("");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = c.clientWidth;
      h = c.clientHeight;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = Math.ceil(w / fontSize);
      drops = Array.from({ length: cols }, () => Math.random() * -100);
    };

    const draw = () => {
      ctx.fillStyle = "rgba(0, 8, 4, 0.08)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${fontSize}px ui-monospace, monospace`;
      drops.forEach((y, i) => {
        const txt = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const grad = ctx.createLinearGradient(x, y - 20, x, y);
        grad.addColorStop(0, "rgba(0,255,140,0)");
        grad.addColorStop(1, "rgba(0,255,140,0.95)");
        ctx.fillStyle = grad;
        ctx.fillText(txt, x, y);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] = y + fontSize;
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
    <div className="absolute inset-0 bg-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,transparent_0%,rgba(0,0,0,0.7)_100%)]" />
    </div>
  );
}
