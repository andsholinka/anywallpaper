import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AnyWallpaper — Aesthetic & Live Wallpapers",
  description:
    "A curated, aesthetic library of static and live wallpapers. Windows, macOS-style clocks, aurora, particles and more — fullscreen ready.",
  keywords: ["wallpaper", "live wallpaper", "windows wallpaper", "mac clock wallpaper", "aesthetic"],
  openGraph: {
    title: "AnyWallpaper",
    description: "Curated aesthetic wallpapers, live & static.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
