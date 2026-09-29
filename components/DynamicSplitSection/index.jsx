"use client";
import React from "react";
import Image from "next/image";

export default function DynamicSplitSection({
  imageSrc,
  imageAlt,
  imagePosition = "right", // "left" or "right"
  showGoldBar = false,
  preTitle,
  title,
  detailsTable, // Array of { label, value } for the patient data table
  paragraphs = [],
  quote,
  imageFraming = "object-center", 
}) {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto">
      {/* Changed to flex-col on mobile, grid on desktop */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-24 items-start">
        
        {/* --- MOBILE TITLE (Visible only on mobile, Ordered 1st) --- */}
        <div className="lg:hidden order-1 w-full">
          {showGoldBar && <div className="w-12 h-[3px] bg-[#E3BE50] mb-4" />}
          {preTitle && (
            <span className="text-[#E3BE50] font-serif italic text-lg mb-2 block">
              {preTitle}
            </span>
          )}
          {title && (
            <h2 className="text-3xl font-serif text-[#161240] mb-2 font-bold">
              {title}
            </h2>
          )}
        </div>

        {/* --- IMAGE CONTAINER (Ordered 2nd on mobile) --- */}
        <div className={`relative h-[400px] md:h-[500px] lg:h-full w-full min-h-[400px] order-2 ${imagePosition === "left" ? "lg:order-first" : "lg:order-last"}`}>
          <Image 
            src={imageSrc}
            alt={imageAlt} 
            fill 
            className={`object-cover rounded-md ${imageFraming}`} 
          />
        </div>

        {/* --- TEXT CONTENT (Ordered 3rd on mobile) --- */}
        <div className={`flex flex-col justify-center order-3 ${imagePosition === "left" ? "lg:order-last" : "lg:order-first"}`}>
          
          {/* --- DESKTOP TITLE (Visible only on desktop) --- */}
          <div className="hidden lg:block">
            {showGoldBar && <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />}
            {preTitle && (
              <span className="text-[#E3BE50] font-serif italic text-lg mb-2 block">
                {preTitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-6 font-bold">
                {title}
              </h2>
            )}
          </div>

          {/* Details Table */}
          {detailsTable && detailsTable.length > 0 && (
            <div className="w-full mb-8 border-t border-gray-200 mt-2 lg:mt-0 pt-4 lg:pt-0">
              {detailsTable.map((row, idx) => (
                <div key={idx} className="flex py-4 border-b border-gray-200">
                  <div className="w-1/3 text-gray-500 font-medium text-sm md:text-base pr-4">
                    {row.label}
                  </div>
                  <div className="w-2/3 text-[#161240] text-sm md:text-base">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Paragraphs */}
          {paragraphs.length > 0 && (
            <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
              {paragraphs.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          )}

          {/* Quote */}
          {quote && (
            <div className="mt-8 pl-5 border-l-[3px] border-[#E3BE50]">
              <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">
                "{quote}"
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

