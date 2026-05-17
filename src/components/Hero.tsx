"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { LiveWallpaper } from "./live";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Background live wallpaper */}
      <div className="absolute inset-0 -z-10">
        <LiveWallpaper name="Aurora" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/10 to-black" />

      {/* Top nav */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-2xl ring-1 ring-white/20">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400 via-violet-500 to-cyan-400" />
            <Sparkles className="absolute inset-0 m-auto h-4 w-4 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight">
              AnyWallpaper
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
              Aesthetic library
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-1 rounded-full glass-strong px-2 py-1.5 text-sm text-white/80 sm:flex">
          <a className="rounded-full px-3 py-1.5 hover:text-white" href="#gallery">
            Gallery
          </a>
          <a className="rounded-full px-3 py-1.5 hover:text-white" href="#live">
            Live
          </a>
          <a className="rounded-full px-3 py-1.5 hover:text-white" href="#categories">
            Categories
          </a>
        </nav>

        <a
          href="#gallery"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Browse
        </a>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-16 text-center sm:pt-24 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/80"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          New · Live wallpapers
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-balance mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          Wallpapers that
          <br />
          <span className="bg-gradient-to-r from-fuchsia-300 via-violet-200 to-cyan-300 bg-clip-text text-transparent">
            actually move you
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-balance mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          A curated library of static and live wallpapers. From the latest Windows 11 looks
          to a working macOS-style clock, aurora, particles, and more — all in glorious
          fullscreen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#gallery"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Explore gallery
            <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
          </a>
          <a
            href="#live"
            className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            See live wallpapers
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-3 text-center"
        >
          {[
            { k: "30+", v: "Wallpapers" },
            { k: "8", v: "Live & dynamic" },
            { k: "4K", v: "High resolution" }
          ].map((s) => (
            <div
              key={s.v}
              className="glass rounded-2xl px-4 py-5"
            >
              <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {s.k}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/50">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 overflow-hidden border-y border-white/5 bg-black/40 py-4 backdrop-blur">
        <div className="marquee whitespace-nowrap text-sm uppercase tracking-[0.35em] text-white/40">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 pr-8">
              <span>✦ Aesthetic</span>
              <span>· Live Wallpapers</span>
              <span>· Windows 11</span>
              <span>· macOS Clock</span>
              <span>· Aurora</span>
              <span>· Particles</span>
              <span>· Matrix</span>
              <span>· Tokyo Nights</span>
              <span>· Fullscreen Ready</span>
              <span>· 4K</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
