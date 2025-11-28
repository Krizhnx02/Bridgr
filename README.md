# Roam - UK Student Marketplace Landing Page

A responsive landing page for Roam, a UK-based marketplace helping international students with essential services including SIM cards, bank accounts, housing, insurance, and visa support.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Modern UI**: Built with Next.js and Tailwind CSS for a modern, clean design
- **Mobile Navigation**: Collapsible hamburger menu for mobile devices
- **Comprehensive Sections**:
  - Hero section with compelling call-to-action
  - Features section highlighting key services with icons
  - How It Works section with 3-step process
  - Social Proof section with testimonials and partner logos
  - FAQ section with expandable questions
  - Footer with navigation, social media, and contact information

## Tech Stack

- **Framework**: Next.js 16.0.0 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
ROAM/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header with mobile menu
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Services features section
│   ├── HowItWorks.tsx       # 3-step process section
│   ├── SocialProof.tsx      # Testimonials and partners
│   ├── FAQ.tsx              # Frequently asked questions
│   └── Footer.tsx           # Footer with links and contact info
├── public/                  # Static assets
└── package.json             # Project dependencies
```

## Key Components

### Header
- Fixed navigation bar with logo
- Desktop: Horizontal navigation links
- Mobile: Hamburger menu with collapsible navigation

### Hero Section
- Compelling headline: "Your UK Student Journey Starts Here"
- Brief description of services
- Prominent CTA buttons

### Features Section
- 6 key services with icons:
  - UK SIM & Data
  - Student-Friendly Bank Account
  - Safe Housing Near Campus
  - Comprehensive Insurance
  - Visa Support
  - One-Stop Solution

### How It Works
- 3-step process visualization:
  1. Choose Your Bundle
  2. Set Up Before Arrival
  3. Arrive & Plug In

### Social Proof
- Student testimonials from different countries
- Partner provider logos (Vodafone, Barclays, Unite Students, Endsleigh)

### FAQ Section
- Expandable accordion-style FAQs
- 8 common questions about services

### Footer
- Navigation links
- Social media icons (Facebook, Instagram, Twitter, LinkedIn)
- Newsletter signup
- Legal links (Privacy Policy, Terms & Conditions, Cookie Policy)
- Contact information

## Responsive Breakpoints

- Mobile: < 768px (Hamburger menu, stacked layout)
- Tablet: 768px - 1024px (Adjusted grid layouts)
- Desktop: > 1024px (Full horizontal navigation, multi-column layouts)

## Color Scheme

- Primary: Indigo (brand color)
- Secondary: Purple accents
- Neutral: Gray scale for text and backgrounds
- Highlights: Yellow for ratings/stars

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © 2024 Roam UK

## Contact

For support or inquiries:
- Email: support@roam-uk.com
- Phone: +44 20 1234 5678
- Available 24/7
