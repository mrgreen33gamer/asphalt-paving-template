import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'Parking Lot Striping Compliance | Blackline Paving',
  description: 'ADA stalls, fire lanes, and layout striping guidance for Central Texas businesses. Blackline Paving restripe packages.',
  alternates: { canonical: `${BASE}/blogs/parking-lot-striping-compliance` },
  openGraph: {
    title: 'Parking Lot Striping Compliance | Blackline Paving',
    description: 'Striping compliance tips for Central Texas parking lots.',
    url: `${BASE}/blogs/parking-lot-striping-compliance`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'article',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
