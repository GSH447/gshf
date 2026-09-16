import React from "react";

export default function CarePathway() {
  const tableData = [
    { stage: "Referral and screening", desc: "A patient is identified through clinic, community referral or an outreach partner, and assessed for suitability." },
    { stage: "Diagnosis", desc: "Echocardiography, CT imaging where indicated, laboratory investigations and specialist cardiac review." },
    { stage: "Financial and social assessment", desc: "The Foundation confirms that the family cannot meet the cost of care, and records the case for sponsorship." },
    { stage: "Sponsor matching", desc: "Only after the case is clinically confirmed is it matched to a sponsor or to the Gold Star Cardiac Surgery Initiative Fund." },
  ];

  return (
    <section className="bg-gray-50/50 py-20 px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-[1420px] mx-auto">
        <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
        <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-4 font-medium">The care pathway</h2>
        <p className="text-gray-700 mb-12">Every sponsored patient follows the same documented pathway, from first assessment to long-term review.</p>

        <div className="w-full text-left overflow-x-auto">
          <div className="min-w-[700px]">
            <div className="bg-primary text-white flex py-4 px-6 font-bold text-sm">
              <div className="w-1/3">Stage</div>
              <div className="w-2/3">What it involves</div>
            </div>
            {tableData.map((row, i) => (
              <div key={i} className="flex py-6 px-6 border-b border-gray-200 bg-white">
                <div className="w-1/3 font-bold text-[#161240] text-sm pr-4">{row.stage}</div>
                <div className="w-2/3 text-gray-700 text-sm">{row.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}