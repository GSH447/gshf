"use client";
import React from 'react';
// import SaveALife from '../../Buttons/SaveALife';
// import HeroImageGridSlider from './HeroImageGridSlider';
import ContactInformation from '../../../Contact/ContactInformation';
import WaysToDonateSubsHero from '../Card/Hero';
import SubscribeCTA from '../../../Banner/CTA/subscribe';

const FindorJoinanEvent = () => {


  return (



    <>


    <div
      id="FindorJoinanEvent"
      className='mb-[10rem]'
    >


      <WaysToDonateSubsHero
        WDTitle={"Get involved today."}
        WDTitle1={"Find or Join an Event to Donate."}
        WDTitle2={"Discover upcoming events or join an existing fundraiser near you."}
        WDctalink={"#"}
      />
      
      <ContactInformation
          contactInformationBg={"#fff"}
          contactInformationHeader={"Other ways to Find or Join an Event to donate"}
          cihOfficeText={"Donate at our office"}
          cihPhoneText={"Donate over the phone"}
          cihPostText={"Donate by post"}
      />

      <SubscribeCTA/>

    </div>


        
    </>



  );
}

export default FindorJoinanEvent


