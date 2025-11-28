import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-semibold mb-6">Blog</h1>

      <p className="text-neutral-300 mb-6 max-w-2xl">
        I write technical posts on AI engineering, cloud-native systems,
        distributed compute, and serverless infrastructure.
      </p>

      {/* Latest Featured Article */}
      <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur mb-10">
        <a
          href="https://serverlessclouds.hashnode.dev/serverless-containers-when-and-why-to-use-aws-fargate-over-lambda"
          target="_blank"
          className="text-xl font-semibold text-purple-400 hover:underline"
        >
          Serverless Containers — When & Why to use AWS Fargate over Lambda
        </a>

        <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
          Serverless computing has reshaped modern cloud architectures by
          eliminating infrastructure management and enabling highly scalable,
          event-driven applications. Within this paradigm, AWS Lambda and AWS
          Fargate are two key services that support serverless execution, yet
          they cater to fundamentally different workload requirements.
        </p>
      </div>

      {/* Back Button */}
      <Link href="/" className="text-neutral-400 underline text-sm">
        Back to Home
      </Link>
    </div>
  );
}
