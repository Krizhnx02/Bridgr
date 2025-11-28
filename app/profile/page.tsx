'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl pt-20">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          <svg
            className="mr-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          {/* Header Section with Gradient */}
          <div className="relative h-32 bg-gradient-to-r from-indigo-600 to-orange-500">
            <div className="absolute -bottom-16 left-8">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name || 'User'}
                  className="h-32 w-32 rounded-full border-4 border-white shadow-lg"
                />
              )}
            </div>
          </div>

          {/* Profile Info */}
          <div className="px-8 pb-8 pt-20">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900">
                {session.user?.name || 'User'}
              </h1>
              <p className="mt-1 text-gray-600">{session.user?.email}</p>
            </div>

            {/* Stats/Info Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 p-6">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-indigo-600 p-3">
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Account Status</p>
                    <p className="text-lg font-semibold text-gray-900">Active</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 p-6">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-orange-500 p-3">
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
                    <p className="text-sm text-gray-600">Verification</p>
                    <p className="text-lg font-semibold text-gray-900">Verified</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100 p-6">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-green-600 p-3">
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Security</p>
                    <p className="text-lg font-semibold text-gray-900">Google OAuth</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Details */}
            <div className="mt-8 rounded-lg border border-gray-200 p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Account Details
              </h2>
              <dl className="space-y-4">
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <dt className="text-sm font-medium text-gray-600">Full Name</dt>
                  <dd className="text-sm text-gray-900">
                    {session.user?.name || 'Not provided'}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <dt className="text-sm font-medium text-gray-600">Email</dt>
                  <dd className="text-sm text-gray-900">
                    {session.user?.email || 'Not provided'}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <dt className="text-sm font-medium text-gray-600">
                    Authentication Provider
                  </dt>
                  <dd className="text-sm text-gray-900">Google</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-600">Member Since</dt>
                  <dd className="text-sm text-gray-900">
                    {new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Link
                href="/#services"
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span>Explore Services</span>
              </Link>
              <Link
                href="/#contact"
                className="flex items-center justify-center space-x-2 rounded-lg border-2 border-gray-300 px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50"
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>Contact Support</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

