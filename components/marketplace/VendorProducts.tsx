'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { VendorData } from '@/types/marketplace';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface VendorProductsProps {
  vendor: VendorData;
  category: string;
}

export default function VendorProducts({ vendor, category }: VendorProductsProps) {
  // Generate product cards based on category and vendor data
  const getProducts = () => {
    if (category === 'bank-account') {
      return [
        {
          title: 'Checking Account',
          description: vendor.description,
          features: vendor.features.slice(0, 3),
          price: vendor.pricing?.monthlyFee || 'Free',
          image: vendor.logo,
        },
        ...(vendor.name === 'Barclays' || vendor.name === 'HSBC' ? [
          {
            title: 'Savings Account',
            description: 'FDIC-insured savings with competitive interest rates.',
            features: [
              'FDIC-insured up to £85,000',
              'Automate savings with recurring transfers',
              'Receive ACH payments and wire transfers',
            ],
            price: 'Free',
            image: vendor.logo,
          },
        ] : []),
      ];
    }

    if (category === 'sim-card') {
      return [
        {
          title: vendor.pricing?.plan || 'Student Plan',
          description: vendor.description,
          features: vendor.features.slice(0, 4),
          price: vendor.pricing?.monthlyFee || 'From £10/month',
          image: vendor.logo,
        },
      ];
    }

    if (category === 'housing') {
      return [
        {
          title: 'Student Accommodation',
          description: vendor.description,
          features: vendor.features.slice(0, 3),
          price: vendor.pricing?.monthlyFee || 'From £140/week',
          image: vendor.logo,
        },
      ];
    }

    // Default product
    return [
      {
        title: vendor.pricing?.plan || 'Standard Plan',
        description: vendor.description,
        features: vendor.features.slice(0, 3),
        price: vendor.pricing?.monthlyFee || 'Free',
        image: vendor.logo,
      },
    ];
  };

  const products = getProducts();

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Products
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Check out {vendor.name}&apos;s {category === 'bank-account' ? 'Banking' : category === 'sim-card' ? 'Mobile' : category === 'housing' ? 'Housing' : ''} Solutions for International Students
          </p>
        </div>

        <div className={`grid gap-8 ${
          products.length === 1 
            ? 'grid-cols-1 max-w-2xl mx-auto' 
            : products.length === 2 
            ? 'grid-cols-1 md:grid-cols-2' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {products.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col bg-white border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {product.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow">
                {/* Product Image/Visual */}
                <div className="flex justify-center mb-6">
                  <div className="relative h-48 w-full max-w-xs">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center rounded-lg bg-gray-100">
                        <span className="text-4xl font-bold text-gray-400">
                          {product.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4">
                <Button
                  asChild
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                  size="lg"
                >
                  <a href="#apply">Apply Now</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

