import React from "react";

export default function VisionBanner() {
  return (
    <section className="bg-primary py-24 md:py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-white text-2xl md:text-4xl lg:text-[42px] font-serif leading-tight">
          Every heart deserves a chance to
        </h2>
        <h2 className="text-white text-2xl md:text-4xl lg:text-[42px] font-serif leading-tight">
          live, grow and fulfil its God-given
        </h2>
        <h2 className="text-white text-2xl md:text-4xl lg:text-[42px] font-serif leading-tight">
          potential.
        </h2>
        <p className="text-gray-300 text-sm md:text-base">
          No one should be lost to a condition that surgery can correct.
        </p>
      </div>
    </section>
  );
}