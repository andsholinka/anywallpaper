"use client";

import { useEffect, useState } from "react";

/**
 * Fliqlo-style flip clock screensaver — closely matches the real macOS Fliqlo:
 *  - Two huge cards (HH and MM) filling the screen
 *  - 12-hour format with AM/PM badge
 *  - Smooth top-down flip animation on change
 */

function FlipCard({ value, badge }: { value: string; badge?: string }) {
  const [current, setCurrent] = useState(value);
  const [previous, setPrevious] = useState(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== current) {
      setPrevious(current);
      setFlipping(true);
      const t = setTimeout(() => {
        setCurrent(value);
        setFlipping(false);
      }, 700);
      return () => clearTimeout(t);
    }
  }, [value, current]);

  return (
    <div className="relative h-[68vmin] w-[58vmin] [perspective:1600px]">
      {/* Static base card showing the new value */}
      <Half value={current} half="top" />
      <Half value={current} half="bottom" />

      {/* Animated halves on flip */}
      {flipping && (
        <>
          {/* Top half of old value flips down */}
          <div
            className="absolute inset-0 origin-bottom [transform-style:preserve-3d] [backface-visibility:hidden]"
            style={{
              animation: "fliqloTop 700ms cubic-bezier(0.5, 0.05, 0.4, 1) forwards",
              zIndex: 3
            }}
          >
            <Half value={previous} half="top" />
          </div>
          {/* Bottom half of new value flips up */}
          <div
            className="absolute inset-0 origin-top [transform-style:preserve-3d] [backface-visibility:hidden]"
            style={{
              animation: "fliqloBottom 700ms cubic-bezier(0.5, 0.05, 0.4, 1) forwards",
              animationDelay: "350ms",
              zIndex: 2,
              transform: "rotateX(90deg)"
            }}
          >
            <Half value={current} half="bottom" />
          </div>
        </>
      )}

      {/* AM/PM badge inside the top-left corner of the card */}
      {badge && (
        <div
          className="pointer-events-none absolute left-[3.5vmin] top-[3vmin] z-10 select-none"
          style={{
            fontFamily:
              "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            fontWeight: 700,
            fontSize: "3vmin",
            letterSpacing: "0.15em",
            color: "#dcdcdc",
            opacity: 0.95
          }}
        >
          {badge}
        </div>
      )}
    </div>
  );
}

function Half({ value, half }: { value: string; half: "top" | "bottom" }) {
  const isTop = half === "top";
  return (
    <div
      className={
        "absolute left-0 right-0 overflow-hidden bg-[#1a1a1a] " +
        (isTop
          ? "top-0 h-1/2 rounded-t-[3vmin]"
          : "bottom-0 h-1/2 rounded-b-[3vmin]")
      }
      style={{
        boxShadow: isTop
          ? "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.5)"
          : "inset 0 -1px 0 rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.7)",
        borderBottom: isTop ? "1px solid #000" : "none",
        borderTop: !isTop ? "1px solid #2a2a2a" : "none"
      }}
    >
      <div
        className={
          "absolute left-0 right-0 flex h-[200%] items-center justify-center text-white " +
          (isTop ? "top-0" : "-top-full")
        }
      >
        <span
          className="leading-none tabular-nums select-none"
          style={{
            fontFamily:
              "'Helvetica Neue', 'Helvetica', 'Arial Black', sans-serif",
            fontWeight: 700,
            fontSize: "52vmin",
            letterSpacing: "-0.05em",
            color: "#dcdcdc"
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

export default function FliqloClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Always 12-hour with AM/PM (Fliqlo default)
  let h12 = 0;
  let suffix = "AM";
  if (now) {
    const h24 = now.getHours();
    suffix = h24 >= 12 ? "PM" : "AM";
    h12 = h24 % 12 || 12;
  }
  const hh = now ? String(h12).padStart(2, "0") : "--";
  const mm = now ? String(now.getMinutes()).padStart(2, "0") : "--";

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <style jsx>{`
        @keyframes fliqloTop {
          0% { transform: rotateX(0deg); }
          100% { transform: rotateX(-90deg); }
        }
        @keyframes fliqloBottom {
          0% { transform: rotateX(90deg); }
          100% { transform: rotateX(0deg); }
        }
      `}</style>

      {/* Two big cards: HH : MM with AM/PM badge in the hours card */}
      <div className="absolute inset-0 flex items-center justify-center gap-[3vmin]">
        <FlipCard value={hh} badge={suffix} />
        <FlipCard value={mm} />
      </div>
    </div>
  );
}
