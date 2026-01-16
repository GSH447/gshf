"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PRIMARY_BG = "#FDF2EB";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true },
};

export default function AboutFoundation() {
  return (
    <section
      className="relative py-16 lg:py-24"
      style={{ backgroundColor: PRIMARY_BG }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20">

        {/* ================= VISION & MISSION ================= */}
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div {...fadeUp} className="p-10 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-extrabold text-primary mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To guarantee timely and appropriate surgical intervention for all
              Nigerian children with surgically treatable congenital heart
              disease (CHD).
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="p-10 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-extrabold text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To provide hope and access to care for financially disadvantaged
              patients living with congenital heart disease.
            </p>
          </motion.div>
        </div>

        {/* ================= OBJECTIVES ================= */}
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-extrabold text-primary text-center mb-6">
            Our Objectives (PATH)
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            With our four core objectives, we create a clear PATH toward improving
            cardiac surgery care and outcomes in Nigeria.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                letter: "P",
                title: "Public Awareness",
                desc: "Increase public understanding of congenital heart disease, its symptoms, and available treatment options.",
                icon: "/assets/icons/megaphone.png",
              },
              {
                letter: "A",
                title: "Assist Financially",
                desc: "Provide financial support to families facing significant costs related to CHD diagnosis and treatment, enabling early intervention.",
                icon: "/assets/icons/charity.png",
              },
              {
                letter: "T",
                title: "Technology & Research",
                desc: "Promote evidence-based best practices, technological advancement, and fund research focused on improving CHD outcomes in Nigeria.",
                icon: "/assets/icons/technology.png",
              },
              {
                letter: "H",
                title: "Hope & Support",
                desc: "Build a supportive community that connects families, offers counselling, and bridges service providers with the public.",
                icon: "/assets/icons/heart-care.png",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeUp}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-primary">
                    {item.letter}
                  </span>
                  <h3 className="text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= BENEFICIARIES ================= */}
        <motion.div {...fadeUp} className="bg-white rounded-xl shadow-lg p-10">
          <h2 className="text-2xl font-extrabold text-primary mb-6 text-center">
            Our Beneficiaries
          </h2>

          <ul className="grid gap-4 md:grid-cols-2 text-gray-700 text-lg">
            <li>• Children and adults diagnosed with congenital heart disease</li>
            <li>• Families and caregivers of affected children</li>
            <li>
              • Healthcare professionals in cardiac surgery, paediatric and adult
              cardiology
            </li>
            <li>
              • Researchers focused on cardiovascular and congenital heart health
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
