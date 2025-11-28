import Image from 'next/image';
import { CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { VendorData } from '@/types/marketplace';
import Link from 'next/link';

interface VendorDetailsProps {
  vendor: VendorData;
}

export default function VendorDetails({ vendor }: VendorDetailsProps) {
  return (
    <section id="details" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Features & Highlights */}
          <div>
            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {vendor.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            {vendor.highlights && vendor.highlights.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                  Why Choose {vendor.name}?
                </h2>
                <ul className="space-y-4">
                  {vendor.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Star className="h-6 w-6 text-yellow-400 fill-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column - Pricing, Requirements, How to Apply */}
          <div>
            {/* Pricing */}
            {vendor.pricing && (
              <div className="mb-12 rounded-2xl border border-gray-200 bg-gray-50 p-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                  Pricing
                </h2>
                <div className="space-y-4">
                  {vendor.pricing.plan && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">Plan</span>
                      <p className="text-xl font-semibold text-gray-900">{vendor.pricing.plan}</p>
                    </div>
                  )}
                  {vendor.pricing.monthlyFee && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">Monthly Fee</span>
                      <p className="text-xl font-semibold text-gray-900">{vendor.pricing.monthlyFee}</p>
                    </div>
                  )}
                  {vendor.pricing.setupFee && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">Setup Fee</span>
                      <p className="text-xl font-semibold text-gray-900">{vendor.pricing.setupFee}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Requirements */}
            {vendor.requirements && vendor.requirements.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {vendor.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span className="text-lg text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* How to Apply */}
            {vendor.howToApply && vendor.howToApply.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                  How to Apply
                </h2>
                <ol className="space-y-4">
                  {vendor.howToApply.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-lg text-gray-700 pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="#apply"
                className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

