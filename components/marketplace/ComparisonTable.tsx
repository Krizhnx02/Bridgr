import { ComparisonRow } from '@/types/marketplace';
import { Star } from 'lucide-react';

interface ComparisonTableProps {
  data: ComparisonRow[];
}

export default function ComparisonTable({ data }: ComparisonTableProps) {
  if (!data || data.length === 0) {
    return null;
  }

  const headers = ['Vendor', 'Fees', 'Setup Time', 'Required Documents', 'Key Perk', 'Rating'];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compare Options
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Side-by-side comparison to help you make the best choice
          </p>
        </div>

        <div className="mt-16 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                {headers.map((header) => (
                  <th
                    key={header}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{row.vendor}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{row.fees}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{row.setupTime}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">{row.documents}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">{row.keyPerk}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-900">{row.rating}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

