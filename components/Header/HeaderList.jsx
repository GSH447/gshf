"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { links } from "../SiteMaps"; // Uses your existing links data
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovering, setHovering] = useState(null);
  const subRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        // Trigger solid background slightly after scrolling
        setIsScrolled(window.scrollY >= 20);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleMouseEnter(index) {
    if (links[index].subLinks) {
      setHovering(index);
    } else {
      setHovering(null);
    }
  }

  // Function to accurately check if the current route matches the link
  const checkActive = (href) => {
    if (href === "/" && pathname !== "/") return false;
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 px-4 lg:px-[8rem] flex items-center",
        // Seamless transparent background at the top, solid dark blue with shadow when scrolled
        isScrolled ? "bg-[#2B0F80] shadow-lg py-3 border-b border-white/5 " : "bg-transparent py-5 border-none"
      )}
    >
      <div className="flex w-fit ">

        <div className="flex gap-2 items-center hidden lg:flex">
          <Link href="/">
            <Image 
              src={"/gshf-logo-nobg.png"} 
              width={180} 
              height={60}
              alt="Gracespring Hospitals Foundation" 
              className="object-contain"
              // className="w-auto h-[50px] md:h-[48px] object-contain"
              priority
              id="logo"
            />
          </Link>
        </div>

          <div className="lg:hidden flex">
            <div className=" justify-center items-center w-fit">
              <Link href="/">
                <Image 
                  src={"/gshf-logo-nobg.png"} 
                  width={1000} 
                  height={1000}
                  alt="Gracespring Hospitals Foundation" 
                  className="gshf-Logo"
                  priority
                  id="logo"
                />
              </Link>
            </div>
          </div>

        
        {/* <div className="grid gap-2 items-center ">

          <div>
            <p className="text-white text-[15px] font-bold">
              Gracespring
            </p>
          </div>
          <div>
            <p className="text-[#E3BE50] text-[15px] font-bold">
              Health Foundation
            </p>
          </div>
          

        </div> */}

      </div>

      <div className="container flex h-full max-w-screen-2xl items-center justify-end lg:justify-between m-auto flex-1 ml-8">
        {/* Mobile sidebar */}
        <div className="lg:hidden">
           <MobileNav />
        </div>

        <div className="hidden lg:flex items-center gap-x-8 ml-auto mr-10 h-full">
          <nav
            className="flex items-center gap-8 h-full"
            onMouseLeave={() => {
              if (!subRef.current) {
                setHovering(null);
              }
            }}
          >
            {links.map((link, index) => {
              const isActive = checkActive(link.href);

              return (
                <div
                  key={link.label}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-x-1"
                  >
                    {/* The text wrapper handles the underline exactly below the text */}
                    <span 
                      className={cn(
                        "pb-1 border-b-[3px] transition-all duration-200 text-[15px]",
                        isActive 
                          ? "border-[#E3BE50] text-white font-medium" 
                          : "border-transparent text-gray-200 group-hover:text-white group-hover:border-[#E3BE50]"
                      )}
                    >
                      {link.label}
                    </span>
                    
                    {link.subLinks && (
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-all ml-1 text-gray-300 group-hover:text-[#E3BE50]",
                          hovering === index && "rotate-180"
                        )}
                      />
                    )}
                  </Link>
                </div>
              );
            })}

            {/* Submenu Dropdown Container */}
            <div
              ref={subRef}
              className={cn(
                "absolute top-[100%] left-1/2 -translate-x-1/2 p-8 w-[85%] bg-[#EDEDF7] transition-all ease-in-out mx-auto shadow-xl rounded-b-md z-50",
                hovering !== null
                  ? "opacity-100 pointer-events-auto border-t-[3px] border-[#E3BE50] translate-y-0"
                  : "opacity-0 pointer-events-none -translate-y-4"
              )}
              onMouseLeave={() => setHovering(null)}
            >
              {/* Insert your Submenu Grid Logic here (same as before) */}
            </div>
          </nav>
        </div>

        {/* CTA Button matched to UI reference */}
        <div className="hidden lg:flex items-center">
          <motion.a
            href="/sponsor-a-patient"
            className="bg-[#E3BE50] text-[#161240] text-[15px] font-bold py-3 px-6 flex items-center justify-center hover:bg-[#d4ae42] transition-colors shadow-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sponsor a patient
          </motion.a>
        </div> 
        
  

      </div>
    </header>
  );
}


// "use client";

// import { usePathname } from "next/navigation";
// import React, { useEffect, useRef, useState } from "react";
// import MobileNav from "./MobileNav";
// import Link from "next/link";
// import { cn } from "../../lib/utils";
// import { links } from "../SiteMaps";
// import { ChevronDown } from "lucide-react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [hovering, setHovering] = useState(null);
//   const subRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (typeof window !== "undefined") {
//         if (window.scrollY >= 20) {
//           setIsScrolled(true);
//         } else {
//           setIsScrolled(false);
//         }
//       }
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   function handleMouseEnter(index) {
//     if (links[index].subLinks) {
//       setHovering(index);
//     } else {
//       setHovering(null);
//     }
//   }

//   return (
//     <header
//       className={cn(
//         "fixed top-0 z-50 w-full border-b border-white/10 bg-[#161240]/90 backdrop-blur-sm transition-all px-4 lg:px-12 flex",
//         isScrolled && "shadow-md bg-[#161240]"
//       )}
//     >
//       <div className="w-fit py-2">
//         <Link href="/">
//           <Image 
//             src={"/gshf-logos.png"} 
//             width={180} 
//             height={60}
//             alt="Gracespring Hospitals Foundation" 
//             className="w-auto h-12 object-contain"
//             priority
//             id="logo"
//           />
//         </Link>
//       </div>

//       <div className="container flex h-[72px] max-w-screen-2xl items-center justify-end lg:justify-between m-auto">
//         {/* Mobile sidebar */}
//         <MobileNav />

//         <div className="hidden md:flex items-center gap-x-8 ml-auto mr-8">
//           <nav
//             className="flex items-center gap-6"
//             onMouseLeave={() => {
//               if (!subRef.current) {
//                 setHovering(null);
//               }
//             }}
//           >
//             {links.map((link, index) => (
//               <div
//                 key={link.label}
//                 className="block group h-full py-6"
//                 onMouseEnter={() => handleMouseEnter(index)}
//               >
//                 <Link
//                   href={link.href}
//                   className={cn(
//                     "text-gray-100 flex items-center gap-x-1 group-hover:text-white transition-all pb-1 border-b-2 border-transparent",
//                     pathname === link.href &&
//                       "text-white font-medium border-[#E3BE50]", // Gold underline for active link
//                     hovering === index &&
//                       "text-white font-medium border-[#E3BE50]"
//                   )}
//                 >
//                   {link.label}
//                   {link.subLinks && (
//                     <ChevronDown
//                       className={cn(
//                         "w-4 h-4 transition-all group-hover:text-[#E3BE50]",
//                         hovering === index && "rotate-180"
//                       )}
//                     />
//                   )}
//                 </Link>
//               </div>
//             ))}

//             {/* Submenu Dropdown */}
//             <div
//               ref={subRef}
//               className={cn(
//                 "absolute top-[72px] left-1/2 -translate-x-1/2 p-8 w-[85%] bg-[#EDEDF7] transition-all ease-in-out mx-auto shadow-lg rounded-b-md z-50 min-h-[50vh]",
//                 hovering !== null
//                   ? "opacity-100 pointer-events-auto border-t border-b border-accent"
//                   : "opacity-0 pointer-events-none border-none"
//               )}
//               onMouseLeave={() => setHovering(null)}
//             >
//               {/* ... (Keep your existing submenu dropdown grid code here) ... */}
//             </div>
//           </nav>
//         </div>

//         {/* CTA Button */}
//         <div className="hidden lg:flex items-center">
//           <motion.a
//             href="/sponsor"
//             className="bg-[#E3BE50] text-[#161240] text-sm lg:text-[15px] font-bold py-3 px-6 flex items-center justify-center hover:bg-[#d4ae42] transition-colors"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Sponsor a patient
//           </motion.a>
//         </div> 
//       </div>
//     </header>
//   );
// }
