"use client";
import React from "react";
import Image from "next/image";

export default function FirstSeries() {
  // Store the data here to keep the JSX clean
  const seriesImages = [
    { id: 1, src: "/assets/images/New/first_series_program/1.jpg", caption: "Waking up in intensive care." },
    { id: 2, src: "/assets/images/New/first_series_program/2.jpg", caption: "Sitting up two (2) days after open heart surgery." },
    { id: 3, src: "/assets/images/New/first_series_program/3.jpg", caption: "The team with a patient who has turned the corner." },
    { id: 4, src: "/assets/images/New/first_series_program/4.jpg", caption: "Discharge day" },
    { id: 5, src: "/assets/images/New/first_series_program/5.jpg", caption: "Patients, families and clinicians before going home." },
    { id: 6, src: "/assets/images/New/first_series_program/6.jpeg", caption: "A Gold Star and the team that cared for her." },
  ];

  return (
    <section className="bg-primary py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 mx-auto">
      <div className="max-w-[1420px] mx-auto">
        
        <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
        
        <h2 className="text-3xl lg:text-4xl font-serif text-white mb-4 font-bold">
          Moments from the first series
        </h2>
        
        <div className="mb-12">
          <p className="text-gray-200 max-w-3xl text-sm md:text-base leading-relaxed">
            From the ward round on the morning of surgery to the day the last patient walked 
            out of the front door.
          </p>
        </div>

        {/* gap-y-12 adds vertical space so the captions don't hit the next row of images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-12">
          
          {seriesImages.map((item) => (
            <div key={item.id} className="w-full flex flex-col">
              
              {/* 1. Image Container: ONLY the image is absolute inside this relative box */}
              <div className="relative h-[300px] w-full mb-4 rounded-sm overflow-hidden">
                <Image 
                  src={item.src} 
                  alt={item.caption} 
                  fill 
                  className="object-cover" 
                />
              </div>

              {/* 2. Text Container: Sits safely beneath the image */}
              <div>
                <p className="text-white text-sm md:text-base font-medium">
                  {item.caption}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

// import React from "react";
// import Image from "next/image";

// export default function FirstSeries() {
//   return (
//     <section className="bg-primary py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 mx-auto">
//       <div className="w-12 h-[3px]" />
//         <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
//       <h2 className="text-3xl lg:text-4xl font-serif text-white mb-4 font-bold">Moments from the first series</h2>
//       <div>
//       <p className="text-white max-w-3xl">
//         From the ward round on the morning of surgery to the day last patient walked 
//       </p>
//       <p className="text-white mb-12 max-w-3xl">
//         out of the front door.
//       </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-2 border-[red]">

//         <div className="relative h-[300px] w-full grid border-2 border-[red]">

//           <div className=" border-2 border-[red]">

//             <Image 
//               src="/assets/images/New/first_series_program/1.jpg" 
//               alt="Recovery Room" 
//               fill 
//               className="object-cover" 
//             />
//           </div>

//           <div className=" border-2 border-[red]">
//             <p className="text-white">
//               Walking up in the intensive care.
//             </p>
//           </div>

//         </div>

//         <div className="relative h-[300px] w-full">
          
//           <div>

//             <Image 
//               src="/assets/images/New/first_series_program/2.jpg" 
//               alt="Recovery Room" 
//               fill 
//               className="object-cover" 
//             />
//           </div>
          

//           <div>
//             <p className="text-white">
//               Sitting up two(2) days after open heart surgery.
//             </p>
//           </div>

//         </div>

//         <div className="relative h-[300px] w-full">
          
//           <div>

//             <Image 
//               src="/assets/images/New/first_series_program/3.jpg" 
//               alt="Recovery Room" 
//               fill 
//               className="object-cover" 
//             />

//           </div>
          
//           <div>
//             <p>
//               The team with a patient who has turned the corner.
//             </p>
//           </div>


//         </div>

        
//         <div className="relative h-[300px] w-full">

//           <div>

//             <Image 
//               src="/assets/images/New/first_series_program/4.jpg" 
//               alt="Recovery Room" 
//               fill 
//               className="object-cover" 
//             />
//           </div>

//           <div>
//             <p className="text-black">
//               Discharge day
//             </p>
//           </div>

//         </div>

//         <div className="relative h-[300px] w-full">
          
//           <div>

//             <Image 
//               src="/assets/images/New/first_series_program/5.jpg" 
//               alt="Recovery Room" 
//               fill 
//               className="object-cover" 
//             />
//           </div>
          
//           <div>
//             <p>
//               Patients, families and clinicians before going home.
//             </p>
//           </div>

//         </div>

//         <div className="relative h-[300px] w-full">
          
//           <div>

//             <Image 
//               src="/assets/images/New/first_series_program/6.jpeg" 
//               alt="Recovery Room" 
//               fill 
//               className="object-cover" 
//             />

//           </div>
          
//           <div>
//             <p>
//               A Gold Star and the team that cared for her.
//             </p>
//           </div>


//         </div>

//       </div>

//     </section>
//   );
// }