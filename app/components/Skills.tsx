"use client";
import { motion } from "framer-motion";

const skills = [
  "AI/ML Engineering","LLMs & RAG","Distributed Systems","Cloud Architecture (AWS)",
  "Serverless & FaaS","DevOps & CI/CD","Docker & Containers","Kubernetes",
  "Linux & Bash","HPC Workloads","Parallel Computing","C++ | Python | TS",
  "Full Stack Engineering","NoSQL & Databases","SaaS Automation",
];

export default function Skills() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-semibold mb-8">Skills & Expertise</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, idx) => (
          <motion.div key={skill} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: idx*0.03}} className="px-4 py-3 bg-white/5 border border-white/8 rounded-lg text-sm text-neutral-200">
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
