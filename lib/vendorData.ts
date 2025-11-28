import { VendorData } from '@/types/marketplace';
import { getCategoryData } from './categoryData';

// Get vendor data by category and vendor ID
export function getVendorData(category: string, vendorId: string): VendorData | null {
  const categoryData = getCategoryData(category);
  
  if (!categoryData) {
    return null;
  }

  const vendor = categoryData.vendors.find(v => v.id === vendorId);
  
  if (!vendor) {
    return null;
  }

  // Generate vendor-specific data based on vendor and category
  const vendorDataMap: Record<string, Record<string, Partial<VendorData>>> = {
    'bank-account': {
      'barclays-student': {
        description: 'Barclays Student Account offers a comprehensive banking solution designed specifically for students. With no monthly fees, free international transfers, and a user-friendly mobile app, managing your finances has never been easier.',
        pricing: {
          plan: 'Student Account',
          monthlyFee: 'Free',
          setupFee: 'Free',
        },
        highlights: [
          'No monthly maintenance fees',
          'Free international money transfers',
          'Full-featured mobile banking app',
          'Access to over 4,000 UK branches',
          '24/7 customer support',
        ],
        requirements: [
          'Valid student ID or university acceptance letter',
          'Passport or UK driving license',
          'Proof of UK address (can use university accommodation)',
        ],
        howToApply: [
          'Click "Apply Now" to start your application',
          'Complete the online form with your details',
          'Upload required documents (student ID, passport)',
          'Wait for approval (usually 1-2 business days)',
          'Receive your account details and debit card',
        ],
        faqs: [
          {
            question: 'Do I need a UK address to open a Barclays student account?',
            answer: 'Yes, but you can use your university accommodation address. Barclays accepts university acceptance letters as proof of address for international students.',
          },
          {
            question: 'Are there any fees for international transfers?',
            answer: 'No, Barclays Student Account offers free international money transfers, making it easy to receive money from home or send money abroad.',
          },
          {
            question: 'How long does it take to get approved?',
            answer: 'Most applications are approved within 1-2 business days. You\'ll receive an email confirmation once your account is ready.',
          },
        ],
      },
      'hsbc-student': {
        description: 'HSBC Student Account provides global banking solutions for international students. With multi-currency accounts, 24/7 support, and campus branches, HSBC makes banking seamless for students from around the world.',
        pricing: {
          plan: 'Student Account',
          monthlyFee: 'Free',
          setupFee: 'Free',
        },
        highlights: [
          'Multi-currency account options',
          '24/7 global customer support',
          'Campus branches near major universities',
          'International money transfer services',
          'Student discounts and offers',
        ],
        requirements: [
          'Valid student ID',
          'Passport',
          'Proof of enrollment',
          'UK address (university accommodation accepted)',
        ],
        howToApply: [
          'Start your application online',
          'Provide student and personal information',
          'Upload required documents',
          'Schedule an appointment at a branch (optional)',
          'Receive account confirmation',
        ],
        faqs: [
          {
            question: 'Can I open an account before arriving in the UK?',
            answer: 'Yes, HSBC allows you to start the application process online before you arrive. You\'ll need to complete verification once you\'re in the UK.',
          },
          {
            question: 'What currencies can I hold in my account?',
            answer: 'HSBC offers multi-currency accounts where you can hold GBP, USD, EUR, and other major currencies in the same account.',
          },
        ],
      },
      'revolut-student': {
        description: 'Revolut Student brings modern banking to your fingertips. With a multi-currency wallet, fee-free spending abroad, and powerful budgeting tools, Revolut is perfect for students who travel and manage money internationally.',
        pricing: {
          plan: 'Standard Plan',
          monthlyFee: 'Free',
          setupFee: 'Free',
        },
        highlights: [
          'Multi-currency wallet (30+ currencies)',
          'Fee-free spending abroad',
          'Real-time spending notifications',
          'Budgeting and savings tools',
          'Instant money transfers',
        ],
        requirements: [
          'Valid student ID',
          'Passport or national ID',
          'Proof of address',
        ],
        howToApply: [
          'Download the Revolut app',
          'Sign up with your email and phone',
          'Verify your identity with documents',
          'Add student status for benefits',
          'Start using your account immediately',
        ],
        faqs: [
          {
            question: 'Can I use Revolut as my main UK bank account?',
            answer: 'Yes, Revolut provides UK account details (sort code and account number) so you can receive salary, student loans, and make direct debits just like a traditional bank.',
          },
          {
            question: 'Are there limits on fee-free spending abroad?',
            answer: 'On the free plan, you can spend up to £1,000 per month abroad without fees. Beyond that, a small fee applies.',
          },
        ],
      },
    },
    'sim-card': {
      'vodafone-student': {
        description: 'Vodafone Student plans keep you connected with unlimited data, international minutes, and 5G coverage. Stay in touch with family back home and enjoy fast internet throughout the UK.',
        pricing: {
          plan: 'Student Plan',
          monthlyFee: 'From £15/month',
          setupFee: 'Free',
        },
        highlights: [
          'Unlimited data on selected plans',
          'International minutes included',
          '5G network coverage',
          'Student discounts available',
          'Flexible monthly contracts',
        ],
        requirements: [
          'Valid student ID',
          'Passport or UK ID',
          'UK address',
        ],
        howToApply: [
          'Choose your plan online',
          'Provide student verification',
          'Select delivery or pickup option',
          'Activate your SIM card',
          'Start using immediately',
        ],
        faqs: [
          {
            question: 'Can I keep my home country number?',
            answer: 'You can keep your home number, but using a UK SIM card will save you money on local calls and data. You can use both numbers if needed.',
          },
          {
            question: 'Do I need a UK address to get a SIM card?',
            answer: 'For pay-as-you-go SIMs, you only need a passport. For contract plans, a UK address is required.',
          },
        ],
      },
      'ee-student': {
        description: 'EE Student Plan delivers the fastest network speeds in the UK with 5G coverage, student discounts, and flexible plans to suit your needs.',
        pricing: {
          plan: 'Student Plan',
          monthlyFee: 'From £12/month',
          setupFee: 'Free',
        },
        highlights: [
          'Fastest 5G speeds in the UK',
          'Exclusive student discounts',
          'Flexible monthly plans',
          'No long-term contracts',
          'Great coverage nationwide',
        ],
        requirements: [
          'Valid student ID',
          'Passport',
          'UK address',
        ],
        howToApply: [
          'Browse available student plans',
          'Select your preferred plan',
          'Complete online application',
          'Receive SIM card by post',
          'Activate and start using',
        ],
        faqs: [
          {
            question: 'What is the coverage like?',
            answer: 'EE has the largest 4G and 5G network in the UK, covering 99% of the population.',
          },
        ],
      },
      'three-student': {
        description: 'Three Student offers great value with Go Roam included, unlimited data options, and student-friendly pricing.',
        pricing: {
          plan: 'Student Plan',
          monthlyFee: 'From £10/month',
          setupFee: 'Free',
        },
        highlights: [
          'Go Roam included in many plans',
          'Unlimited data options',
          'Great value for money',
          'No hidden fees',
          'Easy to manage online',
        ],
        requirements: [
          'Valid student ID',
          'Passport',
          'UK address',
        ],
        howToApply: [
          'Visit Three website',
          'Choose student plan',
          'Complete registration',
          'Get SIM card delivered',
          'Activate online',
        ],
        faqs: [
          {
            question: 'What is Go Roam?',
            answer: 'Go Roam allows you to use your UK data allowance in over 70 destinations worldwide at no extra cost.',
          },
        ],
      },
    },
    'housing': {
      'unite-students': {
        description: 'Unite Students provides trusted student accommodation with all-inclusive bills, 24/7 support, and prime locations near major universities.',
        pricing: {
          plan: 'Student Accommodation',
          monthlyFee: 'From £150/week',
          setupFee: 'Deposit required',
        },
        highlights: [
          'All-inclusive bills (utilities, Wi-Fi)',
          '24/7 on-site support',
          'Prime locations near universities',
          'Fully furnished rooms',
          'Secure and safe environment',
        ],
        requirements: [
          'Valid student ID',
          'Proof of enrollment',
          'Deposit payment',
          'Guarantor (if required)',
        ],
        howToApply: [
          'Browse available properties',
          'Book a viewing (optional)',
          'Complete online application',
          'Pay deposit to secure room',
          'Move in on your arrival date',
        ],
        faqs: [
          {
            question: 'Are bills included in the rent?',
            answer: 'Yes, all utilities, Wi-Fi, and contents insurance are included in your weekly rent.',
          },
          {
            question: 'Do I need a UK guarantor?',
            answer: 'If you pay rent in advance, you may not need a guarantor. Contact us for more information.',
          },
        ],
      },
      'iq-student': {
        description: 'iQ Student Accommodation offers modern living spaces for students with fully furnished rooms, Wi-Fi included, and dedicated study spaces.',
        pricing: {
          plan: 'Student Accommodation',
          monthlyFee: 'From £140/week',
          setupFee: 'Deposit required',
        },
        highlights: [
          'Fully furnished modern rooms',
          'High-speed Wi-Fi included',
          'Dedicated study spaces',
          'Social areas and common rooms',
          '24/7 security',
        ],
        requirements: [
          'Valid student ID',
          'Proof of enrollment',
          'Deposit payment',
        ],
        howToApply: [
          'Explore properties online',
          'Book a virtual or in-person viewing',
          'Submit application form',
          'Pay deposit',
          'Complete check-in process',
        ],
        faqs: [
          {
            question: 'What furniture is included?',
            answer: 'All rooms come fully furnished with bed, desk, chair, wardrobe, and storage. Kitchens are fully equipped.',
          },
        ],
      },
    },
    'food': {
      'uber-eats-student': {
        description: 'Uber Eats Student provides food delivery with exclusive student perks, free delivery on many orders, and a wide selection of restaurants.',
        pricing: {
          plan: 'Student Membership',
          monthlyFee: 'Free',
          setupFee: 'Free',
        },
        highlights: [
          'Exclusive student discounts',
          'Free delivery on many orders',
          'Wide selection of restaurants',
          'Easy mobile ordering',
          'Fast delivery times',
        ],
        requirements: [
          'Valid student email address',
          'Student ID verification',
        ],
        howToApply: [
          'Download Uber Eats app',
          'Sign up with student email',
          'Verify student status',
          'Start ordering with discounts',
        ],
        faqs: [
          {
            question: 'How do I get student discounts?',
            answer: 'Sign up with your student email and verify your student status. Discounts will be automatically applied to eligible orders.',
          },
        ],
      },
    },
  };

  const vendorSpecificData = vendorDataMap[category]?.[vendorId] || {};

  // Default data structure
  const defaultData: VendorData = {
    id: vendor.id,
    name: vendor.name,
    tagline: vendor.tagline,
    logo: vendor.logo,
    description: vendorSpecificData.description || `${vendor.name} offers ${vendor.tagline.toLowerCase()}. Perfect for international students looking for quality services.`,
    rating: vendor.rating,
    features: vendor.features,
    highlights: vendorSpecificData.highlights || vendor.features,
    requirements: vendorSpecificData.requirements || [],
    howToApply: vendorSpecificData.howToApply || [
      'Click "Apply Now" to get started',
      'Complete the application form',
      'Submit required documents',
      'Wait for approval',
      'Start using the service',
    ],
    faqs: vendorSpecificData.faqs || [],
    ...vendorSpecificData,
  };

  return defaultData;
}

