import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'Line Striping in Waco, TX | Blackline Paving',
  description: 'Parking lot line striping in Waco, TX — ADA stalls, fire lanes, arrows, and full layouts. Flat-rate quotes, bonded & insured.',
  keywords: ["parking lot striping Waco","ADA striping Central Texas","line striping contractor Waco TX"],
  alternates: { canonical: `${BASE}/services/line-striping` },
  openGraph: {
    title: 'Line Striping | Blackline Paving — Waco, TX',
    description: 'Parking lot line striping in Waco, TX — ADA stalls, fire lanes, arrows, and full layouts. Flat-rate quotes, bonded & insured.',
    url: `${BASE}/services/line-striping`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
