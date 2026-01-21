"use client";
import MDHero from './MDHero';
import SubscribeCTA from '../Banner/CTA/subscribe';
import MakeADifference from '../MakeADifference/01';

export default function MakeADonation() {
  return (

    <>

      <MDHero/>


      <MakeADifference
        bgColor={"#FFE08A"}
        title={"Every donation takes us a step closer to another life-saving breakthrough."}
        description={"Help us fund more life-saving cardiac disease research and treatment"}
      />

  
      <SubscribeCTA/>
    </>
  );
}
