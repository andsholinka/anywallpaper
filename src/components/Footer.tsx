"use client";

import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/50 px-6 py-12 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-2xl ring-1 ring-white/20">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400 via-violet-500 to-cyan-400" />
            <Sparkles className="absolute inset-0 m-auto h-4 w-4 text-white" />
          </div>
          <div className="text-sm text-white/70">
            <div className="font-display font-semibold text-white">AnyWallpaper</div>
            <div className="text-xs text-white/50">
              Built with Next.js · Curated with care
            </div>
          </div>
        </div>

        <div className="text-xs text-white/40">
          © {new Date().getFullYear()} AnyWallpaper. All wallpapers credited to their
          respective creators on Unsplash.
        </div>
      </div>
    </footer>
  );
}
