'use client';

import { Card, CardContent } from '@/components/ui/card';
import { VendorData } from '@/types/marketplace';
import { 
  CheckCircle2, 
  Star, 
  Shield, 
  Zap, 
  Globe, 
  CreditCard,
  Smartphone,
  Home,
  UtensilsCrossed,
  FileText,
  DollarSign,
  Clock,
  Users,
  Award
} from 'lucide-react';

interface VendorBenefitsProps {
  vendor: VendorData;
  category: string;
}

// Icon mapping for different benefits
const iconMap: Record<string, any> = {
  'no fees': DollarSign,
  'free': DollarSign,
  'discount': DollarSign,
  'fast': Zap,
  'secure': Shield,
  'global': Globe,
  'international': Globe,
  'support': Users,
  'rating': Star,
  'verified': CheckCircle2,
  'award': Award,
  'time': Clock,
  'mobile': Smartphone,
  'banking': CreditCard,
  'housing': Home,
  'food': UtensilsCrossed,
  'visa': FileText,
};

// Get icon for a benefit based on keywords
function getIconForBenefit(text: string) {
  const lowerText = text.toLowerCase();
  for (const [keyword, Icon] of Object.entries(iconMap)) {
    if (lowerText.includes(keyword)) {
      return Icon;
    }
  }
  return CheckCircle2; // Default icon
}

export default function VendorBenefits({ vendor, category }: VendorBenefitsProps) {
  // Create benefit cards from highlights and features
  const allBenefits = [
    ...vendor.highlights.map(h => ({ text: h, type: 'highlight' })),
    ...vendor.features.map(f => ({ text: f, type: 'feature' })),
  ];
  
  // Remove duplicates and limit to 6
  const uniqueBenefits = Array.from(
    new Map(allBenefits.map(b => [b.text, b])).values()
  ).slice(0, 6);

  // Color schemes for cards (matching inspiration)
  const colorSchemes = [
    { bg: 'bg-white', text: 'text-red-600', border: 'border-gray-200' },
    { bg: 'bg-red-600', text: 'text-white', border: 'border-red-600' },
    { bg: 'bg-red-600', text: 'text-white', border: 'border-red-600' },
    { bg: 'bg-indigo-600', text: 'text-white', border: 'border-indigo-600' },
    { bg: 'bg-red-600', text: 'text-white', border: 'border-red-600' },
    { bg: 'bg-white', text: 'text-red-600', border: 'border-gray-200' },
  ];

  if (uniqueBenefits.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why {vendor.name}?
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Merged first 2 cards */}
          {uniqueBenefits.length >= 2 && (
            <Card
              className={`${colorSchemes[1].bg} ${colorSchemes[1].border} border-2 transition-all hover:shadow-lg sm:col-span-2 lg:col-span-2`}
            >
              <CardContent className="p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* First benefit in merged card */}
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      {(() => {
                        const Icon1 = getIconForBenefit(uniqueBenefits[0].text);
                        return <Icon1 className={`h-8 w-8 ${colorSchemes[1].text} flex-shrink-0`} />;
                      })()}
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-white/30" />
                        ))}
                      </div>
                    </div>
                    <h3 className={`text-xl font-bold ${colorSchemes[1].text} mb-2`}>
                      {uniqueBenefits[0].text}
                    </h3>
                  </div>
                  
                  {/* Second benefit in merged card */}
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      {(() => {
                        const Icon2 = getIconForBenefit(uniqueBenefits[1].text);
                        return <Icon2 className={`h-8 w-8 ${colorSchemes[1].text} flex-shrink-0`} />;
                      })()}
                      <div className="w-8 h-8 rounded-full border-2 border-white/30" />
                    </div>
                    <h3 className={`text-xl font-bold ${colorSchemes[1].text} mb-2`}>
                      {uniqueBenefits[1].text}
                    </h3>
                    {vendor.pricing?.monthlyFee && (
                      <p className={`text-2xl font-bold ${colorSchemes[1].text} mt-2`}>
                        {vendor.pricing.monthlyFee}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Remaining cards */}
          {uniqueBenefits.slice(2).map((benefit, index) => {
            const actualIndex = index + 2; // Adjust index for color scheme
            const Icon = getIconForBenefit(benefit.text);
            const colors = colorSchemes[actualIndex % colorSchemes.length];
            const isDark = colors.bg.includes('red-600') || colors.bg.includes('indigo-600');

            return (
              <Card
                key={actualIndex}
                className={`${colors.bg} ${colors.border} border-2 transition-all hover:shadow-lg`}
              >
                <CardContent className="p-6">
                  {isDark ? (
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <Icon className={`h-8 w-8 ${colors.text} flex-shrink-0`} />
                        {actualIndex === 4 && (
                          <div className="w-8 h-8 rounded-full border-2 border-white/30" />
                        )}
                      </div>
                      <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
                        {benefit.text}
                      </h3>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full">
                      <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
                        {benefit.text}
                      </h3>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

