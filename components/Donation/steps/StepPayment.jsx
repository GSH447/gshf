"use client";

import { useState } from "react";
import Image from "next/image";
import DonationAccordion from "../DonationAccordion";
import axiosInstance from "../../../lib/axios";


// export default function StepPayment({ data, onNext }) {
export default function StepPayment({ 
  data,
  reference
 }) {
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


  const handleSelectGateway = async (gateway) => {
  setSelectedMethod(gateway);
  setLoading(true);

  try {
    const res = await axiosInstance.post("/donations/donate", {
      reference,
      gateway: gateway.toLowerCase(), // paystack | flutterwave
    });

    const paymentUrl = res.data?.data?.payment_url;

    if (!paymentUrl) {
      throw new Error("No payment URL returned");
    }

    //  Redirect immediately
    window.location.href = paymentUrl;

  } catch (err) {
    console.error(err);
    alert("Unable to initiate payment. Please try again.");
    setLoading(false);
  }
};




  // const handlePayment = () => {
  //   if (!selectedMethod) return alert("Please select a payment method");

  //   setLoading(true);

  //   // 🔑 Simulate payment API call
  //   setTimeout(() => {
  //     setLoading(false);
  //     alert(`Payment processed via ${selectedMethod}`);
  //     onNext(); // move to next step
  //   }, 1500);
  // };


  const handlePayment = async () => {
    if (!selectedMethod) return alert("Please select a payment method");

    setLoading(true);

    try {
        const payload = {
            donation,
            basic,
            address,
            gateway: selectedMethod.toLowerCase() // paystack/flutterwave
        };

        const response = await axiosInstance.post("/donations/initiate", payload);

        const { data: result } = response;

        if (result.status === "success") {
            alert(`Donation initiated! Reference: ${result.data.reference}`);
            console.log("Donation initiation successful:", result);
            // You can now proceed to the next step or handle the payment redirection
            // redirect to payment URL if you want to integrate Paystack/Flutterwave
            // window.location.href = result.data.payment_url;
        } 
        
        else {
            alert(result.message || "Something went wrong");
            console.log("Donation initiation failed:", result);
        }
    } 
    
    catch (err) {
        console.error(err);
        alert("Error sending donation data to backend");
    } 
    
    finally {
        setLoading(false);
    }
};

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">

      <h3 className="text-primary text-center font-bold tracking-wide">
        Payment Method   
      </h3>

      <div
        className=" flex flex-col-reverse"
      >

        {/* Payment Summary */}
        {/* <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"> */}
        <div>
          <h3 className="text-primary text-center font-bold tracking-wide mb-4">
            Review your donation
          </h3>
          {/* Trust copy */}
          <p className="text-xs text-gray-500 text-center mt-4">
            (Please review your information carefully.)
          </p>

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


        </div>

        <div>
              {/* Payment Options */}
              <div className="flex gap-3 mb-6">


                {/* {paymentMethods.map((method) => (
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
                ))} */}


                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    disabled={loading}
                    onClick={() => handleSelectGateway(method.id)}
                    // className="w-full p-3 rounded-md border flex items-center justify-center gap-3"
                    className={`w-full p-3 rounded-md border flex items-center justify-center gap-3 transition
                      ${selectedMethod === method.label
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-black border-gray-300 hover:border-primary"}
                    `}
                  >
                    <Image src={method.logo} width={20} height={20} alt={method.label} />
                    <span>{method.label}</span>
                  </button>
                ))}

              </div>

              {/* Action */}
              {/* <button
                onClick={handlePayment}
                disabled={!selectedMethod || loading}
                className={`w-full p-3 rounded-md text-white font-medium transition
                  ${!selectedMethod || loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-black"}
                `}
              >
                {loading ? "Processing..." : `Pay with ${selectedMethod || "…"}`}
              </button> */}
        </div>

      </div>


      <p className="text-sm text-gray-500 mt-4 text-center">
        Your payment is secure and encrypted. We do not store your card details.
      </p>
    </div>
  );
}

















