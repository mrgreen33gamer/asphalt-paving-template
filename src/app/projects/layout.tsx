import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'Projects Gallery | Blackline Paving — Waco, TX',
  description:
    'Asphalt project gallery by Blackline Paving across Central Texas — paving, sealcoating, parking lots, striping, repairs, and overlays in Waco, Temple, Killeen, and beyond.',
  alternates: { canonical: `${BASE}/projects` },
  openGraph: {
    title: 'Projects Gallery | Blackline Paving',
    description:
      'A portfolio of driveways, patios, foundations, line striping, repairs, and overlay & resurfacing completed by Blackline Paving across Central Texas.',
    url: `${BASE}/projects`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
