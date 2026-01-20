"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroTypeWriter from "./TypewriteEffect";

const Hero2 = () => {
    

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >

      <motion.div className="absolute inset-0">
        <Image
          src="/assets/images/hero/care-03.png"
          alt="Donation background"
          fill
          className="object-cover object-top"
          priority
        />
      </motion.div>

      {/* ================= OVERLAY (Opacity Control) ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />



       {/* ================= CONTENT ================= */}
       <div className="relative z-10 text-white px-4 text-center max-w-4xl hero-typewriter-container">
         <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Hero Text */}
          <motion.h1
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="lg:text-[42px] text-[26px] font-extrabold leading-tight"
            style={{ fontFamily: "AvenirBold" }}
          >
            <HeroTypeWriter />
          </motion.h1>

          {/* Sub Text */}
          {/* <p className="text-sm lg:text-lg text-gray-200 max-w-2xl mx-auto">
            Delivering trusted, innovative, and compassionate healthcare
            solutions for everyone.
          </p> */}

          {/* CTA Buttons */}
          {/* <div className="flex justify-center gap-4 pt-4">
            <a
              href="/auth/signup"
              className="px-6 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primaryblack transition"
            >
              Get Started
            </a>

            <a
              href="/contact"
              className="px-6 py-2 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Us
            </a>
          </div> */}
        </motion.div>
      </div>

    </section>
  );
};

export default Hero2;




// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import HeroTypeWriter from "./TypewriteEffect";

// const heroImages = [
//   "/assets/images/hero/care-01.png",
//   "/assets/images/hero/care-02.png",
//   "/assets/images/hero/care-03.png",
// ];

// const Hero2 = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   // Auto-rotate background images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % heroImages.length);
//     }, 6000); // 6 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="relative w-full h-screen overflow-hidden flex items-center justify-center"
//     >
//       {/* ================= BACKGROUND IMAGES ================= */}
//       {/* <AnimatePresence>
//         <motion.div
//           key={currentImage}
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${heroImages[currentImage]})`,
//           }}
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.5, ease: "easeInOut" }}
//         />
//       </AnimatePresence> */}

// <AnimatePresence>
//   <motion.div
//     key={currentImage}
//     className="
//       absolute inset-0
//       bg-cover
//       bg-[position:50%_20%]
//       sm:bg-center
//     "
//     style={{
//       backgroundImage: `url(${heroImages[currentImage]})`,
//     }}
//     initial={{ opacity: 0, scale: 1.05 }}
//     animate={{ opacity: 1, scale: 1 }}
//     exit={{ opacity: 0 }}
//     transition={{ duration: 1.5, ease: "easeInOut" }}
//   />
// </AnimatePresence>

//       {/* ================= OVERLAY (Opacity Control) ================= */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

//       {/* ================= CONTENT ================= */}
//       <div className="relative z-10 text-white px-4 text-center max-w-4xl hero-typewriter-container">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="space-y-6"
//         >
//           {/* Hero Text */}
//           <motion.h1
//             initial={{ rotateY: 90, opacity: 0 }}
//             animate={{ rotateY: 0, opacity: 1 }}
//             transition={{ type: "spring", stiffness: 200, damping: 25 }}
//             className="lg:text-[42px] text-[26px] font-extrabold leading-tight"
//             style={{ fontFamily: "AvenirBold" }}
//           >
//             <HeroTypeWriter />
//           </motion.h1>

//           {/* Sub Text */}
//           {/* <p className="text-sm lg:text-lg text-gray-200 max-w-2xl mx-auto">
//             Delivering trusted, innovative, and compassionate healthcare
//             solutions for everyone.
//           </p> */}

//           {/* CTA Buttons */}
//           {/* <div className="flex justify-center gap-4 pt-4">
//             <a
//               href="/auth/signup"
//               className="px-6 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primaryblack transition"
//             >
//               Get Started
//             </a>

//             <a
//               href="/contact"
//               className="px-6 py-2 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-black transition"
//             >
//               Contact Us
//             </a>
//           </div> */}
//         </motion.div>
//       </div>

//       {/* ================= DOT INDICATORS ================= */}
//       <div className="hidden absolute bottom-6 flex gap-2 z-10">
//         {heroImages.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentImage(index)}
//             className={`h-2 w-2 rounded-full transition-all ${
//               currentImage === index
//                 ? "bg-white w-6"
//                 : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero2;
