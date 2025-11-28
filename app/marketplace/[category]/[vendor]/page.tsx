import { notFound } from 'next/navigation';
import { getVendorData } from '@/lib/vendorData';
import Header from '@/components/Header';
import VendorHero from '@/components/marketplace/VendorHero';
import VendorDetails from '@/components/marketplace/VendorDetails';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/marketplace/CTABanner';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{
    category: string;
    vendor: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { category, vendor } = await params;
  const vendorData = getVendorData(category, vendor);
  
  if (!vendorData) {
    return {
      title: 'Vendor Not Found | Bridgr',
    };
  }

  return {
    title: `${vendorData.name} | Bridgr Marketplace`,
    description: vendorData.description,
  };
}

export default async function VendorPage({ params }: PageProps) {
  const { category, vendor } = await params;
  const vendorData = getVendorData(category, vendor);

  if (!vendorData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <VendorHero
        vendor={vendorData}
        category={category}
      />
      
      <main>
        <VendorDetails vendor={vendorData} />
        
        {vendorData.faqs && vendorData.faqs.length > 0 && (
          <FAQ faqs={vendorData.faqs} />
        )}
      </main>
      
      <CTABanner />
      <Footer />
    </div>
  );
}

