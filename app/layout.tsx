import "./globals.css";
import type { Metadata } from "next";

import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import Background from "./components/Background";
import PageTransition from "./components/PageTransition";

export const metadata: Metadata = {
  title: "Sumit Kumar — AI, Cloud & Software Engineering",
  description:
    "Portfolio showcasing AI-native systems, cloud infra, HPC, and engineering work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-neutral-200 antialiased selection:bg-purple-500/40">

        {/* Background Animation */}
        <Background />

        {/* Navbar */}
        <Navbar />

        {/* Music Player */}
        <MusicPlayer />

        {/* Main Page Content With Transitions */}
        <main className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20">
          <PageTransition>{children}</PageTransition>
        </main>

      </body>
    </html>
  );
}
