'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/animations/AnimatedSection';
import { staggerContainer } from '@/components/animations/variants';
import { ExpertFabricHandlingIcon, ReliablePickupDeliveryIcon, LocalServiceIcon, MoneyBagIcon } from '@/components/icons/SvgIcons';

const whyChooseData = [
  {
    Icon: ExpertFabricHandlingIcon,
    title: 'WE TREAT CLOTHES LIKE THEY\'RE OURS',
    description: 'No careless handling. No crushed jobs. Your clothes get real attention.',
  },
  {
    Icon: LocalServiceIcon,
    title: 'QUALITY YOU CAN COUNT ON',
    description: 'Same owner, same finish, every single time.',
  },
  {
    Icon: ReliablePickupDeliveryIcon,
    title: 'PICKUP & DELIVERY = ZERO STRESS',
    description: 'We come to you. No waiting. No chasing.',
  },
  {
    Icon: MoneyBagIcon,
    title: 'EASY ON YOUR POCKET',
    description: 'Premium care without crazy prices. Clean clothes shouldn\'t be a luxury.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-16 bg-bg-light">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-16 space-y-10">
        <div className='flex flex-col md:flex-row justify-between items-center gap-3 border-b-2 border-bg-soft'>
          {/* Header */}
          <AnimatedSection>
            <div className="">
              <p className="text-base md:text-lg text-black">
                WHY CHOOSE ADARSH DRY CLEANERS
              </p>
            </div>
          </AnimatedSection>

          {/* Right Side - Trust Section */}
          <AnimatedSection>
            <div className="h-full flex flex-col max-w-xl justify-center font-switzer">
              <h2 className="text-4xl text-center mb-2">
                <span className="text-primary font-bold">20+ Years</span>
                <span className="text-primary-dark "> of Consistent Trust</span>
              </h2>
            </div>
          </AnimatedSection>
        </div>

        {/* Left Side - Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {whyChooseData.map((item, index) => (
            <motion.div
              key={index}
              className={`group bg-white hover:bg-primary text-primary hover:text-white max-h-fit rounded-lg py-4 px-6 w-full lg:px-8 lg:py-4 transition duration-200 ${
                index % 2 === 0 ? 'lg:mt-8' : 'lg:mt-48'
              }`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start flex-col gap-6">
                <item.Icon className="text-primary group-hover:text-white transition-colors" />
                <div>
                  <h3 className="text-xl md:text-2xl font-normal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-black group-hover:text-white text-sm leading-relaxed font-switzer transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-14">
          <p className="text-black text-base md:text-lg font-normal text-center font-switzer">
            ● Thousands of garments cleaned. Zero shortcuts taken.
          </p>
        </div>
      </div>
    </section>
  );
}
