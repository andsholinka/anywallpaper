export type WallpaperKind = "static" | "live";

export type Wallpaper = {
  id: string;
  title: string;
  author?: string;
  category: string;
  kind: WallpaperKind;
  /** For static wallpapers */
  src?: string;
  /** Thumbnail (optional, falls back to src) */
  thumb?: string;
  /** For live wallpapers */
  component?: string;
  tags: string[];
  accent?: string;
};

export const CATEGORIES = [
  "All",
  "Live",
  "Mono",
  "Windows",
  "macOS",
  "Nature",
  "Abstract",
  "Minimal",
  "Space",
  "City"
] as const;

export const wallpapers: Wallpaper[] = [
  // ===== LIVE WALLPAPERS =====
  {
    id: "live-clock-mac",
    title: "macOS Clock",
    author: "Live",
    category: "Live",
    kind: "live",
    component: "MacClock",
    tags: ["clock", "mac", "minimal"],
    accent: "#7c5cff"
  },
  {
    id: "live-aurora",
    title: "Aurora Borealis",
    author: "Live",
    category: "Live",
    kind: "live",
    component: "Aurora",
    tags: ["aurora", "gradient", "ambient"],
    accent: "#5cffd1"
  },
  {
    id: "live-particles",
    title: "Stellar Particles",
    author: "Live",
    category: "Live",
    kind: "live",
    component: "Particles",
    tags: ["particles", "stars", "space"],
    accent: "#9bb6ff"
  },
  {
    id: "live-mesh",
    title: "Liquid Mesh",
    author: "Live",
    category: "Live",
    kind: "live",
    component: "LiquidMesh",
    tags: ["abstract", "gradient", "liquid"],
    accent: "#ff6cb1"
  },
  {
    id: "live-rain",
    title: "Neon Rain",
    author: "Live",
    category: "Live",
    kind: "live",
    component: "NeonRain",
    tags: ["rain", "city", "cyberpunk"],
    accent: "#42e6ff"
  },
  {
    id: "live-mono-waves",
    title: "Mono Waves",
    author: "Live",
    category: "Mono",
    kind: "live",
    component: "MonoWaves",
    tags: ["mono", "waves", "minimal", "blackandwhite"],
    accent: "#ffffff"
  },
  {
    id: "live-mono-grid",
    title: "Mono Grid",
    author: "Live",
    category: "Mono",
    kind: "live",
    component: "MonoGrid",
    tags: ["mono", "grid", "bauhaus", "blackandwhite"],
    accent: "#ffffff"
  },
  {
    id: "live-mono-ink",
    title: "Ink Drift",
    author: "Live",
    category: "Mono",
    kind: "live",
    component: "MonoInk",
    tags: ["mono", "ink", "smoke", "blackandwhite"],
    accent: "#e5e5e5"
  },

  // ===== STATIC: BLACK & WHITE / MONO =====
  {
    id: "mono-mountain",
    title: "Silver Peaks",
    category: "Mono",
    kind: "static",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2400&q=85&auto=format&fit=crop&sat=-100",
    tags: ["mountain", "mono", "minimal"],
    accent: "#cfcfcf"
  },
  {
    id: "mono-forest",
    title: "Birch Stillness",
    category: "Mono",
    kind: "static",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=2400&q=85&auto=format&fit=crop&sat=-100",
    tags: ["forest", "mono", "trees"],
    accent: "#e0e0e0"
  },
  {
    id: "mono-architecture",
    title: "Concrete Lines",
    category: "Mono",
    kind: "static",
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2400&q=85&auto=format&fit=crop&sat=-100",
    tags: ["architecture", "mono", "geometry"],
    accent: "#bdbdbd"
  },
  {
    id: "mono-ocean",
    title: "Silver Tide",
    category: "Mono",
    kind: "static",
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=2400&q=85&auto=format&fit=crop&sat=-100",
    tags: ["ocean", "mono", "wave"],
    accent: "#d4d4d4"
  },
  {
    id: "mono-portrait",
    title: "Light & Shadow",
    category: "Mono",
    kind: "static",
    src: "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=2400&q=85&auto=format&fit=crop&sat=-100",
    tags: ["portrait", "mono", "shadow"],
    accent: "#a8a8a8"
  },
  {
    id: "mono-city",
    title: "Monochrome Avenue",
    category: "Mono",
    kind: "static",
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=2400&q=85&auto=format&fit=crop&sat=-100",
    tags: ["city", "mono", "newyork"],
    accent: "#cccccc"
  },
  {
    id: "mono-fog",
    title: "Foggy Pines",
    category: "Mono",
    kind: "static",
    src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=2400&q=85&auto=format&fit=crop&sat=-100",
    tags: ["fog", "mono", "nature"],
    accent: "#e8e8e8"
  },
  {
    id: "mono-minimal",
    title: "Pure Form",
    category: "Mono",
    kind: "static",
    src: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=2400&q=85&auto=format&fit=crop&sat=-100",
    tags: ["minimal", "mono", "abstract"],
    accent: "#f0f0f0"
  },
  {
    id: "mono-marble",
    title: "Marble Texture",
    category: "Mono",
    kind: "static",
    src: "https://images.unsplash.com/photo-1582546304816-23bb84cb56a4?w=2400&q=85&auto=format&fit=crop&sat=-100",
    tags: ["marble", "mono", "texture"],
    accent: "#e5e5e5"
  },
  {
    id: "mono-stairs",
    title: "Stairwell Geometry",
    category: "Mono",
    kind: "static",
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=2400&q=85&auto=format&fit=crop&sat=-100",
    tags: ["architecture", "mono", "geometry"],
    accent: "#b8b8b8"
  },

  {
    id: "live-fliqlo",
    title: "Fliqlo · Mac Screensaver",
    author: "Live",
    category: "Live",
    kind: "live",
    component: "FliqloClock",
    tags: ["clock", "mac", "screensaver", "fliqlo"],
    accent: "#ffffff"
  },
  {
    id: "live-flipclock",
    title: "Flip Clock",
    author: "Live",
    category: "Live",
    kind: "live",
    component: "FlipClock",
    tags: ["clock", "retro", "minimal"],
    accent: "#ffd166"
  },
  {
    id: "live-matrix",
    title: "Matrix Code",
    author: "Live",
    category: "Live",
    kind: "live",
    component: "MatrixRain",
    tags: ["matrix", "code", "green"],
    accent: "#00ff88"
  },
  {
    id: "live-orbit",
    title: "Solar Orbit",
    author: "Live",
    category: "Live",
    kind: "live",
    component: "SolarOrbit",
    tags: ["space", "orbit", "minimal"],
    accent: "#ffb86b"
  },

  // ===== STATIC: WINDOWS =====
  {
    id: "win-bloom",
    title: "Windows 11 Bloom",
    category: "Windows",
    kind: "static",
    src: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=2400&q=85&auto=format&fit=crop",
    tags: ["windows", "bloom", "official"],
    accent: "#3aa0ff"
  },
  {
    id: "win-flow",
    title: "Windows Flow",
    category: "Windows",
    kind: "static",
    src: "https://images.unsplash.com/photo-1620207418302-439b387441b0?w=2400&q=85&auto=format&fit=crop",
    tags: ["windows", "abstract", "flow"],
    accent: "#6a8dff"
  },
  {
    id: "win-glow",
    title: "Windows Glow",
    category: "Windows",
    kind: "static",
    src: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=2400&q=85&auto=format&fit=crop",
    tags: ["windows", "glow", "neon"],
    accent: "#a96bff"
  },
  {
    id: "win-spectrum",
    title: "Spectrum 11",
    category: "Windows",
    kind: "static",
    src: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=2400&q=85&auto=format&fit=crop",
    tags: ["windows", "color", "spectrum"],
    accent: "#ff6cb1"
  },

  // ===== STATIC: macOS =====
  {
    id: "mac-sonoma",
    title: "macOS Sonoma",
    category: "macOS",
    kind: "static",
    src: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?w=2400&q=85&auto=format&fit=crop",
    tags: ["macos", "sonoma", "official"],
    accent: "#ff8e6e"
  },
  {
    id: "mac-bigsur",
    title: "Big Sur Cliffs",
    category: "macOS",
    kind: "static",
    src: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=2400&q=85&auto=format&fit=crop",
    tags: ["macos", "bigsur", "nature"],
    accent: "#5db3ff"
  },
  {
    id: "mac-ventura",
    title: "Ventura Wave",
    category: "macOS",
    kind: "static",
    src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=2400&q=85&auto=format&fit=crop",
    tags: ["macos", "ventura", "wave"],
    accent: "#7a8bff"
  },

  // ===== NATURE =====
  {
    id: "nature-mountain",
    title: "Alpine Dawn",
    category: "Nature",
    kind: "static",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2400&q=85&auto=format&fit=crop",
    tags: ["mountain", "dawn", "nature"],
    accent: "#ffae6b"
  },
  {
    id: "nature-forest",
    title: "Misty Forest",
    category: "Nature",
    kind: "static",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=2400&q=85&auto=format&fit=crop",
    tags: ["forest", "mist", "green"],
    accent: "#7ed382"
  },
  {
    id: "nature-ocean",
    title: "Ocean Drift",
    category: "Nature",
    kind: "static",
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=2400&q=85&auto=format&fit=crop",
    tags: ["ocean", "wave", "blue"],
    accent: "#4cc4ff"
  },
  {
    id: "nature-desert",
    title: "Desert Dunes",
    category: "Nature",
    kind: "static",
    src: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=2400&q=85&auto=format&fit=crop",
    tags: ["desert", "warm", "sand"],
    accent: "#ffb86b"
  },

  // ===== ABSTRACT =====
  {
    id: "abs-fluid",
    title: "Fluid Color",
    category: "Abstract",
    kind: "static",
    src: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=2400&q=85&auto=format&fit=crop",
    tags: ["abstract", "fluid", "color"],
    accent: "#ff6cb1"
  },
  {
    id: "abs-glass",
    title: "Glass Refraction",
    category: "Abstract",
    kind: "static",
    src: "https://images.unsplash.com/photo-1614851099511-773084f6e7d8?w=2400&q=85&auto=format&fit=crop",
    tags: ["glass", "refraction"],
    accent: "#a96bff"
  },
  {
    id: "abs-paint",
    title: "Paint Swirl",
    category: "Abstract",
    kind: "static",
    src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=2400&q=85&auto=format&fit=crop",
    tags: ["paint", "swirl"],
    accent: "#7c5cff"
  },

  // ===== MINIMAL =====
  {
    id: "min-dots",
    title: "Soft Gradient",
    category: "Minimal",
    kind: "static",
    src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=2400&q=85&auto=format&fit=crop",
    tags: ["minimal", "gradient"],
    accent: "#ffd166"
  },
  {
    id: "min-mono",
    title: "Mono Curve",
    category: "Minimal",
    kind: "static",
    src: "https://images.unsplash.com/photo-1554034483-04fda0d3507b?w=2400&q=85&auto=format&fit=crop",
    tags: ["minimal", "mono"],
    accent: "#cccccc"
  },

  // ===== SPACE =====
  {
    id: "space-galaxy",
    title: "Andromeda Drift",
    category: "Space",
    kind: "static",
    src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2400&q=85&auto=format&fit=crop",
    tags: ["galaxy", "space", "stars"],
    accent: "#9bb6ff"
  },
  {
    id: "space-nebula",
    title: "Crimson Nebula",
    category: "Space",
    kind: "static",
    src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=2400&q=85&auto=format&fit=crop",
    tags: ["nebula", "space"],
    accent: "#ff6cb1"
  },
  {
    id: "space-earth",
    title: "Earth From Above",
    category: "Space",
    kind: "static",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2400&q=85&auto=format&fit=crop",
    tags: ["earth", "space"],
    accent: "#42e6ff"
  },

  // ===== CITY =====
  {
    id: "city-tokyo",
    title: "Tokyo Nights",
    category: "City",
    kind: "static",
    src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=2400&q=85&auto=format&fit=crop",
    tags: ["tokyo", "city", "neon"],
    accent: "#ff478e"
  },
  {
    id: "city-newyork",
    title: "Manhattan Glow",
    category: "City",
    kind: "static",
    src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=2400&q=85&auto=format&fit=crop",
    tags: ["newyork", "city"],
    accent: "#ffb86b"
  },
  {
    id: "city-rain",
    title: "Rainy Avenue",
    category: "City",
    kind: "static",
    src: "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?w=2400&q=85&auto=format&fit=crop",
    tags: ["rain", "city"],
    accent: "#4cc4ff"
  }
];

export function getWallpaperById(id: string) {
  return wallpapers.find((w) => w.id === id);
}
