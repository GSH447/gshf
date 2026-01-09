"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { feedback } from "../SiteMaps/data";
import { motion } from "framer-motion";
import Link from "next/link";

const blobShapes = [
  "65% 35% 60% 40% / 60% 65% 35% 40%",
  // "68% 32% 57% 43% / 55% 45% 55% 45%",
];




const PRIMARY_BG = "#ffc000";

const Feedback = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: PRIMARY_BG }}
    >
      {/* 🔼 Top Curve */}
    
      <svg
        viewBox="0 0 1440 90"
        className="absolute top-0 left-0 w-full"
        preserveAspectRatio="none"
      >
        <path
          fill="#FDF2EB"
          d="M0,0 C360,90 1080,90 1440,0 L1440,0 L0,0 Z"
        />
      </svg>




      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto pt-[10vh] lg:pt-[20vh] pb-[12vh]"
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 7500, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          onSlideChange={handleSlideChange}
        >
          {feedback.map((feature, index) => {
            const shape = blobShapes[index % blobShapes.length];

            return (
              <SwiperSlide key={feature.id || index}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className=" rounded-xl w-full mx-auto bg-[#ffc000] p-8 flex flex-col lg:flex-row gap-8 items-center"
                >
                  {/* Left Content */}
                  <div className=" lg:w-1/2 flex flex-col justify-between h-full lg:gap-[9em]">
                   
                    {/* Content */}
                    <div className=" ">
                      <h3 className=" lg:text-[55px] text-[30px] font-bold text-white mb-2 text-left lg:w-[70%]">
                        {feature.title}
                      </h3>
      
                      <p className=" text-xl text-white text-left mb-5 text-justify lg:w-[80%]">
                        {feature.description}
                      </p>
                    </div>
      
                    {/* CTA */}
                    <div className=" text-left">
                      <Link
                        href={feature.url}
                        className="inline-block bg-white hover:bg-primary px-10 py-5 rounded-full text-xl text-primary hover:text-white font-extrabold transition-colors duration-300"
                      >
                        {feature.btnText || "Learn More"}
                      </Link>
                    </div>

                  </div>

                  {/* Right Image Blob */}
                  <div className=" lg:w-1/2 flex flex-col h-full">
                    <div
                      className=" w-[60%] bg-emerald-300 overflow-hidden flex mx-auto"
                      style={{ borderRadius: shape }}
                    >
                      <Image
                        src={feature.image}
                        width={1000}
                        height={1000}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={currentIndex === 0}
          className={`absolute left-5 top-1/2 -translate-y-1/2 z-20 shadow-lg bg-[#BD2529] w-10 h-10 flex items-center justify-center rounded-full transition ${
            currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          ‹
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-20 shadow-lg bg-[#BD2529] w-10 h-10 flex items-center justify-center rounded-full text-white"
        >
          ›
        </button>
      </motion.div>


    </div>
  );
};

export default Feedback;