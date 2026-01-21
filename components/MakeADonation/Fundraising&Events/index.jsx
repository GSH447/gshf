"use client";
import MDHero from '../MDHero';
import SubscribeCTA from '../../Banner/CTA/subscribe';
import MakeADifference from '../../MakeADifference/01';

export default function FundraisingEvents() {
  return (

    <>

        <MDHero
            MDTextTitle={"Fundraising & Events"}
        />


        <MakeADifference
        bgColor={"#ffffff"}
        title={"“Our fundraising will help young cardiac patients.”"}
        description={"'Courtney'"}
        textColor={"#223A5C"}
        subTextColor={"#223A5C"}
        />

        <SubscribeCTA/>

    </>
  );
}
