import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import LocationsSection from "@/components/sections/LocationsSection";
import FAQSection from "@/components/sections/FAQSection";
import StructuredData from "@/components/seo/StructuredData";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Adarsh Cleaners - Mumbai's premier laundry and dry cleaning service. Free doorstep pickup and delivery across Malad, Borivali, Kandivali & more. 20+ years of expert fabric care.",
  openGraph: {
    title: "Adarsh Cleaners - Premium Laundry & Dry Cleaning in Mumbai",
    description:
      "Mumbai's premier laundry service with free doorstep pickup and delivery. Expert fabric care for over 20 years.",
    url: "https://adarshcleaners.com",
  },
  alternates: {
    canonical: "https://adarshcleaners.com",
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <FAQSchema />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <HowItWorksSection />
        <FAQSection />
        <LocationsSection />
      </main>
      <Footer />
    </>
  );
}
