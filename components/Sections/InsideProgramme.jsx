"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InsideProgramme() {
  // Store your images and captions here to keep the code clean
  const programImages = [
    { id: 1, src: "/assets/images/New/inside_program/1.jpg", caption: "Team brief at the bedside immediately after a case." },
    { id: 2, src: "/assets/images/New/inside_program/2_2.jpg", caption: "Open heart surgery under way in theatre." },
    { id: 3, src: "/assets/images/New/inside_program/3.jpg", caption: "The first hours after surgery, in intensive care." },
    { id: 4, src: "/assets/images/New/inside_program/4.jpg", caption: "Breathing excerises begin the next day after surgery." },
    { id: 5, src: "/assets/images/New/inside_program/5.jpg", caption: "Daily review by the cardiac team." },
    { id: 6, src: "/assets/images/New/inside_program/6.jpg", caption: "Recovery on the ward, a few days after" },
  ];

  return (
    <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto">
      
      
      {/* Small Gold Accent Line */}
      <motion.div 
        initial={{ scaleX: 0 }} 
        animate={{ scaleX: 1 }} 
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-12 h-[3px] bg-[#E3BE50] mb-6 origin-left" 
      />
      
      <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-4 font-bold">
        Inside the programme
      </h2>
      
      <div className="mb-12">
        <p className="text-gray-700 max-w-3xl text-justify w-[95%]">
          Theatre, intensive care and recovery at Gracespring Hospitals. Photographs 
        {/* </p>
        <p className="text-gray-700 max-w-3xl"> */}
          published with the written consent of the patients and families concerned.
        </p>
      </div>

      {/* gap-y-12 adds extra vertical space between rows to make room for captions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-12">
        
        {programImages.map((item) => (
          <div key={item.id} className="w-full flex flex-col">
            
            {/* 1. Image Container: ONLY the image goes inside this relative box */}
            <div className="relative h-[300px] w-full mb-4">
              <Image 
                src={item.src} 
                alt={item.caption || "Inside the programme"} 
                fill 
                className={item.id === 5 ? "object-cover object-[50%_25%]" : "object-cover"}
              />
            </div>
            
            {/* 2. Text Container: Sits safely beneath the image */}
            {item.caption && (
              <div>
                <p className="text-[#161240] font-medium text-sm md:text-base">
                  {item.caption}
                </p>
              </div>
            )}
            
          </div>
        ))}

      </div>
    </section>
  );
}
