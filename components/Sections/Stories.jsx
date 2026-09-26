"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Stories() {
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

          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold font-serif leading-tight text-[#161240] mb-8">
            Stories are shared only on the family's terms
          </h2>

          <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">

            <div>

            <p>
              After surgery, every family is invited - never required - to write a
            </p>
            
            <p>
              a short message to the sponsor who funded their care. Some write
            </p>
            
            <p>
              a paragraph. Some write two words. A child might draw something
            </p>
            
            <p>
              instead. All of it is welcome, and none of it is edited into
            </p>
            
            <p>
              something it was not.
            </p>

            </div>

            
            <div>
              
            <p>
              Families choose whether their name and photograph appear at all.
            </p>
            
            <p>
              Where consents is not given for identifying details, the Foundation
            </p>
            
            <p>
              reports impact without them, and the story is told anonymously or 
            </p>
            
            <p>
              not at all.
            </p>
            </div>

          </div>

          <div>
            <Link 
              href="/gold-star-initiative"
              className="bg-primary text-white font-bold py-4 px-8 whitespace-nowrap hover:bg-[#E3BE50] hover:text-black transition-colors"
            >
              How the programme is governed
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
            src="/assets/images/new/Gold_Star_Stories/1/stories.jpeg"
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