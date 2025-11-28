import { Star } from 'lucide-react';
import Image from 'next/image';

export default function SocialProof() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      university: 'University of Manchester',
      country: 'India',
      text: 'Bridgr made my transition to the UK so smooth! I had everything set up before I even landed. The housing was perfect and close to campus.',
      rating: 5,
    },
    {
      name: 'Chen Wei',
      university: 'Imperial College London',
      country: 'China',
      text: 'Opening a UK bank account was always daunting, but Bridgr made it effortless. Highly recommend for all international students!',
      rating: 5,
    },
    {
      name: 'Adeola Johnson',
      university: 'University of Edinburgh',
      country: 'Nigeria',
      text: 'The SIM card bundle was a lifesaver. I could call my family the moment I arrived. Great value and excellent service!',
      rating: 5,
    },
  ];


  return (
    <section id="partners" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Students Worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            See what students are saying about their Bridgr experience
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-gray-700">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.university}</p>
                <p className="text-sm text-gray-500">From {testimonial.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

