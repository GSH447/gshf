"use client";
import React from "react";

export default function WaysToSponsor() {
  const sponsorshipLevels = [
    {
      id: "1",
      title: "Gold Star Sponsor",
      subTitle: "One patient · ₦15,000,000",
      features: [
        "A named Gold Star patient",
        "Pre-surgery case summary",
        "Recovery and outcome report",
        "Recognition as a sponsor of the Initiative",
      ],
      highlight: true,
    },
    {
      id: "2",
      title: "Hope Sponsor",
      subTitle: "Two patients · ₦30,000,000",
      features: [
        "Everything in Gold Star Sponsor",
        "Shared impact update",
        "Employee and stakeholder engagement",
      ],
      highlight: false,
    },
    {
      id: "3",
      title: "Corporate Partner",
      subTitle: "Three to nine patients annually",
      features: [
        "Annual impact report",
        "Featured Wall of Hope recognition",
        "Reporting aligned to your CSR cycle",
      ],
      highlight: false,
    },
    {
      id: "4",
      title: "Legacy Partner",
      subTitle: "Ten or more patients annually",
      features: [
        "Delivered through the Gold Star Cardiac Surgery Initiative Fund",
        "An ongoing, recurring flow of funded care",
        "Bespoke reporting and recognition structure",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-6 md:px-12 lg:px-24 xl:px-32 mx-auto bg-gray-50/50">
      <div className="max-w-[1420px] mx-auto">
        
        {/* Intro Header */}
        <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
        <h2 className="text-3xl lg:text-4xl font-serif text-black mb-6 font-bold">
          Ways to sponsor
        </h2>
        <p className="max-w-2xl text-gray-700">
          Start with a single patient or commit to an ongoing programme. Each level carries
        </p>
        <p className="mb-12 max-w-2xl text-gray-700">
          the same standard of reporting.
        </p>

        {/* Sponsorship Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 border border-gray-200 bg-white mb-10">
          {sponsorshipLevels.map((item) => (
            <div
              key={item.id}
              className={`relative p-6 xl:p-8 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-200 last:border-0 ${
                item.highlight ? "bg-[#FCFBF5]" : "bg-white"
              }`}
            >
              {/* Gold Top Border for Highlighted Card */}
              {item.highlight && (
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#E3BE50]" />
              )}

              <h3 className="text-black font-bold font-serif text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-[#3F3A66] text-sm md:text-base font-medium mb-6">
                {item.subTitle}
              </p>

              <ul className="space-y-4 mt-auto">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* Custom Gold Bullet */}
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E3BE50] mt-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="pl-5 border-l-[3px] border-[#E3BE50]">
          <p className="text-gray-600 max-w-4xl text-sm md:text-base leading-relaxed">
            For programmes of any size — including sponsorship of 20, 50 or more patients — 
          </p>
          
          <p className="text-gray-600 max-w-4xl text-sm md:text-base leading-relaxed"> 
            the Foundation and Gracespring Hospitals will design a partnership structure to 
          </p>

          <p className="text-gray-600 max-w-4xl text-sm md:text-base leading-relaxed">
            match your budget and reporting needs.
          </p>
        </div>

      </div>
    </section>
  );
}

// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function WaysToSponsor() {
//   return (
//     <section className="py-16 lg:py-24 px-6 md:px-12 lg:px-24 xl:px-32 mx-auto bg-gray-50/50">


//       <div className="max-w-[1420px] mx-auto">
//         <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
//         <h2 className="text-3xl lg:text-4xl font-serif text-black mb-6 font-bold">Ways to sponsor</h2>
//         <p className="max-w-2xl">
//           Start with a single patient or commit to an ongoing programme. Each levels carries
//         </p>
//           <p className="mb-16 max-w-2xl">
//           the same standard of reporting.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {[
//             { 
//               id: "1", 
//               title: "Gold Star Sponsor", 
//               subTitle: "One patient ₦15,000,000",
//               text: "Born with congenital heart disease — including septal defects, patent ductus arteriosus and Tetralogy of Fallot." 
//             },

//             { 
//               id: "2", 
//               title: "Hope Sponsor", 
//               subTitle: "Two patient ₦30,000,000",
//               text: "With acquired heart disease — rheumatic and degenerative valve disease, and other conditions correctable by surgery." 
//             },
//             { 
//               id: "3", 
//               title: "Cooprate Partner", 
//               subTitle: "Three to nine patients annually",
//               text: "Every case is selected on clinical grounds and documented before any sponsor is matched to it." 
//             },
//             { 
//               id: "4", 
//               title: "Legacy Partner", 
//               subTitle: "Ten or more patients annually",
//               text: "Sponsored patients and their families are asked for nothing towards the cost of their care." 
//             }
//           ].map((item) => (
//             // <div key={item.id} className="border-t border-[#E3BE50] pt-6">
            
//           <div key={item.id} className="pt-6">
            
//             <div key={item.id} className="border-2 border-[#E3BE50] w-5 "/>
//               <span className="text-[#E3BE50] font-serif text-xl block mb-2">{item.id}</span>
//               <h3 className="text-black font-bold font-serif text-lg mb-3">{item.title}</h3>
//               <p className="text-[#2B0F80] text-sm leading-relaxed">{item.subTitle}</p>
//               {/* <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p> */}
//               <div className=" w-[80%]">
//               <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>


//     </section>
//   );
// }