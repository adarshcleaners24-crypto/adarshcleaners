"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { Plus } from "lucide-react";

const faqData = [
  {
    question: "Q1. What services do you offer?",
    answer:
      "We provide laundry, dry cleaning, steam ironing, stain removal, and premium garment care.",
  },
  {
    question: "Q2. How long does delivery take?",
    answer:
      "Most orders are delivered within 24–48 hours. Express service is also available.",
  },
  {
    question: "Q3. Do you remove tough stains?",
    answer:
      "Yes! Our experts treat stains carefully, but results depend on fabric type and how old the stain is.",
  },
  {
    question: "Q4. Is my clothing safe with you?",
    answer:
      "Absolutely. We use fabric-friendly detergents and advanced cleaning processes to protect your garments.",
  },
  {
    question: "Q5. Do you offer pickup and delivery?",
    answer:
      "Yes, we offer free doorstep pickup and delivery across our service area.",
  },
  {
    question: "Q6. How do I place an order?",
    answer:
      "You can book through our website, call us, or WhatsApp us—whatever is easiest for you.",
  },
  {
    question: "Q7. Do you have customer reviews or ratings?",
    answer:
      "Our customers trust us for consistent quality and service. Many of them return regularly and recommend us to others.",
    hasReviews: true,
  },
];

const reviews = [
  {
    name: "Abhishek Guleria",
    rating: 3,
    comment:
      "Results may vary based on age, genetics, and medical condition. All procedures are performed by licensed professionals following clinical protocols.",
  },
  {
    name: "Sonal Kapoor",
    rating: 4,
    comment:
      "Results may vary based on age, genetics, and medical condition. All procedures are performed by licensed professionals following clinical protocols.",
  },
  {
    name: "Ravi Deshmukh",
    rating: 5,
    comment:
      "Results may vary based on age, genetics, and medical condition. All procedures are performed by licensed professionals following clinical protocols.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-16 bg-bg-light">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center border-b-2 border-bg-soft mb-10">
          {/* Header */}
          <AnimatedSection>
            <div className="">
              <p className="text-base md:text-lg text-black mb-2 md:mb-6">
                FAQs
              </p>
            </div>
          </AnimatedSection>

          {/* Right Side - Trust Section */}
          <AnimatedSection>
            <div className="h-full flex flex-col max-w-2xl justify-center font-switzer">
              <h2 className="text-3xl md:text-4xl lg:text-4xl text-center md:text-end mb-2 md:mb-6 ">
                <span className="text-primary">
                  Real answers to <span className="text-primary font-bold "> real questions.</span>
                </span>
                <br />
                <span className="text-primary">No confusion.</span>
              </h2>
            </div>
          </AnimatedSection>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white border-2 border-white hover:border-primary-dark rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between px-4 py-3.5 text-left cursor-pointer transition-colors ${
                  openIndex === index ? "cursor-pointer" : ""
                }`}
              >
                <h3 className="text-base md:text-lg font-bold text-primary pr-4 font-switzer">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex shrink-0"
                >
                  <Plus className="text-primary" size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-4"
                  >
                    <div className="px-0 py-3 border-t-2 border-bg-soft">
                      <p className="text-black text-sm md:text-base font-switzer leading-relaxed">
                        {faq.answer}{" "}
                        {index === 6 && (
                          <a
                            href="https://www.google.com/search?sca_esv=8c1d8b7610d1bcd4&cs=1&output=search&kgmid=/g/11d_7899xv&q=Adarsh+Cleaners+-+Premium+Laundry+%26+Dry+Cleaning+Services+in+Malad+West+%7C+Free+Pick-up+%26+Delivery&shndl=30&shem=damc,lcuae,ptotplc,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=ee5767d34046ca43&utm_source=damc,lcuae,ptotplc,uaasie,shrtsdl,sh/x/loc/uni/m1/1#lrd=0x3be7b6e7aa7da677:0xaa8e939a0de30988,1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-primary hover:underline"
                          >
                            View Google Reviews
                          </a>
                        )}
                      </p>

                      {/* Reviews Section - Only for Question 7 */}
                      {index === 6 && (
                        <div className="mt-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[1, 2, 3].map((item, reviewIndex) => (
                              <motion.div
                                key={reviewIndex}
                                className="bg-bg-light rounded-lg p-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: reviewIndex * 0.1 }}
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <h1 className="text-base font-semibold  text-primary">
                                    {reviews[reviewIndex].name}
                                  </h1>
                                  <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <svg
                                        key={star}
                                        className={`w-4 h-4 ${
                                          star <= reviews[reviewIndex].rating
                                            ? "text-yellow-400 fill-current"
                                            : "text-gray-300 fill-current"
                                        }`}
                                        viewBox="0 0 20 20"
                                      >
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                      </svg>
                                    ))}
                                  </div>
                                </div>
                                <p className="text-xs text-gray-600 font-switzer">
                                  {reviews[reviewIndex].comment}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
