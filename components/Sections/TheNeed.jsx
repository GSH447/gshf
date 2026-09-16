import React from "react";
import Image from "next/image";

export default function TheNeed() {
  return (
    <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Text */}
        <div>
          <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
          <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-6 font-medium">The need</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-sm lg:text-base">
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
        {/* Image */}
        <div className="relative h-[400px] lg:h-auto w-full min-h-[400px]">
          <Image src="/assets/images/surgery-team.jpg" alt="Surgery Team" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}