"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { BasketIcon } from "@/components/icons/SvgIcons";

export default function SchedulePickupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    serviceType: "",
    pickupAddress: "",
    optionalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message with form data
    const message =
      `*New Booking Request*%0A%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Mobile:* ${formData.mobileNumber}%0A` +
      `*Email:* ${formData.email || "Not provided"}%0A` +
      `*Service Type:* ${formData.serviceType}%0A` +
      `*Pickup Address:* ${formData.pickupAddress}%0A` +
      `*Special Instructions:* ${formData.optionalNotes || "None"}`;

    // WhatsApp business number
    const whatsappNumber = "919322931992";

    // Redirect to WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main className="pt-32 pb-14 lg:pt-40 bg-bg-light">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 space-y-10">
          {/* Header */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-8xl text-primary mb-2">
              Book a Service
            </h1>
            <p className="text-black text-base md:text-lg font-switzer">
              Quick pickup. Clean clothes. Zero hassle.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4 mb-10 md:mb-4 justify-start md:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="tel:+919322931992"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-primary text-primary rounded-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://wa.me/919322931992"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-primary text-primary rounded-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="mailto:info@adarshcleaners.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-primary text-primary rounded-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.instagram.com/adarsh_cleaners/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-primary text-primary rounded-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61580236088677"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-primary text-primary rounded-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 font-switzer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                FULL NAME
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Mobile Number and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  MOBILE NUMBER
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  EMAIL (OPTIONAL)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  SERVICE TYPE
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select Service</option>
                  <option value="laundry">Regular Laundry Services</option>
                  <option value="dry-cleaning">Dry Cleaning</option>
                  <option value="ironing">Ironing / Pressing Services</option>
                  <option value="stain-removal">
                    Stain Removal & Garment Treatment
                  </option>
                  <option value="premium">Premium & Specialty Services</option>
                  <option value="household">
                    Household & Utility Cleaning
                  </option>
                </select>
              </div>

              <div className="">
                <label className="block text-sm font-semibold text-black mb-2">
                  NOTE:
                </label>
                <p className="bg-gray-300 px-4 py-2 rounded-lg text-black">
                  We&apos;ll confirm your order via call or WhatsApp within 30
                  minutes.
                </p>
              </div>
            </div>

            {/* Pickup Address */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                PICKUP ADDRESS
              </label>
              <textarea
                name="pickupAddress"
                value={formData.pickupAddress}
                onChange={handleChange}
                placeholder="Enter your pickup location"
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              />
            </div>

            {/* Optional Notes */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                OPTIONAL NOTES
              </label>
              <input
                type="text"
                name="optionalNotes"
                value={formData.optionalNotes}
                onChange={handleChange}
                placeholder="Any special instructions? (e.g. silk curtains, urgent cleaning)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full justify-center backdrop-blur-xs text-base px-5 py-3.5 rounded-lg bg-primary text-white hover:bg-primary/90 hover:text-white flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <BasketIcon />
              Book Pickup
            </motion.button>
          </motion.form>
        </div>
      </main>
      <Footer />
    </>
  );
}
