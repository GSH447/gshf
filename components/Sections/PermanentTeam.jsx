"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PermanentTeam() {
  const teamHighlights = [
    {
      title: "The team is based here",
      text: "A Nigerian, locally based multidisciplinary cardiac team — surgeons, anaesthetists, perfusionists, intensivists and nurses."
    },
    {
      title: "Surgery is planned around clinical need",
      text: "Cases are scheduled when the patient is ready, not when a visiting team happens to be in the country."
    },
    {
      title: "Follow-up does not end at discharge",
      text: "The same team remains available for review and longer-term care, months and years after the operation."
    },
    {
      title: "Capacity stays in the country",
      text: "Every sponsored operation strengthens a permanent Nigerian cardiac service."
    }
  ];

  return (
    <section className="py-16 lg:py-24 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto bg-gray-50/50">
      {/* items-center automatically vertically centers the image alongside the text on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Desktop Image: Hidden on mobile, shown on the left on desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block relative h-[500px] xl:h-[600px] w-full rounded-sm overflow-hidden"
        >
          <Image
            src="/assets/images/New/Landing-Page/1/medical-team.jpg"
            alt="Gracespring Medical Team"
            fill
            className="object-cover object-center"
          />
        </motion.div>

        {/* Text Content & Mobile Image Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          {/* 1. Heading and Intro */}
          <div>

          {/* Small Gold Accent Line */}
          <motion.div 
            initial={{ scaleX: 0 }} 
            animate={{ scaleX: 1 }} 
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-12 h-[3px] bg-[#E3BE50] mb-6 origin-left" 
          />
          
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold font-serif leading-tight text-[#161240] mb-6">
              A standing service, not a visiting mission.
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-10 text-justify w-[95%]">
              Much of the open heart surgery available in Nigeria depends on visiting teams who arrive, operate for a week or two, and leave. Families wait for the next window. Follow-up is difficult once the team has gone.
            </p>
          </div>

          {/* 2. Mobile Image: Hidden on desktop, placed directly after the intro text */}
          <div className="block lg:hidden relative h-[300px] sm:h-[400px] w-full rounded-sm overflow-hidden mb-10">
            <Image
              src="/assets/images/New/Landing-Page/1/medical-team.jpg"
              alt="Gracespring Medical Team"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* 3. Bullet Points */}
          <div className="space-y-8">
            {teamHighlights.map((item, index) => (
              <div key={index} className="border-t border-gray-200 pt-6">
                <h3 className="text-[#161240] font-bold mb-2 flex items-center gap-3 text-base md:text-lg">
                  <span className="w-2 h-2 rounded-full bg-[#E3BE50] shrink-0"></span>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-5  text-justify w-[95%]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}


// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function PermanentTeam() {
//   // Store bullet points here to keep the JSX clean
//   const teamHighlights = [
//     {
//       title: "The team is based here",
//       text: "A Nigerian, locally based multidisciplinary cardiac team — surgeons, anaesthetists, perfusionists, intensivists and nurses."
//     },
//     {
//       title: "Surgery is planned around clinical need",
//       text: "Cases are scheduled when the patient is ready, not when a visiting team happens to be in the country."
//     },
//     {
//       title: "Follow-up does not end at discharge",
//       text: "The same team remains available for review and longer-term care, months and years after the operation."
//     },
//     {
//       title: "Capacity stays in the country",
//       text: "Every sponsored operation strengthens a permanent Nigerian cardiac service."
//     }
//   ];

//   return (
//     <section className="py-16 lg:py-24 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto bg-gray-50/50">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
//         {/* Image Content */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           // order-last puts image BELOW text on mobile. lg:order-first puts it LEFT on desktop.
//           className="relative h-[400px] lg:h-[600px] w-full order-last lg:order-first rounded-sm overflow-hidden"
//         >
//           <Image
//             src="/assets/images/New/Landing-Page/1/medical-team.jpg"
//             alt="Gracespring Medical Team"
//             fill
//             className="object-cover object-center"
//           />
//         </motion.div>

//         {/* Text Content */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           // order-first puts text on TOP on mobile. lg:order-last puts it RIGHT on desktop.
//           className="order-first lg:order-last"
//         >
//           {/* Consistent gold accent line */}
//           <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />

//           <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium font-serif leading-tight text-[#161240] mb-6">
//             A standing service, not a visiting mission.
//           </h2>
//           <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-10">
//             Much of the open heart surgery available in Nigeria depends on visiting teams who arrive, operate for a week or two, and leave. Families wait for the next window. Follow-up is difficult once the team has gone.
//           </p>

//           <div className="space-y-8">
//             {teamHighlights.map((item, index) => (
//               <div key={index} className="border-t border-gray-200 pt-6">
//                 <h3 className="text-[#161240] font-bold mb-2 flex items-center gap-3 text-base md:text-lg">
//                   <span className="w-2 h-2 rounded-full bg-[#E3BE50] shrink-0"></span>
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-5">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// // "use client";
// // import React from "react";
// // import Image from "next/image";
// // import { motion } from "framer-motion";

// // export default function PermanentTeam() {
// //   return (
// //     <section className="py-16 lg:py-24 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto bg-gray-50/50">
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
// //         {/* Image Content */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="relative h-[400px] lg:h-[600px] w-full order-2 lg:order-1"
// //         >
// //           <Image
// //             src="/assets/images/New/Landing-Page/1/medical-team.jpg"
// //             // src="/assets/images/medical-team.jpg" // Add your image to this path
// //             alt="Gracespring Medical Team"
// //             fill
// //             className="object-cover object-center"
// //           />
// //         </motion.div>

// //         {/* Text Content */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="order-1 lg:order-2"
// //         >
// //           <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium font-serif leading-tight text-[#161240] mb-6">
// //             A standing service, not a visiting mission.
// //           </h2>
// //           <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-10">
// //             Much of the open heart surgery available in Nigeria depends on visiting teams who arrive, operate for a week or two, and leave. Families wait for the next window. Follow-up is difficult once the team has gone.
// //           </p>

// //           <div className="space-y-8">
// //             {/* Bullet 1 */}
// //             <div className="border-t border-gray-200 pt-6">
// //               <h3 className="text-[#161240] font-bold mb-2 flex items-center gap-2">
// //                 <span className="w-2 h-2 rounded-full bg-[#E3BE50]"></span>
// //                 The team is based here
// //               </h3>
// //               <p className="text-gray-600 text-sm leading-relaxed pl-4">
// //                 A Nigerian, locally based multidisciplinary cardiac team — surgeons, anaesthetists, perfusionists, intensivists and nurses.
// //               </p>
// //             </div>
// //             {/* Bullet 2 */}
// //             <div className="border-t border-gray-200 pt-6">
// //               <h3 className="text-[#161240] font-bold mb-2 flex items-center gap-2">
// //                 <span className="w-2 h-2 rounded-full bg-[#E3BE50]"></span>
// //                 Surgery is planned around clinical need
// //               </h3>
// //               <p className="text-gray-600 text-sm leading-relaxed pl-4">
// //                 Cases are scheduled when the patient is ready, not when a visiting team happens to be in the country.
// //               </p>
// //             </div>
// //             {/* Bullet 3 */}
// //             <div className="border-t border-gray-200 pt-6">
// //               <h3 className="text-[#161240] font-bold mb-2 flex items-center gap-2">
// //                 <span className="w-2 h-2 rounded-full bg-[#E3BE50]"></span>
// //                 Follow-up does not end at discharge
// //               </h3>
// //               <p className="text-gray-600 text-sm leading-relaxed pl-4">
// //                 The same team remains available for review and longer-term care, months and years after the operation.
// //               </p>
// //             </div>
// //             {/* Bullet 4 */}
// //             <div className="border-t border-gray-200 pt-6">
// //               <h3 className="text-[#161240] font-bold mb-2 flex items-center gap-2">
// //                 <span className="w-2 h-2 rounded-full bg-[#E3BE50]"></span>
// //                 Capacity stays in the country
// //               </h3>
// //               <p className="text-gray-600 text-sm leading-relaxed pl-4">
// //                 Every sponsored operation strengthens a permanent Nigerian cardiac service.
// //               </p>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }