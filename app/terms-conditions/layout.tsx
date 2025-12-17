import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read Adarsh Cleaners terms and conditions for laundry and dry cleaning services. Learn about our service policies, liability, claims process, and customer guidelines.",
  keywords: [
    "dry cleaning terms",
    "laundry service policy",
    "Adarsh Cleaners terms",
    "dry cleaning liability",
    "service conditions Mumbai",
  ],
  openGraph: {
    title: "Terms & Conditions - Adarsh Cleaners",
    description:
      "Terms and conditions for Adarsh Cleaners laundry and dry cleaning services in Mumbai.",
    url: "https://adarshcleaners.com/terms-conditions",
  },
  alternates: {
    canonical: "https://adarshcleaners.com/terms-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
