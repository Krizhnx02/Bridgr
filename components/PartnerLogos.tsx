import Image from 'next/image';
import Link from 'next/link';

interface Partner {
  name: string;
  logo: string;
  category?: string;
  vendorId?: string;
}

interface PartnerLogosProps {
  title?: string;
  partners: Partner[];
}

export default function PartnerLogos({ 
  title = "Our Partners",
  partners 
}: PartnerLogosProps) {
  if (!partners || partners.length === 0) {
    return null;
  }

  // Duplicate partners many times for seamless infinite scroll
  // Duplicate 6 times to ensure smooth continuous scrolling without visible reset
  const duplicatedPartners = [
    ...partners, 
    ...partners, 
    ...partners, 
    ...partners,
    ...partners,
    ...partners
  ];

  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </div>
      </div>

      {/* Infinite Scrolling Carousel - Edge to Edge */}
      {/* First Row - Left to Right */}
      <div className="relative overflow-hidden w-full mb-6">
        <div className="flex animate-scroll gap-6" style={{ width: 'max-content' }}>
          {duplicatedPartners.map((partner, index) => {
            const vendorLink = partner.category && partner.vendorId 
              ? `/marketplace/${partner.category}/${partner.vendorId}`
              : null;
            
            const content = (
              <div className="flex-shrink-0 rounded-lg bg-gray-100 border border-gray-200 p-6 w-64 h-48 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={80}
                  className="object-contain max-h-full max-w-full grayscale"
                  unoptimized
                />
              </div>
            );

            return vendorLink ? (
              <Link key={index} href={vendorLink} className="block">
                {content}
              </Link>
            ) : (
              <div key={index}>
                {content}
              </div>
            );
          })}
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative overflow-hidden w-full">
        <div className="flex animate-scroll-reverse gap-6" style={{ width: 'max-content' }}>
          {duplicatedPartners.map((partner, index) => {
            const vendorLink = partner.category && partner.vendorId 
              ? `/marketplace/${partner.category}/${partner.vendorId}`
              : null;
            
            const content = (
              <div className="flex-shrink-0 rounded-lg bg-gray-100 border border-gray-200 p-6 w-64 h-48 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={80}
                  className="object-contain max-h-full max-w-full grayscale"
                  unoptimized
                />
              </div>
            );

            return vendorLink ? (
              <Link key={`reverse-${index}`} href={vendorLink} className="block">
                {content}
              </Link>
            ) : (
              <div key={`reverse-${index}`}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

