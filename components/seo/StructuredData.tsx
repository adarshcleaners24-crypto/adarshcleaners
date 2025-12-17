export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://adarshcleaners.com",
    name: "Adarsh Cleaners",
    image: "https://adarshcleaners.com/logo/logo.svg",
    description:
      "Premium laundry and dry cleaning services in Mumbai with over 20 years of experience. Free doorstep pickup and delivery.",
    url: "https://adarshcleaners.com",
    telephone: "+91-9920175985",
    email: "info@adarshdrycleaners.com",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Malad",
        addressRegion: "Mumbai",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Borivali",
        addressRegion: "Mumbai",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Kandivali",
        addressRegion: "Mumbai",
        addressCountry: "IN",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.194055",
      longitude: "72.8427374",
    },
    priceRange: "₹₹",
    openingHoursSpecification: [
      {
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
        closes: "21:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/adarshcleaners",
      "https://www.facebook.com/adarshcleaners",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Mumbai",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Laundry & Dry Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dry Cleaning",
            description:
              "Professional dry cleaning service for delicate fabrics",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Laundry Service",
            description: "Complete wash and fold laundry service",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Steam Iron",
            description: "Professional steam ironing service",
          },
        },
      ],
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Adarsh Cleaners",
    url: "https://adarshcleaners.com",
    logo: "https://adarshcleaners.com/logo/logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9920175985",
      contactType: "Customer Service",
      email: "info@adarshdrycleaners.com",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    sameAs: [
      "https://www.instagram.com/adarshcleaners",
      "https://www.facebook.com/adarshcleaners",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Adarsh Cleaners",
    url: "https://adarshcleaners.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://adarshcleaners.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
