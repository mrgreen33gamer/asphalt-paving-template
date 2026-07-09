import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'Schools & Municipal | Blackline Paving — Waco, TX',
  description: 'Asphalt paving, sealcoating, and striping for schools and municipal facilities in Waco and Central Texas. Bonded & insured crews.',
  alternates: { canonical: `${BASE}/industries/schools-municipal` },
  openGraph: {
    title: 'Schools & Municipal | Blackline Paving',
    description: 'Asphalt paving for schools and municipal facilities in Waco and Central Texas.',
    url: `${BASE}/industries/schools-municipal`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
