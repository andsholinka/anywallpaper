"use client";

import dynamic from "next/dynamic";

const MacClock = dynamic(() => import("./MacClock"), { ssr: false });
const Aurora = dynamic(() => import("./Aurora"), { ssr: false });
const Particles = dynamic(() => import("./Particles"), { ssr: false });
const LiquidMesh = dynamic(() => import("./LiquidMesh"), { ssr: false });
const NeonRain = dynamic(() => import("./NeonRain"), { ssr: false });
const FlipClock = dynamic(() => import("./FlipClock"), { ssr: false });
const FliqloClock = dynamic(() => import("./FliqloClock"), { ssr: false });
const MatrixRain = dynamic(() => import("./MatrixRain"), { ssr: false });
const SolarOrbit = dynamic(() => import("./SolarOrbit"), { ssr: false });
const MonoWaves = dynamic(() => import("./MonoWaves"), { ssr: false });
const MonoGrid = dynamic(() => import("./MonoGrid"), { ssr: false });
const MonoInk = dynamic(() => import("./MonoInk"), { ssr: false });

export const LIVE_COMPONENTS: Record<string, React.ComponentType> = {
  MacClock,
  Aurora,
  Particles,
  LiquidMesh,
  NeonRain,
  FlipClock,
  FliqloClock,
  MatrixRain,
  SolarOrbit,
  MonoWaves,
  MonoGrid,
  MonoInk
};

export function LiveWallpaper({ name }: { name: string }) {
  const Comp = LIVE_COMPONENTS[name];
  if (!Comp) return null;
  return <Comp />;
}
