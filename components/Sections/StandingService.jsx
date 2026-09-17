import React from "react";
import Image from "next/image";

export default function StandingService() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Image */}
        <div className="relative h-[400px] lg:h-[500px] w-full order-2 lg:order-1">
          <Image src="/assets/images/New/Gold_Star_Initiative/1/outstandingService.jpg" alt="Hospital Room" fill className="object-cover" />
        </div>
        {/* Text */}
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-6 font-bold">What makes it a standing service</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-sm lg:text-base">
            
            <div>

            <p>
              Open heart surgery needs more than a surgeon. It needs
            </p>
            
            <p>
              theatres equipped for cardiopulmonary bypass, an intensive
            </p>
            
            <p>
              care unit that can manage a patient through the first critical
            </p>
            
            <p>
              days, and a hospital around it — imaging, laboratory,
            </p>
            
            <p>
              pharmacy, blood supply and nursing.
            </p>

            </div>
            
            <div>

            <p>
              Gracespring Hospitals provides that platform, and the
            </p>
            
            <p>
              cardiac team is permanently based there: surgeons,
            </p>
            
            <p>
              anaesthetists, perfusionists, intensivists, nurses and allied
            </p>
            
            <p>
              staff who work together case after case.
            </p>
            </div>
            
            <div>

            <p>
              Because the team stays, the programme is not limited to a
            </p>
            
            <p>
              surgical window. Patients are operated on when they are
            </p>
            
            <p>
              ready, and reviewed by the same clinicians long afterwards.
            </p>
            </div>

            
          
          </div>
        </div>
      </div>
    </section>
  );
}