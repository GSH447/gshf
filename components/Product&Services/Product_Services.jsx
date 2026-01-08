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
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center flex-1">
                <h3 className="lg:text-[22px] text-[18px] font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-[15px] text-white mb-5">
                  {item.description}
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link
                  href={item.url}
                  className="inline-block bg-white hover:bg-[#FFC000] px-5 py-2 rounded-full text-[15px] text-primary hover:text-white font-extrabold transition-colors duration-300"
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

// "use client";
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from "framer-motion";

// const Product_Services = ({product_services}) => {

//     const blobShapes = [
//         "60% 40% 55% 45% / 55% 60% 40% 45%",
//         "65% 35% 60% 40% / 60% 65% 35% 40%",
//         "70% 30% 50% 50% / 40% 60% 40% 60%",
//         "55% 45% 65% 35% / 50% 55% 45% 50%",
//         "62% 38% 58% 42% / 48% 62% 38% 52%",
//         "68% 32% 57% 43% / 55% 45% 55% 45%",
//    ];

//     const shape = blobShapes[index % blobShapes.length];

//   return (



//     <div id="services-container">


//         <div className='lg:grid lg:grid-cols-3 gap-5' id="services-card">
//             {product_services.map((item, index) => (
 
//                 <motion.div 
//                     variants={{
//                     hidden: {
//                         opacity: 0,
//                         y: 50,
//                     },

//                     visible: {
//                         opacity: 1,
//                         y: 0,
//                     },
//                     }}
//                     initial="hidden"
//                     whileInView="visible"
//                     transition={{ duration: 1, delay: 0.1, ease:"circIn" }}
                    
//                     viewport={{ once: true }}
//                     className="animate_top lg:mx-3 services-box bg-primary w-[100%] p-6 rounded-lg lg:mb-0 mb-2"
//                     key={index}
//                 >               
                  
//                   <div
//                     className='border-2 border-[red] flex flex-col justify-between h-full'    
//                   >
                    
//                     <div
//                         className='border-2 border-[red]'
//                     >

//                         <div 
//                             className='w-[50%] m-auto border-2 border-[red]'
//                         >

//                             <div
//                             className="w-72 h-64 bg-emerald-300 overflow-hidden flex items-center justify-center"
//                             style={{
//                                 borderRadius: shape,
//                             }}
//                             >
//                             <Image
//                                 src={item.image}
//                                 width={800}
//                                 height={800}
//                                 alt={item.alt}
//                                 className="w-full h-full object-cover"
//                             />
//                             </div>

//                         </div>

//                         <div className='mb-4 mt-3 border-2 border-[red]
//                         '>
//                             <p className='lg:text-[22px] text-[18px] font-bold text-white services-title'>{item.title}</p>
//                         </div>

//                         <div
//                             className='border-2 border-[red]'
//                         >
//                             <p className='text-[15px] text-white services-description'>{item.description}</p>
//                         </div>
                        
//                     </div>
                    
//                     <div
//                         className='border-2 border-[red]'
//                     >

                    
//                         <div
//                             className='border-2 border-[red]'
//                         >
//                             <Link 
//                                 className='bg-white hover:bg-[#FFC000] inline-block border-white px-4 py-2 rounded-full text-[15px] text-primary hover:text-white font-extrabold transition duration-300' 
//                                 href={item.url}
//                             >
//                                 {item.btnText || "Learn More"}
//                             </Link>
//                         </div>
                            
                        
//                     </div>

//                   </div>

                
//                 </motion.div>

//             ))}
//         </div>

        
//     </div>



//   );
// }

// export default Product_Services


