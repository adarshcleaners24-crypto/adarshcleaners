import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule Pickup",
  description:
    "Book your laundry pickup with Adarsh Cleaners. Free doorstep pickup and delivery service across Mumbai. Quick, convenient, and reliable dry cleaning service.",
  keywords: [
    "schedule laundry pickup Mumbai",
    "book dry cleaning service",
    "laundry pickup Mumbai",
    "doorstep laundry service",
    "free pickup delivery Mumbai",
  ],
  openGraph: {
    title: "Schedule Pickup - Adarsh Cleaners Mumbai",
    description:
      "Book your free laundry pickup service. Expert dry cleaning with doorstep delivery across Mumbai.",
    url: "https://adarshcleaners.com/schedule-pickup",
  },
  alternates: {
    canonical: "https://adarshcleaners.com/schedule-pickup",
  },
};

export default function SchedulePickupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
