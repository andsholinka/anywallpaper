"use client";

/**
 * Aesthetic ink-blot animation: white smoke / ink drifting on black.
 * Pure CSS, no canvas.
 */
export default function MonoInk() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Drifting ink blobs (white on black, blurred) */}
      <div
        className="absolute h-[70vmin] w-[70vmin] rounded-full bg-white/30 blur-[80px]"
        style={{
          left: "10%",
          top: "20%",
          animation: "monoFloat1 18s ease-in-out infinite alternate"
        }}
      />
      <div
        className="absolute h-[55vmin] w-[55vmin] rounded-full bg-white/20 blur-[100px]"
        style={{
          right: "15%",
          top: "10%",
          animation: "monoFloat2 22s ease-in-out infinite alternate"
        }}
      />
      <div
        className="absolute h-[60vmin] w-[60vmin] rounded-full bg-white/25 blur-[90px]"
        style={{
          left: "30%",
          bottom: "10%",
          animation: "monoFloat3 26s ease-in-out infinite alternate"
        }}
      />
      <div
        className="absolute h-[40vmin] w-[40vmin] rounded-full bg-white/15 blur-[120px]"
        style={{
          right: "25%",
          bottom: "20%",
          animation: "monoFloat4 30s ease-in-out infinite alternate"
        }}
      />

      {/* Heavy noise / grain */}
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-40 noise" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_50%,transparent_0%,rgba(0,0,0,0.7)_100%)]" />

      <style jsx>{`
        @keyframes monoFloat1 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(20%, 15%) scale(1.2); }
        }
        @keyframes monoFloat2 {
          0% { transform: translate(0, 0) scale(1.1); }
          100% { transform: translate(-25%, 20%) scale(0.9); }
        }
        @keyframes monoFloat3 {
          0% { transform: translate(0, 0) scale(0.95); }
          100% { transform: translate(15%, -20%) scale(1.15); }
        }
        @keyframes monoFloat4 {
          0% { transform: translate(0, 0) scale(1.05); }
          100% { transform: translate(-15%, -25%) scale(0.85); }
        }
      `}</style>
    </div>
  );
}
