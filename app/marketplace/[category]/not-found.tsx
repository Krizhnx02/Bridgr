import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">Category Not Found</h2>
        <p className="mt-4 text-lg text-gray-600">
          The category you're looking for doesn't exist.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/marketplace"
            className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Marketplace
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border-2 border-indigo-600 bg-white px-6 py-3 text-base font-medium text-indigo-600 transition-all hover:bg-indigo-50"
          >
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

