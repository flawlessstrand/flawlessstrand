import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SalePopup } from '@/components/sale-popup'


const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Luxury braiding hair extension uk | 100% braiding Hair Extensions & Wigs",
    template: "%s | Luxury braiding hair extension uk"
  },
  description:
    "Buy premium 100% virgin human hair bundles, lace wigs, and frontals from the UK's trusted hair vendor. Fast shipping across the UK, quality guaranteed.",
  keywords: [
    "Luxury braiding hair extension uk",
    "human hair extensions",
    "lace wigs UK",
    "frontal wigs London",
    "virgin hair bundles",
    "hair supplier UK",
    "HD lace wigs",
    "Brazilian hair UK",
    "UK hair store",
  ],
  authors: [{ name: "Flawless strand", url: "https://www.flawlessstrand.com/" }],
  creator: "Flawless strand",
  publisher: "Flawless strand",
  metadataBase: new URL("https://www.flawlessstrand.com"),
  alternates: {
    canonical: "https://www.flawlessstrand.com",
  },
  openGraph: {
    title: "Luxury braiding hair extension uk | 100% braiding Hair Extensions & Wigs",
    description:
      "Shop premium quality human hair extensions and wigs from the UK's trusted hair supplier. Natural look, soft feel, and long-lasting shine.",
    url: "https://www.flawlessstrand.com",
    siteName: "Flawless strand",
    images: [
      {
        url: "/header.png",
        width: 1200,
        height: 630,
        alt: "Luxury braiding hair extension uk",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury braiding hair extension uk | 100% braiding Hair Extensions",
    description:
      "Trusted UK hair vendor offering braiding hair bundles, wigs, and HD frontals. Fast shipping, amazing quality.",
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
        url: '/headerblack.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/headerblack.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/headerblack.png',
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
              image: "https://www.flawlessstrand.com/header.png",
              "@id": "https://www.flawlessstrand.com",
              url: "",
              telephone: "+447594166687",
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
        <SalePopup />
        <Analytics />
      </body>
    </html>
  )
}
