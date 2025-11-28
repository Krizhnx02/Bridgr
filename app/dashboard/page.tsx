'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading session...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl pt-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome to your authenticated dashboard!</p>
        </div>

        {/* Auth Status Card */}
        <div className="mb-6 rounded-lg border-2 border-green-500 bg-green-50 p-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-green-900">
                ✅ Authentication Successful!
              </h2>
              <p className="text-sm text-green-700">
                You are signed in with Google OAuth
              </p>
            </div>
          </div>
        </div>

        {/* User Info Card */}
        <div className="mb-6 overflow-hidden rounded-lg bg-white shadow-md">
          <div className="bg-gradient-to-r from-indigo-600 to-orange-500 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">User Information</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name || 'User'}
                  className="h-20 w-20 rounded-full border-4 border-indigo-100"
                />
              )}
              <div className="flex-1">
                <div className="mb-4 space-y-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Name
                    </label>
                    <p className="text-lg font-medium text-gray-900">
                      {session.user?.name || 'Not provided'}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Email
                    </label>
                    <p className="text-lg font-medium text-gray-900">
                      {session.user?.email || 'Not provided'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Session Data Card (for debugging) */}
        <div className="mb-6 overflow-hidden rounded-lg bg-white shadow-md">
          <div className="bg-gray-800 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">Session Data (Debug)</h2>
          </div>
          <div className="p-6">
            <pre className="overflow-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/profile"
            className="flex items-center justify-center space-x-2 rounded-lg border-2 border-indigo-600 bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-700"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>View Profile</span>
          </Link>

          <Link
            href="/"
            className="flex items-center justify-center space-x-2 rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Back to Home</span>
          </Link>

          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="flex items-center justify-center space-x-2 rounded-lg border-2 border-red-600 bg-red-600 px-6 py-3 text-white transition-colors hover:bg-red-700"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span>Sign Out</span>
          </button>
        </div>

        {/* Test Info */}
        <div className="mt-8 rounded-lg bg-blue-50 border border-blue-200 p-6">
          <h3 className="mb-2 text-lg font-semibold text-blue-900">
            🧪 Testing Checklist
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-center space-x-2">
              <span className="text-green-600">✓</span>
              <span>You can see this page (authentication working!)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-600">✓</span>
              <span>Your Google account info is displayed above</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-600">✓</span>
              <span>Session data is shown in the debug section</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>→</span>
              <span>Try signing out and accessing this page directly (should redirect)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>→</span>
              <span>Try refreshing the page (session should persist)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

