import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'Sealcoating in Waco, TX | Blackline Paving',
  description: 'Asphalt sealcoating in Waco and Central Texas. Protect driveways and parking lots from UV and oxidation. Flat-rate quotes, bonded & insured.',
  keywords: ["sealcoating Waco TX","asphalt sealcoat Central Texas","parking lot sealcoat Waco","driveway sealcoating Hewitt"],
  alternates: { canonical: `${BASE}/services/sealcoating` },
  openGraph: {
    title: 'Sealcoating | Blackline Paving — Waco, TX',
    description: 'Asphalt sealcoating in Waco and Central Texas. Protect driveways and parking lots from UV and oxidation. Flat-rate quotes, bonded & insured.',
    url: `${BASE}/services/sealcoating`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
