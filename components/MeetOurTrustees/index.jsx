"use client";
import React from "react";
import Image from "next/image";
import PageHero from "../Hero";

// The data remains the same, but we will only render the brief, essential parts.
const trusteesData = [
  {
    id: 1,
    name: "Joe Ugbede Abba",
    role: "Chairman",
    occupation: "Stockbroking",
    location: "Victoria Island, Lagos",
    imageSrc: "/assets/images/new/trustees/Joe_Ugbede_Abba.png",
  },
  {
    id: 2,
    name: "Barr. Pere Nduku",
    role: "Secretary",
    occupation: "Legal Practitioner",
    location: "Lekki Phase 1, Lagos",
    // imageSrc: "/assets/images/New/trustees/Joe_Ugbede_Abba.png",
    imageSrc: "/gshf.jpg"
  },
  {
    id: 3,
    name: "Bishop Etteh Enobong",
    role: "Member",
    occupation: "Clergy",
    location: "Lekki, Lagos",
    // imageSrc: "/assets/images/New/trustees/Joe_Ugbede_Abba.png",
    imageSrc: "/gshf.jpg"
  },
  {
    id: 4,
    name: "Engr. Asibor Eromosele",
    role: "Member",
    occupation: "Engineering",
    location: "Lekki Phase 1, Lagos",
    imageSrc: "/assets/images/new/trustees/ASIBOR_EROMOSELE.png",
  },
  {
    id: 5,
    name: "Rev. Simon Odomokwu",
    role: "Member",
    occupation: "Legal Practitioner & Clergy",
    location: "Ajah, Lagos",
    // imageSrc: "/assets/images/New/trustees/Joe_Ugbede_Abba.png",
    imageSrc: "/gshf.jpg"
  },
  {
    id: 6,
    name: "Dr. Tagbo Azubike",
    role: "Member",
    occupation: "Doctor",
    location: "International / Diaspora",
    imageSrc: "/assets/images/new/trustees/Dr_Tagbo_Azubike.png",
  }
];

export default function TrusteesPage() {
  return (
    <main className="bg-white min-h-screen pb-20">
      <PageHero
        title={<>Meet Our Trustees</>}
        description={
          <>
            The visionaries and stewards behind our foundation. Our Board of 
            Trustees combines expertise across medicine, law, engineering, and 
            community leadership to ensure transparency and lasting impact.
          </>
        }
      />

      {/* 
        GRID LAYOUT EXPLANATION:
        grid-cols-2: 2 items per row on mobile screens.
        md:grid-cols-3: 3 items per row on tablets.
        lg:grid-cols-4: 4 items per row on desktop screens.
      */}
      <div className="container mx-auto px-4 lg:px-8 mt-16 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {trusteesData.map((trustee) => (
            <div 
              key={trustee.id} 
              className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Container: Keeps a perfect square aspect ratio for uniformity */}
              <div className="relative w-full aspect-square bg-gray-50">
                <Image
                  src={trustee.imageSrc}
                  alt={`Portrait of ${trustee.name}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              {/* Brief Information Container */}
              <div className="p-4 md:p-6 text-center flex flex-col flex-grow justify-center">
                <h3 className="font-bold text-gray-900 text-sm md:text-lg mb-1 leading-tight">
                  {trustee.name}
                </h3>
                
                {/* Role / Title */}
                <p className="text-blue-700 text-xs md:text-sm font-semibold mb-3 uppercase tracking-wider">
                  {trustee.role}
                </p>
                
                {/* Occupation & Location (Minimal) */}
                <div className="text-gray-500 text-xs md:text-sm space-y-1 mt-auto">
                  {/* <p>{trustee.occupation}</p>
                  <p className="text-gray-400">{trustee.location}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


// "use client";
// import React from "react";
// import PageHero from "../Hero";
// import DynamicSplitSection from "../DynamicSplitSection";
// // import DynamicSplitSection from "../../../components/DynamicSplitSection"; // Adjust path if necessary

// // We store the data in a clean array to easily manage and map it.
// const trusteesData = [
//   {
//     id: 1,
//     name: "Joe Ugbede Abba",
//     role: "Chairman",
//     occupation: "Stockbroking",
//     location: "Victoria Island, Lagos",
//     email: "joeabba2000@yahoo.com",
//     imageSrc: "/assets/images/trustees/joe-abba.jpg", // Replace with actual image path
//     bio: [
//       "Joe Ugbede Abba brings extensive executive experience in stockbroking and corporate financial management to the Board.",
//       "As Chairman, he provides strategic oversight and ensures that the foundation's governance aligns with our core mission of delivering life-saving healthcare solutions."
//     ],
//     quote: "Ensuring transparency and lasting impact in every life we touch is our ultimate mandate."
//   },
//   {
//     id: 2,
//     name: "Barr. Pere Nduku",
//     role: "Secretary",
//     occupation: "Legal Practitioner",
//     location: "Lekki Phase 1, Lagos",
//     email: "perenduku68@gmail.com",
//     imageSrc: "/assets/images/trustees/pere-nduku.jpg",
//     bio: [
//       "Barr. Pere Nduku is a seasoned Legal Practitioner responsible for overseeing the legal and compliance frameworks of the organization.",
//       "His meticulous approach to corporate governance ensures that the trust operates with the highest level of integrity and legal standard."
//     ],
//     quote: "Integrity and compliance are the bedrock of sustainable philanthropic impact."
//   },
//   {
//     id: 3,
//     name: "Bishop Etteh Enobong",
//     role: "Member",
//     occupation: "Clergy",
//     location: "Lekki, Lagos",
//     email: "judahchambers2@gmail.com",
//     imageSrc: "/assets/images/trustees/etteh-enobong.jpg",
//     bio: [
//       "Bishop Etteh Enobong brings profound spiritual leadership and community-focused advocacy to the Board.",
//       "His dedication to community welfare and ethical guidance helps steer the foundation’s initiatives with compassion and empathy."
//     ],
//     quote: "True service is measured by the hope and healing we bring to the most vulnerable."
//   },
//   {
//     id: 4,
//     name: "Engr. Asibor Eromosele",
//     role: "Member",
//     occupation: "Engineering",
//     location: "Lekki Phase 1, Lagos",
//     email: "aasibor@yahoo.com",
//     imageSrc: "/assets/images/trustees/asibor-eromosele.jpg",
//     bio: [
//       "With a strong background in Engineering, Engr. Asibor Eromosele contributes analytical rigor and structural planning expertise to the team.",
//       "His problem-solving acumen is vital in streamlining operations and expanding the reach of our healthcare programs."
//     ],
//     quote: "Building sustainable solutions today ensures a healthier tomorrow for our communities."
//   },
//   {
//     id: 5,
//     name: "Rev. (Barr.) Simon Yusuf Odomokwu",
//     role: "Member",
//     occupation: "Legal Practitioner & Clergy",
//     location: "Ajah, Lagos",
//     email: "pstsimono@yahoo.com",
//     imageSrc: "/assets/images/trustees/simon-odomokwu.jpg",
//     bio: [
//       "Combining legal expertise with pastoral care, Rev. Simon Odomokwu offers a unique perspective on social justice and patient advocacy.",
//       "His dual expertise ensures our initiatives remain both legally sound and deeply rooted in humanity."
//     ],
//     quote: "Justice in healthcare means ensuring no one is left behind in their time of need."
//   },
//   {
//     id: 6,
//     name: "Dr. Tagbo Azubike",
//     role: "Member",
//     occupation: "Doctor",
//     location: "International / Diaspora",
//     email: "Contact via Foundation", // Avoid exposing international personal numbers directly
//     imageSrc: "/assets/images/trustees/tagbo-azubike.jpg",
//     bio: [
//       "Dr. Tagbo Azubike provides critical medical oversight and international healthcare perspectives to the Board of Trustees.",
//       "His clinical expertise ensures that the foundation's medical interventions meet globally recognized standards of care."
//     ],
//     quote: "Access to world-class medical care is a fundamental right, not a privilege."
//   }
// ];

// export default function TrusteesPage() {
//   return (
//     <main className="bg-white min-h-screen pb-20">
//       <PageHero
//         title={<>Meet Our Trustees</>}
//         description={
//           <>
//             The visionaries and stewards behind our foundation. Our Board of 
//             Trustees combines expertise across medicine, law, engineering, and 
//             community leadership to ensure transparency and lasting impact.
//           </>
//         }
//       />

//       <div className="container mx-auto px-4 lg:px-8 mt-10">
//         {trusteesData.map((trustee, index) => (
//           <React.Fragment key={trustee.id}>
//             <DynamicSplitSection
//               // Alternates the image position left and right for a beautiful zigzag layout
//               imagePosition={index % 2 === 0 ? "right" : "left"}
//               imageSrc={trustee.imageSrc}
//               imageAlt={`Portrait of ${trustee.name}`}
//               preTitle={`${trustee.role}, Board of Trustees`}
//               title={trustee.name}
//               detailsTable={[
//                 { label: "Occupation", value: trustee.occupation },
//                 { label: "Location", value: trustee.location },
//                 { label: "Email", value: trustee.email }
//               ]}
//               paragraphs={trustee.bio}
//               quote={trustee.quote}
//             />
//             {/* Don't render the divider after the very last item */}
//             {index !== trusteesData.length - 1 && (
//               <hr className="border-gray-100 my-4" />
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </main>
//   );
// }