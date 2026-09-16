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

export default function TheGoldStarInitiative() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero 
        title={<>Gold Star stories</>}
        description={<>Every patient sponsored through the initiative is a Gold Star. These are the<br />people behind our first open heart operations - what was wrong , what was<br />done, and where we are now. </>}
      />
      
      <TheNeed />
      <StandingService />
      <WhoWeHelp />
      <SponsorshipGovernance />
      <CarePathway />
      <InsideProgramme />
    </main>
  );
}