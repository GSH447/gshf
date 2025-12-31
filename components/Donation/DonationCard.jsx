// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import DonationModal from "./DonationModal";

// const presetAmounts = [70000, 35000, 20000, 10000, 5000, 4000];

// export default function DonationCard() {
//   const [frequency, setFrequency] = useState("monthly");
//   const [amount, setAmount] = useState("");
//   const [dedicate, setDedicate] = useState(false);
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-md">
//         <div className="flex items-center gap-2 mb-4">
//           <span className="text-green-600">🔒</span>
//           <h3 className="font-semibold">Secure donation</h3>
//         </div>

//         {/* Frequency */}
//         <div className="flex gap-2 mb-4">
//           {["once", "monthly"].map((f) => (
//             <button
//               key={f}
//               onClick={() => setFrequency(f)}
//               className={`flex-1 py-2 rounded-lg border font-medium ${
//                 frequency === f
//                   ? "border-blue-600 bg-blue-50 text-blue-600"
//                   : "border-gray-300"
//               }`}
//             >
//               {f === "monthly" ? "❤️ Monthly" : "Give once"}
//             </button>
//           ))}
//         </div>

//         {/* Presets */}
//         <div className="grid grid-cols-3 gap-2 mb-4">
//           {presetAmounts.map((amt) => (
//             <button
//               key={amt}
//               onClick={() => setAmount(amt)}
//               className={`border rounded-lg py-2 ${
//                 amount === amt
//                   ? "border-blue-600 bg-blue-50"
//                   : "border-gray-300"
//               }`}
//             >
//               ₦{amt.toLocaleString()}
//             </button>
//           ))}
//         </div>

//         {/* Custom */}
//         <input
//           type="number"
//           placeholder="₦ Enter amount"
//           value={amount}
//           onChange={(e) => setAmount(Number(e.target.value))}
//           className="w-full border rounded-lg px-4 py-3 mb-4"
//         />

//         {/* Dedicate */}
//         <label className="flex items-center gap-2 text-sm mb-6">
//           <input
//             type="checkbox"
//             checked={dedicate}
//             onChange={(e) => setDedicate(e.target.checked)}
//           />
//           Dedicate this donation
//         </label>

//         <button
//           onClick={() => setOpen(true)}
//           className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
//         >
//           Donate {frequency === "monthly" ? "monthly" : "today"}
//         </button>
//       </div>

//       <DonationModal
//         open={open}
//         onClose={() => setOpen(false)}
//         donation={{ frequency, amount, dedicate }}
//       />
      
//     </>
//   );
// }

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
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full outline-none text-sm"
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
