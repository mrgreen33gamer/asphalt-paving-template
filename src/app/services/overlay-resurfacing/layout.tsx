import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'Overlay & Resurfacing in Waco, TX | Blackline Paving',
  description: 'Asphalt mill and overlay in Waco, TX. Resurface parking lots and drives when the base is sound. Flat-rate quotes, commercial paving contractor.',
  keywords: ["asphalt overlay Waco","mill and overlay Central Texas","asphalt resurfacing Waco TX"],
  alternates: { canonical: `${BASE}/services/overlay-resurfacing` },
  openGraph: {
    title: 'Overlay & Resurfacing | Blackline Paving — Waco, TX',
    description: 'Asphalt mill and overlay in Waco, TX. Resurface parking lots and drives when the base is sound. Flat-rate quotes, commercial paving contractor.',
    url: `${BASE}/services/overlay-resurfacing`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
