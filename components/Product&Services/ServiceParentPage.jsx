"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

// Import styles safely
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { parentServicesData } from "@/SiteMaps/servicesData";

// Fluid medical blob shapes matching your styling rules
const blobShapes = [
  "60% 40% 55% 45% / 55% 60% 40% 45%",
  "65% 35% 60% 40% / 60% 65% 35% 40%",
  "70% 30% 50% 50% / 40% 60% 40% 60%",
  "55% 45% 65% 35% / 50% 55% 45% 50%",
  "62% 38% 58% 42% / 48% 62% 38% 52%",
  "68% 32% 57% 43% / 55% 45% 55% 45%"
];

// interface ServiceParentPageProps {
//   departmentKey: "surgical-services" | "internal-medicine" | "women-and-child-health" | "specialty-units";
// }

export default function ServiceParentPage({ departmentKey }) {
  const data = parentServicesData[departmentKey];
  const swiperRef = useRef<any>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data) {
    return <div className="p-20 text-center font-bold">Department Configuration Not Found.</div>;
  }

  // Calculate sliding limitations chunked into 3 units per slide row
  const totalSlides = Math.ceil(data.subMenu.length / 3);
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === totalSlides - 1;

  // Group items into rows of 3 to fulfill both criteria:
  // 1. Being an elegant slideshow carousel
  // 2. Displaying at least three items in a row concurrently
  const chunkedSubMenu = [];
  for (let i = 0; i < data.subMenu.length; i += 3) {
    chunkedSubMenu.push(data.subMenu.slice(i, i + 3));
  }

  return (
    <div className="w-full bg-[#FDF2EB]/30 min-h-screen">
      
      {/* 1. DYNAMIC CORPORATE HERO SECTION */}
      <section className="relative w-full h-[70vh] min-h-[550px] flex items-center justify-center bg-[#1e1b4b] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={data.bgImage}
            alt={data.title}
            fill
            priority
            className="object-cover object-center opacity-35 transition-transform duration-700 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111029] via-[#1e1b4b]/85 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full text-left">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-emerald-400 font-semibold tracking-widest text-xs uppercase mb-4 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20"
            >
              {data.badge}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
            >
              {data.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-light"
            >
              {data.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#sub-explore-wings" className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg text-sm">
                Explore Sub-Specialties
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tri-Color Bottom Border Segment */}
      <div className="flex w-full h-[10px]">
        <div className="bg-[#5CB338] w-full" />
        <div className="bg-[#6F92E7] w-full" />
        <div className="bg-[#4a912d] w-full" />
      </div>

      {/* 2. THREE-IN-A-ROW MULTI-COLUMN CAROUSEL SLIDESHOW */}
      <section id="sub-explore-wings" className="py-16 container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 w-full">
          <div>
            <h2 className="text-3xl font-extrabold text-[#1e1b4b] tracking-tight">
              Clinical Sub-Departments
            </h2>
            <p className="text-gray-500 mt-1 text-sm">
              Swipe or use controls to browse through our comprehensive medical portfolios.
            </p>
          </div>

          {/* Navigation Controllers */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isFirstSlide}
              className={`shadow-md border border-gray-200 bg-white w-11 h-11 p-2 flex items-center justify-center rounded-full transition-all active:scale-95 ${
                isFirstSlide ? "opacity-30 cursor-not-allowed" : "hover:border-[#2A157c] hover:bg-gray-5"
              }`}
            >
              <Image src="/assets/icons/back.png" width={20} height={20} alt="Back Arrow Icon" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isLastSlide}
              className={`shadow-md border border-gray-200 bg-white w-11 h-11 p-2 flex items-center justify-center rounded-full transition-all active:scale-95 ${
                isLastSlide ? "opacity-30 cursor-not-allowed" : "hover:border-[#2A157c] hover:bg-gray-5"
              }`}
            >
              <Image src="/assets/icons/next.png" width={20} height={20} alt="Next Arrow Icon" />
            </button>
          </div>
        </div>

        {/* The Slideshow Core Row Engine */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 8000, disableOnInteraction: true }}
          modules={[Navigation, Autoplay, Pagination]}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          pagination={{
            clickable: true,
            el: paginationRef.current,
          }}
        >
          {chunkedSubMenu.map((slideChunk, slideIndex) => (
            <SwiperSlide key={slideIndex} className="pb-12">
              {/* Beautiful 3 Column Display Matrix Per Slide */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {slideChunk.map((item, index) => {
                  // Resolve randomized organic shapes
                  const shape = blobShapes[(slideIndex * 3 + index) % blobShapes.length];

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="w-full p-6 rounded-2xl flex flex-col justify-between shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                      style={{ backgroundColor: item.bg }}
                    >
                      {/* Image Frame Container */}
                      <div className="flex justify-center mb-6">
                        <div
                          className="w-64 h-56 overflow-hidden flex items-center justify-center bg-gray-100 transition-transform duration-300 hover:scale-102 shadow-inner"
                          style={{ borderRadius: shape }}
                        >
                          <Image
                            src={item.image}
                            width={400}
                            height={400}
                            alt={item.title}
                            className="w-2/3 h-2/3 object-contain"
                          />
                        </div>
                      </div>

                      {/* Content Module */}
                      <div className="text-left flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-extrabold text-[#1e1b4b] mb-2 line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-3 mb-6 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Interactive Call-To-Action Element */}
                        <div className="text-left mt-auto">
                          <Link
                            href={item.url}
                            className="inline-flex items-center gap-2 bg-white hover:bg-[#FFC000] border border-gray-200 px-6 py-2.5 rounded-full text-xs text-black font-black uppercase tracking-wider transition-all duration-200 active:translate-y-0.5 shadow-sm"
                          >
                            Learn More <span className="text-sm">→</span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Continuous Navigation Dot Track */}
        <div className="flex justify-center mt-4">
          <div ref={paginationRef} className="swiper-pagination !static flex gap-1.5" />
        </div>
      </section>
    </div>
  );
}