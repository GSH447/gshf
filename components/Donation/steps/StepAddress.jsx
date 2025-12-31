
"use client";

import React from "react";

export default function StepAddress({ onNext, onChange }) {
  const update = (k, v) =>
    onChange((p) => ({ ...p, [k]: v }));

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Address</h2>

      <input className="input" placeholder="Street address" />
      <input className="input" placeholder="Apartment / Suite" />
      <input className="input" placeholder="Town / City" />
      <input className="input" placeholder="State" />
      <input className="input" placeholder="Zip code" />
      <input className="input" placeholder="Country" />

      <button onClick={onNext} className="btn-primary">Continue</button>
    </>
  );
}
