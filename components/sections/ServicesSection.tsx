"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { staggerContainer } from "@/components/animations/variants";

const servicesData = [
  {
    number: "1",
    image: "/images/1.png",
    title: "REGULAR LAUNDRY SERVICES",
    points: [
      "Wash & fold for daily wear clothes",
      "Special care for delicate fabrics",
      "Kidswear & baby clothes cleaning",
    ],
  },
  {
    number: "2",
    image: "/images/2.png",
    title: "DRY CLEANING",
    points: [
      "Formal wear (suits, shirts, dresses)",
      "Ethnic wear (sarees, lehengas, kurta sets)",
      "Specialty fabrics like silk, wool, chiffon, and linen",
    ],
  },
  {
    number: "3",
    image: "/images/3.png",
    title: "IRONING / PRESSING SERVICES",
    points: [
      "Steam ironing for shirts, trousers, and sarees",
      "Professional pressing for formal wear",
      "Express ironing for quick turnaround",
    ],
  },
  {
    number: "4",
    image: "/images/4.png",
    title: "STAIN REMOVAL & GARMENT TREATMENT",
    points: [
      "Tough stain removal (coffee, wine, ink, oil)",
      "Odor and deodorization treatment",
      "Fabric-specific treatment for delicate garments",
    ],
  },
  {
    number: "5",
    image: "/images/5.png",
    title: "PREMIUM & SPECIALTY SERVICES",
    points: [
      "Leather and suede cleaning",
      "Velvet, silk, and designer wear care",
      "Bridal wear and party outfit cleaning",
      "Home linen cleaning (bedsheets, curtains, blankets, quilts, pillow covers)",
      "Shoes & footwear cleaning (sneakers, formal shoes, sports shoes)",
      "Soft toy cleaning & sanitization",
    ],
  },
  {
    number: "6",
    image: "/images/6.png",
    title: "HOUSEHOLD & UTILITY CLEANING",
    points: [
      "Carpets, rugs, and mats",
      "Sofa upholstery and cushions",
      "Curtains and drapes",
    ],
  },
  {
    number: "7",
    image: "/images/7.png",
    title: "PICKUP & DELIVERY SERVICES",
    points: [
      "Free doorstep pickup and delivery",
      "Scheduled weekly/monthly subscription options",
      "Express delivery available for urgent needs",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:pt-10 bg-bg-light">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
        <div className="flex sticky top-2 flex-col md:flex-row justify-between items-center md:items-end gap-3 mb-10 border-b-2 border-bg-soft">
          {/* Header */}
          <AnimatedSection>
            <div className="">
              <p className="text-base md:text-lg text-black mb-0 md:mb-6 text-center">
                OUR SERVICES
              </p>
            </div>
          </AnimatedSection>
          {/* Right Side - Trust Section */}
          <AnimatedSection>
            <div className="h-full flex flex-col max-w-md justify-center font-switzer">
              <h2 className="text-4xl text-center md:text-end md:text-4xl lg:text-4xl mb-2 leading-snug">
                <span className="text-primary-dark">
                  We don’t offer “packages” and nonsense names.
                </span>
                <br />
                <span className="text-primary font-bold">
                  We offer results.
                </span>
              </h2>
            </div>
          </AnimatedSection>
        </div>

        {/* Service Card */}
        <motion.div
          className="grid grid-cols-1 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="sticky top-72 md:top-48 rounded-3xl overflow-hidden bg-gray-300 h-[450px] md:h-[500px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("${service.image}")`,
                }}
              />

              {/* Content */}
              <div className="h-full z-10 absolute w-full p-4 md:p-6">
                <p className="text-white text-end text-7xl">{service.number}</p>
                <motion.div
                  className="inline-block bg-white rounded-2xl p-5 md:p-6 shadow-xl bottom-4 md:bottom-6 mr-4 absolute max-w-xl"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-black text-sm md:text-base font-switzer flex items-start"
                      >
                        <span className="mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
