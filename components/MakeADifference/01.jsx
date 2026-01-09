"use client";
import React from "react";
import { motion } from "framer-motion";
import DonationCard from "../Donation/DonationCard";
const MakeADifference = () => {


  return (
    <>

     <div
       className=" relative w-full overflow-hidden bg-[#d77dbf] pb-[4rem] lg:py-[12vh] px-2 lg:px-10 flex lg:flex-row flex-col justify-between lg:gap-[2em]"
     >

         <div className="lg:w-2/3 flex flex-col justify-between h-full gap-[1em] p-10 my-auto">
        
     
          {/* Content */}
          <div className="">
              <h3 className="text-[2rem] lg:text-[4rem] font-bold text-black mb-2 text-left lg:w-[100%]">
              Make a difference today
              </h3>

          </div>

          {/* Content */}
          <div className="text-left">
            <p className="lg:text-[1.5rem] text-black">
            Every donation takes us a step closer to another life-saving breakthrough. 
            </p>
          </div>


         </div>

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
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className=" animate_right lg:w-1/3 m-auto subscribeCTA"
          >
            <div className=" relative m-auto lg:w-[70%] w-full">


              <DonationCard />

            </div>

          </motion.div>

        </div>

    </>
  );
};

export default MakeADifference;

//  "use client";

//  import React from "react";
//  import Image from "next/image";
//  import { motion } from "framer-motion";
//  import DonationCard from "../Donation/DonationCard";



//  const MakeADifference = () => {

//    return (
//      <div
//        className=" relative w-full overflow-hidden bg-[#ffc000]"
//      >

//        {/* Content */}
//        <motion.div
//          initial={{ opacity: 0, y: 50 }}
//          whileInView={{ opacity: 1, y: 0 }}
//          transition={{ duration: 1, ease: "easeOut" }}
//          viewport={{ once: true }}
//          className=" relative z-10 mx-auto py-[12vh] px-5 lg:px-10 flex lg:flex-row flex-col justify-between gap-[2em]"
//        >
        
//          {/* Left Content */}
//          <div className=" lg:w-2/3 flex flex-col justify-between h-full gap-[1em] p-10">
        
//              {/* Content */}
//              <div className="">
//                  <h3 className=" lg:text-[35px] text-[20px] font-bold text-white mb-2 text-left lg:w-[100%]">
//                  Make a difference today
//                  </h3>

//              </div>

//              {/* Content */}
//              <div className=" text-left">
//                <p className=" text-sm text-white">
//                Every donation takes us a step closer to another life-saving breakthrough. 
//                </p>
//              </div>

//          </div>

//          {/* Right Image Blob */}
//          <div className=" lg:w-1/3 flex flex-col h-full">
//          <div
//              className="overflow-hidden flex mx-auto"
//              id="donation-card-container"
//          >
//              <DonationCard/>
//          </div>
//          </div>

//        </motion.div>


//      </div>
//    );
//  };

//  export default MakeADifference;