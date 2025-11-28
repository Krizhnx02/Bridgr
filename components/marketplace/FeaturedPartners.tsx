import { Vendor } from '@/types/marketplace';
import VendorCard from './VendorCard';

interface FeaturedPartnersProps {
  vendors: Vendor[];
  category: string;
}

export default function FeaturedPartners({ vendors, category }: FeaturedPartnersProps) {
  if (vendors.length === 0) {
    return null;
  }

  return (
    <section id="vendors" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Partners
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Compare options and find the perfect fit for your needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

