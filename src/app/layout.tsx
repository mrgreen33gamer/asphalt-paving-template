// src/app/layout.tsx
// Blackline Paving — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#1e293b' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, ABeeZee } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS ─────────────────────────────────────────────────────────────────────
const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

const aBeeZee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abeezee",
});

const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.blacklinepaving.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e293b" },
    { media: "(prefers-color-scheme: dark)",  color: "#1e293b" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Blackline Paving | Asphalt Paving, Sealcoating & Striping — Waco, TX",
    template: "%s | Blackline Paving",
  },
  description:
    "Blackline Paving is a Waco, TX asphalt paving contractor offering asphalt paving, sealcoating, parking lots, line striping, pothole repair, and overlay & resurfacing for Central Texas homes and businesses. commercial paving contractor, bonded & insured, 2-Year Workmanship on New Pavement.",
  keywords: [
    "Blackline Paving",
    "asphalt paving contractor Waco TX",
    "asphalt paving Waco Texas",
    "sealcoating Central Texas",
    "parking lot paving Waco TX",
    "line striping Waco",
    "pothole repair Hewitt TX",
    "overlay & resurfacing Waco",
    "asphalt paving company Temple Killeen",
  ],
  authors: [{ name: "Blackline Paving", url: BASE_URL }],
  creator: "Blackline Paving",
  publisher: "Blackline Paving",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "Blackline Paving | Asphalt Paving, Sealcoating & Striping — Waco, TX",
    description:
      "Waco-based asphalt paving contractor for paving, sealcoating, parking lots, striping, pothole repair, and overlays across Central Texas. Commercial paving contractor, bonded & insured. 2-Year Workmanship on New Pavement.",
    url: BASE_URL,
    siteName: "Blackline Paving",
    images: [
      {
        url: `${BASE_URL}/logos/scott-apps-banner.png?v=1`,
        width: 4000,
        height: 630,
        alt: "Blackline Paving — Waco TX Asphalt Paving · Sealcoating · Striping",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blackline Paving | Waco TX Asphalt Paving Contractor",
    description:
      "Asphalt paving, sealcoating, parking lots, striping & overlays for Central Texas. Commercial paving contractor · 2-Year Workmanship on New Pavement.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "4.9";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "Blackline Paving",
  alternateName: "Blackline Paving Waco",
  description:
    "Residential and commercial asphalt paving services in Waco and Central Texas — paving, sealcoating, parking lots, line striping, pothole repair, and overlay & resurfacing. Commercial paving contractor, bonded & insured, 2-Year Workmanship on New Pavement.",
  url: BASE_URL,
  telephone: "+12548808080",
  email: "hello@blacklinepaving.com",
  foundingDate: "2003",
  founder: {
    "@type": "Person",
    name: "Vince Alvarez",
    jobTitle: "Owner & Lead Paving Contractor",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "4200 Franklin Ave",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76710",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Asphalt Paving Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Asphalt Paving" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sealcoating" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Parking Lot Paving" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Line Striping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pothole Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Overlay & Resurfacing" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/blacklinepaving",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${aBeeZee.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#f59e0b" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#1e293b",
                }}
              >
                <PulseLoader size={50} color="#f59e0b" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}
