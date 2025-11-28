"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { slideLeft } from "../lib/motion";

export default function Navbar() {
  const path = usePathname();
  const links = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/blog" },
    { name: "Resume", href: "/resume.pdf" },
  ];

  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={slideLeft}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/5"
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-white tracking-wide">SUMIT</Link>

        <div className="flex items-center gap-6 text-sm">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative transition ${
                path === item.href ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
              target={item.href.endsWith(".pdf") ? "_blank" : undefined}
            >
              <span>{item.name}</span>
              {path === item.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-2 h-[2px] bg-purple-400 rounded"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
