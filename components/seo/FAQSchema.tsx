export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer comprehensive dry cleaning, laundry services, steam ironing, fabric care for delicate items, stain removal, and alterations. We also provide free doorstep pickup and delivery across Mumbai.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer pickup and delivery services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We provide free doorstep pickup and delivery services across Malad, Borivali, Kandivali, and surrounding areas in Mumbai. Simply schedule your pickup through our website or WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve Malad, Borivali, Kandivali (Mahavir Nagar), and surrounding areas in Mumbai with our premium laundry and dry cleaning services.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to get my clothes cleaned?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard service typically takes 24-48 hours. We also offer same-day service for urgent requirements. Express service is available on request.",
        },
      },
      {
        "@type": "Question",
        name: "What are your operating hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are open Monday to Saturday from 9:00 AM to 9:00 PM. Our pickup and delivery services operate during these hours.",
        },
      },
      {
        "@type": "Question",
        name: "How do I schedule a pickup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can schedule a pickup by calling us at +91-9920175985, messaging us on WhatsApp, or filling out the booking form on our website. Our team will coordinate a convenient time for pickup.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
