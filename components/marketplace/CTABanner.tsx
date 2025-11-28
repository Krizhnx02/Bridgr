import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="bg-indigo-600 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <MessageCircle className="mx-auto h-12 w-12 text-white" />
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Need Help Choosing?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            Chat with a Bridgr advisor to get personalized recommendations based on your needs
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-medium text-indigo-600 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
            >
              Chat with Advisor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="https://wa.me/442012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border-2 border-white bg-transparent px-8 py-3 text-base font-medium text-white transition-all hover:bg-white/10"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

