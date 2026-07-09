import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'Asphalt Paving Services | Blackline Paving — Waco, TX',
  description:
    'Asphalt paving, sealcoating, parking lots, line striping, pothole repair, and overlay & resurfacing in Waco and Central Texas. Commercial paving contractor · bonded & insured · 2-Year Workmanship on New Pavement.',
  keywords: [
    'asphalt paving services Waco',
    'sealcoating Central Texas',
    'parking lot paving Waco TX',
    'line striping contractor',
    'pothole repair Waco',
  ],
  alternates: { canonical: `${BASE}/services` },
  openGraph: {
    title: 'Asphalt Paving Services | Blackline Paving — Waco, TX',
    description:
      'Full-service asphalt paving for homes and businesses across Central Texas. Flat-rate quotes, commercial paving contractor.',
    url: `${BASE}/services`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
