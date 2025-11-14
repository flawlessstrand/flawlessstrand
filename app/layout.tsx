import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Luxury Human Hair Vendor UK | 100% Virgin Hair Extensions & Wigs",
    template: "%s | Luxury Hair Vendor UK"
  },
  description:
    "Buy premium 100% virgin human hair bundles, lace wigs, and frontals from the UK's trusted hair vendor. Fast shipping across the UK, quality guaranteed.",
  keywords: [
    "hair vendor UK",
    "human hair extensions",
    "lace wigs UK",
    "frontal wigs London",
    "virgin hair bundles",
    "hair supplier UK",
    "HD lace wigs",
    "Brazilian hair UK",
    "UK hair store",
  ],
  authors: [{ name: "Your Brand Name", url: "https://yourdomain.co.uk" }],
  creator: "Your Brand Name",
  publisher: "Your Brand Name",
  generator: "Next.js + v0.app",
  metadataBase: new URL("https://yourdomain.co.uk"),
  alternates: {
    canonical: "https://yourdomain.co.uk",
  },
  openGraph: {
    title: "Luxury Human Hair Vendor UK | Virgin Hair & Lace Wigs",
    description:
      "Shop premium quality human hair extensions and wigs from the UK's trusted hair supplier. Natural look, soft feel, and long-lasting shine.",
    url: "https://yourdomain.co.uk",
    siteName: "Your Brand Name",
    images: [
      {
        url: "/header.png",
        width: 1200,
        height: 630,
        alt: "Luxury Human Hair Vendor UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Human Hair Vendor UK | 100% Virgin Hair Extensions",
    description:
      "Trusted UK hair vendor offering virgin human hair bundles, wigs, and HD frontals. Fast shipping, amazing quality.",
    images: ["/headerblack.png"],
    creator: "flawlessstrand",
  },
  icons: {
    icon: [
      {
        url: '/headerblack.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/headerblack.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD for Google SEO (Hair Vendor Business Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "flawlessstrand",
              image: "https://yourdomain.co.uk/og-image.jpg",
              "@id": "https://yourdomain.co.uk",
              url: "https://yourdomain.co.uk",
              telephone: "+4407594166687",
              address: {
                "@type": "PostalAddress",
                streetAddress: "78 Brunswick court",
                addressLocality: "Russell",
                postalCode: "SA1 4hx",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 51.5074,
                longitude: -0.1278,
              },
              sameAs: [
                "https://www.instagram.com/_flawless_strands?igsh=YXA0bzEya2lsMGVy&utm_source=qr",
                "https://www.tiktok.com/@_flawless_strands?_r=1&_t=ZN-91JtlUlSFU6",
                "wa.me/447594166687",
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "19:00",
              },
              priceRange: "££",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
