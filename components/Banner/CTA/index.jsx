"use client";
import React from "react";
import { motion } from "framer-motion";
import DonationCard from "../../Donation/DonationCard";
const CTA = () => {


  return (
    <>

      <section className="rounded-[32px] shadow-lg gradient-bg">

        <div className="container w-fit mx-auto rounded-[32px] shadow-lg  flex flex-col-reverse lg:flex-row nine20 lg:p-2 p-4 custom-bg">

          <div className="right-circle" ></div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="border-2 border-[red] animate_left lg:w-1/2 h-fit subscribeCTA"
          >

              <div>

                  <h1 
                      className="relative text-4xl lg:text-7xl text-black"
                      style={{fontFamily: 'AvenirBold'}}
                  >
                  Be Exclusive!
                  </h1>
                  
                  <p className="relative text-black">
                      Join our Newsletter.
                  </p>
              </div>
            
            
              <div className="grid gap-[1em]">
                <h1 className="text-black text-[18px] font-extrabold">
                    Stay ahead of the curve with our weekly newsletter.  
                </h1>

                <p className="text-black">
                    Get exclusive updates on, new acquisition opportunities, Job openings for talented team members, Insider information on upcoming events, Behind-the-scenes insights into our company's journey, challenges, and successes
                </p>
              </div>

          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right lg:w-1/2 m-auto subscribeCTA"
          >
            <div className="relative m-auto w-fit">


              <DonationCard />

            </div>

          </motion.div>

        </div>

      </section>
    </>
  );
};

export default CTA;
