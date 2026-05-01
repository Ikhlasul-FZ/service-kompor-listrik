import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amanda House Teknik | Service Kompor Listrik Surabaya & Sekitarnya",
  description: "Jasa Service Kompor Listrik, Kompor Induksi, dan Water Heater Profesional di Surabaya. Teknisi berpengalaman, panggil 24 jam, dan bergaransi.",
  keywords: "service kompor listrik surabaya, service kompor induksi surabaya, servis kompor listrik panggilan, teknisi kompor listrik terdekat, perbaikan kompor listrik surabaya, amanda house Teknik",
  authors: [{ name: "Amanda House Teknik" }],
  openGraph: {
    title: "Amanda House Teknik | Service Kompor Listrik Surabaya",
    description: "Layanan jasa servis kompor listrik dan induksi panggilan 24 jam di Surabaya dan sekitarnya.",
    url: "https://amandaservice.com/",
    siteName: "Amanda House Teknik",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Service Kompor Listrik Amanda House Teknik",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Amanda House Teknik",
  "image": "https://amandaservice.com/images/hero.webp",
  "@id": "https://amandaservice.com",
  "url": "https://amandaservice.com",
  "telephone": "+6285190876262",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Surabaya",
    "addressLocality": "Surabaya",
    "addressRegion": "Jawa Timur",
    "postalCode": "60000",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -7.2575,
    "longitude": 112.7521
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://wa.me/6285190876262"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LanguageProvider>
          <div className="overflow-x-hidden">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
