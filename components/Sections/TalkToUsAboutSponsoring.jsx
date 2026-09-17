"use client";
import React from "react";

export default function TalkToUsAboutSponsoring() {
  return (
    <section className="py-20 lg:py-24 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto bg-gray-50/30">
      
      {/* Intro Header */}
      <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
      <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-6 font-bold">
        Talk to us about sponsoring
      </h2>
      <p className="text-gray-700 max-w-3xl mb-12 text-base md:text-lg leading-relaxed">
        Tell us roughly what you have in mind — a single patient, an annual programme, or 
        something you would like us to design with you. We will come back with a costed 
        proposal and the clinical detail behind it.
      </p>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        {/* Card 1: Sponsorship */}
        <div className="bg-white p-8 lg:p-10 border border-gray-100 shadow-sm flex flex-col h-full">
          <h3 className="text-xl font-serif text-[#161240] font-bold mb-4">
            Sponsorship and partnerships
          </h3>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            For companies, foundations, faith communities and individual sponsors.
          </p>
          
          <div className="mt-auto flex flex-col gap-4 text-sm md:text-base text-primary font-medium">
            <a 
              href="mailto:partnerships@gracespringhealthfoundation.com" 
              className="underline underline-offset-4 decoration-gray-300 hover:text-black transition-colors"
            >
              partnerships@gracespringhealthfoundation.com
            </a>
            <a 
              href="mailto:info@gracespringhealthfoundation.com" 
              className="underline underline-offset-4 decoration-gray-300 hover:text-black transition-colors"
            >
              info@gracespringhealthfoundation.com
            </a>
            <a 
              href="tel:+2347056482776" 
              className="text-gray-700 hover:text-black transition-colors mt-2"
            >
              +234 705 648 2776
            </a>
          </div>
        </div>

        {/* Card 2: Hospitals */}
        <div className="bg-white p-8 lg:p-10 border border-gray-100 shadow-sm flex flex-col h-full">
          <h3 className="text-xl font-serif text-[#161240] font-bold mb-4">
            Gracespring Hospitals
          </h3>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            For clinical enquiries, referrals and general hospital matters.
          </p>
          
          <div className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
            Block 3, Plot 32, Ajayi Apata Estate,<br />
            Sangotedo, Lekki-Epe Expressway, Lagos
          </div>

          <div className="mt-auto flex flex-col gap-4 text-sm md:text-base text-primary font-medium">
            <a 
              href="mailto:care@gracespringhospitals.com" 
              className="underline underline-offset-4 decoration-gray-300 hover:text-black transition-colors"
            >
              care@gracespringhospitals.com
            </a>
            <span className="text-gray-700 mt-2">
              <a 
                href="tel:+2347056482776" 
                className="hover:text-black transition-colors"
              >
                +234 705 648 2776
              </a>{" "}
              (call or WhatsApp)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}