"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SponsorsList() {
  // Define your sponsors here. 
  // Update the 'logo' paths to point to your actual image files in the public folder.
  const sponsors = [
    {
      id: 1,
      name: "Marine Platforms Limited",
      logo: "/assets/sponsor/MarinePlatformsLimited.jpeg", 
    },
    {
      id: 2,
      name: "Global Health Charity and Training Foundation Inc.",
      logo: "/assets/sponsor/GlobalHealthCharityandTrainingFoundationInc.jpeg",
    },
  ];

  return (
    <section className="pb-16 lg:pb-24 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-12"
      >
        <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium font-serif text-[#161240] mb-6">
          Our first sponsors
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          The Foundation connects sponsors with patients who need corrective cardiac surgery and cannot meet the cost of their care. These organisations funded our first series.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-6 items-center">
        {sponsors.map((sponsor) => (
          <div 
            key={sponsor.id} 
            className="relative border border-gray-200 py-4 px-6 flex items-center justify-center hover:border-[#161240] transition-colors h-24 w-48 md:w-56 bg-white"
            title={sponsor.name} // Shows the sponsor name when hovering over the box
          >
            <Image 
              src={sponsor.logo} 
              alt={`${sponsor.name} logo`} 
              fill 
              className="" // object-contain ensures the logo isn't cropped
            />
          </div>
        ))}
      </div>
    </section>
  );
}


// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// export default function SponsorsList() {
//   return (
//     <section className="py-16 lg:py-24 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto bg-white">
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="max-w-3xl mb-12"
//       >
//         <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
//         <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium font-serif text-[#161240] mb-6">
//           Our first sponsors
//         </h2>
//         <p className="text-gray-700 text-base leading-relaxed">
//           The Foundation connects sponsors with patients who need corrective cardiac surgery and cannot meet the cost of their care. These organisations funded our first series.
//         </p>
//       </motion.div>

//       <div className="flex flex-wrap gap-6">
//         <div className="border border-gray-200 py-2 px-8 flex items-center justify-center text-gray-700 text-sm font-medium hover:border-[#161240] transition-colors">
//           Marine Platforms Limited
//         </div>
//         <div className="border border-gray-200 py-2 px-8 flex items-center justify-center text-gray-700 text-sm font-medium hover:border-[#161240] transition-colors">
//           Global Health Charity and Training Foundation Inc.
//         </div>
//       </div>
//     </section>
//   );
// }