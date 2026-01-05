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
        

      <div className="w-fit">
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

      <div className="container flex h-14 max-w-screen-2xl items-center justify-end lg:justify-between m-auto">
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
              // className={cn(
              //   "absolute top-[7.6rem] left-1/2 -translate-x-1/2 p-8  w-[85%] bg-[#EDEDF7] transition-all ease-in-out mx-auto shadow-lg rounded-md z-50 min-h-[50vh]",
              //   hovering || hovering === 0
              //     ? "opacity-100 border-t border-b border-accent mx-auto"
              //     : "opacity-0 border-none"
              // )}

              className={cn(
                "absolute top-[7.6rem] left-1/2 -translate-x-1/2 p-8 w-[85%] bg-[#EDEDF7] transition-all ease-in-out mx-auto shadow-lg rounded-md z-50 min-h-[50vh]",
                hovering !== null
                  ? "opacity-100 pointer-events-auto border-t border-b border-accent"
                  : "opacity-0 pointer-events-none border-none"
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
          className="bg-primary hover:bg-black text-white font-semibold py-2 px-5 rounded-full shadow-md flex"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >

        <Image
          src={"/assets/icons/love.png"}
          width={20}
          height={20}
          alt="love"
          className="my-auto ml-2"
        />

        <a 
          href="#portfolios"
          className="text-white text-primary flex lg:items-center lg:justify-center h-full lg:w-full my-auto lg:text-[16px] font-bold"
        >
          Donate today
        </a>

        </motion.button>

        </div> 

      </div>

    </header>
  );
}
