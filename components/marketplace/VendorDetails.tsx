'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { VendorData } from '@/types/marketplace';
import { CheckCircle2, Star, FileText, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface VendorDetailsProps {
  vendor: VendorData;
}

export default function VendorDetails({ vendor }: VendorDetailsProps) {
  return (
    <section id="details" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Key Information */}
          <div className="space-y-8">
            {/* Pricing Card */}
            {vendor.pricing && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Pricing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {vendor.pricing.plan && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">Plan</span>
                      <p className="text-xl font-semibold text-gray-900">{vendor.pricing.plan}</p>
                    </div>
                  )}
                  {vendor.pricing.monthlyFee && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">Monthly Fee</span>
                      <p className="text-2xl font-bold text-red-600">{vendor.pricing.monthlyFee}</p>
                    </div>
                  )}
                  {vendor.pricing.setupFee && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">Setup Fee</span>
                      <p className="text-xl font-semibold text-gray-900">{vendor.pricing.setupFee}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Requirements Card */}
            {vendor.requirements && vendor.requirements.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <FileText className="h-6 w-6 text-indigo-600" />
                    Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {vendor.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-base text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - How to Apply */}
          <div className="space-y-8">
            {/* How to Apply Card */}
            {vendor.howToApply && vendor.howToApply.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Clock className="h-6 w-6 text-indigo-600" />
                    How to Apply
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {vendor.howToApply.map((step, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold flex-shrink-0 text-sm">
                          {index + 1}
                        </span>
                        <span className="text-base text-gray-700 pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            )}

            {/* Key Features Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {vendor.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <div id="apply" className="pt-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-lg py-6"
              >
                <Link href="#apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
