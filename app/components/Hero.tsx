"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeScale, stagger } from "../lib/motion";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 relative w-full">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6"
      >
        {/* LEFT SECTION */}
        <div className="order-2 md:order-1 space-y-6">
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Sumit Kumar
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text leading-snug"
          >
            Engineering AI-native systems <br className="hidden md:block" /> &
            cloud infrastructure
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-neutral-300 max-w-lg leading-relaxed"
          >
            Forward-deployed engineer shipping AI tools, cloud-native systems,
            distributed compute workflows and HPC experiments. Building fast —
            learning faster.
          </motion.p>

          {/* PROFESSIONAL HIGHLIGHTS */}
          <motion.div variants={fadeUp} className="pt-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Professional Highlights
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div
                variants={fadeScale}
                className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition"
              >
                <h4 className="text-purple-300 font-medium mb-1">
                  AI-Native & Cloud Systems
                </h4>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Built automation tools, SaaS platforms & distributed backend
                  systems using Python, Rust & serverless patterns.
                </p>
              </motion.div>

              <motion.div
                variants={fadeScale}
                className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition"
              >
                <h4 className="text-purple-300 font-medium mb-1">
                  Cloud & DevOps
                </h4>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  AWS, Kubernetes, Terraform, CI/CD and production distributed
                  compute workflows.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT-SIDE ADI-STYLE FLOATING IMAGE CLUSTER */}
        <motion.div
          variants={fadeScale}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-[330px] md:w-[380px]">

            {/* MAIN IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <Image
                src="/me.jpg"
                alt="Sumit Kumar"
                width={500}
                height={650}
                className="object-cover rounded-2xl"
              />
            </motion.div>

            {/* TOP-RIGHT IMAGE (F1 Car) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="absolute -top-10 -right-10 w-32 md:w-36 rounded-xl overflow-hidden shadow-xl border border-white/10"
            >
              <Image
                src="/photos/f1.jpg"
                alt="F1 Car"
                width={300}
                height={200}
                className="object-cover rounded-xl"
              />
            </motion.div>

            {/* BOTTOM-LEFT IMAGE (Cafe Setup) */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="absolute bottom-4 -left-10 w-32 md:w-36 rounded-xl overflow-hidden shadow-xl border border-white/10"
            >
              <Image
                src="/photos/cafe.jpg"
                alt="Cafe Workspace"
                width={300}
                height={200}
                className="object-cover rounded-xl"
              />
            </motion.div>

            {/* BOTTOM-RIGHT IMAGE (AWS Laptop) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="absolute bottom-[-40px] right-0 w-32 md:w-36 rounded-xl overflow-hidden shadow-xl border border-white/10"
            >
              <Image
                src="/photos/aws.jpg"
                alt="AWS Study"
                width={300}
                height={200}
                className="object-cover rounded-xl"
              />
            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
