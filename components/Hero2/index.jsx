"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero2 = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between pt-24 "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <motion.div className="absolute inset-0 z-0 ">
        <Image
          // src="/assets/images/New/hero/1/2.png"
          src="/assets/images/New/hero/1/3.jpg"
          // src="/assets/images/hero/care-03.png" // Replace with actual surgery image path
          alt="Surgery background"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* ================= OVERLAY (Dark Blue/Purple Tint) ================= */}
      <div className="absolute inset-0 bg-[#161240]/85 md:bg-[#161240]/70 mix-blend-multiply z-0 " />
      <div className="absolute inset-0 bg-gradient-to-r from-[#161240]/95 via-[#161240]/70 to-transparent z-0 " />

       {/* ================= CONTENT (Top part) ================= */}
       <div className="relative z-10 text-white px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl w-full flex-grow flex flex-col justify-center  pt-[10rem] py-[12rem]">
         <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 max-w-2xl"
        >
          {/* Small Gold Accent Line */}
          <motion.div 
            initial={{ scaleX: 0 }} 
            animate={{ scaleX: 1 }} 
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-12 h-[3px] bg-[#E3BE50] mb-6 origin-left" 
          />

          {/* Main Heading (Serif Font) */}

          <div className=" lg:space-y-3">
      
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-2xl md:text-5xl lg:text-[52px] font-medium leading-[1.5]"
              style={{ fontFamily: "Georgia, serif" }} 
            >
              Open heart surgery,<br/>
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-2xl md:text-5xl lg:text-[52px] font-medium leading-[1.5]"
              style={{ fontFamily: "Georgia, serif" }} 
            >
              performed in Nigeria,<br/>
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-2xl md:text-5xl lg:text-[52px] font-medium leading-[1.5]"
              style={{ fontFamily: "Georgia, serif" }} 
            >
              for people who could<br/>
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-2xl md:text-5xl lg:text-[52px] font-medium leading-[1.5]"
              style={{ fontFamily: "Georgia, serif" }} 
            >
              never have paid for it.
            </motion.h1>

          </div>

          {/* Subtext Paragraph */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-sm md:text-base lg:text-[17px] text-gray-200 mt-6 max-w-[620px] leading-relaxed"
          >
            <div className="hidden lg:grid ">


              <p className="text-justify">
                The Gold Star Cardiac Surgery Initiative funds open heart surgery for 
              </p>
              
              <p>
                Nigerians — children born with heart defects and adults with acquired 
              </p>
              
              <p>
                heart disease — whose families cannot meet the cost of care. Surgery 
              </p>
              
              <p>
                takes place at Gracespring Hospitals in Lagos, performed by a permanent,
              </p>

              <p>
              locally based cardiac team.
              </p>



            </div>



            <div className="lg:hidden grid">

              {/* 
              <p className="border-2 border-[red] w-[90%] word-wrap">
                The Gold Star Cardiac Surgery Initiative funds open heart surgery for 
              
                Nigerians — children born with heart defects and adults with acquired 
              
                heart disease — whose families cannot meet the cost of care. Surgery 
             
                takes place at Gracespring Hospitals in Lagos, performed by a permanent,
                locally based cardiac team.
              </p> */}

              {/* Option 1: Standard Left Aligned (Most readable for web) */}


              {/* Option 2: Justified (Straight edges on both the left and right sides) */}
              <p className="max-w-3xl text-white text-base md:text-lg leading-relaxed text-justify w-[90%]">
                The Gold Star Cardiac Surgery Initiative funds open heart surgery for Nigerians — children born with heart defects and adults with acquired heart disease — whose families cannot meet the cost of care. Surgery takes place at Gracespring Hospitals in Lagos, performed by a permanent, locally based cardiac team.
              </p>



            </div>



          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <Link
              href="/sponsor-a-patient"
              className="bg-[#E3BE50] text-[#161240] font-bold py-3 px-6 text-sm lg:text-[15px] hover:bg-[#d4ae42] transition-colors flex items-center justify-center"
            >
              Sponsor a patient
            </Link>
            <Link
              href="/how-it-works"
              className="bg-transparent border border-white text-white font-bold py-3 px-6 text-sm lg:text-[15px] hover:bg-white hover:text-[#161240] transition-colors flex items-center justify-center"
            >
              How the programme works
            </Link>
          </motion.div>

        </motion.div>
      </div>

      {/* ================= STATS BANNER (Bottom part) ================= */}
      <div className="relative z-20 w-full bg-primary border-t border-white/10 mt-auto  py-10">
        <div className="px-6 md:px-12 lg:px-24 xl:px-32 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Stat 1 */}
            <div className="p-6 lg:p-0 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
              <span className="text-[#E3BE50] text-5xl md:text-4xl lg:text-5xl mb-2" style={{ fontFamily: "Georgia, serif" }}>3</span>
              <p className="text-white text-xs lg:text-sm leading-snug">open heart operations completed</p>
              <p className="text-white text-xs lg:text-sm leading-snug">in our first surgical series</p>
            </div>

            {/* Stat 2 */}
            <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
              <span className="text-[#E3BE50] text-5xl md:text-4xl lg:text-5xl mb-2" style={{ fontFamily: "Georgia, serif" }}>100%</span>
              <p className="text-white text-xs lg:text-sm leading-snug">of those operations funded</p>
              <p className="text-white text-xs lg:text-sm leading-snug">by charitable sponsors</p>
            </div>

            {/* Stat 3 */}
            <div className="p-6 lg:p-8 border-b md:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
              <span className="text-[#E3BE50] text-5xl md:text-4xl lg:text-5xl mb-2" style={{ fontFamily: "Georgia, serif" }}>₦0</span>
              <p className="text-white text-xs lg:text-sm leading-snug">asked of the families of</p>
              <p className="text-white text-xs lg:text-sm leading-snug">sponsored patients</p>
            </div>

            {/* Stat 4 */}
            <div className="p-6 lg:p-8  flex flex-col justify-center">
              <span className="text-[#E3BE50] text-5xl md:text-4xl lg:text-5xl mb-2" style={{ fontFamily: "Georgia, serif" }}>₦15m</span>
              <p className="text-white text-xs lg:text-sm leading-snug">the full documented cost of</p>
              <p className="text-white text-xs lg:text-sm leading-snug">sponsoring one patient</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;




// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const Hero2 = () => {
//   return (
//     <section
//       id="hero"
//       className="relative w-full h-screen overflow-hidden flex items-center justify-start pt-20"
//     >
//       {/* ================= BACKGROUND IMAGE ================= */}
//       <motion.div className="absolute inset-0">
//         <Image
//           src="/assets/images/hero/care-03.png" // Replace with actual surgery image path
//           alt="Surgery background"
//           fill
//           className="object-cover object-center"
//           priority
//         />
//       </motion.div>

//       {/* ================= OVERLAY (Dark Blue/Purple Tint) ================= */}
//       <div className="absolute inset-0 bg-[#161240]/85 md:bg-[#161240]/75 mix-blend-multiply" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#161240]/90 to-transparent" />

//        {/* ================= CONTENT ================= */}
//        <div className="relative z-10 text-white px-6 md:px-16 lg:px-24 xl:px-32 max-w-7xl w-full">
//          <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="space-y-6 max-w-2xl"
//         >
//           {/* Small Gold Accent Line */}
//           <motion.div 
//             initial={{ scaleX: 0 }} 
//             animate={{ scaleX: 1 }} 
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="w-12 h-1 bg-[#E3BE50] mb-8 origin-left" 
//           />

//           {/* Main Heading (Serif Font) */}
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 1 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight font-serif tracking-wide"
//             style={{ fontFamily: "Georgia, serif" }} // Optional: Use a specific serif web font here if installed
//           >
//             Open heart surgery,<br/>
//             performed in Nigeria,<br/>
//             for people who could<br/>
//             never have paid for it.
//           </motion.h1>

//           {/* Subtext Paragraph */}
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 1 }}
//             className="text-sm md:text-base lg:text-lg text-gray-200 mt-6 max-w-[600px] leading-relaxed"
//           >
//             The Gold Star Cardiac Surgery Initiative funds open heart surgery for 
//             Nigerians — children born with heart defects and adults with acquired 
//             heart disease — whose families cannot meet the cost of care. Surgery 
//             takes place at Gracespring Hospitals in Lagos, performed by permanent staff.
//           </motion.p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero2;
