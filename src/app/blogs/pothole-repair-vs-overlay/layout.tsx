import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'Pothole Repair vs. Asphalt Overlay | Blackline Paving',
  description: 'When a patch is enough vs. mill-and-overlay for Central Texas parking lots and driveways. Honest guidance from Blackline Paving.',
  alternates: { canonical: `${BASE}/blogs/pothole-repair-vs-overlay` },
  openGraph: {
    title: 'Pothole Repair vs. Asphalt Overlay | Blackline Paving',
    description: 'Patch vs overlay decision guide for Waco and Central Texas asphalt.',
    url: `${BASE}/blogs/pothole-repair-vs-overlay`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'article',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
