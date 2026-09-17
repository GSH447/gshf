"use client";
import React from "react";

export default function SponsorAmount() {
  const tableData = [
    { stage: "Before surgery", desc: "Echocardiography, CT imaging where indicated, laboratory investigations and specialist cardiac review and pre-operative preparation." },
    { stage: "Surgery", desc: "Open heart surgery with cardiopulmonary bypass, theatre and anesthetic care, cardiac consumables, and blood support as required." },
    { stage: "After surgery", desc: "Intensive care management, ward recovery, physiotherapy, post-operative medication and repeat investigations." },
    { stage: "Sponsor matching", desc: "Only after the case is clinically confirmed is it matched to a sponsor or to the Gold Star Cardiac Surgery Initiative Fund." },
    { stage: "Going home", desc: "Six to twelve months of follow-up with the same cardiac team, and practical support for the family throughout." },
  ];
    
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-[1420px] mx-auto">
        
        {/* Header section */}
        <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
        <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-4 font-bold">
          What ₦15,000,000 pays for
        </h2>
        
        <div className="mb-10">
          <p className="text-gray-700 text-base md:text-lg">
            A sponsorship funds a patient, not a procedure. Nothing in this list is billed to the family.
          </p>
        </div>

        {/* Table section */}
        <div className="w-full text-left overflow-x-auto mb-8 border border-gray-200">
          <div className="min-w-[700px]">
            {/* Table Header */}
            <div className="bg-primary text-white flex py-4 px-6 font-bold text-sm md:text-base">
              <div className="w-1/3">Stage of care</div>
              <div className="w-2/3">Included</div>
            </div>
            
            {/* Table Body with alternating row colors */}
            {tableData.map((row, i) => (
              <div 
                key={i} 
                className={`flex items-center py-6 px-6 border-t border-gray-200 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#F5F5F8]"
                }`}
              >
                <div className="w-1/3 font-bold text-[#161240] text-sm md:text-base pr-4">
                  {row.stage}
                </div>
                <div className="w-2/3 text-gray-700 text-sm md:text-base leading-relaxed">
                  {row.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="flex items-start gap-4 mt-8">
          <div className="w-1 h-12 bg-[#E3BE50] shrink-0 mt-1" />
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            A case-specific clinical and financial breakdown is prepared for every patient and<br className="hidden md:block" /> 
            shared with the sponsor before funds are committed.
          </p>
        </div>
      </div>
    </section>
  );
}

// import React from "react";
// import Image from "next/image";

// export default function SponsorAmount() {

//   const tableData = [
//     { stage: "Before surgery", desc: "Echocardiography, CT imaging where indicated, laboratory investigations and specialist cardiac review and pre-operative preparation." },
//     { stage: "Surgery", desc: "Open heart surgery with cardiopulmonary bypass, theatre and anesthetic care, cardiac consumables, and blood support as required." },
//     { stage: "After surgery", desc: "Intensive care management, ward recovery, physiotherapy, post-operative medication and repeat investigations." },
//     { stage: "Sponsor matching", desc: "Only after the case is clinically confirmed is it matched to a sponsor or to the Gold Star Cardiac Surgery Initiative Fund." },
//     { stage: "Going home", desc: "Six to twelve months of follow-up with the same cardiac team, and pratical support for the family throughout." },
//   ];
    
//     return (
//     <section className="py-20 px-6 md:px-12 lg:px-24 xl:px-32">
//       <div className="max-w-[1420px] mx-auto">
//         <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />

//         <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-4 font-bold">What ₦15,000,000 pays for</h2>
        
//         <div>
//         <p className="text-gray-700">A sponsorship funds a patient, not a procedure. Nothing in this list is billed to the </p>
//         <p className="text-gray-700 mb-5">family.</p>

//         </div>

//         <div className="w-full text-left overflow-x-auto">
//           <div className="min-w-[700px]">
//             <div className="bg-primary text-white flex py-4 px-6 font-bold text-sm">
//               <div className="w-1/3">Stage of care</div>
//               <div className="w-2/3">Included</div>
//             </div>
//             {tableData.map((row, i) => (
//               <div key={i} className="flex py-6 px-6 border-b border-gray-200 bg-white">
//                 <div className="w-1/3 font-bold text-[#161240] text-sm pr-4 font-bold">{row.stage}</div>
//                 <div className="w-2/3 text-gray-700 text-sm">{row.desc}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="flex mt-5">

//         <div className="w-1 h-[65px] bg-[#E3BE50]"/>

//         <div className="px-2 py-2">
          
//           <p>A case-specific clinical and financial breakdown is prepared for every patient and</p>
//           <p>shared with the sponsor before funds is committed.</p>

//         </div>

//       </div>
//     </section>
//   );




// }