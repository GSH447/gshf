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
          src="/assets/images/New/Contact_Us/1.jpg"
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







// "use client";
// import ContactsUsHero from './Contacts';
// import ContactForm from './ContactForm';
// import ContactInformation from './ContactInformation';
// import SubscribeCTA from '../Banner/CTA/subscribe';
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function ContactPage() {
//   return (
//     <main className="relative min-h-screen w-full">
//       {/* ================= BACKGROUND IMAGE & OVERLAYS ================= */}
//       {/* z-0 keeps this in the back. absolute inset-0 fills the <main> wrapper. */}
//       <motion.div className="fixed inset-0 z-0">
//         <Image
//           src="/assets/images/New/hero/1/3.jpg"
//           alt="Surgery background"
//           fill
//           className="object-cover object-center"
//           priority
//         />
        
//         {/* Overlays placed immediately after the image so they tint the image, NOT the components */}
//         <div className="absolute inset-0 bg-[#161240]/85 md:bg-[#161240]/80 mix-blend-multiply" />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#161240]/95 via-[#161240]/70 to-transparent" />
//       </motion.div>

//       {/* ================= FOREGROUND COMPONENTS ================= */}
//       {/* relative z-10 pulls all your components safely above the background and overlays */}
//       <div className="relative z-10">
//         <ContactsUsHero />
//         <ContactInformation />
//         <ContactForm />
//         <SubscribeCTA />
//       </div>
//     </main>
//   );
// }

// "use client";
// import ContactsUsHero from './Contacts';
// import ContactForm from './ContactForm';
// import ContactInformation from './ContactInformation';
// import SubscribeCTA from '../Banner/CTA/subscribe';
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function ContactPage() {
//   return (
//     <main className="relative min-h-screen w-full">
      
//       {/* ================= BACKGROUND IMAGE ================= */}
//       {/* Changed to 'fixed' so the background covers the entire viewport as you scroll */}
//       <motion.div className="fixed inset-0 z-0">
//         <Image
//           src="/assets/images/New/hero/1/3.jpg"
//           alt="Surgery background"
//           fill
//           className="object-cover object-center"
//           priority
//         />
        
//         <div className="absolute inset-0 bg-[#161240]/85 md:bg-[#161240]/80 mix-blend-multiply" />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#161240]/95 via-[#161240]/70 to-transparent" />
//       </motion.div>

//       {/* ================= FOREGROUND COMPONENTS ================= */}
//       {/* Added flex column layout to ensure everything stacks neatly */}
//       <div className="relative z-10 flex flex-col w-full">
//         <ContactsUsHero />
//         <ContactInformation />
//         <ContactForm />
//         <SubscribeCTA />
//       </div>
      
//     </main>
//   );
// }

// "use client";
// import ContactsUsHero from './Contacts';
// import ContactForm from './ContactForm';
// import ContactInformation from './ContactInformation';
// import SubscribeCTA from '../Banner/CTA/subscribe';
// import { motion } from "framer-motion";
// import Image from "next/image";


// export default function ContactPage() {
//   return (

//     <>



//       {/* ================= BACKGROUND IMAGE ================= */}
//       <motion.div className="absolute inset-0 z-0 ">
//         <Image
//           // src="/assets/images/New/hero/1/2.png"
//           src="/assets/images/New/hero/1/3.jpg"
//           // src="/assets/images/hero/care-03.png" // Replace with actual surgery image path
//           alt="Surgery background"
//           fill
//           className="object-cover object-center"
//           priority
//         />

          
//         <ContactsUsHero/>
//         <ContactInformation/>
//         <ContactForm />
//         <SubscribeCTA/>

        
//       </motion.div>

//       {/* ================= OVERLAY (Dark Blue/Purple Tint) ================= */}
//       <div className="absolute inset-0 bg-[#161240]/85 md:bg-[#161240]/80 mix-blend-multiply z-0 " />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#161240]/95 via-[#161240]/70 to-transparent z-0 " />


      
//     </>
//   );
// }
