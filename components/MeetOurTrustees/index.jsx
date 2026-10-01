"use client";
import React from "react";
import Image from "next/image";
import PageHero from "../Hero";

const trusteesData = [
  {
    id: 1,
    name: "Joe Ugbede Abba",
    role: "Chairman",
    occupation: "Stockbroking",
    location: "Victoria Island, Lagos",
    imageSrc: "/assets/images/New/trustees/Joe_Ugbede_Abba.jpeg",
    position: "object-top", // <-- Add this custom position for ID 1
  },
  {
    id: 2,
    name: "Barr. Pere Nduku",
    role: "Secretary",
    occupation: "Legal Practitioner",
    location: "Lekki Phase 1, Lagos",
    imageSrc: "/assets/images/New/trustees/Barr.PereNduku.jpeg"
  },
  {
    id: 3,
    name: "Bishop Etteh Enobong",
    role: "Member",
    occupation: "Clergy",
    location: "Lekki, Lagos",
    imageSrc: "/gshf.jpg"
  },
  {
    id: 4,
    name: "Engr. Asibor Eromosele",
    role: "Member",
    occupation: "Engineering",
    location: "Lekki Phase 1, Lagos",
    imageSrc: "/assets/images/New/trustees/ASIBOR_EROMOSELE.png",
  },
  {
    id: 5,
    name: "Rev. Simon Odomokwu",
    role: "Member",
    occupation: "Legal Practitioner & Clergy",
    location: "Ajah, Lagos",
    imageSrc: "/assets/images/New/trustees/Rev.SimonOdomokwu.jpeg"
  },
  {
    id: 6,
    name: "Dr. Tagbo Azubike",
    role: "Member",
    occupation: "Doctor",
    location: "International / Diaspora",
    imageSrc: "/assets/images/New/trustees/Dr_Tagbo_Azubike.png",
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

      <div className="container mx-auto px-4 lg:px-8 mt-16 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {trusteesData.map((trustee) => (
            <div 
              key={trustee.id} 
              className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square bg-gray-50">
                <Image
                  src={trustee.imageSrc}
                  alt={`Portrait of ${trustee.name}`}
                  fill
                  // Use dynamic position falling back to center
                  className={`object-cover ${trustee.position || "object-center"}`} 
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              {/* Brief Information Container */}
              <div className="p-4 md:p-6 text-center flex flex-col flex-grow justify-center">
                <h3 className="font-bold text-gray-900 text-sm md:text-lg mb-1 leading-tight">
                  {trustee.name}
                </h3>
                
                <p className="text-blue-700 text-xs md:text-sm font-semibold mb-3 uppercase tracking-wider">
                  {trustee.role}
                </p>
                
                <div className="text-gray-500 text-xs md:text-sm space-y-1 mt-auto">
                  {/* Empty for now based on your code */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}