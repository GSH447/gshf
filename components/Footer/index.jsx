import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FooterLinks } from "../SiteMaps";
import { motion } from "framer-motion";


const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [hoveredIndex, setHoveredIndex] = useState(null);


    return (
        <footer 
        
            className="relative w-full footer px-5"
        
        >


            <div className="mx-auto mx-[1%] flex flex-wrap justify-between lg:gap-y-10 sm:space-y-0 lg:gap-5">
                <div className="border-2 border-[transparent] lg:w-[50%]  grid gap-y-6">

                    <Link href="/">
                      <Image 
                        src={"/gshf-logo.png"} 
                        width={1000} 
                        height={1000}
                        alt="Gracespring Hospitals Foundation" 
                        className="gshf-Logo"
                        priority
                        id="logo"
                      />
                    </Link>
                    
                    <ContactSection contacts={FooterLinks.contact} />

                    <div className="flex space-x-4 lg:items-center socialBottomLinks  my-auto">
                        
                        {FooterLinks.social.map((social, index) => (
                            <Link
                                key={index}
                                href={social.url}
                                target="_blank"
                                className="text-gray-600 hover:text-primary text-2xl transition duration-300"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <Image
                                    src={hoveredIndex === index ? social.iconPathHover : social.iconPath}
                                    width={20}
                                    height={20}
                                    alt="Social Icon"
                                    className="w-[15px] h-[15px]"
                                />
                            </Link>
                        ))}
                    </div>

                </div>
                <Section links={FooterLinks.company} />
                <Section links={FooterLinks.link1} />
                <Section links={FooterLinks.link2} />
            </div>
            <FooterBottom currentYear={currentYear} />
        </footer>
    );
};

const Section = ({ title, links }) => (
    <AnimatedDiv className="lg:w-56 lg:flex-1 lg:min-w-48">
        <h2 className="text-1xl font-semibold text-white mb-4">{title}</h2>
        <ul className="text-white space-y-2">
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.url} className="hover:text-white-800 transition duration-300 lg:text-[14px]">{link.name}</Link>
                </li>
            ))}
        </ul>
    </AnimatedDiv>
);

const ContactSection = ({ contacts }) => (
    <AnimatedDiv className="flex-1 min-w-48">
        <ul className=" text-white space-y-2">
            {contacts.map((item, index) => (
                <li key={index} className=" flex space-x-3">
                    <Image 
                        src={item.iconPath || ""} 
                        width={100} 
                        height={100} 
                        alt="Contact-Icons" 
                        className=" w-[1rem]" 
                    />
                    <Link href={item.url} className=" hover:text-white-800 transition duration-300 lg:text-[14px] text-left">{item.name}</Link>
                </li>
            ))}
        </ul>
    </AnimatedDiv>
);

const FooterBottom = ({ currentYear }) => {

    return (
        <div className="border-t border-gray-300  lg:mt-6 pt-10 pb-[5rem] flex flex-col sm:flex-row justify-between mx-auto text-white">

            <div className=" flex flex-col sm:flex-row lg:justify-between lg:items-center sm:items-start gap-4 sm:gap-10 w-full sm:w-auto">

                <Link href="/">
                    <Image 
                    src={"/gshf-logo.png"} 
                    width={1000} 
                    height={1000}
                    alt="Gracespring Hospitals Foundation" 
                    className=" gshf-Logo footer-gsfh-Logo"
                    priority
                    id="logo"
                    />
                </Link>

            </div>



            <div className=" grid gap-4 lg:items-center lg:justify-center signatureBottomLinks ">

           
                
                <div
                    className="w-full lg:w-[70%] xl:w-[60%]"
                >

                    The Gracespring Health Foundation is a not for-profit and non-political registered foundation in Nigeria,The aims and objective of the association are locate the Child born with heart condition, provide free surgical care for children born with heart conditions requiring surgery, work in partnerships with local, regional, national and international organisations. Our address is Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Lekki, Lagos, Nigeria.
                    
                    
                </div>

                <p className="text-[14px] text-left">© {currentYear} Gracespring Health Foundation. All Rights Reserved.</p>
            </div>

        </div>
    );
};

const AnimatedDiv = ({ children, className }) => (
    <motion.div
        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1, ease: "circIn" }}
        viewport={{ once: true }}
        className={className}
    >
        {children}
    </motion.div>
);

export default Footer;
