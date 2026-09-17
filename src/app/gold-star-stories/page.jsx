"use client";
import React from "react";
// Add an extra '../' to all component imports to step out of the 'src' folder
import PageHero from "../../../components/Hero";
import GoldStarStories from "../../../components/Sections/GoldStarStories";
import SponsorshipGoldStar from "../../../components/Sections/SponsorshipGoldStar";
import Stories from "../../../components/Sections/Stories";
import FirstSeries from "../../../components/Sections/FirstSeries";

export default function TheGoldStarInitiative() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero 
        title={<>Gold Star stories</>}
        description={<>Every patient sponsored through the initiative is a Gold Star. These are the<br />people behind our first open heart operations - what was wrong , what was<br />done, and where we are now. </>}
      />
      
      <GoldStarStories />
      <FirstSeries />
      <Stories />
      <SponsorshipGoldStar />
      
    </main>
  );
}