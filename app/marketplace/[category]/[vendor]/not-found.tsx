import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <h1 className="text-4xl font-bold text-gray-900">Vendor Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        The vendor you're looking for doesn't exist or has been removed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-700"
      >
        <Home className="h-5 w-5" />
        Back to Home
      </Link>
    </div>
  );
}

