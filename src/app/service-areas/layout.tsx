import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'Service Areas | Blackline Paving — Waco, Temple, Killeen & Central Texas',
  description:
    'Blackline Paving serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and Central Texas. Free on-site estimates. Flat-rate quotes.',
  alternates: { canonical: `${BASE}/service-areas` },
  openGraph: {
    title: 'Service Areas | Blackline Paving',
    description: 'Asphalt paving, sealcoating, parking lots, and striping across Central Texas.',
    url: `${BASE}/service-areas`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
