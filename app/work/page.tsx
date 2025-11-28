import Link from "next/link";

export default function WorkPage() {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-semibold mb-6">Work</h1>

      <div className="space-y-8">
        
        {/* Nexora */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold">Nexora</h2>
          <p className="text-neutral-400 mt-2">
            Cloud-native resource intelligence platform with real-time system metrics,
            serverless AWS backend, automated log ingestion, and interactive dashboards.
          </p>
          <Link
            href="https://github.com/Sumitcl7/nexora"
            className="text-purple-400 text-sm mt-3 inline-block"
          >
            View on GitHub
          </Link>
        </div>

        {/* EarthPulse */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold">EarthPulse AI</h2>
          <p className="text-neutral-400 mt-2">
            AI-driven environmental analytics pipeline that combines NLP, geospatial models,
            and satellite data to detect global events and ecosystem changes.
          </p>
          <Link
            href="https://github.com/Sumitcl7/earthpulse-ai"
            className="text-purple-400 text-sm mt-3 inline-block"
          >
            View on GitHub
          </Link>
        </div>

        {/* Synapse */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold">Synapse</h2>
          <p className="text-neutral-400 mt-2">
            Production-grade microservices architecture built with Docker, Kubernetes,
            Kafka, and AWS for scalable distributed cloud automation.
          </p>
          <Link
            href="https://github.com/Sumitcl7/synapse"
            className="text-purple-400 text-sm mt-3 inline-block"
          >
            View on GitHub
          </Link>
        </div>

        {/* HPC */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold">HPC-CSET-305</h2>
          <p className="text-neutral-400 mt-2">
            High-performance computing experiments using MPI, OpenMP, and optimized
            parallel algorithms across multi-node clusters.
          </p>
          <Link
            href="https://github.com/Sumitcl7/HPC-CSET-305"
            className="text-purple-400 text-sm mt-3 inline-block"
          >
            View on GitHub
          </Link>
        </div>

      </div>
    </div>
  );
}
