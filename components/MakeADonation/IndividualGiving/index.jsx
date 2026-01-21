"use client";
import MDHero from '../MDHero';
import SubscribeCTA from '../../Banner/CTA/subscribe';
import MakeADifference from '../../MakeADifference/01';
import DonateinmemoryorHonour from './DonateMemoryHonour';

export default function IndividualGiving() {
  return (

    <>

        <MDHero
            MDTextTitle={"Individual Giving"}
        />

        <DonateinmemoryorHonour/>

        <MakeADifference
        bgColor={"#ffffff"}
        title={"“I hope our fundraising will help young cardiac patients.”"}
        description={"'Courtney'"}
        textColor={"#223A5C"}
        subTextColor={"#223A5C"}
        />

        <SubscribeCTA/>

    </>
  );
}
