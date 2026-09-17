"use client";
import React from "react";
// Add an extra '../' to all component imports to step out of the 'src' folder
import PageHero from "../../../components/Hero";
import TheNeed from "../../../components/Sections/TheNeed";
import StandingService from "../../../components/Sections/StandingService";
import WhoWeHelp from "../../../components/Sections/WhoWeHelp";
import SponsorshipGovernance from "../../../components/Sections/SponsorshipGovernance";
import CarePathway from "../../../components/Sections/CarePathway";
import InsideProgramme from "../../../components/Sections/InsideProgramme";
import FundAnOperation from "../../../components/Sections/FundAnOperation";

export default function TheGoldStarInitiative() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero 
        title={<>The Gold Star Cardiac<br />Surgery Initiative</>}
        description={<>A permanent open heart surgery programme at Gracespring Hospitals, Lagos — <br/>funded, case by case, for Nigerians who need cardiac surgery and cannot afford it.</>}
      />
      
      <TheNeed />
      <WhoWeHelp />
      <StandingService />
      <CarePathway />
      <InsideProgramme />
      <SponsorshipGovernance />
      <FundAnOperation />
    </main>
  );
}