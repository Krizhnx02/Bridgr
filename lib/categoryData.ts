import { CategoryData } from '@/types/marketplace';

// Mock data - replace with actual data fetching logic
export function getCategoryData(category: string): CategoryData | null {
  const categoryMap: Record<string, CategoryData> = {
    'bank-account': {
      title: 'Bank Account for International Students',
      description: 'Open a UK bank account before you arrive. Student-friendly options with no proof of address required.',
      partnerBenefits: [
        'Lower fees through group bargaining',
        'No fees to join—banks cover costs',
        'Accounts for int\'l students, no co-signer needed',
      ],
      benefits: [
        {
          title: 'Open Before Arrival',
          description: 'Set up your account from anywhere in the world, before you even land in the UK.',
          icon: 'Globe',
        },
        {
          title: 'No Proof of Address',
          description: 'Student-friendly banks that accept university acceptance letters instead of UK addresses.',
          icon: 'FileCheck',
        },
        {
          title: 'Zero Monthly Fees',
          description: 'Many student accounts come with no monthly maintenance fees and free transactions.',
          icon: 'Wallet',
        },
        {
          title: 'Mobile Banking',
          description: 'Full-featured mobile apps to manage your money on the go, anywhere in the world.',
          icon: 'Smartphone',
        },
        {
          title: 'International Transfers',
          description: 'Send and receive money from home with competitive exchange rates and low fees.',
          icon: 'ArrowLeftRight',
        },
        {
          title: 'Student Perks',
          description: 'Exclusive discounts, cashback offers, and special deals just for students.',
          icon: 'Gift',
        },
      ],
      vendors: [
        {
          id: 'barclays-student',
          name: 'Barclays Student Account',
          tagline: 'Banking made simple for students',
          logo: '/barclays-logo.png',
          features: ['No monthly fees', 'Free international transfers', 'Mobile app'],
          rating: 4.5,
        },
        {
          id: 'hsbc-student',
          name: 'HSBC Student Account',
          tagline: 'Global banking for international students',
          logo: '/hsbc-logo.png',
          features: ['Multi-currency account', '24/7 support', 'Campus branches'],
          rating: 4.3,
        },
        {
          id: 'revolut-student',
          name: 'Revolut Student',
          tagline: 'Banking reimagined for students',
          logo: '/revolut-logo.png',
          features: ['Multi-currency wallet', 'Fee-free spending abroad', 'Budgeting tools'],
          rating: 4.7,
        },
      ],
      comparisonData: [
        {
          vendor: 'Barclays Student',
          fees: 'Free',
          setupTime: '2-3 days',
          documents: 'Passport, University letter',
          keyPerk: 'Free international transfers',
          rating: 4.5,
        },
        {
          vendor: 'HSBC Student',
          fees: 'Free',
          setupTime: '3-5 days',
          documents: 'Passport, University letter, Proof of funds',
          keyPerk: 'Multi-currency account',
          rating: 4.3,
        },
        {
          vendor: 'Monzo Student',
          fees: 'Free',
          setupTime: 'Instant',
          documents: 'Passport, University letter',
          keyPerk: 'Fee-free spending abroad',
          rating: 4.7,
        },
      ],
      faqs: [
        {
          question: 'Can I open a UK bank account before arriving?',
          answer: 'Yes! Many banks allow you to start the application process online before you arrive in the UK. You\'ll need to complete verification once you\'re in the country.',
        },
        {
          question: 'What documents do I need?',
          answer: 'Typically, you\'ll need your passport, a university acceptance letter, and sometimes proof of address (though many student accounts don\'t require this initially).',
        },
        {
          question: 'Are there fees for student accounts?',
          answer: 'Most student bank accounts in the UK are free, with no monthly maintenance fees. However, some services like international transfers may have fees.',
        },
        {
          question: 'How long does it take to open an account?',
          answer: 'The process can take anywhere from a few hours (for digital banks) to 1-2 weeks (for traditional banks), depending on the bank and your documentation.',
        },
        {
          question: 'Can I use my home country bank account?',
          answer: 'While you can use your home country account, having a UK bank account makes it easier to receive student loans, pay rent, and avoid foreign transaction fees.',
        },
      ],
    },
    'sim-card': {
      title: 'SIM Cards for International Students',
      description: 'Stay connected with student-friendly mobile plans. Get data, calls, and texts at affordable rates.',
      partnerBenefits: [
        'Better rates through group negotiation',
        'No setup fees—providers cover costs',
        'Plans for int\'l students, no UK address needed',
      ],
      benefits: [
        {
          title: 'Student Discounts',
          description: 'Special rates and data packages designed specifically for students.',
          icon: 'GraduationCap',
        },
        {
          title: 'International Calls',
          description: 'Affordable rates to call home and stay connected with family worldwide.',
          icon: 'Phone',
        },
        {
          title: 'Flexible Plans',
          description: 'No long-term contracts. Change or cancel your plan anytime.',
          icon: 'RefreshCw',
        },
        {
          title: '5G Coverage',
          description: 'Fast, reliable 5G network coverage across the UK.',
          icon: 'Signal',
        },
      ],
      vendors: [
        {
          id: 'vodafone-student',
          name: 'Vodafone Student',
          tagline: 'Connect with confidence',
          logo: '/vodafone.png',
          features: ['Unlimited data', 'International minutes', '5G included'],
          rating: 4.6,
        },
        {
          id: 'ee-student',
          name: 'EE Student Plan',
          tagline: 'Fastest network in the UK',
          logo: '/ee-logo.png',
          features: ['5G speeds', 'Student discount', 'Flexible plans'],
          rating: 4.4,
        },
        {
          id: 'three-student',
          name: 'Three Student',
          tagline: 'Feel at home with Three',
          logo: '/three-logo.svg',
          features: ['Go Roam included', 'Unlimited data', 'Great value'],
          rating: 4.3,
        },
      ],
      comparisonData: [],
      faqs: [
        {
          question: 'Do I need a UK address to get a SIM card?',
          answer: 'No, you can get a pay-as-you-go SIM card immediately with just your passport. Contract plans may require a UK address.',
        },
        {
          question: 'Can I keep my home country number?',
          answer: 'Yes, you can keep your home number, but using a UK SIM card will save you money on local calls and data.',
        },
      ],
    },
    'housing': {
      title: 'Student Housing & Accommodation',
      description: 'Find safe, affordable, and verified accommodation near your university. All options personally checked by our team.',
      partnerBenefits: [
        'Lower rates through group bargaining',
        'No fees to join—providers cover costs',
        'Housing for int\'l students, flexible contracts',
      ],
      benefits: [
        {
          title: 'Verified Properties',
          description: 'Every listing is personally verified for safety, location, and student-friendly amenities.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Near Campus',
          description: 'Properties located within walking distance or short commute to major universities.',
          icon: 'MapPin',
        },
        {
          title: 'Flexible Contracts',
          description: 'Short-term and long-term options to match your study duration.',
          icon: 'Calendar',
        },
        {
          title: 'All-Inclusive',
          description: 'Many properties include utilities, Wi-Fi, and furniture in the rent.',
          icon: 'CheckCircle',
        },
      ],
      vendors: [
        {
          id: 'unite-students',
          name: 'Unite Students',
          tagline: 'Student accommodation you can trust',
          logo: '/unite-logo.svg',
          features: ['All-inclusive bills', '24/7 support', 'Prime locations'],
          rating: 4.5,
        },
        {
          id: 'iq-student',
          name: 'iQ Student Accommodation',
          tagline: 'Modern living for students',
          logo: '/iq-logo.png',
          features: ['Fully furnished', 'Wi-Fi included', 'Study spaces'],
          rating: 4.6,
        },
      ],
      comparisonData: [],
      faqs: [
        {
          question: 'When should I book accommodation?',
          answer: 'We recommend booking 2-3 months before your arrival, especially for popular locations near universities.',
        },
        {
          question: 'Do I need a UK guarantor?',
          answer: 'Many student accommodations don\'t require a UK guarantor if you pay rent in advance or use a guarantor service.',
        },
      ],
    },
    'insurance': {
      title: 'Student Insurance',
      description: 'Comprehensive insurance coverage for health, travel, and belongings. Protect yourself while studying in the UK.',
      partnerBenefits: [
        'Better coverage through group rates',
        'No fees to join—insurers cover costs',
        'Insurance for int\'l students, comprehensive protection',
      ],
      benefits: [
        {
          title: 'Health Coverage',
          description: 'Access to NHS and private healthcare options for international students.',
          icon: 'Heart',
        },
        {
          title: 'Travel Insurance',
          description: 'Coverage for trips home and around Europe during your studies.',
          icon: 'Plane',
        },
        {
          title: 'Belongings Protection',
          description: 'Cover your laptop, phone, and other valuables against theft or damage.',
          icon: 'Package',
        },
        {
          title: 'Student Discounts',
          description: 'Special rates and flexible payment plans designed for students.',
          icon: 'GraduationCap',
        },
      ],
      vendors: [
        {
          id: 'endsleigh-student',
          name: 'Endsleigh Student Insurance',
          tagline: 'Insurance made for students',
          logo: '/endsleigh-logo.png',
          features: ['Comprehensive coverage', 'Student discounts', '24/7 claims'],
          rating: 4.4,
        },
        {
          id: 'coverwise-student',
          name: 'Coverwise Student',
          tagline: 'Affordable protection for students',
          logo: '/coverwise-logo.png',
          features: ['Budget-friendly', 'Flexible cover', 'Quick claims'],
          rating: 4.2,
        },
        {
          id: 'sainsburys-insurance',
          name: 'Sainsbury\'s Student Insurance',
          tagline: 'Protection with Nectar rewards',
          logo: '/sainsburys-logo.png',
          features: ['Nectar points', 'Multi-cover options', '24/7 helpline'],
          rating: 4.3,
        },
      ],
      comparisonData: [],
      faqs: [
        {
          question: 'Do I need health insurance as an international student?',
          answer: 'It depends on your visa type and home country. Some students need to pay the Immigration Health Surcharge, while others may need additional private insurance.',
        },
        {
          question: 'What does student insurance typically cover?',
          answer: 'Student insurance usually covers health, travel, personal belongings, and sometimes liability protection.',
        },
      ],
    },
    'visa': {
      title: 'Visa Support & Guidance',
      description: 'Expert guidance for UK student visa applications. Get help with documents, procedures, and interview preparation.',
      partnerBenefits: [
        'Expert guidance through our network',
        'No fees to join—advisors cover costs',
        'Support for int\'l students, step-by-step help',
      ],
      benefits: [
        {
          title: 'Application Guidance',
          description: 'Step-by-step help with filling out your visa application correctly.',
          icon: 'FileCheck',
        },
        {
          title: 'Document Checklist',
          description: 'Complete list of required documents to avoid delays or rejections.',
          icon: 'ClipboardList',
        },
        {
          title: 'Interview Prep',
          description: 'Practice questions and tips to help you ace your visa interview.',
          icon: 'MessageSquare',
        },
        {
          title: 'Ongoing Support',
          description: 'Help with visa extensions, dependents, and post-study work visas.',
          icon: 'Headphones',
        },
      ],
      vendors: [
        {
          id: 'bridgr-visa-support',
          name: 'Bridgr Visa Support',
          tagline: 'Your visa journey, simplified',
          logo: '/bridgr-logo.png',
          features: ['Expert advisors', 'Document review', 'Application support'],
          rating: 4.8,
        },
      ],
      comparisonData: [],
      faqs: [
        {
          question: 'How long does a UK student visa take to process?',
          answer: 'Standard processing is usually 3 weeks, but can take longer during peak periods. Priority services are available for faster processing.',
        },
        {
          question: 'Can I work on a student visa?',
          answer: 'Yes, most student visas allow part-time work (usually up to 20 hours per week during term time) and full-time during holidays.',
        },
      ],
    },
    'food': {
      title: 'Food & Dining for Students',
      description: 'Discover student-friendly restaurants, meal plans, and food delivery services. Eat well and save money while studying.',
      partnerBenefits: [
        'Better deals through group discounts',
        'No fees to join—restaurants cover costs',
        'Dining for int\'l students, student-friendly prices',
      ],
      benefits: [
        {
          title: 'Student Discounts',
          description: 'Exclusive deals and discounts at restaurants, cafes, and food delivery services.',
          icon: 'Tag',
        },
        {
          title: 'Meal Plans',
          description: 'Affordable university meal plans and prepaid dining options.',
          icon: 'UtensilsCrossed',
        },
        {
          title: 'Food Delivery',
          description: 'Access to popular delivery apps with student membership discounts.',
          icon: 'ShoppingBag',
        },
        {
          title: 'Budget-Friendly Options',
          description: 'Find the best value meals and grocery shopping tips for students.',
          icon: 'PiggyBank',
        },
      ],
      vendors: [
        {
          id: 'uber-eats-student',
          name: 'Uber Eats Student',
          tagline: 'Food delivery with student perks',
          logo: '/ubereats-logo.png',
          features: ['Student discount', 'Free delivery', 'Wide selection'],
          rating: 4.6,
        },
      ],
      comparisonData: [],
      faqs: [
        {
          question: 'Are there student discounts for food delivery?',
          answer: 'Yes! Many food delivery services offer student memberships with discounts, free delivery, and exclusive deals.',
        },
        {
          question: 'What are the best budget-friendly food options for students?',
          answer: 'University meal plans, meal prep services, and grocery shopping at discount supermarkets are great ways to save money on food.',
        },
      ],
    },
  };

  return categoryMap[category] || null;
}

