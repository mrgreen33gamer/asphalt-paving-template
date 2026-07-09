import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'About Blackline Paving | Waco Asphalt Paving Contractor Since 2003',
  description:
    'Blackline Paving is a locally owned Waco asphalt paving contractor founded in 2003 by Vince Alvarez. commercial paving contractor, bonded & insured, 2-Year Workmanship on New Pavement. 5,500+ jobs across Central Texas.',
  alternates: { canonical: `${BASE}/about` },
  openGraph: {
    title: 'About Blackline Paving | Waco, TX',
    description:
      'Locally owned since 2003. Asphalt paving, sealcoating, parking lots, and overlays for Central Texas.',
    url: `${BASE}/about`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
