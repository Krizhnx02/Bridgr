import * as LucideIcons from 'lucide-react';
import { Benefit } from '@/types/marketplace';

interface CategoryBenefitsProps {
  benefits: Benefit[];
}

export default function CategoryBenefits({ benefits }: CategoryBenefitsProps) {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why This Matters
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Everything you need to know about choosing the right option
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            // Dynamically get the icon component from Lucide
            const IconComponent = (LucideIcons as any)[benefit.icon] || LucideIcons.CheckCircle;

            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-indigo-500 hover:shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-fit mx-auto rounded-lg bg-indigo-50 p-3 text-indigo-600 ring-4 ring-white group-hover:bg-indigo-100">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-3 text-base text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

