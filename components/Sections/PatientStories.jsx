"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PatientStories() {
  return (
    <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />

          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium font-serif leading-tight text-[#161240] mb-8">
            Our first three patients came through surgery and went home.
          </h2>

          <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">

            <div>

            <p>
              Gracespring Hospitals has commenced an open heart surgery
            </p>
            
            <p>
              service. Our cardiac team has completed its first three congenital
            </p>
            
            <p>
              heart repairs. All three patients recovered well and have returned 
            </p>
            
            <p>
              home to their families.
            </p>

            </div>

            
            <div>
              
            <p>
              Every one of those operations was paid for in full by charitable
            </p>
            
            <p>
               sponsors introduced through the Foundation. Nothing was asked
            </p>
            
            <p>
              of the families — not for the diagnostics, not for the surgery, not
            </p>
            
            <p>
              for intensive care, and not for the follow-up that continues after discharge.
            </p>
            
            <p>
             discharge.
            </p>
            </div>

          </div>

          <div>
            <Link 
              href="/gold-star-stories"
              className="bg-primary text-white font-bold py-4 px-8 whitespace-nowrap hover:bg-[#E3BE50] hover:text-black transition-colors"
            >
              Read their stories
            </Link>
          </div>

        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] lg:h-[500px] w-full"
        >
          <Image
            src="/assets/images/New/Landing-Page/1/first-three-patients.jpg"
            // src="/assets/images/patients.jpg" // Add your image to this path
            alt="Patient recovering after surgery"
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}