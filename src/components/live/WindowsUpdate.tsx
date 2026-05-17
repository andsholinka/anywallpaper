"use client";

import { useEffect, useState } from "react";

/**
 * Windows Update screen — the classic blue screen with spinning dots
 * and a slowly incrementing percentage.
 */
export default function WindowsUpdate() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Slowly increment percentage, resets at 100
    const id = setInterval(() => {
      setPercent((p) => {
        if (p >= 100) return 0;
        // Random small increment to feel realistic
        const inc = Math.random() < 0.3 ? 0 : Math.random() < 0.7 ? 1 : 2;
        return Math.min(p + inc, 100);
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0078d4" }}
    >
      {/* Spinning dots loader */}
      <div className="relative h-[8vmin] w-[8vmin]">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 h-[1.1vmin] w-[1.1vmin] rounded-full bg-white"
            style={{
              animation: `winSpin 2.4s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
              animationDelay: `${-0.15 * (5 - i)}s`,
              transformOrigin: "0 0"
            }}
          />
        ))}
      </div>

      {/* Text */}
      <div className="mt-[5vmin] text-center">
        <div
          className="text-white"
          style={{
            fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
            fontSize: "3.2vmin",
            fontWeight: 300,
            lineHeight: 1.6
          }}
        >
          Working on updates
        </div>
        <div
          className="text-white"
          style={{
            fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
            fontSize: "3.2vmin",
            fontWeight: 300,
            lineHeight: 1.6
          }}
        >
          {percent}% complete
        </div>
        <div
          className="mt-[2vmin] text-white"
          style={{
            fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
            fontSize: "3.2vmin",
            fontWeight: 300,
            lineHeight: 1.6
          }}
        >
          Don&apos;t turn off your computer
        </div>
      </div>

      {/* Keyframes for the spinning dots */}
      <style jsx>{`
        @keyframes winSpin {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(3.5vmin);
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(3.5vmin);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
