"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CATEGORIES, wallpapers, type Wallpaper } from "@/lib/wallpapers";
import WallpaperCard from "./WallpaperCard";
import WallpaperViewer from "./WallpaperViewer";
import { motion } from "framer-motion";

export default function Gallery() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Wallpaper | null>(null);

  const filtered = useMemo(() => {
    return wallpapers.filter((w) => {
      const matchCat =
        active === "All" ||
        (active === "Live" ? w.kind === "live" : w.category === active);
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        w.title.toLowerCase().includes(q) ||
        w.tags.some((t) => t.toLowerCase().includes(q)) ||
        w.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [active, query]);

  const liveOnly = wallpapers.filter((w) => w.kind === "live");

  return (
    <>
      {/* LIVE SECTION */}
      <section id="live" className="relative px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.25em] text-emerald-200">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Live wallpapers
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-5xl">
                Animated. Reactive.
                <br />
                <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                  Real-time clocks included.
                </span>
              </h2>
              <p className="mt-3 max-w-xl text-white/60">
                The macOS-style clock keeps actual time. Particles drift forever. Aurora
                lights breathe. Open any wallpaper in fullscreen.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {liveOnly.map((w, i) => (
              <WallpaperCard key={w.id} wallpaper={w} onOpen={setOpen} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="relative px-6 py-20 sm:px-10 lg:py-28">
        {/* Subtle bg */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
          <div className="absolute left-1/4 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/3 h-[40rem] w-[40rem] translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70">
              <span>✦</span> Full collection
            </div>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">
              Pick your vibe
            </h2>
          </div>

          {/* Filters */}
          <div
            id="categories"
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {CATEGORIES.map((c) => {
                const isActive = active === c;
                return (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className={
                      "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition " +
                      (isActive
                        ? "bg-white text-black"
                        : "glass text-white/80 hover:bg-white/10")
                    }
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            <div className="glass relative flex items-center gap-2 rounded-full px-4 py-2 text-sm sm:w-72">
              <Search className="h-4 w-4 text-white/60" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search wallpapers..."
                className="w-full bg-transparent text-white outline-none placeholder:text-white/40"
              />
            </div>
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {filtered.map((w, i) => (
              <WallpaperCard key={w.id} wallpaper={w} onOpen={setOpen} index={i} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="mt-20 text-center text-white/50">
              No wallpapers match your filter.
            </div>
          )}
        </div>
      </section>

      <WallpaperViewer wallpaper={open} onClose={() => setOpen(null)} />
    </>
  );
}
