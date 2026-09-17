"use client";
import React from "react";
import Image from "next/image";

export default function InsideProgramme() {
  // Store your images and captions here to keep the code clean
  const programImages = [
    { id: 1, src: "/assets/images/New/inside_program/1.jpg", caption: "Team brief at the bedside before a case begins." },
    { id: 2, src: "/assets/images/New/inside_program/2.jpg", caption: "Open heart surgery under way in theatre." },
    { id: 3, src: "/assets/images/New/inside_program/3.jpg", caption: "The first hours after surgery, in intensive care." },
    { id: 4, src: "/assets/images/New/inside_program/4.jpg", caption: "Breathing excerises begin within days of surgery." },
    { id: 5, src: "/assets/images/New/inside_program/5.jpg", caption: "Daily review by the cardiac team." },
    { id: 6, src: "/assets/images/New/inside_program/6.jpg", caption: "Recovery on the ward, a few days after" },
  ];

  return (
    <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto">
      
      <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
      
      <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-4 font-bold">
        Inside the programme
      </h2>
      
      <div className="mb-12">
        <p className="text-gray-700 max-w-3xl">
          Theatre, intensive care and recovery at Gracespring Hospitals. Photographs 
        </p>
        <p className="text-gray-700 max-w-3xl">
          published with the written consent of the patients and families concerned.
        </p>
      </div>

      {/* gap-y-12 adds extra vertical space between rows to make room for captions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-12">
        
        {programImages.map((item) => (
          <div key={item.id} className="w-full flex flex-col">
            
            {/* 1. Image Container: ONLY the image goes inside this relative box */}
            <div className="relative h-[300px] w-full mb-4">
              <Image 
                src={item.src} 
                alt={item.caption || "Inside the programme"} 
                fill 
                className="object-cover" 
              />
            </div>
            
            {/* 2. Text Container: Sits safely beneath the image */}
            {item.caption && (
              <div>
                <p className="text-[#161240] font-medium text-sm md:text-base">
                  {item.caption}
                </p>
              </div>
            )}
            
          </div>
        ))}

      </div>
    </section>
  );
}
// import React from "react";
// import Image from "next/image";

// export default function InsideProgramme() {
//   return (
//     <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto">
//       <div className="w-12 h-[3px]" />
//       <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-4 font-bold">Inside the programme</h2>
//       <div>
//       <p className="text-gray-700 max-w-3xl">
//         Theatre, intensive care and recovery at Gracespring Hospitals. Photographs 
//       </p>
//       <p className="text-gray-700 mb-12 max-w-3xl">
//         published with the written consent of the patients and families concerned.
//       </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-2 border-[red]">

//         <div className="relative h-[300px] w-full border-2 border-[red] grid">

//           <div className=" border-2 border-[red]">

//             <Image 
//               src="/assets/images/New/inside_program/1.jpg" 
//               alt="Recovery Room" 
//               fill 
//               className="object-cover" 
//             />
//           </div>

//           <div className=" border-2 border-[red]">
//             <p className="text-black">
//               Team brief at the bedside before a case begins
//             </p>
//           </div>

//         </div>

//         <div className="relative h-[300px] w-full">
          
//           <div>

//             <Image 
//               src="/assets/images/New/inside_program/2.jpg" 
//               alt="Recovery Room" 
//               fill 
//               className="object-cover" 
//             />
//           </div>
          
//           <div>
            
//           </div>

//         </div>

//         <div className="relative h-[300px] w-full">
          
//           <div>

//             <Image 
//               src="/assets/images/New/inside_program/3.jpg" 
//               alt="Recovery Room" 
//               fill 
//               className="object-cover" 
//             />

//           </div>
          
//           <div>
            
//           </div>


//         </div>

        
//         <div className="relative h-[300px] w-full">

//           <div>

//             <Image 
//               src="/assets/images/New/inside_program/4.jpg" 
//               alt="Recovery Room" 
//               fill 
//               className="object-cover" 
//             />
//           </div>

//           <div>
//             <p className="text-black">
//               Team brief at the bedside before a case begins
//             </p>
//           </div>

//         </div>

//         <div className="relative h-[300px] w-full">
          
//           <div>

//             <Image 
//               src="/assets/images/New/inside_program/5.jpg" 
//               alt="Recovery Room" 
//               fill 
//               className="object-cover" 
//             />
//           </div>
          
//           <div>
            
//           </div>

//         </div>

//         <div className="relative h-[300px] w-full">
          
//           <div>

//             <Image 
//               src="/assets/images/New/inside_program/6.jpg" 
//               alt="Recovery Room" 
//               fill 
//               className="object-cover" 
//             />

//           </div>
          
//           <div>
            
//           </div>


//         </div>

//       </div>

//     </section>
//   );
// }