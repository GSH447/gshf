import React from "react";
import Link from "next/link";

export default function SponsorshipGoldStar() {
  return (
    <section className=" bg-[#E3BE50] py-20 px-6 md:px-12 lg:px-24 xl:px-32">
      <div className=" mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">



          <div className=" space-y-4">

            <div>

            <h2 className="text-[#161240] text-3xl md:text-4xl lg:text-[32px] font-serif font-bold leading-tight">
              The next Gold Star is waiting for a sponsor.
            </h2>
            </div>

            <div>

            <p className="text-[#161240]/80 text-base">
              There are patients assessed, ready for surgery, and waiting only for 
            </p>
            
            <p className="text-[#161240]/80 text-base">
              their care to be funded.
            </p>

            </div>
          </div>
          
          <div className="">


          <Link 
            href="/sponsor-a-patient"
            className="bg-primary text-white font-bold py-4 px-8 whitespace-nowrap hover:bg-[#161240]/90 transition-colors"
          >
            Sponsor a patient
          </Link>

          </div>


        
      </div>
    </section>
  );
}