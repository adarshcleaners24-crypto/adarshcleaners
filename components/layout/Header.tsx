"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { BasketIcon } from "@/components/icons/SvgIcons";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "FAQ", href: "#faq" },
  { name: "LOCATIONS", href: "#locations" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling down, hide when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling up - hide header
      } else {
        setIsVisible(true); // Scrolling down - show header
      }

      setLastScrollY(currentScrollY);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    // Check if we're on the home page
    if (pathname !== "/") {
      // If not on home page, navigate to home page with hash
      router.push(`/${href}`);
    } else {
      // If on home page, just scroll to section
      if (href.startsWith("#")) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <motion.header
      className="fixed top-4 left-0 right-0 md:left-6 md:right-6 z-50 font-switzer transition-all duration-300 bg-white border-2 border-[#C1D3E5] rounded-lg p-2.5 max-w-[1250px] md:mx-auto mx-4"
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo/logo.svg"
              alt="Laundry Logo"
              width={200}
              height={50}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="overflow-hidden h-5 relative cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                <motion.div
                  className="flex flex-col"
                  whileHover={{ y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors block h-5 ${
                      activeSection === link.href.substring(1)
                        ? "text-primary"
                        : "text-black hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </a>
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors block h-5 ${
                      activeSection === link.href.substring(1)
                        ? "text-primary"
                        : "text-black hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.div>
              </div>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link href="/schedule-pickup">
              <button className="backdrop-blur-xs text-sm px-5 py-3.5 rounded-lg bg-primary text-white hover:bg-primary/90 hover:text-white flex items-center gap-2">
                <BasketIcon />
                Schedule a Pickup
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4 pt-6 pb-4">
                {navLinks.map((link) => (
                <Link 
                  href={link.href}
                  key={link.name}
                  >
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-black"
                  >
                    {link.name}
                  </button>
                </Link>
                ))}
                <Link href="/schedule-pickup">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="backdrop-blur-xs text-sm px-5 py-2.5 rounded-lg bg-primary text-white hover:bg-primary/60 hover:text-white flex items-center gap-2"
                  >
                    <BasketIcon />
                    Schedule a Pickup
                  </button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
