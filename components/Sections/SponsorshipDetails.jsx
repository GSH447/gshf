"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SponsorshipDetails() {
  return (
    <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-5 max-w-3xl"
      >
        <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
        <h2 className="text-3xl md:text-4xl lg:text-[35px] font-bold font-serif text-[#161240] mb-6">
          What a sponsorship pays for
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Sponsorship covers a patient's whole journey, not a single procedure. Each case 
        </p>
        
        <p className="text-gray-700 text-base leading-relaxed">
          carries a documented cost breakdown, and funds are reconciled case by case.
        </p>
      </motion.div>




  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { id: "1", title: "Assessment", text: "Echocardiography, imaging, laboratory investigations and specialist cardiac review." },
          { id: "2", title: "Surgery", text: "Open heart surgery, theatre and anaesthetic care, cardiac consumables and blood support." },
          { id: "3", title: "Intensive care", text: "ICU management, ward recovery, medication and repeat investigations until discharge." },
          { id: "4", title: "Recovery at home", text: "Six to twelve months of follow-up with the same team, and support for the family throughout." }
        ].map((item) => (
          <div key={item.id} className="pt-6">
            
            <div key={item.id} className="border-2 border-[#E3BE50] w-5 "/>
            <span className="text-[#E3BE50] font-serif text-xl block mb-2">{item.id}</span>
            <h3 className="text-[#161240] font-bold font-serif text-lg mb-3">{item.title}</h3>
            <div className=" w-[80%]">
            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>

          </div>
        ))}
      </div>



    </section>
  );
}