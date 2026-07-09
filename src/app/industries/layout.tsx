import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'Industries We Serve | Blackline Paving — Waco, TX',
  description:
    'Blackline Paving delivers asphalt programs for retail centers, schools & municipal facilities, and industrial yards across Central Texas.',
  keywords: [
    'retail parking lot paving Waco',
    'school asphalt contractor Texas',
    'industrial yard paving Central Texas',
    'municipal paving Waco TX',
  ],
  alternates: { canonical: `${BASE}/industries` },
  openGraph: {
    title: 'Industries We Serve | Blackline Paving — Waco, TX',
    description:
      'Asphalt paving programs for retail, schools & municipal, and industrial yards across Central Texas.',
    url: `${BASE}/industries`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
