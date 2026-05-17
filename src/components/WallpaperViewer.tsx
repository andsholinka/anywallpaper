"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Maximize, Minimize, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Wallpaper } from "@/lib/wallpapers";
import { LiveWallpaper } from "./live";

type Props = {
  wallpaper: Wallpaper | null;
  onClose: () => void;
};

export default function WallpaperViewer({ wallpaper, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hideUI, setHideUI] = useState(false);

  useEffect(() => {
    const onFs = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  useEffect(() => {
    if (!wallpaper) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !document.fullscreenElement) onClose();
      if (e.key === "f" || e.key === "F") toggleFullscreen();
      if (e.key === "h" || e.key === "H") setHideUI((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallpaper]);

  const toggleFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      await el.requestFullscreen?.();
    } else {
      await document.exitFullscreen?.();
    }
  };

  const handleDownload = async () => {
    if (!wallpaper?.src) return;
    try {
      const res = await fetch(wallpaper.src);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${wallpaper.id}.jpg`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      window.open(wallpaper.src, "_blank");
    }
  };

  return (
    <AnimatePresence>
      {wallpaper && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md"
        >
          <div
            ref={containerRef}
            className="relative h-screen w-screen overflow-hidden bg-black"
            onMouseMove={() => setHideUI(false)}
          >
            {/* Wallpaper */}
            <motion.div
              key={wallpaper.id}
              initial={{ scale: 1.04, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              {wallpaper.kind === "live" && wallpaper.component ? (
                <LiveWallpaper name={wallpaper.component} />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={wallpaper.src}
                  alt={wallpaper.title}
                  className="h-full w-full object-cover"
                  style={
                    wallpaper.category === "Mono"
                      ? { filter: "grayscale(100%) contrast(1.05)" }
                      : undefined
                  }
                />
              )}
            </motion.div>

            {/* UI */}
            <AnimatePresence>
              {!hideUI && (
                <>
                  {/* Top bar */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-3 p-4 sm:p-6"
                  >
                    <div className="glass-strong flex items-center gap-3 rounded-full px-4 py-2 text-white">
                      {wallpaper.kind === "live" && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                          Live
                        </span>
                      )}
                      <div className="text-sm font-medium">{wallpaper.title}</div>
                      <div className="hidden text-xs text-white/50 sm:block">
                        · {wallpaper.category}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {wallpaper.kind === "static" && (
                        <button
                          onClick={handleDownload}
                          className="glass-strong inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition hover:bg-white/15"
                        >
                          <Download className="h-4 w-4" />
                          <span className="hidden sm:inline">Download</span>
                        </button>
                      )}
                      <button
                        onClick={toggleFullscreen}
                        className="glass-strong inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition hover:bg-white/15"
                        title="Fullscreen (F)"
                      >
                        {isFullscreen ? (
                          <Minimize className="h-4 w-4" />
                        ) : (
                          <Maximize className="h-4 w-4" />
                        )}
                        <span className="hidden sm:inline">
                          {isFullscreen ? "Exit" : "Fullscreen"}
                        </span>
                      </button>
                      <button
                        onClick={onClose}
                        className="glass-strong inline-flex items-center justify-center rounded-full p-2.5 text-white transition hover:bg-white/15"
                        aria-label="Close"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>

                  {/* Bottom hint */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-center p-4 sm:p-6"
                  >
                    <div className="glass flex items-center gap-3 rounded-full px-4 py-2 text-xs text-white/70">
                      <Kbd>F</Kbd> Fullscreen
                      <span className="text-white/20">·</span>
                      <Kbd>H</Kbd> Hide UI
                      <span className="text-white/20">·</span>
                      <Kbd>Esc</Kbd> Close
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded-md border border-white/15 bg-white/10 px-1.5 py-0.5 font-mono text-[10px] uppercase text-white/90">
      {children}
    </kbd>
  );
}
