'use client';

import Image from 'next/image';
import { MessageCircle, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { BasketIcon } from '../icons/SvgIcons';

export default function Footer() {
  return (
    <footer className="bg-bg-light">
      <div className="max-w-[1700px] mx-auto px-4 lg:px-16 py-6">

        <div className="my-16 flex justify-center">
          <Image 
            src="/logo/logo.svg" 
            alt="Adarsh Cleaning's logo" 
            width={1700} 
            height={120}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Description */}
          <div className="flex flex-col font-switzer">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-black">● Address</h4>
                <p className="text-black text-sm pl-2">
                  Shop No. 4, JS Tower, Mahavir Nagar, Kandivali West, Mumbai
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-black">● TIMING</h4>
                <p className="text-black text-sm pl-2">
                  Monday - Saturday: 9:30 am - 1:30 pm &<br />
                  4 pm - 9 pm | Sunday 9:30 am - 1:30 pm
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-black">● Contact No.</h4>
                <a href="tel:+919920175985" className="text-black hover:text-primary transition-colors text-sm pl-2">
                  +91-9920175985
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Email Subscription and Links */}
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <p className="text-black text-base mb-4">
                We provide reliable, professional dry cleaning with attention to<br />
                quality and care for every garment.
              </p> 
              <motion.a 
              className="backdrop-blur-xs text-sm px-5 py-3.5 rounded-lg bg-primary text-white cursor-pointer flex items-center gap-2 max-w-fit"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.2 }}
              href="/schedule-pickup"
            >
              <BasketIcon />
              Schedule Pickup
            </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://wa.me/919920175985"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary text-primary rounded-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:info@adarshcleanings.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary text-primary rounded-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://instagram.com/adarshcleanings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary text-primary rounded-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/adarshcleanings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary text-primary rounded-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-3 border-t-2 border-bg-soft flex justify-center md:justify-between items-center flex-wrap gap-4 font-switzer">
          <div className="flex gap-6 text-sm font-semibold items-center">
            <a href="#hero" className="text-black hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-black hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#services" className="text-black hover:text-primary transition-colors">
              Services
            </a>
            <a href="#faq" className="text-black hover:text-primary transition-colors">
              FAQs
            </a>
            <a href="/terms-conditions" className="text-black hover:text-primary transition-colors">
              T&C
            </a>
          </div>
          <p className="text-black text-sm">
            © 2025 Adarsh Cleaners. All Rights Reserved |<br className='flex md:hidden'/><span className=''> Website by <a href="https://engxlab.com" target="_blank" rel="noopener noreferrer" className='font-bold'>Engxlab</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
