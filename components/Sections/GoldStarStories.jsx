"use client";
import React from "react";
import DynamicSplitSection from "../DynamicSplitSection";

export default function GoldStarStories() {
  return (
    <main className="bg-white min-h-screen">
      
      <hr className="border-gray-100" />
      
      {/* 1. Example: Patient Story */}
      <DynamicSplitSection
        imagePosition="right"
        imageSrc="/assets/images/New/Gold_Star_Stories/1/goldstar2.jpeg"
        imageAlt="Patient posing in a yellow shirt"
        preTitle="Gold Star №1"
        title="Azeezat Adedokun, 8 yrs"
        detailsTable={[
          { label: "Condition", value: "Congenital heart defect" },
          { label: "Procedure", value: "Open heart repair - VSD Closure" },
          { label: "Sponsored by", value: "Marine Platforms Limited and Global Health Charity and Training Foundation Inc." },
          { label: "Status", value: "Recovered and home with her family" }
        ]}
        paragraphs={[
          "I am very apperciate for all what Gracespring Hospital did in my family life so grateful"
        ]}
        quote="I Azeezat Adedokun am now relief I say a very big thanks"
      />
      
      <hr className="border-gray-100" />

      {/* 2. Example: Patient Story */}
      <DynamicSplitSection
        imagePosition="left"
        imageSrc="/assets/images/New/Gold_Star_Stories/1/goldstar3.jpg"
        imageAlt="Patient posing in a yellow shirt"
        imageFraming="object-[50%_25%]" // <-- Custom framing passed here
        preTitle="Gold Star №2"
        title="Adegun Alaba, 45Y"
        detailsTable={[
          { label: "Condition", value: "Congenital heart defect" },
          { label: "Procedure", value: "Open heart repair - ASD Closure" },
          { label: "Sponsored by", value: "Marine Platforms Limited and Global Health Charity and Training Foundation Inc." },
          { label: "Status", value: "Recovered and home with her family" }
        ]}
        paragraphs={[
          "I Adegun Alaba my apperciation goes to the entire Gracespring Hospital for heart surgery and it was done free of charge, I'm very greatful to the Gracespring Health Foundation and the doctors also the nurses God will be with you and your families. My families also greatful to Gracespring Hospitals, the Lord will meet you at your point of needs."
        ]}
        quote="I really apperciate the Gracespring Health Foundation and Gracespring Hospitals God will continue to bless and lift you people more than expectations Amen."
      />

      <hr className="border-gray-100" />

      {/* 3. Example: Patient Story */}
      <DynamicSplitSection
        imagePosition="right"
        imageSrc="/assets/images/New/Gold_Star_Stories/1/elizabeth.jpeg"
        imageFraming="object-top" // <-- Custom framing passed here
        imageAlt="Patient posing in a yellow shirt"
        preTitle="Gold Star №3"
        title="Elizabeth Oshikomaya, 8Y"
        detailsTable={[
          { label: "Condition", value: "Congenital heart defect" },
          { label: "Procedure", value: "Open heart repair - AVSD repair" },
          { label: "Sponsored by", value: "Marine Platforms Limited and Global Health Charity and Training Foundation Inc." },
          { label: "Status", value: "Recovered and home with her family" }
        ]}
        paragraphs={[
          "On behalf of Elizabeth Oshikomaya and my family we want to say a big thank you to Gracespring and team member for helping us save our daughter by restoring her sound health. God bless you all"
        ]}
        quote="Thank you all for the care and support"
      />

    </main>
  );
}

