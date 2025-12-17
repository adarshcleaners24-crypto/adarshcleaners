"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { staggerContainer } from "@/components/animations/variants";
import { LocationIcon } from "@/components/icons/SvgIcons";

interface Location {
  name: string;
  image: string;
  location?: string;
  address?: string;
}

const locations: Location[] = [
  {
    name: "MALAD",
    image: "/images/malad.jpg",
    location:
      "https://www.google.com/maps/place/Adarsh+Cleaners+-+Premium+Laundry+%26+Dry+Cleaning+Services+in+Malad+West+%7C+Free+Pick-up+%26+Delivery/@19.1940543,72.5378752,11z/data=!4m10!1m2!2m1!1sadarsh+cleaners!3m6!1s0x3be7b6e7aa7da677:0xaa8e939a0de30988!8m2!3d19.194055!4d72.8427374!15sCg9hZGFyc2ggY2xlYW5lcnNaESIPYWRhcnNoIGNsZWFuZXJzkgEPbGF1bmRyeV9zZXJ2aWNlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJrZUhJeVdUVjNSUkFC4AEA-gEECB8QIA!16s%2Fg%2F11d_7899xv?entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D",
    address:
      "Shop No 4, Adarsh Niwas Complex, Opp Camel School Off Marve Road, Malad (W)",
  },
  {
    name: "BORIVALI",
    image: "/images/borivali.jpg",
    location:
      "https://www.google.com/maps/place/Adarsh+Cleaners+-+Premium+Laundry+%26+Dry+Cleaning+Services+in+Borivali+West+%7C+Free+Pick-up+%26+Delivery/@19.1940543,72.5378752,11z/data=!4m10!1m2!2m1!1sadarsh+cleaners!3m6!1s0x3be7b0d5e20f8203:0x27edc39bf4250f!8m2!3d19.2263443!4d72.852627!15sCg9hZGFyc2ggY2xlYW5lcnOSAQtkcnlfY2xlYW5lcuABAA!16s%2Fg%2F11bw46wbx6?entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D",
    address: "Shop No 1, Jai Vaibhav Bldg, Jambli Galli, Borivali (W)",
  },
  {
    name: "KANDIVALI",
    image: "/images/kandivali.webp",
    location:
      "https://www.google.com/maps/place/Adarsh+Cleaners+-+Premium+Laundry+%26+Dry+Cleaning+Services+in+Kandivali+West+%7C+Free+Pick-up+%26+Delivery/@19.1940543,72.5378752,11z/data=!4m10!1m2!2m1!1sadarsh+cleaners!3m6!1s0x3be7b6d1c1555511:0x1f9b3d5a68d27948!8m2!3d19.2103076!4d72.8398565!15sCg9hZGFyc2ggY2xlYW5lcnNaESIPYWRhcnNoIGNsZWFuZXJzkgELZHJ5X2NsZWFuZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTnlPSEJEYlZkM0VBReABAPoBBAgAED8!16s%2Fg%2F11c1s_14s3?entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D",
    address: "Shop No 42, Pannsheel Garden, Opp HDFC Bank, Kandivali (W)",
  },
 {
  name: "SHIMPOLI",
    image: "/images/shimpoli.webp",
    location:
      "https://www.google.com/maps/place/Aadhrsh+cleaners/@19.2296846,72.8299805,14z/data=!4m6!3m5!1s0x3be7b1000b826abd:0x110d50ac9a2fea39!8m2!3d19.2221056!4d72.8474209!16s%2Fg%2F11ltf_rd_h?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
    address:
      "Shop no 4 Om Sadachar CHS. Kasturi park, Shimpoli, Borivali west opp bank of baroda",
  },
  {
    name: "KANDIVALI",
    image: "/images/mahavir.jpg",
    location:
      "https://www.google.com/maps/place/Adarsh+Cleaners+-+Premium+Laundry+%26+Dry+Cleaning+Services+in+Kandivali+West+%7C+Free+Pick-up+%26+Delivery/@19.2103076,72.8372816,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b6d1c1555511:0x1f9b3d5a68d27948!8m2!3d19.2103076!4d72.8398565!16s%2Fg%2F11c1s_14s3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
    address: "Shop No 7, Nirmal Apt, Shankar Lane, Kandivali (W)",
  },
];

export default function LocationsSection() {
  return (
    <section
      id="locations"
      className=" bg-bg-light py-16 lg:py-16 relative overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto  px-6 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-bg-soft">
          {/* Header */}
          <AnimatedSection>
            <div className="">
              <p className="text-base md:text-xl text-black mb-4 md:mb-0">
                Location We Serve
              </p>
            </div>
          </AnimatedSection>

          {/* Right Side - Trust Section */}
          <AnimatedSection>
            <div className="h-full flex flex-col max-w-xl justify-center font-switzer text-end">
              <h2 className="text-4xl md:text-4xl lg:text-4xl text-center md:text-end mb-2">
                <span className="text-primary-dark">We provide </span>
                <span className="text-primary font-bold ">
                  {" "}
                  doorstep pickup
                </span>
                <br className="hidden md:flex" />
                <span className="text-primary-dark"> and</span>
                <span className="text-primary font-bold ">
                  {" "}
                  delivery across
                </span>
              </h2>
            </div>
          </AnimatedSection>
        </div>

        {/* Locations Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-10 lg:mt-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className={`relative group rounded-2xl overflow-hidden hover:border-2 hover:border-primary shadow-xl h-72 cursor-pointer ${
                index % 2 === 0 ? "lg:mt-12" : "lg:mt-48"
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                if (location.location) {
                  window.open(location.location, "_blank");
                }
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${location.image})`,
                }}
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Location Name - Visible by default */}
              <div className="flex w-full h-full justify-center items-center">
                <div className="flex space-x-3 h-14 border border-white group-hover:bg-primary backdrop-blur-xs rounded-xl px-3 py-3 shadow-lg items-center bg-white/30 transition-all duration-300 group-hover:opacity-0">
                  <LocationIcon className="text-white" />
                  <span className="text-white text-lg">{location.name}</span>
                </div>
              </div>

              {/* Address - Visible on hover */}
              {location.address && (
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl text-center">
                    <LocationIcon className="text-primary mx-auto mb-2" />
                    <h3 className="text-primary font-bold text-lg mb-2">
                      {location.name}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed font-switzer">
                      {location.address}
                    </p>
                    {location.location && (
                      <p className="text-primary text-xs mt-2 font-medium font-switzer">
                        Click to view on map →
                      </p>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
