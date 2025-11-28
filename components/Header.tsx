'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Menu, X, Home as HomeIcon } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-0 md:pt-0">
      <nav className="mx-auto max-w-7xl rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg md:mx-0 md:max-w-none md:rounded-none md:bg-white md:backdrop-blur-none md:shadow-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-indigo-600">Br</span>
              <span className="text-orange-500">idgr</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3 border-l border-gray-200 pl-4">
              {status === 'loading' ? (
                <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200"></div>
              ) : session ? (
                <>
                  <Link
                    href="/dashboard"
                    className="rounded-md px-3 py-2 text-base font-medium text-indigo-600 transition-colors hover:bg-indigo-50"
                  >
                    Dashboard
                  </Link>
                  {session.user?.image && (
                    <Link href="/profile">
                      <img
                        src={session.user.image}
                        alt={session.user.name || 'User'}
                        className="h-8 w-8 rounded-full cursor-pointer ring-2 ring-indigo-500 hover:ring-indigo-600 transition-all"
                        title={session.user.name || 'Profile'}
                      />
                    </Link>
                  )}
                  <button
                    onClick={() => signOut()}
                    className="rounded-md bg-gray-100 px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-200"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => signIn('google')}
                  className="flex items-center space-x-2 rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white transition-colors hover:bg-indigo-700"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>Sign in with Google</span>
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon with rotation animation */}
              <div className="relative h-6 w-6">
                <Menu
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                  aria-hidden="true"
                />
                <X
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block rounded-lg px-3 py-2 text-center text-lg font-medium text-gray-700 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600 ${
                  isMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Auth Section */}
            <div className="mt-4 border-t border-gray-200 pt-4">
              {status === 'loading' ? (
                <div className="flex justify-center">
                  <div className="h-10 w-full max-w-xs animate-pulse rounded-lg bg-gray-200"></div>
                </div>
              ) : session ? (
                <div className="space-y-3">
                  <Link
                    href="/dashboard"
                    className="flex w-full items-center justify-center space-x-2 rounded-lg bg-indigo-600 px-4 py-2 text-base font-medium text-white transition-colors hover:bg-indigo-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <HomeIcon className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                  {session.user?.image && (
                    <Link 
                      href="/profile"
                      className="flex items-center justify-center space-x-3 rounded-lg px-3 py-2 hover:bg-indigo-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img
                        src={session.user.image}
                        alt={session.user.name || 'User'}
                        className="h-10 w-10 rounded-full ring-2 ring-indigo-500"
                      />
                      <span className="text-base font-medium text-gray-700">
                        {session.user.name || session.user.email}
                      </span>
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      signOut();
                      setIsMenuOpen(false);
                    }}
                    className="w-full rounded-lg bg-gray-100 px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-200"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    signIn('google');
                    setIsMenuOpen(false);
                  }}
                  className="flex w-full items-center justify-center space-x-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>Sign in with Google</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

