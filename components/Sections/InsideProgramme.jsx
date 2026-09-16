import React from "react";
import Image from "next/image";

export default function InsideProgramme() {
  return (
    <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto">
      <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
      <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-4 font-medium">Inside the programme</h2>
      <p className="text-gray-700 mb-12 max-w-3xl">
        Theatre, intensive care and recovery at Gracespring Hospitals. Photographs published with the written consent of the patients and families concerned.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-[300px] w-full">
          <Image src="/assets/images/program-1.jpg" alt="Recovery Room" fill className="object-cover" />
        </div>
        <div className="relative h-[300px] w-full">
          <Image src="/assets/images/program-2.jpg" alt="Surgery" fill className="object-cover" />
        </div>
        <div className="relative h-[300px] w-full">
          <Image src="/assets/images/program-3.jpg" alt="Patient recovering" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}