import { notFound } from 'next/navigation';
import { getCategoryData } from '@/lib/categoryData';
import Header from '@/components/Header';
import CategoryHero from '@/components/marketplace/CategoryHero';
import PartnersSection from '@/components/marketplace/PartnersSection';
import CategoryBenefits from '@/components/marketplace/CategoryBenefits';
import FeaturedPartners from '@/components/marketplace/FeaturedPartners';
import ComparisonTable from '@/components/marketplace/ComparisonTable';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/marketplace/CTABanner';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const categoryData = getCategoryData(category);
  
  if (!categoryData) {
    return {
      title: 'Category Not Found | Bridgr',
    };
  }

  return {
    title: `${categoryData.title} | Bridgr Marketplace`,
    description: categoryData.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryData = getCategoryData(category);

  if (!categoryData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CategoryHero
        title={categoryData.title}
        description={categoryData.description}
        category={category}
      />
      
      <main>
        <PartnersSection
          category={category}
          vendors={categoryData.vendors}
        />
        
        <CategoryBenefits benefits={categoryData.benefits} />
        
        {categoryData.comparisonData && categoryData.comparisonData.length > 0 && (
          <ComparisonTable data={categoryData.comparisonData} />
        )}
        
        <FAQ faqs={categoryData.faqs} />
      </main>
      
      <CTABanner />
      <Footer />
    </div>
  );
}

