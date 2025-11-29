"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="
        mt-32 mb-8 mx-auto max-w-4xl
        text-center text-sm
        text-neutral-400
        px-6 py-6
        rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      "
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-3">

        <Link
          href="https://linkedin.com/in/sumit-kumar-2bb99428a"
          target="_blank"
          className="hover:text-white transition"
        >
          LinkedIn
        </Link>

        <span className="hidden md:block text-neutral-500">•</span>

        <Link
          href="https://github.com/Sumitcl7"
          target="_blank"
          className="hover:text-white transition"
        >
          GitHub
        </Link>

        <span className="hidden md:block text-neutral-500">•</span>

        <a
          href="mailto:krsumits7017@gmail.com"
          className="hover:text-white transition"
        >
          krsumits7017@gmail.com
        </a>

      </div>

      <p className="text-neutral-600 text-xs">
        © {new Date().getFullYear()} Sumit Kumar — All Rights Reserved
      </p>
    </motion.footer>
  );
}
