"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, fadeScale, stagger } from "../lib/motion";

export default function Projects() {
  return (
    <section className="py-20">
      <motion.h2
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        className="text-3xl md:text-4xl font-semibold mb-10"
      >
        Featured Projects
      </motion.h2>

      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="animate"
        className="grid md:grid-cols-2 gap-8"
      >

        {/* Nexora */}
        <motion.div
          variants={fadeScale}
          className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition"
        >
          <h3 className="text-xl font-semibold">Nexora</h3>
          <p className="text-neutral-400 mt-2">
            Cloud-native resource intelligence platform with real-time metrics,
            serverless AWS backend, and interactive dashboards.
          </p>
          <Link href="https://github.com/Sumitcl7/nexora" className="text-purple-400 text-sm mt-4 inline-block">
            View on GitHub →
          </Link>
        </motion.div>

        {/* EarthPulse AI */}
        <motion.div
          variants={fadeScale}
          className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition"
        >
          <h3 className="text-xl font-semibold">EarthPulse AI</h3>
          <p className="text-neutral-400 mt-2">
            AI-driven geospatial pipeline combining NLP, satellite imagery, and ML
            to detect global environmental events.
          </p>
          <Link href="https://github.com/Sumitcl7/earthpulse-ai" className="text-purple-400 text-sm mt-4 inline-block">
            View on GitHub →
          </Link>
        </motion.div>

        {/* Synapse */}
        <motion.div
          variants={fadeScale}
          className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition"
        >
          <h3 className="text-xl font-semibold">Synapse</h3>
          <p className="text-neutral-400 mt-2">
            Distributed microservices platform using Docker, Kubernetes, Kafka,
            and AWS for cloud automation at scale.
          </p>
          <Link href="https://github.com/Sumitcl7/synapse" className="text-purple-400 text-sm mt-4 inline-block">
            View on GitHub →
          </Link>
        </motion.div>

        {/* HPC */}
        <motion.div
          variants={fadeScale}
          className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition"
        >
          <h3 className="text-xl font-semibold">HPC-CSET-305</h3>
          <p className="text-neutral-400 mt-2">
            Parallel computing experiments using MPI, OpenMP, and multi-node
            clusters for high-performance workloads.
          </p>
          <Link href="https://github.com/Sumitcl7/HPC-CSET-305" className="text-purple-400 text-sm mt-4 inline-block">
            View on GitHub →
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}
