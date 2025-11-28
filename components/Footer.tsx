import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const navigation = {
    main: [
      { name: 'Home', href: '#home' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Services', href: '#services' },
      { name: 'Partners', href: '#partners' },
      { name: 'Contact', href: '#contact' },
      { name: 'FAQs', href: '#faqs' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms & Conditions', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: <Facebook className="h-6 w-6" />,
      },
      {
        name: 'Instagram',
        href: '#',
        icon: <Instagram className="h-6 w-6" />,
      },
      {
        name: 'Twitter',
        href: '#',
        icon: <Twitter className="h-6 w-6" />,
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: <Linkedin className="h-6 w-6" />,
      },
    ],
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Company Info */}
          <div>
            <Link href="/" className="text-2xl font-bold text-indigo-400">
              Bridgr
            </Link>
            <p className="mt-4 text-base text-gray-400">
              Making your UK student journey seamless. Everything you need to thrive as an international student.
            </p>
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h4>
              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <p>Email: support@bridgr-uk.com</p>
                <p>Phone: +44 20 1234 5678</p>
                <p>Available 24/7 for support</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider">Navigation</h4>
              <ul className="mt-4 space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-400 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider">Legal</h4>
              <ul className="mt-4 space-y-2">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-400 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Stay Connected</h4>
            <p className="mt-4 text-sm text-gray-400">
              Follow us on social media for updates and tips for international students.
            </p>
            <div className="mt-6 flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full rounded-md border-0 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
              >
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Bridgr UK. All rights reserved. Helping international students since 2024.
          </p>
        </div>
      </div>
    </footer>
  );
}

