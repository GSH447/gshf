import React from "react";

export default function WhoWeHelp() {
  return (
    <section className="bg-primary py-24 px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-[1420px] mx-auto">
        <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
        <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6 font-medium">Who we help</h2>
        <p className="text-gray-300 mb-16 max-w-2xl">
          One criterion decides eligibility: a Nigerian who needs cardiac surgery and cannot afford it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { id: "1", title: "Children", text: "Born with congenital heart disease — including septal defects, patent ductus arteriosus and Tetralogy of Fallot." },
            { id: "2", title: "Adults", text: "With acquired heart disease — rheumatic and degenerative valve disease, and other conditions correctable by surgery." },
            { id: "3", title: "Assessed clinically", text: "Every case is selected on clinical grounds and documented before any sponsor is matched to it." },
            { id: "4", title: "Supported fully", text: "Sponsored patients and their families are asked for nothing towards the cost of their care." }
          ].map((item) => (
            <div key={item.id} className="border-t border-[#E3BE50] pt-6">
              <span className="text-[#E3BE50] font-serif text-xl block mb-2">{item.id}</span>
              <h3 className="text-white font-bold font-serif text-lg mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}