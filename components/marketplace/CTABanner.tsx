import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="bg-indigo-600 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <MessageCircle className="mx-auto h-12 w-12 text-white" />
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl mb-6 sm:mb-4">
            Need Help Choosing?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            Chat with a Bridgr advisor to get personalized recommendations based on your needs
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-1/2 rounded-full bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl sm:w-auto sm:px-8 sm:py-3 sm:text-base"
            >
              Chat with Advisor
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="https://wa.me/442012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-1/2 rounded-full border-2 border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 sm:w-auto sm:px-8 sm:py-3 sm:text-base"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

