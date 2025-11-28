import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import { Vendor } from '@/types/marketplace';

interface VendorCardProps {
  vendor: Vendor;
  category: string;
}

export default function VendorCard({ vendor, category }: VendorCardProps) {
  return (
    <Link
      href={`/marketplace/${category}/${vendor.id}`}
      className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-500 hover:shadow-lg"
    >
      {/* Logo */}
      <div className="relative h-16 w-full mb-4">
        {vendor.logo ? (
          <Image
            src={vendor.logo}
            alt={vendor.name}
            fill
            className="object-contain"
            unoptimized
          />
        ) : (
          <div className="flex h-full items-center justify-center rounded-lg bg-gray-100 text-2xl font-bold text-indigo-600">
            {vendor.name.charAt(0)}
          </div>
        )}
      </div>

      {/* Vendor Info */}
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
        {vendor.name}
      </h3>
      <p className="mt-2 text-sm text-gray-600">{vendor.tagline}</p>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-1">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span className="text-sm font-medium text-gray-900">{vendor.rating}</span>
        <span className="text-sm text-gray-500">/ 5.0</span>
      </div>

      {/* Features */}
      <ul className="mt-4 space-y-2">
        {vendor.features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-600">
            <span className="mr-2 text-indigo-600">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-6 flex items-center text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors">
        <span>View Details</span>
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

