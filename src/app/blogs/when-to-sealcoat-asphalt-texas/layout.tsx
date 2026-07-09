import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'When to Sealcoat Asphalt in Texas | Blackline Paving',
  description: 'How often Central Texas parking lots and driveways need sealcoat, UV impact, and the best timing for lasting results in Waco.',
  alternates: { canonical: `${BASE}/blogs/when-to-sealcoat-asphalt-texas` },
  openGraph: {
    title: 'When to Sealcoat Asphalt in Texas | Blackline Paving',
    description: 'Sealcoat timing and guidance for Waco and Central Texas asphalt.',
    url: `${BASE}/blogs/when-to-sealcoat-asphalt-texas`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'article',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
