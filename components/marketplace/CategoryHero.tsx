import Link from 'next/link';
import { ChevronRight, Home, ArrowDown, CreditCard, Smartphone, Shield, FileText, UtensilsCrossed } from 'lucide-react';

interface CategoryHeroProps {
  title: string;
  description: string;
  category: string;
}

export default function CategoryHero({ title, description, category }: CategoryHeroProps) {
  // Format category name for display
  const formatCategoryName = (cat: string) => {
    return cat
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Get category icon component
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'housing':
        return <Home className="h-5 w-5 text-gray-900" />;
      case 'bank-account':
        return <CreditCard className="h-5 w-5 text-gray-900" />;
      case 'sim-card':
        return <Smartphone className="h-5 w-5 text-gray-900" />;
      case 'insurance':
        return <Shield className="h-5 w-5 text-gray-900" />;
      case 'visa':
        return <FileText className="h-5 w-5 text-gray-900" />;
      case 'food':
        return <UtensilsCrossed className="h-5 w-5 text-gray-900" />;
      default:
        return <Home className="h-5 w-5 text-gray-900" />;
    }
  };
  
  // Split title into words for multi-color display
  const titleWords = title.split(' ');

  // Get CTA text based on category
  const getCTAText = (cat: string) => {
    const ctaMap: Record<string, string> = {
      'housing': 'Find an accommodation',
      'bank-account': 'Compare accounts',
      'sim-card': 'Browse plans',
      'insurance': 'Get a quote',
      'visa': 'Get started',
      'food': 'Explore options',
    };
    return ctaMap[cat] || 'Learn more';
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
          <span className="text-gray-900 font-medium">{formatCategoryName(category)}</span>
        </nav>

        {/* Hero Content - Centered */}
        <div className="text-center">
          {/* Category Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3">
            {getCategoryIcon(category)}
            <span className="text-base font-medium text-gray-900">{formatCategoryName(category)}</span>
          </div>

          {/* Hero Title - Multi-color */}
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            {/* First line: Colored words (first 2 words) */}
            <span className="block">
              {titleWords.slice(0, 2).map((word, index) => {
                const colorClass = index === 0 ? 'text-orange-500' : 'text-blue-500';
                return (
                  <span key={index} className={`${colorClass} ${index > 0 ? 'ml-2' : ''}`}>
                    {word}
                  </span>
                );
              })}
            </span>
            {/* Second line: Rest of the words */}
            {titleWords.length > 2 && (
              <span className="block text-gray-900 mt-2">
                {titleWords.slice(2).join(' ')}
              </span>
            )}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600 sm:text-2xl">
            {description}
          </p>

          {/* CTA Link */}
          <div className="mt-8">
            <Link
              href="#vendors"
              className="inline-flex items-center text-lg font-medium text-gray-900 underline decoration-indigo-600 underline-offset-4 hover:text-indigo-600 transition-colors"
            >
              {getCTAText(category)}
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

