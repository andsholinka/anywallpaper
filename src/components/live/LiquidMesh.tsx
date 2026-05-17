"use client";

export default function LiquidMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <div
        className="absolute inset-0 animate-[gradient-x_15s_ease_infinite]"
        style={{
          background:
            "linear-gradient(120deg, #ff6cb1, #7c5cff, #42e6ff, #5cffd1, #ffd166, #ff6cb1)",
          backgroundSize: "400% 400%",
          filter: "saturate(120%)"
        }}
      />
      <div className="absolute inset-0 backdrop-blur-3xl" />
      <div className="absolute inset-0 mix-blend-overlay opacity-30 noise" />
      {/* Floating blobs */}
      <div className="absolute left-1/4 top-1/3 h-[40vmin] w-[40vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400/40 blur-3xl animate-float" />
      <div
        className="absolute right-1/4 bottom-1/4 h-[36vmin] w-[36vmin] rounded-full bg-cyan-300/40 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />
    </div>
  );
}
