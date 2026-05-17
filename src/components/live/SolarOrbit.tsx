"use client";

export default function SolarOrbit() {
  const planets = [
    { size: 14, distance: 80, dur: 8, color: "#ffd166" },
    { size: 18, distance: 130, dur: 14, color: "#ff8e6e" },
    { size: 22, distance: 190, dur: 22, color: "#42e6ff" },
    { size: 16, distance: 260, dur: 32, color: "#a96bff" },
    { size: 24, distance: 340, dur: 48, color: "#7ed382" }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 50%, #1a0a2e 0%, #0a0418 60%, #03020a 100%)"
        }}
      />
      {/* Stars */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(white 0.6px, transparent 0.6px), radial-gradient(white 0.4px, transparent 0.4px)",
          backgroundSize: "120px 120px, 70px 70px",
          backgroundPosition: "0 0, 40px 40px"
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {/* Sun */}
        <div className="relative h-[60px] w-[60px] rounded-full bg-amber-300 shadow-[0_0_60px_30px_rgba(255,180,80,0.55)]" />
        {planets.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/10 animate-spin-slow"
            style={{
              width: p.distance * 2,
              height: p.distance * 2,
              animationDuration: `${p.dur}s`
            }}
          >
            <div
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: p.size,
                height: p.size,
                background: p.color,
                boxShadow: `0 0 24px ${p.color}`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
