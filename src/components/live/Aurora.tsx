"use client";

export default function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <div className="aurora" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 100%, rgba(0,0,0,0.6) 0%, transparent 60%)"
        }}
      />
      {/* Stars */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(white 0.6px, transparent 0.6px), radial-gradient(white 0.4px, transparent 0.4px)",
            backgroundSize: "100px 100px, 60px 60px",
            backgroundPosition: "0 0, 30px 30px"
          }}
        />
      </div>
    </div>
  );
}
