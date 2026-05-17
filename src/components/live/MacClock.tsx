"use client";

import { useEffect, useState } from "react";

export default function MacClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = now
    ? now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })
    : "--:--";
  const seconds = now
    ? now.toLocaleTimeString("en-US", { second: "2-digit", hour12: false }).padStart(2, "0")
    : "--";
  const date = now
    ? now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
      })
    : "Loading...";

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 30% 20%, #2a2156 0%, #1a1240 30%, #0b0820 70%, #060414 100%)"
        }}
      />
      {/* Glow orbs */}
      <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-fuchsia-500/30 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-indigo-500/30 blur-[120px]" />

      {/* Center content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-white">
        <div className="text-sm uppercase tracking-[0.4em] text-white/60">{date}</div>
        <div className="mt-4 flex items-end gap-2">
          <div className="font-display text-[18vw] leading-none tabular-nums text-white drop-shadow-[0_8px_30px_rgba(255,255,255,0.15)]">
            {time}
          </div>
          <div className="mb-[2vw] font-display text-[6vw] leading-none tabular-nums text-white/50">
            {seconds}
          </div>
        </div>
        <div className="mt-6 text-xs uppercase tracking-[0.5em] text-white/40">
          AnyWallpaper · Live Clock
        </div>
      </div>
    </div>
  );
}
