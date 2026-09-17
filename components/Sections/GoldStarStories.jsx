"use client";
import React from "react";
import DynamicSplitSection from "../DynamicSplitSection";

export default function GoldStarStories() {
  return (
    <main className="bg-white min-h-screen">
      

      <hr className="border-gray-100" />

      {/* 1. Example: Patient Story (Image on Left, includes table and quote) */}
      <DynamicSplitSection
        imagePosition="left"
        imageSrc="/assets/images/New/Gold_Star_Stories/1/goldstar1.jpeg"
        imageAlt="Patient posing in a yellow shirt"
        preTitle="Gold Star №1"
        title="[Patient name], age [x]"
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
      />


      <hr className="border-gray-100" />
        {/* 2. Example: Patient Story (Image on Left, includes table and quote) */}
      <DynamicSplitSection
        imagePosition="right"
        imageSrc="/assets/images/New/Gold_Star_Stories/1/goldstar2.jpeg"
        imageAlt="Patient posing in a yellow shirt"
        preTitle="Gold Star №1"
        title="[Patient name], age [x]"
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
      />


      <hr className="border-gray-100" />
        {/* 3. Example: Patient Story (Image on Left, includes table and quote) */}
      <DynamicSplitSection
        imagePosition="left"
        imageSrc="/assets/images/New/Gold_Star_Stories/1/goldstar3.jpg"
        imageAlt="Patient posing in a yellow shirt"
        preTitle="Gold Star №1"
        title="[Patient name], age [x]"
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
      />

    </main>
  );
}