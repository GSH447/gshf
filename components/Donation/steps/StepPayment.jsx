"use client";

import { useState } from "react";
import Image from "next/image";
import DonationAccordion from "../DonationAccordion";

// export default function StepPayment({ data, onNext }) {
export default function StepPayment({ data }) {
  const { donation, basic, address } = data;
  const [selectedMethod, setSelectedMethod] = useState("");
  const [loading, setLoading] = useState(false);

  const paymentMethods = [
    {
      id: "paystack",
      label: "Paystack",
      logo: "/assets/icons/paystack-nobg.png", // add your logo path
    },
    {
      id: "flutterwave",
      label: "Flutterwave",
      logo: "/assets/icons/flutterwave-nobg.png", // add your logo path
    },
    // { id: "stripe", label: "Stripe", logo: "/images/payments/stripe.png" }
  ];

  const handlePayment = () => {
    if (!selectedMethod) return alert("Please select a payment method");

    setLoading(true);

    // 🔑 Simulate payment API call
    setTimeout(() => {
      setLoading(false);
      alert(`Payment processed via ${selectedMethod}`);
      onNext(); // move to next step
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">

      <h3 className="text-primary text-center font-bold tracking-wide">
        Payment Method   
      </h3>

      {/* Payment Summary */}
<div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-primary text-center font-bold tracking-wide mb-4">
        Review your donation
      </h3>

      <div className="space-y-3">
        {/* 1. Donation Amount */}
        <DonationAccordion title="Donation Amount">
          <p>
            <strong>Amount:</strong> ₦{donation?.amount?.toLocaleString()}
          </p>
          <p>
            <strong>Frequency:</strong>{" "}
            {donation?.frequency === "monthly" ? "Monthly" : "One-time"}
          </p>
          {donation?.honouree && (
            <p>
              <strong>Dedicated to:</strong> {donation.honouree}
            </p>
          )}
        </DonationAccordion>

        {/* 2. Basic Information */}
        <DonationAccordion title="Basic Information">
          <p>
            <strong>Name:</strong>{" "}
            {basic?.title} {basic?.firstName} {basic?.lastName}
          </p>
          <p>
            <strong>Email:</strong> {basic?.email}
          </p>
          <p>
            <strong>Phone:</strong> {basic?.countryCode}
            {basic?.phone}
          </p>
          <p>
            <strong>Donor Type:</strong>{" "}
            {basic?.donateAsOrganisation ? "Organisation" : "Individual"}
          </p>
        </DonationAccordion>

        {/* 3. Address */}
        <DonationAccordion title="Address">
          <p>{address?.street}</p>
          {address?.apartment && <p>{address.apartment}</p>}
          <p>
            {address?.city}, {address?.state}
          </p>
          <p>
            {address?.country} {address?.zip}
          </p>
        </DonationAccordion>
      </div>

      {/* Trust copy */}
      <p className="text-xs text-gray-500 text-center mt-4">
        Please review your information carefully before proceeding to payment.
      </p>
    </div>
      {/* <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <h3 className="font-medium mb-2">Donation Information</h3>
        <p><strong>Name:</strong> {data?.firstName} {data?.lastName}</p>
        <p><strong>Email:</strong> {data?.email}</p>
        <p><strong>Amount:</strong> ₦{data?.amount?.toLocaleString() || "0"}</p>
      </div> */}

      {/* Payment Options */}
      <div className="flex flex-col gap-3 mb-6">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => setSelectedMethod(method.label)}
            className={`w-full p-3 rounded-md border flex items-center justify-center gap-3 transition
              ${selectedMethod === method.label
                ? "bg-primary text-white border-primary"
                : "bg-white text-black border-gray-300 hover:border-primary"}
            `}
          >
            <Image
              src={method.logo}
              alt={method.label}
              width={1000}
              height={1000}
              className="w-5 h-5 object-contain"
            />
            <span className="font-medium">{method.label}</span>
          </button>
        ))}
      </div>

      {/* Action */}
      <button
        onClick={handlePayment}
        disabled={!selectedMethod || loading}
        className={`w-full p-3 rounded-md text-white font-medium transition
          ${!selectedMethod || loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-black"}
        `}
      >
        {loading ? "Processing..." : `Pay with ${selectedMethod || "…"}`}
      </button>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Your payment is secure and encrypted. We do not store your card details.
      </p>
    </div>
  );
}

















