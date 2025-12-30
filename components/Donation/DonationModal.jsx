"use client";

import { motion } from "framer-motion";

const DonationModal = ({ onClose, donation }) => {
  const { amount, frequency, honouree } = donation;

  const handlePaystack = () => {
    console.log("Paystack payload:", donation);
    // integrate Paystack here
  };

  const handleFlutterwave = () => {
    console.log("Flutterwave payload:", donation);
    // integrate Flutterwave here
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5"
      >
        <h2 className="text-lg font-bold text-gray-800">
          Confirm your donation
        </h2>

        <p className="text-sm text-gray-600">
          You’re donating <strong>₦{amount.toLocaleString()}</strong>{" "}
          {frequency === "monthly" && "every month"}.
        </p>

        {honouree && (
          <p className="text-sm text-gray-600">
            In honour of <strong>{honouree}</strong>
          </p>
        )}

        {/* Payment Buttons */}
        <div className="space-y-3">
          <button
            onClick={handlePaystack}
            className="w-full bg-green-600 text-white py-3 rounded-full text-sm font-semibold hover:bg-green-700"
          >
            Pay with Paystack
          </button>

          <button
            onClick={handleFlutterwave}
            className="w-full bg-orange-500 text-white py-3 rounded-full text-sm font-semibold hover:bg-orange-600"
          >
            Pay with Flutterwave
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full text-sm text-gray-500 hover:underline"
        >
          Cancel
        </button>
      </motion.div>
    </motion.div>
  );
};

export default DonationModal;
