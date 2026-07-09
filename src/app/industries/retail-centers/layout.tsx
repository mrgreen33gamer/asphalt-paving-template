import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'Retail Centers | Blackline Paving — Waco, TX',
  description: 'Parking lot paving, sealcoating, and striping for retail centers in Waco and Central Texas. Phased work that protects tenant access.',
  alternates: { canonical: `${BASE}/industries/retail-centers` },
  openGraph: {
    title: 'Retail Centers | Blackline Paving',
    description: 'Parking lot paving, sealcoating, and striping for retail centers in Waco and Central Texas.',
    url: `${BASE}/industries/retail-centers`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
