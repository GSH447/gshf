"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const blobShapes = [
  "60% 40% 55% 45% / 55% 60% 40% 45%",
  "65% 35% 60% 40% / 60% 65% 35% 40%",
  "70% 30% 50% 50% / 40% 60% 40% 60%",
  "55% 45% 65% 35% / 50% 55% 45% 50%",
  "62% 38% 58% 42% / 48% 62% 38% 52%",
  "68% 32% 57% 43% / 55% 45% 55% 45%",
];

const Product_Services = ({ product_services = [] }) => {
  return (
    <div id="services-container">
      <div className="lg:grid lg:grid-cols-3 gap-5" id="services-card">
        {product_services.map((item, index) => {
          const shape = blobShapes[index % blobShapes.length];

          return (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            //   className={`services-box bg-[${item.bg}] w-full p-6 rounded-lg flex flex-col justify-between`}

            className="services-box w-full p-6 rounded-lg flex flex-col justify-between"
            style={{ backgroundColor: item.bg }}

            >
              {/* Image */}
              <div className="flex justify-center mb-5">
                <div
                  className="w-72 h-64 bg-emerald-300 overflow-hidden flex items-center justify-center"
                  style={{ borderRadius: shape }}
                >
                  <Image
                    src={item.image}
                    width={800}
                    height={800}
                    alt={item.alt || item.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-left flex-1">
                <h3 className="lg:text-[22px] text-[18px] font-bold text-black mb-2">
                  {item.title}
                </h3>

                <p className="text-[15px] text-black mb-5">
                  {item.description}
                </p>
              </div>

              {/* CTA */}
              <div className="text-left">
                <Link
                  href={item.url}
                  className="inline-block bg-white hover:bg-[#FFC000] px-5 py-2 rounded-full text-[15px] text-black font-extrabold transition-colors duration-300"
                >
                  {item.btnText || "Learn More"}
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Product_Services;