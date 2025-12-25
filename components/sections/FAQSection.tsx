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
      "Most orders are delivered based on location and Fabric type.",
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
                            href="https://www.google.com/search?sxsrf=AE3TifM738RjQevmbCJX7NuWqz8vb7mjXQ:1766665929697&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EyctYW1uH5h16l1Qc1XQsAZBXKXdKHRK4uKmscBEqYcNO82fMbGk7XAhsE9fwwx911etpRkaeAe5vm590sE0Gb1ls9OtJc6XeWU5YEujIEEX-SyOzbzG_q5TityuZTTAEHzhMP7nGq4nsYjWVNuTv4D5rBYV6Iyp1ZBD0z1SIzxel7x30fb7_-SPrs6B5ZMSygR-dd44pJMA6NHG48yHVIyKWl2a&q=Adarsh+Cleaners+-+Premium+Laundry+%26+Dry+Cleaning+Services+in+Kandivali+West+%7C+Free+Pick-up+%26+Delivery+Reviews"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-primary hover:underline"
                          >
                            View Google Reviews
                          </a>
                        )}
                      </p>
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
