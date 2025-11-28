"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute w-[600px] h-[600px] bg-purple-700/8 blur-[120px] rounded-full top-[-220px] left-[-220px]" />
      <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute w-[600px] h-[600px] bg-blue-700/8 blur-[120px] rounded-full bottom-[-200px] right-[-200px]" />
    </div>
  );
}
