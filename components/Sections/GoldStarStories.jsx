"use client";
import React from "react";
import DynamicSplitSection from "../DynamicSplitSection";

export default function GoldStarStories() {
  return (
    <main className="bg-white min-h-screen">
      

      <hr className="border-gray-100" />
        {/* 2. Example: Patient Story (Image on Left, includes table and quote) */}
      <DynamicSplitSection
        imagePosition="right"
        imageSrc="/assets/images/new/Gold_Star_Stories/1/goldstar2.jpeg"
        imageAlt="Patient posing in a yellow shirt"
        preTitle="Gold Star №1"
        title="Azeezat Adedokun, 8 yrs"
        detailsTable={[
          { label: "Condition", value: "Congenital heart defect" },
          { label: "Procedure", value: "Open heart repair" },
          { label: "Sponsored by", value: "Marine Platforms Limited and Global Health Charity and Training Foundation Inc." },
          { label: "Status", value: "Recovered and home with her family" }
        ]}
        paragraphs={[
          "I am very apperciate for all what Gracespring Hospital did in my family life so grateful"
        ]}
        quote="I Azeezat Adedokun am now relief I say a very big thanks"
      />
      

      
      
      <hr className="border-gray-100" />

      {/* 3. Example: Patient Story (Image on Left, includes table and quote) */}
      <DynamicSplitSection
        imagePosition="left"
        imageSrc="/assets/images/new/Gold_Star_Stories/1/goldstar3.jpg"
        imageAlt="Patient posing in a yellow shirt"
        preTitle="Gold Star №3"
        title="Adegun Alaba, 45Y"
        detailsTable={[
          { label: "Condition", value: "Congenital heart defect" },
          { label: "Procedure", value: "Open heart repair" },
          { label: "Sponsored by", value: "Marine Platforms Limited and Global Health Charity and Training Foundation Inc." },
          { label: "Status", value: "Recovered and home with her family" }
        ]}
        paragraphs={[
          "I Adegun Alaba my apperciation goes to the entire Gracespring Hospital for heart surgery and it was done free of charge, I'm very greatful to the Gracespring Health Foundation and the doctors also the nurses God will be with you and your families. My families also greatful to Gracespring Hospitals, the Lord will meet you at your point of needs."
        ]}
        quote="I really apperciate the Gracespring Health Foundation and Gracespring Hospitals God will continue to bless and lift you people more than expectations Amen."
      />





      <hr className="border-gray-100" />

      {/* 2. Example: Patient Story (Image on Left, includes table and quote) */}
      <DynamicSplitSection
        imagePosition="right"
        imageSrc="/gshf.jpg"
        imageAlt="Patient posing in a yellow shirt"
        preTitle="Gold Star №2"
        title="Elizabeth Oshikomaya, 8Y"
        detailsTable={[
          { label: "Condition", value: "Congenital heart defect" },
          { label: "Procedure", value: "Open heart repair" },
          { label: "Sponsored by", value: "Marine Platforms Limited and Global Health Charity and Training Foundation Inc." },
          { label: "Status", value: "Recovered and home with her family" }
        ]}
        paragraphs={[
          "On behalf of Elizabeth Oshikomaya and my family we want to say a big thank you to Gracespring and team member for helping us save our daughter by restoring her sound health. God bless you all"
        ]}
        quote="Thank you all for the care and support"
      />



      {/* <hr className="border-gray-100" /> */}
        {/* 2. Example: Patient Story (Image on Left, includes table and quote) */}
      {/* <DynamicSplitSection
        imagePosition="right"
        imageSrc="/assets/images/New/Gold_Star_Stories/1/goldstar2.jpeg"
        imageAlt="Patient posing in a yellow shirt"
        preTitle="Gold Star №2"
        title="Azeezat Adedokun, 8 yrs"
        detailsTable={[
          { label: "Condition", value: "Congenital heart defect" },
          { label: "Procedure", value: "Open heart repair" },
          { label: "Sponsored by", value: "Marine Platforms Limited and Global Health Charity and Training Foundation Inc." },
          { label: "Status", value: "Recovered and home with her family" }
        ]}
        paragraphs={[
          "I am very apperciate fro all what Gracespring Hospital did in my family life so grateful"
        ]}
        quote="I Azeezat Adedokun am now relief I say a very big thanks"
      /> */}


      {/* <hr className="border-gray-100" /> */}
        {/* 3. Example: Patient Story (Image on Left, includes table and quote) */}
      {/* <DynamicSplitSection
        imagePosition="left"
        imageSrc="/assets/images/New/Gold_Star_Stories/1/goldstar3.jpg"
        imageAlt="Patient posing in a yellow shirt"
        preTitle="Gold Star №3"
        title="Alaba Adegun, 45Y"
        detailsTable={[
          { label: "Condition", value: "Congenital heart defect" },
          { label: "Procedure", value: "Open heart repair" },
          { label: "Sponsored by", value: "Marine Platforms Limited and Global Health Charity and Training Foundation Inc." },
          { label: "Status", value: "Recovered and home with her family" }
        ]}
        paragraphs={[
          "[Two or three sentences in the family's words, or GHF's, describing what life was like before surgery — breathlessness, missed school, repeated admissions — and what the diagnosis meant for the family financially.]",
          "[What happened at Gracespring: assessment, the operation, days in intensive care, the first time she sat up, the day she went home.]"
        ]}
        quote="[A short quote from the parent or patient, in their own words, taken from the acknowledgement letter with gratitude.]"
      /> */}

    </main>
  );
}