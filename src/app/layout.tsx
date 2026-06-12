import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://tequilafestcleveland.com";
const OG_IMAGE = `${SITE_URL}/opengraph-image`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tequila Fest Cleveland 2026 | July 25 · Cuyahoga County Fairgrounds",
    template: "%s | Tequila Fest Cleveland",
  },
  description:
    "Cleveland's biggest tequila festival. July 25, 2026 at Cuyahoga County Fairgrounds, Berea OH. Sample 50+ premium tequilas, enjoy authentic tacos, live music by Apostle Jones Band & DJ Fusemania. VIP packages available.",
  keywords: [
    "tequila near me",
    "tequila cleveland",
    "tequila fest",
    "tequila festival cleveland",
    "tequila festival",
    "Tequila Fest Cleveland",
    "tequila festival Cleveland Ohio",
    "Cleveland tequila event 2026",
    "tequila tasting near me",
    "tequila tasting Cleveland",
    "tequila festival near me",
    "tequila sampling Ohio",
    "tequila event Cleveland",
    "Cuyahoga County Fairgrounds events",
    "Berea Ohio festival",
    "Cleveland food and drink festival",
    "Cleveland summer festival 2026",
    "things to do in Cleveland July 2026",
    "Apostle Jones Band",
    "DJ Fusemania",
    "VIP tequila experience",
    "tacos Cleveland",
    "tequila fest USA",
    "tequila brands Ohio",
  ],
  authors: [{ name: "Tequila Fest USA", url: "https://tequilafestusa.com" }],
  creator: "Tequila Fest USA",
  publisher: "Tequila Fest USA",
  category: "Event",
  alternates: {
    canonical: SITE_URL,
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
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Tequila Fest Cleveland 2026 | July 25 · Cuyahoga County Fairgrounds",
    description:
      "Sample 50+ premium tequilas, enjoy authentic tacos & live music at Cleveland's biggest tequila festival. July 25, 2026 · Berea, OH. Get tickets now!",
    siteName: "Tequila Fest Cleveland",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Tequila Fest Cleveland 2026 – July 25 at Cuyahoga County Fairgrounds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tequila Fest Cleveland 2026 | July 25 · Berea, OH",
    description:
      "50+ tequilas · tacos · live music. Cleveland's biggest tequila festival is July 25, 2026. Get your tickets!",
    images: [OG_IMAGE],
    creator: "@TequilaFestUSA",
    site: "@TequilaFestUSA",
  },
  other: {
    "geo.region": "US-OH",
    "geo.placename": "Berea, Ohio",
    "geo.position": "41.3659;-81.8557",
    ICBM: "41.3659, -81.8557",
    "theme-color": "#F5A623",
  },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Tequila Fest Cleveland 2026",
  description:
    "Cleveland's biggest tequila festival featuring 50+ premium tequila brands, authentic tacos, live music, and VIP experiences. Presented by Código 1530.",
  url: SITE_URL,
  startDate: "2026-07-25T15:00:00-04:00",
  endDate: "2026-07-25T21:00:00-04:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Cuyahoga County Fairgrounds",
    address: {
      "@type": "PostalAddress",
      streetAddress: "19201 E Bagley Rd",
      addressLocality: "Berea",
      addressRegion: "OH",
      postalCode: "44017",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.3659,
      longitude: -81.8557,
    },
  },
  image: [OG_IMAGE],
  organizer: {
    "@type": "Organization",
    name: "Tequila Fest USA",
    url: "https://tequilafestusa.com",
  },
  offers: [
    {
      "@type": "Offer",
      name: "General Admission",
      url: "https://www.tequilafestusa.com/events/cleveland#tickets",
      availability: "https://schema.org/InStock",
      validFrom: "2025-01-01",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "VIP Experience",
      url: "https://www.tequilafestusa.com/events/cleveland#tickets",
      availability: "https://schema.org/InStock",
      validFrom: "2025-01-01",
      priceCurrency: "USD",
    },
  ],
  performer: [
    {
      "@type": "MusicGroup",
      name: "Apostle Jones Band",
    },
    {
      "@type": "Person",
      name: "DJ Fusemania",
    },
  ],
  sponsor: {
    "@type": "Organization",
    name: "Código 1530",
  },
  keywords:
    "tequila festival, Cleveland, Berea Ohio, tequila tasting, live music, tacos, VIP experience",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tequila Fest Cleveland",
  description: "Annual tequila festival in Cleveland, Ohio.",
  url: SITE_URL,
  telephone: "",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berea",
    addressRegion: "OH",
    postalCode: "44017",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.3659,
    longitude: -81.8557,
  },
  sameAs: ["https://tequilafestusa.com"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <Script
          id="event-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        <Script
          id="localbusiness-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
