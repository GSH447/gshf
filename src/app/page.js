"use client";
import Hero2 from "../../components/Hero2"; //Hero components
import CTA from "../../components/Banner/CTA"; //SubscribeCTA components
import Product_ServicesPage from "../../components/Product&Services"; //Product and Services components
import Feedback from "../../components/Feedbacks";
import Benefactor01 from "../../components/Feedbacks/benefactor/01";
import MakeADifference from "../../components/MakeADifference/01";
import SaveALife from "../../components/SaveALife";
import { save_a_life } from "../../components/SiteMaps/data";
import SubscribeCTA from "../../components/Banner/CTA/subscribe";
import FooterCurves from "../../components/Curves/footer-curves";
// import WorkwithUs from "../../components/Team/i/WrokWitUs";//Work with us choose us components
// import AboutPage from "../../components/About"; //About us components
// import TeamPage from "../../components/Team"; //Our Team components
// import FAQs from "../../components/Faq";  //Frequently asked questions components
// import ContactPage from "../../components/Contact"; //Contact us components

export default function Home() {
  return (
    <>
      <Hero2/>
      
      <div
        className="-mt-[28.5rem] lg:-mt-[9rem]"
      >
        <CTA/>
      </div>
      <Product_ServicesPage/>
      {/* <Feedback/> */}
      <Benefactor01/>
      <MakeADifference/>
      <SaveALife
        save_a_life={save_a_life}
      />
      <SubscribeCTA/>

      <FooterCurves/>

      {/* <AboutPage/>

      <WorkwithUs/>
      <TeamPage/>
      <FAQs/>
      <ContactPage/>  */}
    </>
  );
}
