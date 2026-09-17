"use client";
import React from "react";
// Add an extra '../' to all component imports to step out of the 'src' folder
import PageHero from "../../../components/Hero";
import SponsorAmount from "../../../components/Sections/SponsorAmount";
import WaysToSponsor from "../../../components/Sections/WaysToSponsor";
import WhatASponsorGet from "../../../components/Sections/WhatASponsorGet";
import WhatWeSendYou from "../../../components/Sections/WhatWeSendYou";
import SponsorList1 from "../../../components/Sections/SponsorsList1";
import TalkToUsAboutSponsoring from "../../../components/Sections/TalkToUsAboutSponsoring";

export default function TheGoldStarInitiative() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero 
        title={<>Sponsor a patient</>}
        description="₦15,000,000 covers one patient's complete journey - assessment, open heart surgery, intensive care, and follow-up for a year afterwards. Sponsor one patient, or fund a programme of ten, twenty, or more. Your sponsorship will be fully documented and reported to you."
      />
      
      <SponsorAmount />
      <WaysToSponsor />
      <WhatASponsorGet />
      <WhatWeSendYou />
      <SponsorList1 />
      <TalkToUsAboutSponsoring />
    </main>
  );
}