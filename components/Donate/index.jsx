"use client";
import MakeADifference from "../MakeADifference/01";
import SubscribeCTA from "../Banner/CTA/subscribe";
import ProgramsAndServicesSwiper from "../Programs&Services/Swiper";
export default function DonatePage() {
  return (

    <>
    <div
        className="my-[5rem]"
    >
      <MakeADifference/>
    </div>
    <ProgramsAndServicesSwiper/>
    <SubscribeCTA/>
    </>
  );
}
