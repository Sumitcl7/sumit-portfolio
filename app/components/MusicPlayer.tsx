"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPlay,
  FaPause,
  FaChevronDown,
  FaChevronUp,
  FaStepBackward,
  FaStepForward
} from "react-icons/fa";

const songs = [
  { title: "RATHER LIE", file: "/music/songs/song1.mp3" },
  { title: "ETHEREAL", file: "/music/songs/song2.mp3" },
  { title: "AFTERLIGHT", file: "/music/songs/song3.mp3" },
];

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-minimize on scroll
  useEffect(() => {
    const handleScroll = () => setIsMinimized(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Autoplay on load
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.7;
      audio.play().catch(() => {});
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  // FIX: safe function to load & play next song without AbortError
  const safePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.load(); // fully load the new file

    audio.oncanplay = () => {
      audio.play().catch(() => {});
      setIsPlaying(true);
    };
  };

  const nextSong = () => {
    const newIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(newIndex);

    const audio = audioRef.current;
    if (!audio) return;

    audio.src = songs[newIndex].file;
    safePlay();
  };

  const prevSong = () => {
    const newIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(newIndex);

    const audio = audioRef.current;
    if (!audio) return;

    audio.src = songs[newIndex].file;
    safePlay();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isMinimized ? 0.85 : 1,
      }}
      transition={{ duration: 0.3 }}
      className={`
        fixed bottom-6 right-6 z-50
        px-5 py-4 rounded-2xl
        bg-white/10 backdrop-blur-2xl 
        border border-white/20
        shadow-[0_8px_30px_rgba(0,0,0,0.35)]
        before:absolute before:inset-0 before:rounded-2xl
        before:bg-gradient-to-br before:from-white/15 before:to-white/5
        before:pointer-events-none
        transition-all duration-300
        ${isMinimized ? "opacity-70" : "opacity-100"}
      `}
    >
      <audio ref={audioRef} src={songs[currentIndex].file} />

      {/* Title + Minimize Button */}
      <div className="flex items-center justify-between relative z-10">
        <h3 className="text-xs text-white font-semibold tracking-wide drop-shadow">
          {songs[currentIndex].title}
        </h3>

        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="text-white/70 hover:text-white"
        >
          {isMinimized ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Expanded View */}
      {!isMinimized && (
        <>
          {/* Waveform */}
          <div className="flex gap-[3px] mt-3 h-4 relative z-10">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: isPlaying
                    ? ["20%", "80%", "40%", "60%", "30%"]
                    : "20%",
                }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  delay: i * 0.06,
                }}
                className="w-[3px] bg-purple-400/80 rounded-full shadow-[0_0_6px_rgba(168,85,247,0.8)]"
              />
            ))}
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-center gap-5 relative z-10">
            <button
              onClick={prevSong}
              className="text-white/80 hover:text-white"
            >
              <FaStepBackward size={14} />
            </button>

            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-purple-500/30 backdrop-blur-md
                         hover:bg-purple-500/50 text-white shadow-md"
            >
              {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
            </button>

            <button
              onClick={nextSong}
              className="text-white/80 hover:text-white"
            >
              <FaStepForward size={14} />
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
}
