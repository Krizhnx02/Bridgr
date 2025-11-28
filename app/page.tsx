import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import PartnerLogos from '@/components/PartnerLogos';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const universities = [
  { name: 'University of Oxford', logo: '/oxford-logo.svg' },
  { name: 'University of Cambridge', logo: '/cambridge-logo.png' },
  { name: 'University College London', logo: '/ucl-logo.png' },
  { name: 'Imperial College London', logo: '/imperial-logo.png' },
  { name: 'University of Warwick', logo: '/warwick-logo.svg' },
  { name: 'London School of Economics', logo: '/lse-logo.png' },
  { name: 'Loughborough University', logo: '/loughborough-logo.png' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
          <main>
            <Hero />
            <Features />
            <HowItWorks />
            <PartnerLogos 
              title="Our Partners"
              partners={[
                { name: 'Vodafone', logo: '/vodafone.png', category: 'sim-card', vendorId: 'vodafone-student' },
                { name: 'EE', logo: '/ee-logo.png', category: 'sim-card', vendorId: 'ee-student' },
                { name: 'Three', logo: '/three-logo.svg', category: 'sim-card', vendorId: 'three-student' },
                { name: 'Barclays', logo: '/barclays-logo.png', category: 'bank-account', vendorId: 'barclays-student' },
                { name: 'HSBC', logo: '/hsbc-logo.png', category: 'bank-account', vendorId: 'hsbc-student' },
                { name: 'Revolut', logo: '/revolut-logo.png', category: 'bank-account', vendorId: 'revolut-student' },
                { name: 'Unite Students', logo: '/unite-logo.svg', category: 'housing', vendorId: 'unite-students' },
                { name: 'iQ Student', logo: '/iq-logo.png', category: 'housing', vendorId: 'iq-student' },
                { name: 'Uber Eats', logo: '/ubereats-logo.png', category: 'food', vendorId: 'uber-eats-student' },
              ]}
            />
            <SocialProof />
            <FAQ />
          </main>
      <Footer />
    </div>
  );
}
