import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Home, Star, ArrowDown } from 'lucide-react';
import { VendorData } from '@/types/marketplace';

interface VendorHeroProps {
  vendor: VendorData;
  category: string;
}

export default function VendorHero({ vendor, category }: VendorHeroProps) {
  // Format category name for display
  const formatCategoryName = (cat: string) => {
    return cat
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <section className="relative flex min-h-screen items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20 md:pt-0">
      <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center justify-center space-x-2 text-base text-gray-600">
          <Link
            href="/"
            className="flex items-center hover:text-indigo-600 transition-colors"
          >
            <Home className="h-5 w-5" />
          </Link>
          <ChevronRight className="h-5 w-5" />
          <Link
            href="/marketplace"
            className="hover:text-indigo-600 transition-colors"
          >
            Marketplace
          </Link>
          <ChevronRight className="h-5 w-5" />
          <Link
            href={`/marketplace/${category}`}
            className="hover:text-indigo-600 transition-colors"
          >
            {formatCategoryName(category)}
          </Link>
          <ChevronRight className="h-5 w-5" />
          <span className="text-gray-900 font-medium">{vendor.name}</span>
        </nav>

        {/* Hero Content - Centered */}
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <div className="relative h-32 w-64">
              {vendor.logo ? (
                <Image
                  src={vendor.logo}
                  alt={vendor.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              ) : (
                <div className="flex h-full items-center justify-center rounded-lg bg-gray-100 text-4xl font-bold text-indigo-600">
                  {vendor.name.charAt(0)}
                </div>
              )}
            </div>
          </div>

          {/* Vendor Name */}
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            {vendor.name}
          </h1>

          {/* Tagline */}
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600 sm:text-2xl">
            {vendor.tagline}
          </p>

          {/* Rating */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            <span className="text-xl font-bold text-gray-900">{vendor.rating}</span>
            <span className="text-xl text-gray-500">/ 5.0</span>
          </div>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            {vendor.description}
          </p>

          {/* CTA Link */}
          <div className="mt-8">
            <a
              href="#details"
              className="inline-flex items-center text-lg font-medium text-gray-900 underline decoration-indigo-600 underline-offset-4 hover:text-indigo-600 transition-colors"
            >
              Learn more
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

