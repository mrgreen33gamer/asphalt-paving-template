import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'Industrial Yards | Blackline Paving — Waco, TX',
  description: 'Heavy-use industrial yard paving, overlays, and repairs in Waco and Central Texas. Designed for truck traffic and equipment loads.',
  alternates: { canonical: `${BASE}/industries/industrial-yards` },
  openGraph: {
    title: 'Industrial Yards | Blackline Paving',
    description: 'Heavy-use industrial yard paving and overlays in Waco and Central Texas.',
    url: `${BASE}/industries/industrial-yards`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
