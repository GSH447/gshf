import React from "react";
import Image from "next/image";

export default function StandingService() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Image */}
        <div className="relative h-[400px] lg:h-[500px] w-full order-2 lg:order-1">
          <Image src="/assets/images/hospital-room.jpg" alt="Hospital Room" fill className="object-cover" />
        </div>
        {/* Text */}
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-6 font-medium">What makes it a standing service</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-sm lg:text-base">
            <p>
              Open heart surgery needs more than a surgeon. It needs theatres equipped for cardiopulmonary bypass, an intensive care unit that can manage a patient through the first critical days, and a hospital around it — imaging, laboratory, pharmacy, blood supply and nursing.
            </p>
            <p>
              Gracespring Hospitals provides that platform, and the cardiac team is permanently based there: surgeons, anaesthetists, perfusionists, intensivists, nurses and allied staff who work together case after case.
            </p>
            <p>
              Because the team stays, the programme is not limited to a surgical window. Patients are operated on when they are ready, and reviewed by the same clinicians long afterwards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}