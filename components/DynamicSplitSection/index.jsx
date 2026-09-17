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
}) {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Text Content */}
        <div className={`flex flex-col justify-center ${imagePosition === "left" ? "lg:order-last" : "lg:order-first"}`}>
          
          {/* Optional Gold Bar */}
          {showGoldBar && <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />}
          
          {/* Optional Pre-title (e.g., "Gold Star No 1") */}
          {preTitle && (
            <span className="text-[#E3BE50] font-serif italic text-lg mb-2 block">
              {preTitle}
            </span>
          )}

          {/* Title */}
          {title && (
            <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-6 font-bold">
              {title}
            </h2>
          )}

          {/* Optional Details Table (from goldstarStories.jpg) */}
          {detailsTable && detailsTable.length > 0 && (
            <div className="w-full mb-8 border-t border-gray-200 mt-2">
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

          {/* Optional Quote */}
          {quote && (
            <div className="mt-8 pl-5 border-l-[3px] border-[#E3BE50]">
              <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">
                "{quote}"
              </p>
            </div>
          )}
        </div>

        {/* Image Container */}
        <div className={`relative h-[400px] md:h-[500px] lg:h-full w-full min-h-[400px] ${imagePosition === "left" ? "lg:order-first" : "lg:order-last"}`}>
          <Image 
            src={imageSrc}
            alt={imageAlt} 
            fill 
            className="object-cover" 
          />
        </div>

      </div>
    </section>
  );
}