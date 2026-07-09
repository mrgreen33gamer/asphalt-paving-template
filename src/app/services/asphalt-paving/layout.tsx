import type { Metadata } from 'next';

const BASE = 'https://www.blacklinepaving.com';

export const metadata: Metadata = {
  title: 'Asphalt Paving in Waco, TX | Blackline Paving',
  description: 'Asphalt paving and driveway replacement in Waco, TX. Proper base prep, hot-mix asphalt, flat-rate quotes, commercial paving contractor, 2-Year Workmanship on New Pavement.',
  keywords: ["asphalt paving Waco TX","asphalt driveway Waco","hot mix asphalt Central Texas","driveway paving Hewitt","asphalt contractor Woodway"],
  alternates: { canonical: `${BASE}/services/asphalt-paving` },
  openGraph: {
    title: 'Asphalt Paving | Blackline Paving — Waco, TX',
    description: 'Asphalt paving and driveway replacement in Waco, TX. Proper base prep, hot-mix asphalt, flat-rate quotes, commercial paving contractor, 2-Year Workmanship on New Pavement.',
    url: `${BASE}/services/asphalt-paving`,
    siteName: 'Blackline Paving',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
