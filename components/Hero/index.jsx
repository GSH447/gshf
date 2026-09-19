"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PageHero({ title, description }) {
  return (
    <section className="bg-primary pt-40 pb-24 px-6 md:px-12 lg:px-24 xl:px-32 w-full ">
      <div className="max-w-[1420px] mx-auto  py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Gold Accent Line */}

          {/* Small Gold Accent Line */}
          <motion.div 
            initial={{ scaleX: 0 }} 
            animate={{ scaleX: 1 }} 
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-12 h-[3px] bg-[#E3BE50] mb-6 origin-left" 
          />
          
          
          {/* Dynamic Title */}
          <h1 
            className="text-white text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.15] tracking-wide mb-6 "
            style={{ fontFamily: "Georgia, serif" }}
          >
            {title}
          </h1>

          {/* Dynamic Description */}
          {description && (
            <p className="text-gray-200 text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed ">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}