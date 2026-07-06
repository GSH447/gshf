"use client";

//navigation links/sitemaps
export const links = [
   
  {
    label: "Who we are",
    href: "#",
    // icon: FaStethoscope,
    // navImage: "/*** */.jpeg",
    caption: "#",
    subLinks: [
      {
        header: " About us",    
        href: "/who-we-are/about-us",
        subMenu: [
          {
            label: "Find out more about who we are and why we exist",            
            href: "#",
          },
        ],
      },
      
      {
        header: "Our people",
        href: "/who-we-are/our-people",
        subMenu: [

          {
            label: "Meet our Joint Patrons, Trustees and our leadership team",
            href: "/who-we-are/our-people",
          },

        ],
      },
      
      
      {
        header: "Careers with us",
        href: "/who-we-are/join-our-team",
        subMenu: [

          {
            label: "Find out more about working at The Gracespring Health Foundation",
            href: "/who-we-are/join-our-team",
          },

        ],
      },
    ],
  },

  {
    label: "Our Programs and Services",
    href: "/programs-and-services",
    // href: "#",
    // icon: FaEnvelope,
    // navImage: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHJ1NGZ6OXh6NDI3eGk0enFvc2R3ZzNhNHNqMG12dTlwNWtxM3F0NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A4clECditSu7IBveUS/giphy.webp",
    caption: "#charity #donation #giveback",
    subLinks: [
      {
        header: "Public Awareness Initiatives",
        // href: "#",
        href: "/programs-and-services#PublicAwarenessInitiatives",
        subMenu: [

          {
            label: "We will conduct outreach through events such as walks/runs, seminars e.t.c",
            href: "/programs-and-services#PublicAwarenessInitiatives",
          },
        ],
      },

      {
        header: "Financial Assistance Program",
        
        href: "/programs-and-services#FinancialAssistanceProgram",
        subMenu: [
          {
            label: "We establish a grant system to provide support to families facing medical bills e.t.c",
            href: "/cardiac-leading-treatment-and-care",
          },
        ],
      },
      
 
      {
        header: "Research Funding",
        
        href: "/programs-and-services#ResearchFunding",
        subMenu: [
          {
            label: "We will collaborate with universities and medical institutions to fund research",
            href: "/paediatric-leading-treatment-and-care",
          },
        ],
      },

 
      {
        header: "Support Groups and Counselling Services",
        
        href: "/programs-and-services#SupportGroupsandCounsellingServices", 
        subMenu: [
          {
            label: "Regular support group meetings for parents and caregivers will be facilitated.",
            href: "/paediatric-leading-treatment-and-care",
          },
        ],
      },

 
      {
        header: "Research Initiatives",
        
        href: "/programs-and-services#ResearchInitiatives",
        subMenu: [
          {
            label: "Conducting research on the prevalence, outcomes, and effective treatment strategies for congenital heart disease within the Nigerian.",
            href: "/paediatric-leading-treatment-and-care",
          },
        ],
      },

      
 
      {
        header: "Educational Resources",
        
        href: "/programs-and-services#EducationalResources",
        subMenu: [
          {
            label: "Informative resources, including brochures, created to provide detailed information on CHD types, care strategies e.t.c.",
            href: "/paediatric-leading-treatment-and-care",
          },
        ],
      },

 

    ],
  },
    
  {
    label: "Make a Donation",
    href: "/make-a-donation",
    caption: "#donate #fundraise #partner",
    subLinks: [
      {
        header: "Individual Giving",
        href: "/make-a-donation/individual-giving",
        subMenu: [
          { label: "Make a Donation", href: "/donate" },
          { label: "Monthly Giving", href: "/make-a-donation/monthly-giving" },
          { label: "Donate in Memory or Honour", href: "/make-a-donation/memory-honour" },
          { label: "Special Occasion Giving", href: "/make-a-donation/special-occasion-giving" },
        ],
      },
      
      {
        header: "Corporate Support",
        href: "/make-a-donation/corporate-support",
        subMenu: [
          { label: "Corporate Sponsorships", href: "/make-a-donation/corporate-sponsorships" },
          { label: "Payroll Giving", href: "/make-a-donation/payroll-giving" },
          { label: "Corporate Partnerships", href: "/make-a-donation/corporate-partnerships" },
          { label: "Sponsor a Day of Care", href: "/make-a-donation/sponsor-a-day" },
        ],
      },

      {
        header: "Grants & Foundations",
        href: "/make-a-donation/grants-foundations",
        subMenu: [
          { label: "Government Grants", href: "/make-a-donation/government-grants" },
          { label: "Philanthropic Foundations", href: "/make-a-donation/philanthropic-foundations" },
          { label: "Grant Applications", href: "/make-a-donation/grant-applications" },
          { label: "Grant Enquiries", href: "/make-a-donation/grant-enquiries" },
        ],
      },

      {
        header: "Fundraising & Events",
        href: "/make-a-donation/fundraising-events",
        subMenu: [
          { label: "Fundraise for Us", href: "/make-a-donation/fundraise-for-us" },
          { label: "Charity Runs & Walks", href: "/make-a-donation/charity-runs-walks" },
          { label: "Community Events", href: "/make-a-donation/community-events" },
          { label: "Find or Join an Event", href: "/make-a-donation/events" },
        ],
      },
    ],
  },

  {
    label: "Contact us",
    href: "/contact-us",
    // icon: FaEnvelope,
    caption: "#excerise #stayhealthy",

  },
  
];


//footer links/sitemaps
export const FooterLinks = {

  
  link1: [
      { name: "Monthly Giving", url: "/make-a-donation/monthly-giving" },
      { name: "Donate in Memory", url: "/make-a-donation/memory-honour" },
      { name: "Special Occasion Giving", url: "/make-a-donation/special-occasion-giving" },
      { name: "Corporate Sponsorships", url: "/make-a-donation/corporate-sponsorships" },
      { name: "Payroll Giving", url: "/make-a-donation/payroll-giving" },
      { name: "Sponsor a Day of Care", url: "/make-a-donation/sponsor-a-day" },
      { name: "More ways to donate", url: "/make-a-donation" },

  ],

  link2: [
      { name: "Public Awareness Initiatives", url: "/programs-and-services#PublicAwarenessInitiatives" },
      { name: "Financial Assistance Program", url: "/programs-and-services#FinancialAssistanceProgram" },
      { name: "Research Funding", url: "/programs-and-services#ResearchFunding" },
      { name: "Support Groups and Counselling Services", url: "/programs-and-services#SupportGroupsandCounsellingServices" },
      { name: "Research Initiatives", url: "/programs-and-services#ResearchInitiatives" },
      { name: "Educational Resources", url: "/programs-and-services#EducationalResources" },

  ],

  company: [
      { name: "About us", url: "/who-we-are/about-us" },
      { name: "Our People", url: "/who-we-are/our-people" },
      { name: "Privacy", url: "#" },
      { name: "Terms & Condition", url: "#" },
  ],


  contact: [
    
      {
          name: `Gracespring Health Foundation, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Lekki, Lagos, Nigeria.`,
          url: "#Gracespring#Health#Foundation#Block3#Plot32#Ajayi#Apata#estate#Sangotedo#Lekki#Lagos#Nigeria.",
          iconPath: "/assets/icons/location-white.svg" || null,
      },
      {
          name: "gracespringhealthfoundation@outlook.com",
          url: "mailto:gracespringhealthfoundation@outlook.com",
          iconPath: "/assets/icons/email-white.svg" || null,
      },
      {
          name: "+234 705-648-2776",
          url: "tel:+2347056482776",
          iconPath: "/assets/icons/phone-white.svg" || null,
      },
      // ...
  ],

  footerBottom: [
    { name: "Terms", url: "/terms-of-use" },
    { name: "Privacy", url: "/privacy-policy" },
    { name: "Sitemap", url: "https://foundation.gracespringhospitals.com/sitemap.html" },
  ],

  social: [
    
        {
            name: "Youtube",
            url: "#",
            iconPath: "/assets/icons/youtube-white.svg" || null,
            iconPathHover: "/assets/icons/youtube-primary.svg" || null,
        },
      {
          name: "Facebook",
          url: "#",
          iconPath: "/assets/icons/facebook-white.svg" || null,
          iconPathHover: "/assets/icons/facebook-primary.svg" || null,
      },
      {
          name: "Twitter",
          url: "#",
          iconPath: "/assets/icons/twitter-white.svg" || null,
          iconPathHover: "/assets/icons/twitter-primary.svg" || null,
      },
      
      {
        name: "Instagram",
        url: "#",
        iconPath: "/assets/icons/instagram-white.svg" || null,
        iconPathHover: "/assets/icons/instagram-primary.svg" || null,
    },
    
    {
        name: "Linkedin",
        url: "#",
        iconPath: "/assets/icons/linkedin-white.svg" || null,
        iconPathHover: "/assets/icons/linkedin-primary.svg" || null,
    },
  ],
};
