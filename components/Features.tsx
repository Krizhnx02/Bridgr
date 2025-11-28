import Link from 'next/link';
import { Smartphone, CreditCard, Home, Shield, FileText, UtensilsCrossed, ArrowRight } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'UK SIM & Data',
      description: 'Get connected instantly with student-friendly mobile plans. Stay in touch with family and friends back home.',
      icon: <Smartphone className="h-8 w-8" />,
      categorySlug: 'sim-card',
    },
    {
      title: 'Student-Friendly Bank Account',
      description: 'Open a UK bank account before you arrive. No hassle, no long queues, just simple banking.',
      icon: <CreditCard className="h-8 w-8" />,
      categorySlug: 'bank-account',
    },
    {
      title: 'Safe Housing Near Campus',
      description: 'Find verified, affordable accommodation close to your university. Safe, comfortable, and student-friendly.',
      icon: <Home className="h-8 w-8" />,
      categorySlug: 'housing',
    },
    {
      title: 'Comprehensive Insurance',
      description: 'Protect yourself with student insurance tailored to your needs. Health, travel, and belongings covered.',
      icon: <Shield className="h-8 w-8" />,
      categorySlug: 'insurance',
    },
    {
      title: 'Visa Support',
      description: 'Navigate the visa process with confidence. Expert guidance every step of the way.',
      icon: <FileText className="h-8 w-8" />,
      categorySlug: 'visa',
    },
    {
      title: 'Food & Dining',
      description: 'Discover student-friendly restaurants, meal plans, and food delivery services. Eat well on a budget.',
      icon: <UtensilsCrossed className="h-8 w-8" />,
      categorySlug: 'food',
    },
  ];

  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Thrive in the UK
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Comprehensive services designed specifically for international students
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-indigo-500 hover:shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-fit mx-auto rounded-lg bg-indigo-50 p-3 text-indigo-600 ring-4 ring-white group-hover:bg-indigo-100">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-3 text-base text-gray-600 flex-grow">{feature.description}</p>
              {feature.categorySlug && (
                <Link
                  href={`/marketplace/${feature.categorySlug}`}
                  className="mt-6 inline-flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors group/link mx-auto"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

