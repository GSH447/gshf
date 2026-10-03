"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "../Hero";

const trusteesData = [
  {
    id: 1,
    name: "Joe Ugbede Abba",
    role: "Chairman",
    occupation: "Stockbroking",
    location: "Victoria Island, Lagos",
    imageSrc: "/assets/images/New/trustees/Joe_Ugbede_Abba-removebg-preview.png",
    position: "object-top",
  },
  {
    id: 2,
    name: "Barr. Pere Nduku",
    role: "Secretary",
    occupation: "Legal Practitioner",
    location: "Lekki Phase 1, Lagos",
    imageSrc: "/assets/images/New/trustees/Barr.PereNduku-removebg-preview.png"
  },
  {
    id: 3,
    name: "Bishop Etteh Enobong",
    role: "Member",
    occupation: "Clergy",
    location: "Lekki, Lagos",
    imageSrc: "/assets/images/New/trustees/Bishop_Etteh_Enobong-removebg-preview.png",
  },
  {
    id: 5,
    name: "Rev. Simon Odomokwu",
    role: "Member",
    occupation: "Legal Practitioner & Clergy",
    location: "Ajah, Lagos",
    imageSrc: "/assets/images/New/trustees/Rev.SimonOdomokwu-removebg-preview.png"
  },
  {
    id: 6,
    name: "Dr. Tagbo Azubike",
    role: "Member",
    occupation: "Doctor",
    location: "International / Diaspora",
    imageSrc: "/assets/images/New/trustees/Dr_Tagbo_Azubike-removebg-preview.png",
  }
];

const TrusteeCard = ({ trustee, isLeader }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`flex flex-col bg-white/85 backdrop-blur-xl rounded-xl shadow-sm border ${
      isLeader 
        ? 'border-[#E3BE50] shadow-[0_0_15px_rgba(227,190,80,0.3)] ring-2 ring-[#E3BE50]/50' 
        : 'border-[#E3BE50]/40 hover:border-[#E3BE50]'
    } overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full relative z-20 group`}
  >
    <div className="relative w-full aspect-square bg-[#E3BE50]/5">
      <Image
        src={trustee.imageSrc}
        alt={`Portrait of ${trustee.name}`}
        fill
        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${trustee.position || "object-center"}`} 
        sizes="(max-width: 768px) 100vw, 400px"
      />
    </div>

    <div className="p-4 md:p-6 text-center flex flex-col flex-grow justify-center">
      <h3 className="font-bold text-gray-900 text-sm md:text-lg mb-1 leading-tight">
        {trustee.name}
      </h3>
      <p className="text-[#E3BE50] text-xs md:text-sm font-bold mb-3 uppercase tracking-wider">
        {trustee.role}
      </p>
      
      <div className="w-10 md:w-16 h-0.5 bg-[#E3BE50] mx-auto mb-3"></div>
{/*       
      <p className="text-gray-600 text-xs md:text-sm font-medium mb-1">
        {trustee.occupation}
      </p>
      <p className="text-gray-400 text-[10px] md:text-xs">
        {trustee.location}
      </p> */}
    </div>
  </motion.div>
);

export default function TrusteesPage() {
  const chairman = trusteesData.find((t) => t.role === "Chairman");
  
  // For Desktop
  const leaders = trusteesData.filter((t) => t.role === "Chairman" || t.role === "Secretary");
  const members = trusteesData.filter((t) => t.role === "Member");
  
  // For Mobile
  const others = trusteesData.filter((t) => t.role !== "Chairman");

  return (
    <main className="relative bg-slate-50 min-h-screen pb-24 overflow-hidden">
      
      {/* CUSTOM CSS FOR GRADIENT FLOW ANIMATIONS & HIDDEN SCROLLBARS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient-y { 0% { background-position: 0% -100%; } 100% { background-position: 0% 200%; } }
        @keyframes gradient-x { 0% { background-position: -100% 0%; } 100% { background-position: 200% 0%; } }
        .animate-flow-y {
          background: linear-gradient(180deg, rgba(227,190,80,0.15) 0%, rgba(227,190,80,1) 50%, rgba(227,190,80,0.15) 100%);
          background-size: 100% 300%;
          animation: gradient-y 2.5s linear infinite;
        }
        .animate-flow-x {
          background: linear-gradient(90deg, rgba(227,190,80,0.15) 0%, rgba(227,190,80,1) 50%, rgba(227,190,80,0.15) 100%);
          background-size: 300% 100%;
          animation: gradient-x 3s linear infinite;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div animate={{ x: [0, 40, -20, 0], y: [0, -30, 40, 0], scale: [1, 1.1, 0.9, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-20 -left-20 w-[30rem] h-[30rem] bg-[#E3BE50]/10 rounded-full blur-[100px]" />
        <motion.div animate={{ x: [0, -50, 30, 0], y: [0, 50, -30, 0], scale: [1, 1.2, 0.8, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 -right-20 w-[35rem] h-[35rem] bg-[#E3BE50]/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <PageHero
          title={<>Meet Our Trustees</>}
          description={
            <>
              The visionaries and stewards behind our foundation. Our Board of 
              Trustees combines expertise across medicine, law, engineering, and 
              community leadership to ensure transparency and lasting impact.
            </>
          }
        />

        <div className="mt-16 w-full">
          
          {/* ========================================= */}
          {/* DESKTOP VIEW (Expanded & Spread Out)      */}
          {/* ========================================= */}
          <div className="hidden md:flex flex-col items-center w-[90%] max-w-[1600px] mx-auto">
            
            {/* TIER 1: LEADERS ROW */}
            <div className="relative flex flex-row justify-center items-start w-full">
              {leaders.map((leader, index) => (
                <div key={leader.id} className="relative flex flex-col items-center flex-1 px-4 lg:px-8 max-w-[450px]">
                  <TrusteeCard trustee={leader} isLeader={leader.role === "Chairman" || leader.role === "Secretary"} />
                  <div className="w-[3px] h-12 lg:h-16 animate-flow-y shadow-[0_0_8px_rgba(227,190,80,0.6)]"></div>

                  {/* Horizontal connecting line */}
                  {index === 0 && <div className="absolute bottom-0 left-1/2 right-0 h-[3px] animate-flow-x shadow-[0_0_8px_rgba(227,190,80,0.6)]"></div>}
                  {index === leaders.length - 1 && <div className="absolute bottom-0 left-0 right-1/2 h-[3px] animate-flow-x shadow-[0_0_8px_rgba(227,190,80,0.6)]"></div>}
                </div>
              ))}
            </div>

            {/* CENTRAL VERTICAL DROP */}
            <div className="w-[3px] h-12 lg:h-16 animate-flow-y shadow-[0_0_8px_rgba(227,190,80,0.6)] relative z-0"></div>

            {/* TIER 2: MEMBERS ROW */}
            <div className="relative flex flex-row justify-center items-start w-full">
              {members.map((member, index) => (
                <div key={member.id} className="relative flex flex-col items-center flex-1 px-4 lg:px-8 max-w-[400px]">
                  
                  {/* Horizontal connecting line */}
                  {index === 0 && <div className="absolute top-0 left-1/2 right-0 h-[3px] animate-flow-x shadow-[0_0_8px_rgba(227,190,80,0.6)]"></div>}
                  {index > 0 && index < members.length - 1 && <div className="absolute top-0 left-0 right-0 h-[3px] animate-flow-x shadow-[0_0_8px_rgba(227,190,80,0.6)]"></div>}
                  {index === members.length - 1 && <div className="absolute top-0 left-0 right-1/2 h-[3px] animate-flow-x shadow-[0_0_8px_rgba(227,190,80,0.6)]"></div>}

                  <div className="w-[3px] h-12 lg:h-16 animate-flow-y shadow-[0_0_8px_rgba(227,190,80,0.6)]"></div>
                  <TrusteeCard trustee={member} isLeader={false} />
                </div>
              ))}
            </div>
          </div>

          {/* ========================================= */}
          {/* MOBILE VIEW (Chairman Top, Others Scroll) */}
          {/* ========================================= */}
          <div className="flex md:hidden flex-col items-center w-full">
            
            {/* TIER 1: CHAIRMAN */}
            {chairman && (
              <div className="flex flex-col items-center w-full px-4">
                <div className="border-2 border-[red] w-full max-w-[300px]">
                  <TrusteeCard trustee={chairman} isLeader={true} />
                </div>
                {/* Vertical Drop touching the scrollable container */}
                <div className="w-[3px] h-10 animate-flow-y shadow-[0_0_8px_rgba(227,190,80,0.6)]"></div>
              </div>
            )}

            {/* TIER 2: OTHERS (Side-by-Side Scroll) */}
            <div className="w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8">
              <div className="flex flex-row items-start min-w-max px-6">
                {others.map((person, index) => (
                  <div key={person.id} className="relative flex flex-col items-center w-[280px] px-3 snap-center">
                    
                    {/* Horizontal connecting line stretching across the scrollable cards */}
                    {index === 0 && <div className="absolute top-0 left-1/2 right-0 h-[3px] animate-flow-x shadow-[0_0_8px_rgba(227,190,80,0.6)]"></div>}
                    {index > 0 && index < others.length - 1 && <div className="absolute top-0 left-0 right-0 h-[3px] animate-flow-x shadow-[0_0_8px_rgba(227,190,80,0.6)]"></div>}
                    {index === others.length - 1 && <div className="absolute top-0 left-0 right-1/2 h-[3px] animate-flow-x shadow-[0_0_8px_rgba(227,190,80,0.6)]"></div>}

                    {/* Drop line into the card */}
                    <div className="w-[3px] h-10 animate-flow-y shadow-[0_0_8px_rgba(227,190,80,0.6)]"></div>
                    <TrusteeCard trustee={person} isLeader={person.role === "Secretary"} />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import PageHero from "../Hero";

// const trusteesData = [
//   {
//     id: 1,
//     name: "Joe Ugbede Abba",
//     role: "Chairman",
//     occupation: "Stockbroking",
//     location: "Victoria Island, Lagos",
//     imageSrc: "/assets/images/New/trustees/Joe_Ugbede_Abba-removebg-preview.png",
//     position: "object-top",
//   },
//   {
//     id: 2,
//     name: "Barr. Pere Nduku",
//     role: "Secretary",
//     occupation: "Legal Practitioner",
//     location: "Lekki Phase 1, Lagos",
//     imageSrc: "/assets/images/New/trustees/Barr.PereNduku-removebg-preview.png"
//   },
//   {
//     id: 3,
//     name: "Bishop Etteh Enobong",
//     role: "Member",
//     occupation: "Clergy",
//     location: "Lekki, Lagos",
//     imageSrc: "/assets/images/New/trustees/Bishop_Etteh_Enobong-removebg-preview.png",
//   },
//   {
//     id: 5,
//     name: "Rev. Simon Odomokwu",
//     role: "Member",
//     occupation: "Legal Practitioner & Clergy",
//     location: "Ajah, Lagos",
//     imageSrc: "/assets/images/New/trustees/Rev.SimonOdomokwu-removebg-preview.png"
//   },
//   {
//     id: 6,
//     name: "Dr. Tagbo Azubike",
//     role: "Member",
//     occupation: "Doctor",
//     location: "International / Diaspora",
//     imageSrc: "/assets/images/New/trustees/Dr_Tagbo_Azubike-removebg-preview.png",
//   }
// ];

// // Reusable Card Component with Glassmorphism
// const TrusteeCard = ({ trustee, isTopTier }) => (
//   <motion.div 
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.5 }}
//     className={`flex flex-col bg-white/80 backdrop-blur-xl rounded-xl shadow-sm border ${
//       isTopTier 
//         ? 'border-blue-300 shadow-blue-100/50 ring-4 ring-blue-50/50' 
//         : 'border-white/60'
//     } overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-64 md:w-72 relative z-20`}
//   >
//     <div className="relative w-full aspect-square bg-gray-50/50">
//       <Image
//         src={trustee.imageSrc}
//         alt={`Portrait of ${trustee.name}`}
//         fill
//         className={`object-cover ${trustee.position || "object-center"}`} 
//         sizes="(max-width: 768px) 100vw, 300px"
//       />
//     </div>

//     <div className="p-5 text-center flex flex-col flex-grow justify-center">
//       <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1 leading-tight">
//         {trustee.name}
//       </h3>
//       <p className="text-black text-xs md:text-sm font-bold mb-3 uppercase tracking-wider">
//         {trustee.role}
//       </p>
      
//       {/* Decorative divider */}
//       <div className="w-12 h-0.5 bg-[#E3BE50] mx-auto mb-3"></div>
      
//       {/* <p className="text-gray-600 text-xs md:text-sm font-medium mb-1">
//         {trustee.occupation}
//       </p>
//       <p className="text-gray-400 text-xs">
//         {trustee.location}
//       </p> */}
//     </div>
//   </motion.div>
// );

// export default function TrusteesPage() {
//   const chairman = trusteesData.find((t) => t.role === "Chairman");
//   const secretary = trusteesData.find((t) => t.role === "Secretary");
//   const members = trusteesData.filter((t) => t.role === "Member");

//   return (
//     <main className="relative bg-slate-50 min-h-screen pb-24 overflow-hidden">
      
//       {/* --- FRAMER MOTION ANIMATED BACKGROUND --- */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//         {/* Top Left Blue Glow */}
//         <motion.div
//           animate={{
//             x: [0, 40, -20, 0],
//             y: [0, -30, 40, 0],
//             scale: [1, 1.1, 0.9, 1],
//           }}
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-20 -left-20 w-[30rem] h-[30rem] bg-blue-300/40 rounded-full blur-[100px]"
//         />
        
//         {/* Middle Right Gold/Yellow Glow (Matches your theme) */}
//         <motion.div
//           animate={{
//             x: [0, -50, 30, 0],
//             y: [0, 50, -30, 0],
//             scale: [1, 1.2, 0.8, 1],
//           }}
//           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-1/4 -right-20 w-[35rem] h-[35rem] bg-[#E3BE50]/30 rounded-full blur-[100px]"
//         />

//         {/* Bottom Center Cyan Glow */}
//         <motion.div
//           animate={{
//             x: [0, 30, -40, 0],
//             y: [0, -40, 20, 0],
//             scale: [1, 1.05, 0.95, 1],
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-0 left-1/3 w-[40rem] h-[25rem] bg-cyan-200/40 rounded-full blur-[120px]"
//         />
//       </div>
//       {/* --------------------------------------- */}

//       <div className="relative z-10">
//         <PageHero
//           title={<>Meet Our Trustees</>}
//           description={
//             <>
//               The visionaries and stewards behind our foundation. Our Board of 
//               Trustees combines expertise across medicine, law, engineering, and 
//               community leadership to ensure transparency and lasting impact.
//             </>
//           }
//         />

//         <div className="container mx-auto px-4 lg:px-8 mt-16 max-w-7xl">
//           <div className="flex flex-col items-center w-full">
            
//             {/* TIER 1: CHAIRMAN */}
//             {chairman && (
//               <div className="flex flex-col items-center w-full">
//                 <TrusteeCard trustee={chairman} isTopTier={true} />
//                 <div className="w-0.5 h-10 md:h-12 bg-blue-300 relative z-10 shadow-[0_0_8px_rgba(147,197,253,0.8)]"></div>
//               </div>
//             )}

//             {/* TIER 2: SECRETARY */}
//             {secretary && (
//               <div className="flex flex-col items-center w-full">
//                 <TrusteeCard trustee={secretary} isTopTier={false} />
//                 <div className="w-0.5 h-10 md:h-12 bg-blue-300 relative z-10 shadow-[0_0_8px_rgba(147,197,253,0.8)]"></div>
//               </div>
//             )}

//             {/* TIER 3: MEMBERS */}
//             {members.length > 0 && (
//               <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-8 lg:gap-12 w-full pt-0 md:pt-6">
                
//                 {/* Desktop Horizontal Branching Line */}
//                 <div className="hidden md:block absolute top-0 left-[15%] right-[15%] border-t-2 border-blue-300 z-0 shadow-[0_0_8px_rgba(147,197,253,0.8)]"></div>

//                 {members.map((member, index) => (
//                   <div key={member.id} className="flex flex-col items-center relative z-10">
                    
//                     {/* Desktop Vertical Drop Lines for Members */}
//                     <div className="hidden md:block absolute -top-6 w-0.5 h-6 bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,0.8)]"></div>
                    
//                     {/* Mobile Vertical Connector */}
//                     {index !== 0 && (
//                       <div className="md:hidden w-0.5 h-10 bg-blue-300 absolute -top-10 shadow-[0_0_8px_rgba(147,197,253,0.8)]"></div>
//                     )}

//                     <TrusteeCard trustee={member} isTopTier={false} />
//                   </div>
//                 ))}
//               </div>
//             )}

//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
// "use client";
// import React from "react";
// import Image from "next/image";
// import PageHero from "../Hero";

// const trusteesData = [
//   {
//     id: 1,
//     name: "Joe Ugbede Abba",
//     role: "Chairman",
//     occupation: "Stockbroking",
//     location: "Victoria Island, Lagos",
//     imageSrc: "/assets/images/New/trustees/Joe_Ugbede_Abba-removebg-preview.png",
//     position: "object-top",
//   },
//   {
//     id: 2,
//     name: "Barr. Pere Nduku",
//     role: "Secretary",
//     occupation: "Legal Practitioner",
//     location: "Lekki Phase 1, Lagos",
//     imageSrc: "/assets/images/New/trustees/Barr.PereNduku-removebg-preview.png"
//   },
//   {
//     id: 3,
//     name: "Bishop Etteh Enobong",
//     role: "Member",
//     occupation: "Clergy",
//     location: "Lekki, Lagos",
//     imageSrc: "/assets/images/New/trustees/Bishop_Etteh_Enobong-removebg-preview.png",
//   },
//   {
//     id: 5,
//     name: "Rev. Simon Odomokwu",
//     role: "Member",
//     occupation: "Legal Practitioner & Clergy",
//     location: "Ajah, Lagos",
//     imageSrc: "/assets/images/New/trustees/Rev.SimonOdomokwu-removebg-preview.png"
//   },
//   {
//     id: 6,
//     name: "Dr. Tagbo Azubike",
//     role: "Member",
//     occupation: "Doctor",
//     location: "International / Diaspora",
//     imageSrc: "/assets/images/New/trustees/Dr_Tagbo_Azubike-removebg-preview.png",
//   }
// ];

// // Reusable Card Component for the Organogram Nodes
// const TrusteeCard = ({ trustee, isTopTier }) => (
//   <div 
//     className={`flex flex-col bg-white rounded-xl shadow-sm border ${isTopTier ? 'border-blue-200 shadow-blue-100/50 ring-4 ring-blue-50/50' : 'border-gray-200'} overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-64 md:w-72 relative z-10`}
//   >
//     <div className="relative w-full aspect-square bg-gray-50">
//       <Image
//         src={trustee.imageSrc}
//         alt={`Portrait of ${trustee.name}`}
//         fill
//         className={`object-cover ${trustee.position || "object-center"}`} 
//         sizes="(max-width: 768px) 100vw, 300px"
//       />
//     </div>

//     <div className="p-5 text-center flex flex-col flex-grow justify-center">
//       <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1 leading-tight">
//         {trustee.name}
//       </h3>
//       <p className="text-blue-700 text-xs md:text-sm font-bold mb-3 uppercase tracking-wider">
//         {trustee.role}
//       </p>
      
//       {/* Decorative divider */}
//       <div className="w-12 h-0.5 bg-gray-100 mx-auto mb-3"></div>
      
//       <p className="text-gray-600 text-xs md:text-sm font-medium mb-1">
//         {trustee.occupation}
//       </p>
//       <p className="text-gray-400 text-xs">
//         {trustee.location}
//       </p>
//     </div>
//   </div>
// );

// export default function TrusteesPage() {
//   // Sort data into hierarchical tiers
//   const chairman = trusteesData.find((t) => t.role === "Chairman");
//   const secretary = trusteesData.find((t) => t.role === "Secretary");
//   const members = trusteesData.filter((t) => t.role === "Member");

//   return (
//     <main className="bg-slate-50 min-h-screen pb-24">
//       <PageHero
//         title={<>Meet Our Trustees</>}
//         description={
//           <>
//             The visionaries and stewards behind our foundation. Our Board of 
//             Trustees combines expertise across medicine, law, engineering, and 
//             community leadership to ensure transparency and lasting impact.
//           </>
//         }
//       />

//       <div className="container mx-auto px-4 lg:px-8 mt-16 max-w-7xl">
//         <div className="flex flex-col items-center w-full">
          
//           {/* TIER 1: CHAIRMAN */}
//           {chairman && (
//             <div className="flex flex-col items-center w-full">
//               <TrusteeCard trustee={chairman} isTopTier={true} />
//               {/* Vertical Line Connector */}
//               <div className="w-0.5 h-10 md:h-12 bg-blue-200"></div>
//             </div>
//           )}

//           {/* TIER 2: SECRETARY */}
//           {secretary && (
//             <div className="flex flex-col items-center w-full">
//               <TrusteeCard trustee={secretary} isTopTier={false} />
//               {/* Vertical Line Connector */}
//               <div className="w-0.5 h-10 md:h-12 bg-blue-200"></div>
//             </div>
//           )}

//           {/* TIER 3: MEMBERS */}
//           {members.length > 0 && (
//             <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-8 lg:gap-12 w-full pt-0 md:pt-6">
              
//               {/* Desktop Horizontal Branching Line */}
//               <div className="hidden md:block absolute top-0 left-[15%] right-[15%] border-t-2 border-blue-200 z-0"></div>

//               {members.map((member, index) => (
//                 <div key={member.id} className="flex flex-col items-center relative z-10">
                  
//                   {/* Desktop Vertical Drop Lines for Members */}
//                   <div className="hidden md:block absolute -top-6 w-0.5 h-6 bg-blue-200"></div>
                  
//                   {/* Mobile Vertical Connector (Shown between stacked cards) */}
//                   {index !== 0 && (
//                     <div className="md:hidden w-0.5 h-10 bg-blue-200 absolute -top-10"></div>
//                   )}

//                   <TrusteeCard trustee={member} isTopTier={false} />
//                 </div>
//               ))}
//             </div>
//           )}

//         </div>
//       </div>
//     </main>
//   );
// }


// "use client";
// import React from "react";
// import Image from "next/image";
// import PageHero from "../Hero";

// const trusteesData = [
//   {
//     id: 1,
//     name: "Joe Ugbede Abba",
//     role: "Chairman",
//     occupation: "Stockbroking",
//     location: "Victoria Island, Lagos",
//     imageSrc: "/assets/images/New/trustees/Joe_Ugbede_Abba.jpeg",
//     position: "object-top", // <-- Add this custom position for ID 1
//   },
//   {
//     id: 2,
//     name: "Barr. Pere Nduku",
//     role: "Secretary",
//     occupation: "Legal Practitioner",
//     location: "Lekki Phase 1, Lagos",
//     imageSrc: "/assets/images/New/trustees/Barr.PereNduku.jpeg"
//   },
//   {
//     id: 3,
//     name: "Bishop Etteh Enobong",
//     role: "Member",
//     occupation: "Clergy",
//     location: "Lekki, Lagos",
//     imageSrc: "/assets/images/New/trustees/ASIBOR_EROMOSELE.png",
//   },
//   // {
//   //   id: 4,
//   //   name: "Engr. Asibor Eromosele",
//   //   role: "Member",
//   //   occupation: "Engineering",
//   //   location: "Lekki Phase 1, Lagos",
//   //   imageSrc: "/assets/images/New/trustees/ASIBOR_EROMOSELE.png",
//   // },
//   {
//     id: 5,
//     name: "Rev. Simon Odomokwu",
//     role: "Member",
//     occupation: "Legal Practitioner & Clergy",
//     location: "Ajah, Lagos",
//     imageSrc: "/assets/images/New/trustees/Rev.SimonOdomokwu.jpeg"
//   },
//   {
//     id: 6,
//     name: "Dr. Tagbo Azubike",
//     role: "Member",
//     occupation: "Doctor",
//     location: "International / Diaspora",
//     imageSrc: "/assets/images/New/trustees/Dr_Tagbo_Azubike.png",
//   }
// ];

// export default function TrusteesPage() {
//   return (
//     <main className="bg-white min-h-screen pb-20">
//       <PageHero
//         title={<>Meet Our Trustees</>}
//         description={
//           <>
//             The visionaries and stewards behind our foundation. Our Board of 
//             Trustees combines expertise across medicine, law, engineering, and 
//             community leadership to ensure transparency and lasting impact.
//           </>
//         }
//       />

//       <div className="container mx-auto px-4 lg:px-8 mt-16 max-w-7xl">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
//           {trusteesData.map((trustee) => (
//             <div 
//               key={trustee.id} 
//               className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
//             >
//               {/* Image Container */}
//               <div className="relative w-full aspect-square bg-gray-50">
//                 <Image
//                   src={trustee.imageSrc}
//                   alt={`Portrait of ${trustee.name}`}
//                   fill
//                   // Use dynamic position falling back to center
//                   className={`object-cover ${trustee.position || "object-center"}`} 
//                   sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
//                 />
//               </div>

//               {/* Brief Information Container */}
//               <div className="p-4 md:p-6 text-center flex flex-col flex-grow justify-center">
//                 <h3 className="font-bold text-gray-900 text-sm md:text-lg mb-1 leading-tight">
//                   {trustee.name}
//                 </h3>
                
//                 <p className="text-blue-700 text-xs md:text-sm font-semibold mb-3 uppercase tracking-wider">
//                   {trustee.role}
//                 </p>
                
//                 <div className="text-gray-500 text-xs md:text-sm space-y-1 mt-auto">
//                   {/* Empty for now based on your code */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }