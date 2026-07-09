import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.blacklinepaving.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact Blackline Paving | Free Quotes in Waco & Central Texas',
  description:
    'Contact Blackline Paving to schedule a free in-home estimate for hardwood, tile, LVP, carpet, commercial flooring, or repair. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 880-8080.',
  keywords: [
    'contact Blackline Waco',
    'flooring estimate Waco TX',
    'free flooring quote Central Texas',
    'Blackline contact',
    'licensed contractor Waco phone',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact Blackline Paving | Free Quotes in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Free on-site estimates. Flat-rate pricing, 2-Year Workmanship on New Pavement, licensed craftspeople.',
    url,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Blackline Paving | Waco & Central Texas',
    description: 'Schedule a free flooring estimate. Call (254) 880-8080.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
