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


      
      <div className=" lg:hidden mr-2">
        <motion.button
          className="bg-white text-white font-semibold py-2 px-5 rounded-full shadow-md flex"
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

        <Link 
          href="/donate"
          className="text-primary flex lg:items-center lg:justify-center h-full lg:w-full my-auto lg:text-[16px] font-bold"
        >
          Donate
        </Link>

        </motion.button>
      </div>

      <div className=" flex gap-2">


        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-2 block md:hidden"
        >
          <Menu className="h-[36px] w-[31px] m-auto text-white" />
          {/* <p className="text-[10px] text-black dark:text-white hover:text-[#00d0ff] ">Menu</p> */}
        </button>
        

      </div>

      <div
        className={cn(
          "flex overflow-y-auto flex-col p-2 h-full min-h-screen fixed left-0 top-0 z-50 bg-background md:hidden border-r border-accent w-full transition-all duration-300 ease-in-out bg-primary  gap-4 ",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}

        
      >
        <div className=" flex items-center justify-between bg-primary">

          <div>
            <div className=" justify-center items-center w-fit">
              <Link href="/">
                <Image 
                  src={"/gshf-logos.png"} 
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

          <div
            className=" flex items-center justify-center p-2"
          >        
            <button
              className="hover:text-accent transition ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-10 h-6 font-bold text-white" />
            </button>
          </div>

        </div>
        
        <nav className=" flex flex-col gap-4 overflow-y-auto bg-primary">
          {links.map((link, index) => (
            <div key={link.label + index}>
              <Link
                href={link.href}
                className={cn(
                  "text-white hover:cursor-pointer rounded-md hover:text-white hover:bg-secondary transition ease-in-out py-2 px-2 flex items-center justify-between",
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
                          <Link 
                            href={subLink.href}
                            className="flex text-white mt-1 mb-3 gap-2"
                          >
                            {subLink.header}
                          </Link>
                          {subLink.subMenu && (
                            <>
                              {subLink.subMenu.map((subItem) => (
                                <Link
                                  href={subItem.href}
                                  key={subItem.label}
                                  className="hidden w-[80%] text-white block text-sm hover:text-white transition pl-4"
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
          href="/donate"

          className="w-[50%] mx-auto flex items-center justify-center rounded-full bg-white p-3 text-primary text-lg duration-300 ease-in-out hover:bg-white lg:hidden"
        >
          Donate today
        </Link>

        <Link
          href="/contact-us"
          className="flex items-center justify-center text-lg text-white lg:hidden"
        >
          Need to get in touch?
        </Link>
        </nav>

      </div>

     
    </>
  );
}
