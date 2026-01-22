"use client";
import MDHero from '../MDHero';
import BannerCard from '../../Banner/Banner';
import SubscribeCTA from '../../Banner/CTA/subscribe';
import MakeADifference from '../../MakeADifference/01';

export default function FundraisingEvents() {
  return (

    <>

        <MDHero
            MDTextTitle={"Fundraising & Events"}
            MDSubImages={"/assets/images/make-a-donation/capital.png"}
            svgBg={"#6890F0"}
        />


        <BannerCard banner={{
          title: "Fundraise for Us",
          caption: `
            Start your own fundraiser or take on a challenge to help provide
            critical heart care for children and families in need.
          `,
          image: "/assets/images/banner/fundraise-for-us.svg",
          display: "row",
          link: "/make-a-donation/fundraise-for-us",
          linkCaption: "Start Fundraising",
          bgColor: "#ECECEC",
        }} />

        <BannerCard banner={{
          title: "Charity Runs & Walks",
          caption: `
            Join a charity run or walk to raise funds, promote heart health,
            and support children affected by cardiac disease.
          `,
          image: "/assets/images/banner/charity-runs.svg",
          display: "row-reverse",
          link: "/make-a-donation/charity-runs-walks",
          linkCaption: "Join an Event",
          bgColor: "#FFFFFF",
        }} />



        <MakeADifference
          bgColor="#ffffff"
          title="“Every step we take and every money raised helps give families hope.”"
          description="— Fundraising Event Participant"
          textColor="#6890F0"
          subTextColor="#6890F0"
        />

        <BannerCard banner={{
          title: "Community Events",
          caption: `
            Community events create powerful opportunities to raise awareness,
            inspire giving, and support life-saving cardiac programs.
          `,
          image: "/assets/images/banner/community-events.svg",
          display: "row",
          link: "/make-a-donation/community-events",
          linkCaption: "Get Involved",
          bgColor: "#ECECEC",
        }} />

        <BannerCard banner={{
          title: "Find or Join an Event",
          caption: `
            Discover upcoming fundraising events or join an existing initiative
            to help save lives through improved cardiac care.
          `,
          image: "/assets/images/banner/find-event.svg",
          display: "row-reverse",
          link: "/make-a-donation/events",
          linkCaption: "Find an Event",
          bgColor: "#FFFFFF",
        }} />





        <SubscribeCTA/>

    </>
  );
}
