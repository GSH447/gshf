"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DonationModal from "./DonationModal";

const PRESET_AMOUNTS = [70000, 35000, 20000, 10000, 5000, 4000];

const DonationCard = () => {
  const [frequency, setFrequency] = useState("one-time"); // or monthly
  const [amount, setAmount] = useState("");
  const [dedicate, setDedicate] = useState(false);
  const [honouree, setHonouree] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleDonate = () => {
    if (!amount) return alert("Please select or enter an amount");
    setShowModal(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className=" bg-white rounded-3xl shadow-xl px-2 space-y-6"
      >
        {/* Header */}
        <div className="hidden flex items-center gap-2 text-sm font-semibold text-gray-700">
          🔒 Secure donation
        </div>

        {/* Frequency Toggle */}
        <div className=" flex rounded-full border overflow-hidden">
          {["one-time", "monthly"].map((type) => (
            <button
              key={type}
              onClick={() => setFrequency(type)}
              className={`flex-1 py-2 text-sm font-semibold transition ${
                frequency === type
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              {type === "one-time" ? "Give once" : "❤️ Monthly"}
            </button>
          ))}
        </div>

        {/* Preset Amounts */}
        <div className=" grid grid-cols-3 gap-3">
          {PRESET_AMOUNTS.map((amt) => (
            <button
              key={amt}
              onClick={() => setAmount(amt)}
              className={`border rounded-lg py-2 text-sm font-medium transition ${
                amount === amt
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-gray-300 hover:border-primary"
              }`}
            >
              ₦{amt.toLocaleString()}
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <div className=" flex items-center border rounded-lg px-3 py-2">
          <span className="text-gray-500 mr-2">₦</span>
          {/* <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value).toLocaleString())}
            className="w-full outline-none text-xl text-[#2A157C] font-semibold italic"
          /> */}

          {/* <input
            type="text"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) =>
              setAmount(e.target.value.replace(/,/g, ""))
            }
            onBlur={() =>
              setAmount(Number(amount).toLocaleString())
            }
            className="w-full outline-none text-xl text-[#2A157C] font-semibold italic"
          /> */}


          <input
            type="text"
            value={amount ? Number(amount).toLocaleString() : ""}
            onChange={(e) =>
              setAmount(e.target.value.replace(/,/g, ""))
            }
            className="w-full outline-none text-xl text-[#2A157C] font-semibold italic"
          />
          <span className="ml-2 text-xs text-gray-400">NGN</span>
        </div>

        {/* Dedication */}
        <div className=" space-y-2">
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={dedicate}
              onChange={() => setDedicate(!dedicate)}
            />
            Dedicate this donation
          </label>

          {dedicate && (
            <input
              type="text"
              placeholder="Honouree name"
              value={honouree}
              onChange={(e) => setHonouree(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
          )}
        </div>

        {/* CTA */}
        <button
          onClick={handleDonate}
          className="w-full bg-primary text-white rounded-full py-3 text-sm font-semibold hover:bg-primaryblack transition"
        >
          {frequency === "monthly" ? "Donate monthly" : "Donate today"}
        </button>
      </motion.div>

      {/* STEP 2 MODAL */}
      <AnimatePresence>
        {showModal && (
          <DonationModal
           open={showModal}
            onClose={() => setShowModal(false)}
            donation={{
              frequency,
              amount,
              honouree,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default DonationCard;
