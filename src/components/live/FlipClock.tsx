"use client";

import { useEffect, useState } from "react";

function Card({ value }: { value: string }) {
  return (
    <div className="relative flex h-[24vmin] w-[18vmin] items-center justify-center overflow-hidden rounded-2xl bg-zinc-900 text-white shadow-2xl ring-1 ring-white/10">
      <div className="absolute inset-x-0 top-1/2 h-px bg-black/60" />
      <div className="font-display text-[14vmin] font-bold leading-none tabular-nums">
        {value}
      </div>
    </div>
  );
}

export default function FlipClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hh = now ? String(now.getHours()).padStart(2, "0") : "--";
  const mm = now ? String(now.getMinutes()).padStart(2, "0") : "--";
  const ss = now ? String(now.getSeconds()).padStart(2, "0") : "--";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 50%, #2a1f12 0%, #1a120a 60%, #0a0604 100%)"
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center gap-4">
        <Card value={hh} />
        <div className="font-display text-[10vmin] font-bold text-amber-200/80">:</div>
        <Card value={mm} />
        <div className="font-display text-[10vmin] font-bold text-amber-200/80">:</div>
        <Card value={ss} />
      </div>
      <div className="pointer-events-none absolute bottom-10 left-0 right-0 text-center text-xs uppercase tracking-[0.4em] text-amber-100/40">
        Flip · AnyWallpaper
      </div>
    </div>
  );
}
