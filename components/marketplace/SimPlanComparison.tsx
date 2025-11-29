'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CircleCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

interface Plan {
  name: string;
  price: string;
  features: string[];
}

interface SimProvider {
  id: string;
  name: string;
  logo: string;
  plans: Plan[];
  vendorId: string;
}

const simProviders: SimProvider[] = [
  {
    id: 'vodafone',
    name: 'Vodafone',
    logo: '/vodafone.png',
    vendorId: 'vodafone-student',
    plans: [
      {
        name: 'Light',
        price: '£15',
        features: [
          '2 GB Premium Data',
          'Unlimited Talk & Text',
          'Int\'l Calling Add-On',
          '5G Network Included',
        ],
      },
      {
        name: 'Unlimited',
        price: '£25',
        features: [
          'Unlimited Premium Data',
          'Unlimited Talk & Text',
          'International Minutes',
          '5G Network Included',
        ],
      },
      {
        name: 'Student',
        price: '£18',
        features: [
          '10 GB Premium Data',
          'Unlimited Talk & Text',
          'Student Discount Applied',
          '5G Network Included',
        ],
      },
    ],
  },
  {
    id: 'ee',
    name: 'EE',
    logo: '/ee-logo.png',
    vendorId: 'ee-student',
    plans: [
      {
        name: '5 GB',
        price: '£12',
        features: [
          '5 GB Data',
          'Unlimited Talk & Text',
          'Fastest 5G Network',
          'Student Discount Available',
        ],
      },
      {
        name: '15 GB',
        price: '£18',
        features: [
          '15 GB Data',
          'Unlimited Talk & Text',
          'Fastest 5G Network',
          'Student Discount Available',
        ],
      },
      {
        name: 'Unlimited',
        price: '£28',
        features: [
          'Unlimited Data',
          'Unlimited Talk & Text',
          'Fastest 5G Network',
          'Student Discount Available',
        ],
      },
    ],
  },
  {
    id: 'three',
    name: 'Three',
    logo: '/three-logo.svg',
    vendorId: 'three-student',
    plans: [
      {
        name: 'Essential',
        price: '£10',
        features: [
          '4 GB Data',
          'Unlimited Talk & Text',
          'Go Roam Included',
          'Great Value Plans',
        ],
      },
      {
        name: 'Advanced',
        price: '£20',
        features: [
          'Unlimited Data',
          'Unlimited Talk & Text',
          'Go Roam Included',
          'Great Value Plans',
        ],
      },
      {
        name: 'Student',
        price: '£15',
        features: [
          '12 GB Data',
          'Unlimited Talk & Text',
          'Go Roam Included',
          'Student Pricing',
        ],
      },
    ],
  },
];

export default function SimPlanComparison() {
  const [selectedPlans, setSelectedPlans] = useState<Record<string, number>>({
    vodafone: 0,
    ee: 0,
    three: 0,
  });

  const handlePlanSelect = (providerId: string, planIndex: number) => {
    setSelectedPlans((prev) => ({
      ...prev,
      [providerId]: planIndex,
    }));
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compare SIM Plans
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {simProviders.map((provider) => {
            const selectedPlan = provider.plans[selectedPlans[provider.id]];
            
            return (
              <Card
                key={provider.id}
                className="flex flex-col min-h-[600px] text-center overflow-hidden"
              >
                {/* Plan Tabs using shadcn Tabs */}
                <CardHeader className="pb-3">
                  <Tabs
                    value={selectedPlans[provider.id].toString()}
                    onValueChange={(value) => handlePlanSelect(provider.id, parseInt(value))}
                    className="w-full"
                  >
                    <TabsList className="grid w-full grid-cols-3 bg-gray-50 h-auto p-1">
                      {provider.plans.map((plan, index) => (
                        <TabsTrigger
                          key={index}
                          value={index.toString()}
                          className="text-base font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm"
                        >
                          {plan.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow">
                  {/* Logo */}
                  <div className="flex flex-col items-center justify-center py-6 px-8">
                    <div className="relative h-32 w-56">
                      <Image
                        src={provider.logo}
                        alt={provider.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                      {provider.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="px-8 pb-6 flex items-baseline justify-center">
                    <span className="text-5xl font-black text-gray-900 tracking-tight" style={{ fontWeight: 900 }}>
                      {selectedPlan.price}
                    </span>
                    <span className="ml-3 text-lg text-gray-600">
                      /month
                    </span>
                  </div>

                  {/* Features */}
                  <div className="px-8 pb-8 flex-grow">
                    <h3 className="text-base font-semibold text-gray-900 mb-4">
                      What&apos;s included
                    </h3>
                    <ul className="space-y-3 flex flex-col items-center">
                      {selectedPlan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CircleCheck className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-0.5 mr-3" />
                          <span className="text-base text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                {/* CTA Button using shadcn Button */}
                <CardFooter className="px-8 pb-8">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-base font-semibold"
                  >
                    <Link href={`/marketplace/sim-card/${provider.vendorId}`}>
                      Buy Now
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

