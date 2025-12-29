"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import MobileNav from "./MobileNav";
import Link from "next/link";
// import { cn } from "../../lib/utils";
import { cn } from "../../lib/utils";
// import { links } from "../../constants/navLinks";
import { links } from "../SiteMaps";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovering, setHovering] = useState(null);
  // const subRef = useRef() as React.MutableRefObject;
  const subRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY >= 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
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

  return (
    <header
      // className={cn(
      //   " fixed top-0 z-50 w-full border-accent bg-background backdrop-blur supports-[backdrop-filter]:bg-background-transparent transition-all px-3 flex",
      //   isScrolled && "shadow-sm shadow-accent"
      // )}
      className={cn(
        "fixed top-0 z-50 w-full border-accent bg-[#EDEDF7] transition-all px-3 flex",
        isScrolled && "shadow-sm shadow-accent"
      )}
    >
        

      <div className=" justify-center items-center w-fit">
        <Link href="/">
          <Image 
            src={"/logo-nobg.png"} 
            width={1000} 
            height={1000}
            alt="Gracespring Hospitals Foundation" 
            className="gshf-Logo"
            priority
            id="logo"
          />
        </Link>
      </div>

      <div className=" container flex h-14 max-w-screen-2xl items-center justify-end lg:justify-between m-auto">
        {/* Mobile sidebar */}
        <MobileNav />

        <div className="hidden md:flex items-center gap-x-10">


          <nav
            className="flex items-center gap-3"
            onMouseLeave={() => {
              if (!subRef.current) {
                setHovering(null);
              }
            }}
          >
            {links.map((link, index) => (
              <div
                key={link.label}
                className="block group"
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-muted flex items-center gap-x-0.5 group-hover:text-accent transition-all px-3 py-1 rounded-md hover:bg-secondary",
                    pathname === link.href &&
                      "text-accent font-semibold bg-secondary",
                    hovering === index &&
                      "text-accent font-semibold bg-secondary"
                  )}
                >
                  {link.label}
                  {link.subLinks && (
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-all group-hover:text-accent",
                        hovering === index && "rotate-180"
                      )}
                    />
                  )}
                </Link>
              </div>
            ))}

            <div
              ref={subRef}
              className={cn(
                "absolute top-14 left-0 p-8 w-full bg-background transition-all ease-in-out",
                hovering || hovering === 0
                  ? "opacity-100 border-t border-b border-accent"
                  : "opacity-0 border-none"
              )}
              onMouseLeave={() => setHovering(null)}
            >
              <div className="grid grid-cols-4 max-w-[1560px] mx-auto gap-6">
                {hovering !== null && links[hovering].navImage && (
                  <div className="flex flex-col">
                    <div className="relative w-full h-full rounded-md">
                      <Image
                        src={links[hovering].navImage}
                        alt={links[hovering].label}
                        fill
                        className="object-cover object-center rounded-md"
                      />
                    </div>
                    <div className="text-center pt-2">
                      {links[hovering].caption}
                    </div>
                  </div>
                )}
                {hovering !== null &&
                  links[hovering].subLinks?.map((subLink, index) => (
                    <React.Fragment key={index}>
                      {subLink.header && (
                        <div className="space-y-2">
                          <div className="text-primary font-bold pb-1">
                            {subLink.header}
                          </div>
                          {subLink.subMenu && (
                            <>
                              {subLink.subMenu.map((menuItem) => (
                                <Link
                                  key={menuItem.label}
                                  href={menuItem.href}
                                  className="text-muted block text-sm hover:text-accent transition"
                                >
                                  {menuItem.label}
                                </Link>
                              ))}
                            </>
                          )}
                        </div>
                      )}
                      {subLink.subImages?.map((subImage) => (
                        <div key={subImage.label}>
                          <Link
                            href={subImage.href}
                            className="relative block w-full h-[200px] rounded-md overflow-hidden group"
                          >
                            <Image
                              src={subImage.image}
                              alt={subImage.label}
                              fill
                              className="object-cover object-center rounded-md group-hover:scale-105 transition group-hover:opacity-80"
                            />
                          </Link>
                          <div className="text-center pt-2">
                            {subImage.label}
                          </div>
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </nav>
        </div>

        <div className="hidden lg:block flex items-center gap-x-4 mr-5">
          <motion.button
            className="lg:bg-primary hover:bg-black text-white font-semibold py-2 px-5 lg:rounded-lg lg:shadow-md flex lg:gap-3 lg:w-full lg:h-[40px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >

          <a 
            href="#portfolios"
            className="lg:text-white text-primary flex lg:items-center lg:justify-center h-full lg:w-full my-auto lg:text-[16px] font-bold"
          >
            Donate
          </a>

          <Image
            src={"assets/icons/arrow-up-right.svg"}
            width={20}
            height={20}
            alt="arrow-up-right"
            className="lg:hidden my-auto ml-2"
          />
          </motion.button>
        </div>
      </div>

    </header>
  );
}

// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from 'next/image';

// const HeaderList = ({ links }) => {

//   const [activeSection, setActiveSection] = useState("");

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5, // 50% of the section should be visible
//     };

//     const handleIntersection = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
//     // Observe all sections
//     links.forEach(({ url }) => {
//       const sectionId = url.replace("#", ""); // Remove "#" to get the section ID
//       const section = document.getElementById(sectionId);
//       if (section) observer.observe(section);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, [links]);

//   return (

//   <ul className=" flex flex-col md:flex-row bg-[#EDEDF7] w-full md:w-auto md:shadow-none shadow-sm p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6 lg:justify-center lg:items-center ">

//     {links.map(({ name, url, iconPath }) => (
//       <li 
//         key={name} 
//         // className=" flex w-full h-full py-2 "
//         className="flex w-full h-full py-2 lg:py-0 lg:px-0 lg:mx-0 lg:h-auto"
//       >
//         <a
//           href={url}
//           className="flex "
//           // className="flex items-center hover:text-primary transition duration-300 px-5"
//           // className={`border-2 border-[green] headertext flex items-center transition duration-300 px-5 w-full lg:text-[15px] hover:text-primary hover:font-extrabold ${
//           //   activeSection === url.replace("#", "")
//           //   ? "text-primary font-bold lg:text-[16px]"
//           //   : activeSection ? "text-black" : "text-black"
//           // }`}
//         >
//           {iconPath && <Image src={iconPath || null} alt={name} className="mr-2 w-5 h-5" width={100} height={100} />}
//           {name}
//         </a>
//       </li>
//     ))}
    
//     {/* Call-to-Action Button */}
//       <motion.button
//         className="lg:bg-primary hover:bg-black text-white font-semibold py-2 px-5 lg:rounded-lg lg:shadow-md mt-4 flex lg:gap-3 lg:w-full lg:h-[40px]"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >

//       <a 
//         href="#portfolios"
//         className="lg:text-white text-primary flex lg:items-center lg:justify-center h-full lg:w-full my-auto lg:text-[16px] font-bold"
//       >
//         Donate
//       </a>

//       <Image
//         src={"assets/icons/arrow-up-right.svg"}
//         width={20}
//         height={20}
//         alt="arrow-up-right"
//         className="lg:hidden my-auto ml-2"
//       />
//     </motion.button>

//   </ul>

//   );
// };

// export default HeaderList;
