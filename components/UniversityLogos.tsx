import Image from 'next/image';

interface University {
  name: string;
  logo: string;
}

interface UniversityLogosProps {
  title?: string;
  universities: University[];
  subtitle?: string;
}

export default function UniversityLogos({ 
  title = "Used by students from 300+ universities",
  universities,
  subtitle
}: UniversityLogosProps) {
  if (!universities || universities.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-base text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        {/* University Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
          {universities.map((university, index) => {
            // Loughborough and Cambridge use h-20, others use h-10
            const largeLogos = [
              'Loughborough University',
              'University of Cambridge',
            ];
            const isLarge = largeLogos.includes(university.name);
            
            return (
              <div
                key={index}
                className={`flex items-center justify-center w-auto ${
                  isLarge ? 'h-24' : 'h-10'
                }`}
              >
                <Image
                  src={university.logo}
                  alt={university.name}
                  width={isLarge ? 240 : 120}
                  height={isLarge ? 80 : 40}
                  className="object-contain max-h-full w-auto"
                  unoptimized
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

