"use client";

import { motion } from "framer-motion";
import { fadeIn, slideInLeft } from "@/components/animations/variants";
import { BasketIcon } from "@/components/icons/SvgIcons";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex justify-center flex-col overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay - Bottom to Top (black/80 to transparent) */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-black/0" />

      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-16 z-10 ">
        <div className="max-w-6xl">
          <motion.p
            className="text-white/90 text-base md:text-xl mb-4 font-switzer"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            [ Trusted Garment Care Since 2005 ]
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-8xl text-white mb-6"
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            transition={{ delay: 0.4 }}
          >
            Mumbai&apos;s Trusted Dry Cleaners for Over 20 Years
          </motion.h1>

          <motion.div
            className="flex flex-wrap items-center gap-4 mb-8 font-switzer"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center text-white text-sm md:text-base">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Malad
            </div>
            <div className="flex items-center text-white text-sm md:text-base">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Borivali
            </div>
            <div className="flex items-center text-white text-sm md:text-base">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Mahavir Nagar
            </div>
            <div className="flex items-center text-white text-sm md:text-base">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Shankar Gali
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap font-switzer gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              className="backdrop-blur-xs text-sm px-5 py-3.5 rounded-lg bg-primary text-white cursor-pointer flex items-center gap-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 0.2 }}
              href="/schedule-pickup"
            >
              <BasketIcon />
              Schedule Pickup
            </motion.a>
            <motion.a
              className="backdrop-blur-xs border border-white/50 text-sm px-5 py-3.5 rounded-lg text-white hover:bg-white hover:text-primary"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              href="tel:+919920175985"
            >
              CALL NOW
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        className="absolute max-w-[1800px] px-6 lg:px-16 mx-auto bottom-16 md:bottom-8 left-0 right-0 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-wrap justify-between md:justify-between gap-3">
          {[
            { label: "20+ Years" },
            { label: "Expert Care" },
            { label: "Multiple Locations" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className={`group flex items-center justify-center ${
                index === 2 ? "w-full md:w-auto" : "w-auto"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-white text-base md:text-lg border border-white/50 rounded-xl px-6 py-1.5 md:py-1 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors">
                {stat.label}
              </p>
              <div className="border border-white/50 rounded-xl p-3.5 flex items-center justify-center backdrop-blur-sm group-hover:bg-white transition-colors">
                <span className="w-2.5 h-2.5 bg-white group-hover:bg-black rounded-full transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
