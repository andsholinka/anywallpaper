"use client";

import { motion } from "framer-motion";
import { Maximize2, Sparkles } from "lucide-react";
import type { Wallpaper } from "@/lib/wallpapers";
import { LiveWallpaper } from "./live";

type Props = {
  wallpaper: Wallpaper;
  onOpen: (w: Wallpaper) => void;
  index?: number;
};

export default function WallpaperCard({ wallpaper, onOpen, index = 0 }: Props) {
  const isLive = wallpaper.kind === "live";
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(wallpaper)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.4) }}
      whileHover={{ y: -4 }}
      className="card-glow group relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white/5 text-left ring-1 ring-white/10 transition-all hover:ring-white/30"
      style={{
        boxShadow: `0 20px 60px -20px ${wallpaper.accent ?? "rgba(120,80,255,0.3)"}30`
      }}
    >
      {/* Preview */}
      <div className="absolute inset-0">
        {isLive && wallpaper.component ? (
          <div className="absolute inset-0 scale-105">
            <LiveWallpaper name={wallpaper.component} />
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={wallpaper.thumb ?? wallpaper.src}
            alt={wallpaper.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={
              wallpaper.category === "Mono"
                ? { filter: "grayscale(100%) contrast(1.05)" }
                : undefined
            }
          />
        )}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      {/* Top badges */}
      <div className="absolute left-3 top-3 flex items-center gap-2">
        {isLive && (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-200 ring-1 ring-emerald-400/30 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Live
          </span>
        )}
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 ring-1 ring-white/15 backdrop-blur">
          {wallpaper.category}
        </span>
      </div>

      {/* Hover action */}
      <div className="absolute right-3 top-3 translate-y-[-8px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="rounded-full bg-white/15 p-2 ring-1 ring-white/20 backdrop-blur">
          <Maximize2 className="h-4 w-4 text-white" />
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="flex items-end justify-between gap-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              {wallpaper.title}
            </h3>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {wallpaper.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-[10px] uppercase tracking-wider text-white/50"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
          <div
            className="h-9 w-9 shrink-0 rounded-full ring-2 ring-white/20"
            style={{ background: wallpaper.accent }}
            aria-hidden
          />
        </div>
      </div>

      {/* Hover sparkles */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <Sparkles
          className="absolute left-6 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70"
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
      </div>
    </motion.button>
  );
}
