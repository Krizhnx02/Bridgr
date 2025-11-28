'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ as FAQType } from '@/types/marketplace';

interface FAQProps {
  faqs?: FAQType[];
}

export default function FAQ({ faqs: propFaqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const defaultFaqs = [
    {
      question: 'When should I set up my services?',
      answer: 'We recommend setting up your services 2-4 weeks before your arrival in the UK. This gives us enough time to prepare everything and ensures your services are ready the moment you land.',
    },
    {
      question: 'Can I customize my service bundle?',
      answer: "Absolutely! You can choose any combination of services that fit your needs. Whether you need just a SIM card or the complete package with housing, banking, insurance, and visa support, we've got you covered.",
    },
    {
      question: 'How do I receive my SIM card?',
      answer: "Your SIM card can be delivered to your accommodation in the UK or picked up at designated collection points near major universities. We'll provide you with all the details once you complete your order.",
    },
    {
      question: 'Is there a minimum contract period?',
      answer: 'Our services are designed specifically for students, so we offer flexible options. SIM card plans are available on a month-to-month basis with no long-term commitment required.',
    },
    {
      question: 'What documents do I need to open a UK bank account?',
      answer: "Typically, you'll need your passport, proof of address in the UK (we can help with this), and a university acceptance letter. We guide you through the entire process and work with student-friendly banks.",
    },
    {
      question: 'How does visa support work?',
      answer: "Our visa support team provides guidance on document preparation, application procedures, and interview tips. While we don't submit applications on your behalf, we ensure you have all the information you need for a successful application.",
    },
    {
      question: 'Are the accommodations verified?',
      answer: 'Yes! All housing options on our platform are personally verified by our team. We check for safety, proximity to universities, and ensure they meet student living standards.',
    },
    {
      question: 'What if I need help after arriving in the UK?',
      answer: "Our support team is available 24/7 to help you with any issues. Whether it's a problem with your SIM card, questions about your bank account, or housing concerns, we're always here to assist.",
    },
  ];

  const faqs = propFaqs || defaultFaqs;

  return (
    <section id="faqs" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 hover:bg-gray-50"
              >
                <span className="text-lg font-semibold text-gray-900 transition-colors duration-200">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-6 w-6 flex-shrink-0 text-indigo-600 transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                  <p className={`text-base text-gray-700 transition-all duration-300 ${
                    openIndex === index ? 'translate-y-0' : '-translate-y-2'
                  }`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-600">
            Still have questions?{' '}
            <a href="#contact" className="font-semibold text-indigo-600 hover:text-indigo-700">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

