'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedSection from '@/components/animations/AnimatedSection';
import { staggerContainer } from '@/components/animations/variants';
import { ContactUsIcon, WeCollectIcon, WeCleanIcon, WeDeliverIcon } from '@/components/icons/SvgIcons';

const steps = [
  {
    number: '1',
    title: 'CONTACT US',
    description: 'Call or WhatsApp us to book a pickup or inquiry.',
    Icon: ContactUsIcon,
  },
  {
    number: '2',
    title: 'WE COLLECT',
    description: 'We pick up from your location at your convenience.',
    Icon: WeCollectIcon,
  },
  {
    number: '3',
    title: 'WE CLEAN',
    description: 'Professional cleaning using proven methods.',
    Icon: WeCleanIcon,
  },
  {
    number: '4',
    title: 'WE DELIVER',
    description: 'Clean clothes, delivered on time.',
    Icon: WeDeliverIcon,
  },
];

export default function HowItWorksSection() {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <section id="how-it-works" className="py-16 lg:py-16 bg-bg-light">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-20 border-b-2 border-bg-soft pb-4">
            <h2 className="text-base md:text-lg text-black mb-2">
              HOW IT WORKS
            </h2>
            <p className="text-primary-dark text-4xl md:text-end md:text-4xl lg:text-4xl text-center font-switzer">
              Simple. Honest.<span className="text-primary font-bold "> No confusion.</span>
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          onViewportEnter={() => !hasAnimated && setHasAnimated(true)}
        >
          {/* Single Continuous Progress Line */}
          <div className="hidden lg:block absolute top-9 left-0 right-0 mx-32 h-1 bg-bg-soft z-0">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: '0%' }}
              animate={hasAnimated ? { width: '100%' } : { width: '0%' }}
              transition={{ duration: 2.4, ease: 'linear' }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Step Card */}
              <motion.div
                className="relative text-center items-center flex flex-col px-4"
              >

                {/* Icon */}
                <motion.div 
                  initial={{ backgroundColor: '#ffffff' }}
                  animate={hasAnimated ? {
                    backgroundColor: '#16508D',
                    scale: [1, 1, 1.15, 1],
                  } : {}}
                  transition={{
                    backgroundColor: {
                      delay: index * 0.8,
                      duration: 0.3,
                    },
                    scale: {
                      delay: index * 0.8,
                      duration: 0.4,
                      times: [0, 0.5, 0.7, 1],
                    },
                  }}
                  className="mb-8 mt-1 p-4 rounded-full z-10"
                >
                  <motion.div
                    initial={{ color: '#16508D' }}
                    animate={hasAnimated ? { color: '#ffffff' } : {}}
                    transition={{
                      delay: index * 0.8,
                      duration: 0.3,
                    }}
                  >
                    <step.Icon />
                  </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-3xl mb-3"
                  initial={{ color: '#5A7A8C' }}
                  animate={hasAnimated ? { color: '#16508D' } : {}}
                  transition={{
                    delay: index * 0.8,
                    duration: 0.3,
                  }}
                >
                  STEP {step.number} - {step.title}
                </motion.h3>

                {/* Description */}
                <p className="text-black text-sm leading-relaxed font-switzer">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
