import React from "react";

export default function SponsorshipGovernance() {
  return (
    <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1420px] mx-auto">
      <h2 className="text-3xl lg:text-4xl font-serif text-[#161240] mb-6 font-medium">How sponsorship is governed</h2>
      <p className="text-gray-700 max-w-3xl mb-12 leading-relaxed">
        Sponsors are entitled to know that their money did what it was given for, and patients are entitled to be treated with dignity. Both are protected by the way the programme is run.
      </p>

      <div className="space-y-8 max-w-4xl">
        <div className="flex gap-4">
          <span className="text-[#E3BE50] mt-1">❖</span>
          <div>
            <h3 className="text-[#161240] font-bold mb-2">Clinical need comes first</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Case selection is clinically driven and documented before any sponsor is matched. No financial interest influences a clinical decision.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-[#E3BE50] mt-1">❖</span>
          <div>
            <h3 className="text-[#161240] font-bold mb-2">Funds are tied to a named case</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Each sponsorship is linked to a defined patient journey with a documented cost breakdown and is reconciled case by case.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-[#E3BE50] mt-1">❖</span>
          <div>
            <h3 className="text-[#161240] font-bold mb-2">Consent governs every story</h3>
            <p className="text-gray-600 text-sm leading-relaxed">No photographs, name or story is published without written consent. Patients may choose to be named, or remain anonymous.</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <span className="text-[#E3BE50] mt-1">❖</span>
          <div>
            <h3 className="text-[#161240] font-bold mb-2">Sponsors receive structured reporting</h3>
            <p className="text-gray-600 text-sm leading-relaxed">A pre-surgery summary, a recovery update, a medical outcome summary, and an annual report for continuing partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}