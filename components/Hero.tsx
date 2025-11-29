'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20 md:pt-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          {/* Bridgr Logo with color transition */}
          <div className="mb-8 animate-fade-in">
            <Link href="/" className="inline-block">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient inline-block animate-slide-in-left">Br</span>
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient inline-block animate-slide-in-right">idgr</span>
              </h2>
            </Link>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="block">Your UK Student Journey</span>
            <span className="block text-indigo-600 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Starts Here
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Navigate your UK student life with ease. Get everything you need—SIM cards, bank accounts, 
            housing, insurance, and visa support—all in one place. Arrive prepared and confident.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link
              href="#services"
              className="group w-1/2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl hover:scale-105 sm:w-auto sm:px-8 sm:py-3 sm:text-base"
            >
              Get Started
            </Link>
            <Link
              href="#how-it-works"
              className="group w-1/2 rounded-full border-2 border-indigo-600 bg-white px-4 py-2 text-sm font-medium text-indigo-600 transition-all hover:bg-indigo-50 hover:scale-105 sm:w-auto sm:px-8 sm:py-3 sm:text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

