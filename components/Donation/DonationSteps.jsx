// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import StepBasicInfo from "./steps/StepBasicInfo";
// import StepAddress from "./steps/StepAddress";
// import StepPayment from "./steps/StepPayment";

// export default function DonationSteps({ onClose, donation }) {
//   const [step, setStep] = useState(0);

//   const [form, setForm] = useState({
//     donation,
//     basic: {
//       title: "",
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       countryCode: "+234",
//       donateAsOrganisation: false,
//     },
//     address: {},
//     payment: {},
//   });

//   const next = () => setStep((s) => s + 1);
//   const back = () => setStep((s) => Math.max(0, s - 1));

//   return (
//     <div className="flex flex-col lg:flex-row gap-4">

//       {/* LEFT PANEL */}
//       <div className="lg:w-2/3 bg-white border rounded-2xl overflow-hidden">
//         <Image
//           src="/assets/images/hero/care-01.png"
//           alt="Donation"
//           width={1200}
//           height={600}
//           className="w-full h-[45vh] object-cover"
//         />
//         <div className="p-6 text-sm">
//           <h2 className="font-bold mb-2">Your support is life-saving</h2>
//           <p className="text-justify">
//             1 in 100 Nigerians will be diagnosed with Congenital Heart Disease.
//             Together, we fund life-saving care.
//           </p>
//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div className="lg:w-1/3 bg-white border rounded-2xl p-4 relative">

//         {/* BACK BUTTON */}
//         {step > 0 && (
//           <button
//             onClick={back}
//             className="absolute top-4 left-4 text-sm font-medium"
//           >
//             ← Back
//           </button>
//         )}

//         {step === 0 && (
//           <StepBasicInfo
//             value={form.basic}
//             onChange={(basic) =>
//               setForm((f) => ({ ...f, basic }))
//             }
//             onNext={next}
//           />
//         )}

//         {step === 1 && (
//           <StepAddress
//             value={form.address}
//             onChange={(address) =>
//               setForm((f) => ({ ...f, address }))
//             }
//             onNext={next}
//           />
//         )}

//         {step === 2 && <StepPayment data={form} />}
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import StepBasicInfo from "./steps/StepBasicInfo";
import StepAddress from "./steps/StepAddress";
import StepPayment from "./steps/StepPayment";

export default function DonationSteps({ onClose, donation }) {
  const [step, setStep] = useState(0);

  const [form, setForm] = useState({
    donation,
    basic: {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      countryCode: "+234",
      donateAsOrganisation: false,
    },
    address: {},
    payment: {},
  });

//   const [form, setForm] = useState({
//     donation,
//     basic: {},
//     address: {},
//     payment: {},
//   });

  const next = () => setStep((s) => s + 1);

  
  // const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(0, s - 1));

  return (
    <>

    <div
        className="lg:flex gap-2"
    >

        <div
            className="lg:w-2/3 bg-white border lg:rounded-2xl relative"
        >

            <div
                className=""
            >
                <Image
                    src="/assets/images/hero/care-01.png"
                    alt="Donation "
                    width={1000}
                    height={1000}
                    className="lg:rounded-t-2xl w-full lg:h-[50vh]"
                />


                <Image
                    src="/assets/images/about/our-path-nobg.png"
                    alt="Donation "
                    width={1000}
                    height={1000}
                    className="w-full"
                />

                
            </div>
            
            <div
                className=" px-6"
            >
                <div
                    className="hidden lg:block flex mb-4"
                >
                    <Image
                        src="/logo-nobg.png"
                        alt="Donation "
                        width={1000}
                        height={1000}
                        className="w-[23%]"
                    />
                </div>

                <div>
                    <h2 className="font-bold my-2">Your support is life-saving</h2>
                </div>

                <div
                    className="my-2 text-justify text-sm"
                >
                    1 in 100 of us in the Nigeria will be diagnosed with Cogential Heart Disease. Together, we’re funding groundbreaking research at The Gracespring Health Foundation to develop better ways to treat people with Cogential Heart Disease everywhere. 
                </div>
                
                <div>
                    <b>Donate now and help make a difference today</b>
                </div>

            </div>
                
            <div
                className="hidden"
            >
                Get in touch·Privacy policy·Transaction fees                    
            </div>

        </div>
        
        <div
            className="lg:w-1/3 bg-white border lg:rounded-2xl p-2 relative"
        >
            
            
            {/* <button
                onClick={onClose}
                className="absolute top-4 left-4 text-xl"
            >
                ←
            </button> */}

         {/* BACK BUTTON */}
         {step > 0 && (
          <button
            onClick={back}
            className="absolute top-4 left-4 text-sm font-medium"
          >
            ← Back
          </button>
        )}

            {step === 0 && (
                <StepBasicInfo
                onNext={next}
                onChange={(data) =>
                    setForm({ ...form, basic: data })
                }
                />
            )}
            {step === 1 && (
                <StepAddress
                onNext={next}
                onChange={(data) =>
                    setForm({ ...form, address: data })
                }
                />
            )}
            {step === 2 && (
                <StepPayment
                data={form}
                />
            )}

        </div>

    </div>
    </>
  );
}
