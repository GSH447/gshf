"use client";
import Hero2 from "../../components/Hero2"; 
import PatientStories from "../../components/Sections/PatientStories";
import PermanentTeam from "../../components/Sections/PermanentTeam";
import VisionBanner from "../../components/Sections/VisionBanner";
import SponsorshipDetails from "../../components/Sections/SponsorshipDetails";
import SponsorsList from "../../components/Sections/SponsorsList";
import SponsorshipCTA from "../../components/Sections/SponsorshipCTA";
import InsideProgramme from "../../components/Sections/InsideProgramme";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero Section (Already updated previously) */}
      <Hero2 />
      
      {/* 2. "Our first three patients..." Section */}
      <PatientStories />

      {/* 3. "...visiting mission" Section (Medical Team) */}
      <PermanentTeam />

      {/* 4. Dark Blue Vision Banner */}
      <VisionBanner />

      {/* 5. "What a sponsorship pays for" Section */}
      <SponsorshipDetails />

      <InsideProgramme />

      {/* 6. "Our first sponsors" Section */}
      <SponsorsList />

      {/* 7. Gold CTA Banner */}
      <SponsorshipCTA />
    </main>
  );
}

















// "use client";
// import Hero2 from "../../components/Hero2"; //Hero components
// import CTA from "../../components/Banner/CTA"; //SubscribeCTA components
// import Product_ServicesPage from "../../components/Product&Services"; //Product and Services components
// import Feedback from "../../components/Feedbacks";
// import Benefactor01 from "../../components/Feedbacks/benefactor/01";
// import MakeADifference from "../../components/MakeADifference/01";
// import SaveALife from "../../components/SaveALife";
// import { save_a_life } from "../../components/SiteMaps/data";
// import SubscribeCTA from "../../components/Banner/CTA/subscribe";

// export default function Home() {
//   return (
//     <>
//       <Hero2/>
      
//       <div
//         className="-mt-[28.5rem] lg:-mt-[9rem]"
//       >
//         <CTA/>
//       </div>
//       <Product_ServicesPage/>
//       <Feedback/>
//       <Benefactor01/>
//       <MakeADifference
//         bgColor={"#d77dbf"}
//         title={"Make a difference today"}
//         description={"Every donation takes us a step closer to another life-saving breakthrough."}
//       />
//       <SaveALife
//         save_a_life={save_a_life}
//       />
//       <SubscribeCTA/>

//       {/* <FooterCurves/> */}

//       {/* <AboutPage/>

//       <WorkwithUs/>
//       <TeamPage/>
//       <FAQs/>
//       <ContactPage/>  */}
//     </>
//   );
// }
