import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adarshcleaners.com"),
  title: {
    default:
      "Adarsh Cleaners - Premium Laundry & Dry Cleaning Services in Mumbai",
    template: "%s | Adarsh Cleaners Mumbai",
  },
  description:
    "Mumbai's trusted laundry & dry cleaning service for over 20 years. Expert fabric care, free doorstep pickup & delivery across Malad, Borivali, Kandivali. Same-day service available.",
  keywords: [
    "dry cleaning Mumbai",
    "laundry service Mumbai",
    "Adarsh Cleaners",
    "dry cleaners Malad",
    "dry cleaners Borivali",
    "dry cleaners Kandivali",
    "laundry pickup delivery Mumbai",
    "premium dry cleaning",
    "same day laundry service",
    "doorstep laundry service",
    "fabric care Mumbai",
    "professional dry cleaning",
  ],
  authors: [{ name: "Adarsh Cleaners" }],
  creator: "Adarsh Cleaners",
  publisher: "Adarsh Cleaners",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://adarshcleaners.com",
    siteName: "Adarsh Cleaners",
    title:
      "Adarsh Cleaners - Premium Laundry & Dry Cleaning Services in Mumbai",
    description:
      "Mumbai's trusted laundry & dry cleaning service for over 20 years. Expert fabric care with free doorstep pickup & delivery across Malad, Borivali, Kandivali.",
    images: [
      {
        url: "/logo/logo.svg",
        width: 1200,
        height: 630,
        alt: "Adarsh Cleaners - Premium Dry Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Cleaners - Premium Laundry & Dry Cleaning Services",
    description:
      "Mumbai's trusted laundry service with free pickup & delivery. Over 20 years of expert fabric care.",
    images: ["/logo/logo.svg"],
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
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: "https://adarshcleaners.com",
  },
  category: "Laundry & Dry Cleaning Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo/logo.svg" />
        <meta name="theme-color" content="#4169E1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="antialiased font-gambarino">{children}</body>
    </html>
  );
}
