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
        title={<>Sponsor a patient</>}
        description="₦15,000,000 covers one patient's complete journey - assessment, open heart surgery, intensive care, and follow-up for a year afterwards. Sponsor one patient, or fund a programme of ten, twenty, or more. Your sponsorship will be fully documented and reported to you."
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