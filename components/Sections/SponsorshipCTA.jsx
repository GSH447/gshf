import React from "react";
import Link from "next/link";

export default function SponsorshipCTA() {
  return (
    <section className="bg-[#E3BE50] py-20 px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

        <div
          className="grid space-y-6"
        >


        <div className="space-y-4  mb-5">

          <div>

          <h2 className="text-[#161240] text-3xl md:text-4xl lg:text-[32px] font-serif font-bold leading-tight">
            Stand with a patient who simply needs a chance to live.
          </h2>
          </div>

          <div>

          <p className="text-[#161240]/80 text-base text-justify w-[95%]">
            Sponsor a single patient, or fund a programme of ten, twenty or 
          {/* </p>
          
          <p className="text-[#161240]/80 text-base"> */}
            more. We will design the partnership around what works for you.
          </p>

          </div>
        </div>
        
        <div className="">


        <Link 
          href="/sponsor-a-patient"
          className="bg-primary text-white font-bold py-4 px-8 whitespace-nowrap hover:bg-[#161240]/90 transition-colors"
        >
          See sponsorship options
        </Link>

        </div>


        </div>
        
      </div>
    </section>
  );
}