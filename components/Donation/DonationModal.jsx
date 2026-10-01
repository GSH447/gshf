"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import DonationSteps from "./DonationSteps";
import { X } from "lucide-react";
import Image from "next/image";

export default function DonationModal({ isOpen, donation, onClose }) {
  const [mounted, setMounted] = useState(false);

  // Ensure this only runs on the client to prevent Next.js hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // If not mounted (SSR), return nothing.
  if (!mounted) return null;

  // We return the Portal always, but rely on AnimatePresence and the `isOpen` prop
  // to conditionally mount/unmount the actual motion.div to trigger animations.
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-white backdrop-blur-sm w-[100%] grid lg:flex items-center justify-center px-4 py-6 overflow-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="w-full h-full flex flex-col relative max-w-7xl mx-auto">
            <div className="block lg:hidden bg-primary">
              <Image
                src="/gshf-logo-nobg.png"
                alt="Donation"
                width={1000}
                height={1000}
                className="w-[23%]"
              />
            </div>

            <div>
              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="
                  absolute
                  top-3
                  right-3
                  rounded-full
                  p-2
                  bg-gray-100
                  hover:bg-primary
                  transition
                  z-50
                "
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <motion.div
              className="bg-transparent lg:w-[70%] lg:h-[90vh] lg:rounded-2xl lg:p-6 relative mx-auto"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()} // prevent close on inner click
            >
              <DonationSteps donation={donation} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body // Teleports the modal to the very end of the HTML document
  );
}

// "use client";
// import { useState, useEffect } from "react";
// import { createPortal } from "react-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import DonationSteps from "./DonationSteps";
// import { X } from "lucide-react";
// import Image from "next/image";

// export default function DonationModal({ isOpen, donation, onClose }) {
//   const [mounted, setMounted] = useState(false);

//   // Ensure this only runs on the client to prevent Next.js hydration errors
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Close on ESC key
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   // If not mounted (SSR), return nothing.
//   if (!mounted) return null;

//   // We return the Portal always, but rely on AnimatePresence and the `isOpen` prop
//   // to conditionally mount/unmount the actual motion.div to trigger animations.
//   return createPortal(
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 z-[9999] bg-white w-[100%] grid lg:flex items-center justify-center px-4 py-6 overflow-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//         >
//           <div className="w-full h-full flex flex-col relative">
//             <div className="block lg:hidden">
//               <Image
//                 src="/logo-nobg.png"
//                 alt="Donation"
//                 width={1000}
//                 height={1000}
//                 className="w-[23%]"
//               />
//             </div>

//             <div>
//               {/* Close Button */}
//               <button
//                 onClick={onClose}
//                 aria-label="Close modal"
//                 className="
//                   absolute
//                   top-3
//                   right-3
//                   rounded-full
//                   p-2
//                   bg-gray-100
//                   hover:bg-primary
//                   transition
//                   z-50
//                 "
//               >
//                 <X className="w-5 h-5 text-gray-600" />
//               </button>
//             </div>

//             <motion.div
//               className="bg-transparent lg:w-[70%] lg:h-[90vh] lg:rounded-2xl lg:p-6 relative mx-auto"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//               onClick={(e) => e.stopPropagation()} // prevent close on inner click
//             >
//               <DonationSteps donation={donation} />
//             </motion.div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>,
//     document.body // Teleports the modal to the very end of the HTML document
//   );
// }

// // "use client";
// // import { useState, useEffect } from "react";
// // import { createPortal } from "react-dom";
// // import { motion, AnimatePresence } from "framer-motion";
// // import DonationSteps from "./DonationSteps";
// // import { X } from "lucide-react";
// // import Image from "next/image";

// // export default function DonationModal({ isOpen, donation, onClose }) {

// //   const [mounted, setMounted] = useState(false);

// //     // Close on ESC key
// //   useEffect(() => {
// //     const handleEsc = (e) => {
// //       if (e.key === "Escape") onClose();
// //     };
// //     window.addEventListener("keydown", handleEsc);
// //     return () => window.removeEventListener("keydown", handleEsc);
// //   }, [onClose]);



// //   // Ensure this only runs on the client to prevent Next.js hydration errors
// //   useEffect(() => {
// //     setMounted(true);
// //   }, []);

// //   if (!mounted || !isOpen) return null;

// //   return createPortal(
// //     <AnimatePresence>
// //       <motion.div
// //         className="fixed inset-0 z-[9999] bg-white w-[100%] grid lg:flex items-center justify-center px-4 py-6 overflow-auto border-2 border-[red]"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         exit={{ opacity: 0 }}
// //         onClick={onClose}
// //       >
        

        
// //           <div
// //             className="border-2 border-[red] "
// //           >
            
// //             <div
// //                 className="block lg:hidden"
// //             >
// //                 <Image
// //                     src="/logo-nobg.png"
// //                     alt="Donation "
// //                     width={1000}
// //                     height={1000}
// //                     className="w-[23%]"
// //                 />
// //             </div>

// //             <div>
              
// //               {/* Close Button */}
// //               <button
// //                 onClick={onClose}
// //                 aria-label="Close modal"
// //                 className="
// //                   absolute
// //                   top-3
// //                   right-3
// //                   rounded-full
// //                   p-2
// //                   bg-gray-100
// //                   hover:bg-primary
// //                   transition
// //                 "
// //               >
// //                 <X className="w-5 h-5 text-gray-600" />
// //               </button>
              
// //             </div>
          
// //           </div>
          
// //           <motion.div
// //             className=" bg-transparent lg:w-[70%] lg:h-[90vh] lg:rounded-2xl lg:p-6 relative"
// //             initial={{ scale: 0.9 }}
// //             animate={{ scale: 1 }}
// //             exit={{ scale: 0.9 }}
// //             onClick={(e) => e.stopPropagation()} // prevent close on inner click
// //           >

// //             <DonationSteps donation={donation} />
// //           </motion.div>



// //       </motion.div>
// //     </AnimatePresence>,
// //     document.body // Teleports the modal to the very end of the HTML document
// //   );
// // }


// // // "use client";

// // // import { useEffect } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import DonationSteps from "./DonationSteps";
// // // import { X } from "lucide-react";
// // // import Image from "next/image";

// // // export default function DonationModal({ open, donation, onClose }) {

// // //   // Close on ESC key
// // //   useEffect(() => {
// // //     const handleEsc = (e) => {
// // //       if (e.key === "Escape") onClose();
// // //     };
// // //     window.addEventListener("keydown", handleEsc);
// // //     return () => window.removeEventListener("keydown", handleEsc);
// // //   }, [onClose]);


// // //   return (
// // //     <AnimatePresence>
// // //       {open && (



// // //         <motion.div
// // //           // 1. Changed z-50 to z-[999] to overpower the header's z-50
// // //           // 2. Removed the invalid "zIndex-50" class
// // //           className="fixed inset-0 z-[999] bg-white w-[100%] grid lg:flex items-center justify-center px-4 py-6 overflow-auto border-2 border-[red]"
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           exit={{ opacity: 0 }}
// // //           onClick={onClose} // click outside closes modal
// // //         >

   

// // //           <div
// // //             className="border-2 border-[red] "
// // //           >
            
// // //             <div
// // //                 className="block lg:hidden"
// // //             >
// // //                 <Image
// // //                     src="/logo-nobg.png"
// // //                     alt="Donation "
// // //                     width={1000}
// // //                     height={1000}
// // //                     className="w-[23%]"
// // //                 />
// // //             </div>

// // //             <div>
              
// // //               {/* Close Button */}
// // //               <button
// // //                 onClick={onClose}
// // //                 aria-label="Close modal"
// // //                 className="
// // //                   absolute
// // //                   top-3
// // //                   right-3
// // //                   rounded-full
// // //                   p-2
// // //                   bg-gray-100
// // //                   hover:bg-primary
// // //                   transition
// // //                 "
// // //               >
// // //                 <X className="w-5 h-5 text-gray-600" />
// // //               </button>
              
// // //             </div>
          
// // //           </div>
          
// // //           <motion.div
// // //             className=" bg-transparent lg:w-[70%] lg:h-[90vh] lg:rounded-2xl lg:p-6 relative"
// // //             initial={{ scale: 0.9 }}
// // //             animate={{ scale: 1 }}
// // //             exit={{ scale: 0.9 }}
// // //             onClick={(e) => e.stopPropagation()} // prevent close on inner click
// // //           >

// // //             <DonationSteps donation={donation} />
// // //           </motion.div>
// // //         </motion.div>
// // //       )}
// // //     </AnimatePresence>
// // //   );
// // // }
