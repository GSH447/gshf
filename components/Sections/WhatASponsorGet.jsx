"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PermanentTeam() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-12 lg:px-24 xl:px-32 mx-auto bg-gray-50/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] lg:h-[600px] w-full order-2 lg:order-2"
        >
          <Image
            src="/assets/images/new/Landing-Page/1/medical-team.jpg"
            // src="/assets/images/medical-team.jpg" // Add your image to this path
            alt="Gracespring Medical Team"
            fill
            className="object-cover object-center"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-1"
        >
          
          {/* Intro Header */}
          <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
          
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium font-serif leading-tight text-[#161240] mb-6">
            What a sponsor gets back
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-10">
            Cardiac surgery is one of few forms of giving where the result is unambiguous: a person who would have deteriorated is repaired, and goes home. That makes it usually straightforward to report on.
          </p>

          <div className="space-y-8">
            {/* Bullet 1 */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-[#161240] font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E3BE50]"></span>
                A defined, mesurable outcome 
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed pl-4">
                One sponsorship, one named patient, one documented operation, one recorded result.
              </p>
            </div>
            {/* Bullet 2 */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-[#161240] font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E3BE50]"></span>
                Full financial traceability
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed pl-4">
                Funds tied to a specific case with documented cost breakdown and case by case reconcillatiion
              </p>
            </div>
            {/* Bullet 3 */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-[#161240] font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E3BE50]"></span>
                Capacity built in Nigeria
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed pl-4">
                Support strengthens a permanent local cardiac service rather than funding a one-off visit.
              </p>
            </div>
            {/* Bullet 4 */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-[#161240] font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E3BE50]"></span>
                Material you can publish
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed pl-4">
                Outcome summaries and - only where the family has consented - photographs and their own words.
              </p>
            </div>

            
            <div className="border-t border-gray-200 pt-6"/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}