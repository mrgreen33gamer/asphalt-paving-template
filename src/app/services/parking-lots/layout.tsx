import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'Parking Lots in Waco, TX | Blackline Paving',
  description: 'Parking lot paving and rebuilds in Waco, TX. Phased commercial asphalt work for retail, medical, and industrial properties. Flat-rate quotes.',
  keywords: ["parking lot paving Waco","commercial asphalt Waco TX","parking lot contractor Central Texas"],
  alternates: { canonical: `${BASE}/services/parking-lots` },
  openGraph: {
    title: 'Parking Lots | Blackline Paving — Waco, TX',
    description: 'Parking lot paving and rebuilds in Waco, TX. Phased commercial asphalt work for retail, medical, and industrial properties. Flat-rate quotes.',
    url: `${BASE}/services/parking-lots`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
