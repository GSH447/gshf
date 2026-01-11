"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import Link from "next/link";

const blobShapes = [
  "65% 80% 50% 100% / 50% 50% 50% 4%",
  // "68% 32% 57% 43% / 55% 45% 55% 45%",
];




const PRIMARY_BG = "#4a4a63";

const Aboutus = () => {


  return (
    <div
      className="border-2 border-[red] relative w-full overflow-hidden  my-[2.9rem] lg:py-[3.15rem] mx-auto flex flex-col gap-6 lg:gap-10 items-center"
      style={{ backgroundColor: PRIMARY_BG }}
    >



      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="border-2 border-[red] relative z-10 mx-auto pt-[10vh] lg:pt-[11rem] lg:pb-[5rem]"
      >
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-2 border-[red] rounded-xl w-full mx-auto flex flex-col lg:flex-row gap-8 items-center px-2 lg:px-10"
        >
          {/* Left Content */}
          <div className="border-2 border-[red] lg:w-1/2 flex flex-col justify-between h-full lg:gap-[1.2rem]">
            
            {/* Content */}

              <div >

                <h3 className="text-[1.7rem] lg:text-[2.5rem] font-bold text-white mb-2 text-left w-[90%] lg:w-full">
                  We’re The Gracespring Health Foundation
                </h3>
              </div>

              <div>

                <p className="text-md lg:text-xl text-white text-left mb-5 lg:w-[80%]">
                  We raise money for The Gracespring Hospitals, to save the lives of people affected by cardiac conditions, everywhere.
                </p>
              </div>


           

            {/* CTA */}
            <div className=" text-left">
              <a
                href="/what-we-do"
                className="inline-block bg-white hover:bg-primary px-5 lg:px-7 py-2 lg:py-3 rounded-full text-md text-primary hover:text-white font-extrabold transition-colors duration-300"
              >
                What we do
              </a>
            </div>

          </div>

          {/* Right Image Blob */}
          <div className="border-2 border-[red] lg:w-1/2 
          flex flex-col justify-between">
            
            {/* Content */}
            <div>

              <div
                className="border-[0.2rem] border-primary lg:px-3 py-2 w-full overflow-hidden flex mx-auto"
                style={{ borderRadius: blobShapes }}
              >
                <Image
                  src="/assets/images/donation/001.svg"
                  width={1000}
                  height={1000}
                  alt="about-us-at-gracespring-health-foundation"
                  className="w-full h-[10rem] lg:h-[33rem] object-cover object-top"
                  style={{ borderRadius: blobShapes, objectPosition: "50% 20%" }}
                />
              </div>

            </div>

          </div>

        </motion.div>

      </motion.div>


    </div>
  );
};

export default Aboutus;