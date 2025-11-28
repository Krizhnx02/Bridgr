import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import { Vendor } from '@/types/marketplace';

interface PartnersSectionProps {
  category: string;
  vendors: Vendor[];
}

export default function PartnersSection({ category, vendors }: PartnersSectionProps) {
  if (vendors.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Partners
          </h2>
        </div>

        {/* Partner Cards Grid - 3 cards per row, centered if 1 or 2 */}
        <div className={`grid gap-6 ${
          vendors.length === 1 
            ? 'grid-cols-1 max-w-md mx-auto' 
            : vendors.length === 2 
            ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto' 
            : 'sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-500 hover:shadow-lg text-center"
            >
              {/* Logo - Fixed height container for alignment */}
              <div className="relative h-32 w-full mb-4 mx-auto flex items-center justify-center">
                {vendor.logo ? (
                  <div className={`relative w-full ${
                    vendor.id === 'hsbc-student' || vendor.id === 'three-student' || vendor.id === 'ee-student' || vendor.id === 'unite-students'
                      ? 'h-24' 
                      : 'h-32'
                  }`}>
                    <Image
                      src={vendor.logo}
                      alt={vendor.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center rounded-lg bg-gray-100 text-2xl font-bold text-indigo-600">
                    {vendor.name.charAt(0)}
                  </div>
                )}
              </div>

              {/* Vendor Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {vendor.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">{vendor.tagline}</p>

              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mb-4">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium text-gray-900">{vendor.rating}</span>
                <span className="text-sm text-gray-500">/ 5.0</span>
              </div>

              {/* Features */}
              <ul className="mb-6 space-y-2">
                {vendor.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center justify-center text-sm text-gray-600">
                    <span className="mr-2 text-indigo-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 mt-auto">
                <Link
                  href={`/marketplace/${category}/${vendor.id}`}
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-md"
                >
                  Apply Now
                </Link>
                <Link
                  href={`/marketplace/${category}/${vendor.id}`}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-indigo-600 bg-white px-4 py-2.5 text-sm font-semibold text-indigo-600 transition-all hover:bg-indigo-50"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

