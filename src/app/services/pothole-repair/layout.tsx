import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'Pothole Repair in Waco, TX | Blackline Paving',
  description: 'Pothole and asphalt patch repair in Waco, TX. Cut-and-patch hot-mix repairs for driveways and parking lots. Flat-rate quotes.',
  keywords: ["pothole repair Waco TX","asphalt patch Central Texas","parking lot pothole repair"],
  alternates: { canonical: `${BASE}/services/pothole-repair` },
  openGraph: {
    title: 'Pothole Repair | Blackline Paving — Waco, TX',
    description: 'Pothole and asphalt patch repair in Waco, TX. Cut-and-patch hot-mix repairs for driveways and parking lots. Flat-rate quotes.',
    url: `${BASE}/services/pothole-repair`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
