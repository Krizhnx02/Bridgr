import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20 md:pt-0">
      <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Your UK Student Journey</span>
            <span className="block text-indigo-600">Starts Here</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Navigate your UK student life with ease. Get everything you need—SIM cards, bank accounts, 
            housing, insurance, and visa support—all in one place. Arrive prepared and confident.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#services"
              className="w-full rounded-full bg-indigo-600 px-8 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl sm:w-auto"
            >
              Get Started
            </Link>
            <Link
              href="#how-it-works"
              className="w-full rounded-full border-2 border-indigo-600 bg-white px-8 py-3 text-base font-medium text-indigo-600 transition-all hover:bg-indigo-50 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

