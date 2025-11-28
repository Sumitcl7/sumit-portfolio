"use client";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export default function Footer() {
  return (
    <motion.footer variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-10 text-center text-neutral-500 text-sm border-t border-white/10 mt-20">
       © Sumit,2025 — <a href="https://www.linkedin.com/in/sumit-kumar-2bb99428a" target="_blank" className="text-neutral-400 hover:underline">LinkedIn</a>
    </motion.footer>
  );
}
