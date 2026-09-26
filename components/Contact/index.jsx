"use client";
import ContactsUsHero from './Contacts';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';
import SubscribeCTA from '../Banner/CTA/subscribe';
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full">
      
      {/* ================= BACKGROUND IMAGE ================= */}
      {/* Changed z-0 to -z-10 to force the background behind your global Header and Footer */}
      <motion.div className="fixed inset-0 -z-10">
        <Image
          src="/assets/images/new/Contact_Us/1.jpg"
          alt="Surgery background"
          fill
          className="object-cover object-center"
          priority
        />
        
        <div className="absolute inset-0 bg-[#161240]/85 md:bg-[#161240]/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#161240]/55 via-[#161240]/70 to-transparent" />
      </motion.div>

      {/* ================= FOREGROUND COMPONENTS ================= */}
      <div className="relative z-10 flex flex-col w-full">
        <ContactsUsHero />
        <ContactInformation />
        <ContactForm />
        <SubscribeCTA />
      </div>
      
    </main>
  );
}

