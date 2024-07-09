import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center text-slate-900">
        Master New Skills with Personalized Training
      </h1>
      <h2 className="text-lg md:text-xl mb-8 text-center max-w-2xl text-slate-700">
        Self Tutor helps you organize your learning material and creates a
        customized training schedule to ensure you achieve your learning goals
      </h2>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Link
          href="/dictionary"
          className="px-4 py-2 bg-blue text-white rounded"
        >
          Get Started
        </Link>
        <Link
          href="/learn-more"
          className="px-4 py-2 bg-green text-white rounded"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
