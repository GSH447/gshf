
"use client";

import React from "react";

export default function StepPayment({ data }) {
  return (
    <>
      <h2 className="text-xl font-semibold mb-6">Payment method</h2>

      <button className="payment-btn">Paystack</button>
      <button className="payment-btn">Flutterwave</button>

      {/* Later */}
      {/* <button>Stripe</button> */}
    </>
  );
}
