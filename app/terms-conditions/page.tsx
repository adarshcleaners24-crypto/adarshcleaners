"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsConditionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg-light pt-32 pb-14 lg:pt-40">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16">
          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-8xl text-primary mb-4">
              Terms & Conditions
            </h1>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8 font-switzer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-4">
                1. Acceptance of Services
              </h2>
              <p className="text-black leading-relaxed mb-3">
                By using Adarsh Dry Cleaners services, you agree to these terms
                and conditions. We reserve the right to refuse service to anyone
                for any reason at any time.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-4">
                2. Service Scope
              </h2>
              <p className="text-black leading-relaxed mb-3">
                Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-black ml-4">
                <li>Regular laundry and dry cleaning</li>
                <li>Steam ironing and pressing</li>
                <li>Stain removal and garment treatment</li>
                <li>Premium and specialty fabric care</li>
                <li>Household item cleaning (curtains, carpets, etc.)</li>
                <li>Free pickup and delivery services</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-4">
                3. Customer Responsibilities
              </h2>
              <ul className="list-disc list-inside space-y-2 text-black ml-4">
                <li>Check all pockets before handing over garments</li>
                <li>
                  Inform us of any stains, damages, or special care requirements
                </li>
                <li>Remove non-washable trims, belts, or accessories</li>
                <li>Declare valuable items or delicate fabrics upfront</li>
                <li>Collect items within 30 days of completion</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-4">
                4. Pricing and Payment
              </h2>
              <p className="text-black leading-relaxed mb-3">
                Prices are subject to change based on garment type, fabric, and
                service required. Final pricing will be confirmed before
                processing. Payment is due upon delivery unless otherwise
                agreed. We accept cash, UPI, and digital payment methods.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-4">
                5. Delivery Timeline
              </h2>
              <p className="text-black leading-relaxed mb-3">
                Standard delivery time is 24-48 hours. Curtains, heavy items,
                and specialty services may take longer. Express service is
                available for urgent orders. Delays due to unforeseen
                circumstances (weather, festivals, etc.) are beyond our control.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-black leading-relaxed mb-3">
                While we take utmost care in handling your garments, we are not
                responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-black ml-4">
                <li>Items left in pockets</li>
                <li>Damage to garments with undisclosed existing damage</li>
                <li>Color bleeding or fading in old or poor-quality fabrics</li>
                <li>Shrinkage in fabrics not suited for the cleaning method</li>
                <li>
                  Buttons, beads, or embellishments that are loose or poorly
                  attached
                </li>
                <li>
                  Permanent stains that cannot be removed despite our best
                  efforts
                </li>
              </ul>
              <p className="text-black leading-relaxed mt-3">
                Maximum liability is limited to 10x the cleaning charge or the
                declared value of the item, whichever is lower.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-4">
                7. Claim Policy
              </h2>
              <p className="text-black leading-relaxed mb-3">
                Any claims for loss or damage must be reported within 24 hours
                of delivery. Claims will not be entertained after garments have
                been worn or washed. We reserve the right to inspect the item
                before processing any claim.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-4">
                8. Unclaimed Items
              </h2>
              <p className="text-black leading-relaxed mb-3">
                Items not collected within 30 days will incur storage charges.
                Items unclaimed for 90 days will be donated or disposed of
                without further notice. We are not responsible for any loss or
                damage to items left beyond this period.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-4">
                9. Privacy and Data Protection
              </h2>
              <p className="text-black leading-relaxed mb-3">
                We collect personal information (name, phone number, address)
                solely for service delivery purposes. Your data will not be
                shared with third parties without your consent. We maintain
                strict confidentiality of customer information.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-4">
                10. Force Majeure
              </h2>
              <p className="text-black leading-relaxed mb-3">
                We shall not be liable for any failure or delay in performance
                due to circumstances beyond our reasonable control, including
                but not limited to natural disasters, strikes, power failures,
                or government restrictions.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-4">
                11. Modifications to Terms
              </h2>
              <p className="text-black leading-relaxed mb-3">
                We reserve the right to modify these terms and conditions at any
                time. Continued use of our services after changes constitutes
                acceptance of the updated terms.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-4">
                12. Governing Law
              </h2>
              <p className="text-black leading-relaxed mb-3">
                These terms and conditions are governed by the laws of India.
                Any disputes shall be subject to the exclusive jurisdiction of
                the courts in Mumbai, Maharashtra.
              </p>
            </section>

            {/* Contact Section */}
            <section className="pt-6 border-t-2 border-bg-soft">
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-4">
                Contact Us
              </h2>
              <p className="text-black leading-relaxed mb-2">
                For any questions regarding these terms and conditions, please
                contact us:
              </p>
              <ul className="space-y-2 text-black">
                <li>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+919322931992"
                    className="text-primary hover:underline"
                  >
                    +91 93229 31992
                  </a>
                </li>
                <li>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/919322931992"
                    className="text-primary hover:underline"
                  >
                    +91 93229 31992
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@adarshdrycleaners.com"
                    className="text-primary hover:underline"
                  >
                    info@adarshdrycleaners.com
                  </a>
                </li>
              </ul>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
