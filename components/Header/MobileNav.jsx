"use client";
import React, { useEffect, useState } from "react";
import { links } from "../SiteMaps";
import Image from "next/image";
import { cn } from "../../lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function MobileNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openedMenu, setOpenedMenu] = useState(null);

  function handleClick(index, e) {
    e.preventDefault();
    setOpenedMenu(openedMenu === index ? null : index);
  }

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>


      
      <div className="lg:hidden mr-2">
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
          Donate
        </a>

        </motion.button>
      </div>

      <div className="flex gap-2">


        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-2 block md:hidden"
        >
          <Menu className="h-[36px] w-[31px] m-auto hover:text-[#2A157C ] " />
          {/* <p className="text-[10px] text-black dark:text-white hover:text-[#00d0ff] ">Menu</p> */}
        </button>
        

      </div>

      <div
        className={cn(
          "flex overflow-y-auto flex-col px-6 pt-12 h-full min-h-screen fixed left-0 top-0 z-50 bg-background md:hidden border-r border-accent w-[75%] transition-all duration-300 ease-in-out bg-white",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}

        
      >
        <div className="flex items-center justify-between bg-white">

          <div>
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
          </div>

          <div>        
            <button
              className="hover:text-accent transition ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

        </div>
        
        <nav className="flex flex-col gap-4 pt-12 overflow-y-auto bg-white">
          {links.map((link, index) => (
            <div key={link.label + index}>
              <Link
                href={link.href}
                className={cn(
                  "text-muted hover:cursor-pointer rounded-md hover:text-accent hover:bg-secondary transition ease-in-out py-2 px-2 flex items-center justify-between",
                  pathname === link.href &&
                    "text-accent bg-secondary font-semibold",
                  openedMenu === index &&
                    "text-accent bg-secondary font-semibold"
                )}
              >
                {link.label}
                {link.subLinks && (
                  <button onClick={(e) => handleClick(index, e)}>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-all cursor-pointer",
                        openedMenu === index ? "rotate-180" : ""
                      )}
                    />
                  </button>
                )}
              </Link>
              {openedMenu === index && (
                <div className="pl-2">
                  {link.subLinks?.map((subLink, idx) => (
                    <React.Fragment key={idx}>
                      {subLink.header && (
                        <div className="space-y-2">
                          <div className="text-primary font-bold mt-1 text-sm">
                            {subLink.header}
                          </div>
                          {subLink.subMenu && (
                            <>
                              {subLink.subMenu.map((subItem) => (
                                <Link
                                  href={subItem.href}
                                  key={subItem.label}
                                  className="text-muted block text-xs hover:text-accent transition pl-4"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </>
                          )}
                        </div>
                      )}
                      {subLink.subImages?.map((subImage) => (
                        <Link key={subImage.label} href={subImage.href}>
                          {subImage.label}
                        </Link>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          ))}

        <Link
          href="/auth/signup"

          className="flex items-center justify-center rounded-full bg-primary px-3.5 py-0.5 text-[12px] text-white duration-300 ease-in-out hover:bg-primaryblack hover:text-white lg:hidden"
        >
          Donate
        </Link>

        {/* <Link
          href="/tele"
          className="flex items-center justify-center rounded-full bg-primary px-3.5 py-0.5 text-[12px] text-white duration-300 ease-in-out hover:bg-primaryblack hover:text-white lg:hidden"
        >
          Find an Ambulance
        </Link> */}
        </nav>

      </div>

     
    </>
  );
}
