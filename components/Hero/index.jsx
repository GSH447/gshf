"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PageHero({ title, description }) {
  return (
    // Added 'relative' to the section to allow absolute positioning of the arrow
    <section className="relative bg-primary pt-40 pb-32 px-6 md:px-12 lg:px-24 xl:px-32 w-full min-h-[60vh] flex flex-col justify-center">
      <div className="max-w-[1420px] mx-auto w-full py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Small Gold Accent Line */}
          <motion.div 
            initial={{ scaleX: 0 }} 
            animate={{ scaleX: 1 }} 
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-12 h-[3px] bg-[#E3BE50] mb-6 origin-left" 
          />
          
          {/* Dynamic Title */}
          <h1 
            className="text-white text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.15] tracking-wide mb-6 "
            style={{ fontFamily: "Georgia, serif" }}
          >
            {title}
          </h1>

          {/* Dynamic Description */}
          {description && (
            <p className="text-gray-200 text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed ">
              {description}
            </p>
          )}
        </motion.div>
      </div>

      {/* Bouncing Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        // y: [0, 10, 0] creates the continuous bouncing effect
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
        // Positioned at the bottom center of the hero section
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        // Smoothly scrolls down 500px when clicked
        onClick={() => window.scrollBy({ top: 500, behavior: 'smooth' })}
      >
        <span className="text-white/50 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-2 group-hover:text-white/80 transition-colors duration-300">
          Scroll
        </span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-5 h-5 md:w-6 md:h-6 text-white/50 group-hover:text-white/80 transition-colors duration-300"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>
    </section>
  );
}

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// export default function PageHero({ title, description }) {
//   return (
//     <section className="bg-primary pt-40 pb-24 px-6 md:px-12 lg:px-24 xl:px-32 w-full ">
//       <div className="max-w-[1420px] mx-auto  py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="max-w-4xl"
//         >
//           {/* Gold Accent Line */}

//           {/* Small Gold Accent Line */}
//           <motion.div 
//             initial={{ scaleX: 0 }} 
//             animate={{ scaleX: 1 }} 
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="w-12 h-[3px] bg-[#E3BE50] mb-6 origin-left" 
//           />
          
          
//           {/* Dynamic Title */}
//           <h1 
//             className="text-white text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.15] tracking-wide mb-6 "
//             style={{ fontFamily: "Georgia, serif" }}
//           >
//             {title}
//           </h1>

//           {/* Dynamic Description */}
//           {description && (
//             <p className="text-gray-200 text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed ">
//               {description}
//             </p>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// }