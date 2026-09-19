"use client";
import React from "react";
import Image from "next/image";

export default function TheNeed() {
  return (
    <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto">
      
      {/* items-center aligns the left and right columns vertically on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Column (Text + Mobile Image) */}
        <div className="flex flex-col">
          <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
          
          <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-6 font-bold">
            The need
          </h2>

          {/* MOBILE IMAGE: Renders directly after the title, hidden on large desktop screens */}
          <div className="relative h-[300px] sm:h-[400px] w-full rounded-sm overflow-hidden mb-8 lg:hidden">
            <Image 
              src="/assets/images/New/Gold_Star_Initiative/1/the_need.jpg"
              alt="Surgery Team" 
              fill 
              className="object-cover object-center" 
            />
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base text-justify w-[95%]">
            <p>
              Across Nigeria, children born with congenital heart disease and adults with valvular, rheumatic and other acquired heart conditions can be cured by surgery. Yet open heart surgery has remained out of reach for most — there are few centres, waits for visiting missions are long, and travelling abroad costs far more than most families will ever have.
            </p>
            <p>
              Without surgery, treatable conditions become progressive heart failure, reduced exercise capacity, missed work and schooling, and preventable death.
            </p>
            <p>
              The Gold Star Cardiac Surgery Initiative exists to close that gap for people who cannot pay: clinical need decides who is helped, and sponsorship follows.
            </p>
          </div>
        </div>

        {/* DESKTOP IMAGE: Hidden on mobile/tablet, shown on the right on large screens */}
        <div className="relative h-[500px] w-full rounded-sm overflow-hidden hidden lg:block">
          <Image 
            src="/assets/images/New/Gold_Star_Initiative/1/the_need.jpg"
            alt="Surgery Team" 
            fill 
            className="object-cover object-center" 
          />
        </div>
        
      </div>
    </section>
  );
}

// "use client";
// import React from "react";
// import Image from "next/image";

// export default function TheNeed() {
//   return (
//     <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto">
      
//       {/* Added items-center to perfectly align the text and image vertically on desktop */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
//         {/* Text Content */}
//         {/* order-last puts text under the image on mobile. lg:order-first keeps it on the left on desktop. */}
//         <div className="order-last lg:order-first">
//           <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
//           <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-6 font-bold">
//             The need
//           </h2>

//         <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-sm overflow-hidden order-first lg:order-last lg:hidden">
//           <Image 
//             src="/assets/images/New/Gold_Star_Initiative/1/the_need.jpg"
//             alt="Surgery Team" 
//             fill 
//             className="object-cover object-center" 
//           />
//         </div>
        
//           <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base text-left">
//             <p>
//               Across Nigeria, children born with congenital heart disease and adults with valvular, rheumatic and other acquired heart conditions can be cured by surgery. Yet open heart surgery has remained out of reach for most — there are few centres, waits for visiting missions are long, and travelling abroad costs far more than most families will ever have.
//             </p>
//             <p>
//               Without surgery, treatable conditions become progressive heart failure, reduced exercise capacity, missed work and schooling, and preventable death.
//             </p>
//             <p>
//               The Gold Star Cardiac Surgery Initiative exists to close that gap for people who cannot pay: clinical need decides who is helped, and sponsorship follows.
//             </p>
//           </div>
//         </div>

//         {/* Image Content */}
//         {/* order-first puts image on top on mobile. lg:order-last puts it on the right on desktop. */}
//         {/* Replaced lg:h-auto with specific responsive heights so the 'fill' property works correctly. */}
//         <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-sm overflow-hidden order-first lg:order-last md:hidden lg:flex">
//           <Image 
//             src="/assets/images/New/Gold_Star_Initiative/1/the_need.jpg"
//             alt="Surgery Team" 
//             fill 
//             className="object-cover object-center" 
//           />
//         </div>
        
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import Image from "next/image";

// export default function TheNeed() {
//   return (
//     <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
//         {/* Text */}
//         <div>
//           <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
//           <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-6 font-bold">The need</h2>
//           <div className="space-y-6 text-gray-700 leading-relaxed text-sm lg:text-base">
//             <p>
//               Across Nigeria, children born with congenital heart disease and adults with valvular, rheumatic and other acquired heart conditions can be cured by surgery. Yet open heart surgery has remained out of reach for most — there are few centres, waits for visiting missions are long, and travelling abroad costs far more than most families will ever have.
//             </p>
//             <p>
//               Without surgery, treatable conditions become progressive heart failure, reduced exercise capacity, missed work and schooling, and preventable death.
//             </p>
//             <p>
//               The Gold Star Cardiac Surgery Initiative exists to close that gap for people who cannot pay: clinical need decides who is helped, and sponsorship follows.
//             </p>
//           </div>
//         </div>
//         {/* Image */}
//         <div className="relative h-[400px] lg:h-auto w-full min-h-[400px]">
//           <Image 
//             // src="/assets/images/surgery-team.jpg" 
//             src="/assets/images/New/Gold_Star_Initiative/1/the_need.jpg"
//             alt="Surgery Team" fill className="object-cover" 
//           />
//         </div>
//       </div>
//     </section>
//   );
// }