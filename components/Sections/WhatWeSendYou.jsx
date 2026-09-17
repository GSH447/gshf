import React from "react";

export default function WhatWeSendYou() {
  return (
    <section className="bg-primary py-24 px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-[1420px] mx-auto">
        <div className="w-12 h-[3px] bg-[#E3BE50] mb-6" />
        <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6 font-bold">What we send you</h2>
        <p className="text-gray-300 mb-16 max-w-2xl">
          Every sponsorship receives the same reporting package, on the same schedule.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { id: "1", title: "Case summary", text: "Before surgery: the diagnosis in plain language, the proposed procedure and cost breakdown." },
            { id: "2", title: "Recovery update", text: "After the acute admission: how the operation went and how the patient is recovering" },
            { id: "3", title: "Outcome summary", text: "The medical result and the follow-up plan, once the patient is home" },
            { id: "4", title: "The Family's own words", text: "Where the family consents, a message written in their hand, addressed to you." }
          ].map((item) => (
            // <div key={item.id} className="border-t border-[#E3BE50] pt-6">
            
          <div key={item.id} className="pt-6">
            
            <div key={item.id} className="border-2 border-[#E3BE50] w-5 "/>
              <span className="text-[#E3BE50] font-serif text-xl block mb-2">{item.id}</span>
              <h3 className="text-white font-bold font-serif text-lg mb-3">{item.title}</h3>
              {/* <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p> */}
              <div className=" w-[80%]">
              <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}