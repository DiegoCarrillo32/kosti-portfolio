import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h2 className="text-4xl font-bold mb-4 text-brand-900">Not Found</h2>
      <p className="text-lg text-brand-700 mb-8">
        Could not find requested resource
      </p>
      <Link href="/" className="text-brand-600 hover:text-brand-800 underline">
        Return Home
      </Link>
    </div>
  );
}
