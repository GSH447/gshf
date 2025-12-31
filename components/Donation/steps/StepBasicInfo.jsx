"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axiosInstance from "../../../lib/axios";

const TITLES = ["Mr", "Mrs", "Miss", "Dr", "Prof"];

export default function StepBasicInfo({ onNext, onChange }) {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [selectedCountry, setSelectedCountry] = useState({
    code: "+234",
    flag: "",
    name: "Nigeria",
  });

  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    donateAsOrganisation: false,
  });

  /* ---------------- FETCH COUNTRIES ---------------- */
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=idd,name,flags")
      .then((res) => res.json())
      .then((data) => {
        const countryData = data
          .filter((c) => c.idd?.root && c.flags?.png)
          .map((c) => ({
            code: c.idd.root + (c.idd.suffixes?.[0] || ""),
            flag: c.flags.png,
            name: c.name.common,
          }));

        setCountries(countryData);
        const nigeria = countryData.find((c) => c.code === "+234");
        if (nigeria) setSelectedCountry(nigeria);
      })
      .catch((err) =>
        console.error("🌍 Country fetch error:", err.message)
      );
  }, []);

  /* ---------------- HANDLERS ---------------- */
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const e = {};

    if (!formData.title) e.title = "Title is required";
    if (!formData.firstName.trim()) e.firstName = "First name required";
    if (!formData.lastName.trim()) e.lastName = "Last name required";

    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      e.email = "Invalid email address";

    if (!formData.phone || formData.phone.length < 7)
      e.phone = "Valid phone number required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ---------------- CONTINUE ---------------- */
  const handleContinue = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = {
      ...formData,
      countryCode: selectedCountry.code,
    };

    // 🔑 pass data to parent step manager
    onChange(payload);
    onNext();
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="w-fit m-auto">
      <div className="w-fit mx-auto my-4">
        <h3 className="text-primary text-center font-bold tracking-wide">
          Enter your details
        </h3>
      </div>

      <form className="flex flex-col space-y-4 w-full px-[0.5rem]">
        {/* TITLE */}
        <div>
          <label className="text-black">Title</label>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-md text-black"
          >
            <option value="">Select title</option>
            {TITLES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* NAME */}
        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="text-black">First name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="p-2 border rounded-md w-full text-black"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>

          <div className="w-1/2">
            <label className="text-black">Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="p-2 border rounded-md w-full text-black"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-black">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md text-black"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* PHONE */}
        <div>
          <label className="text-black">Telephone</label>
          <div className="flex items-center border rounded-md p-2 space-x-2">
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2"
            >
              <Image
                src={selectedCountry.flag || "/images/contact/flag.png"}
                width={24}
                height={16}
                alt="flag"
              />
              <span>{selectedCountry.code}</span>
            </button>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 p-2 outline-none"
              placeholder="8143516481"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* ORG */}
        <label className="flex gap-2 text-sm my-3">
          <input
            type="checkbox"
            name="donateAsOrganisation"
            checked={formData.donateAsOrganisation}
            onChange={handleChange}
          />
          Donate as an organisation
        </label>

        {/* CONTINUE */}
        <button
          onClick={handleContinue}
          className="w-full bg-primary text-white p-2 rounded-md hover:bg-black"
          disabled={loading}
        >
          Continue
        </button>
      </form>
    </div>
  );
}

// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import axiosInstance from "../../../lib/axios";
// // import { AxiosErrorWithMessage } from "../../../types/api";

// export default function StepBasicInfo({ onNext, onChange }) {
//   const [countries, setCountries] = useState([]); //countries variables
//   // const [text, setText] = useState(""); //text variables
//   const [search, setSearch] = useState(""); //search variables
//   const [showDropdown, setShowDropdown] = useState(false); //tel dropdown variables
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [isChecked, setIsChecked] = useState(false); // State to track checkbox
//   const [loading, setLoading] = useState(false); //set loading
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
//   const [selectedCountry, setSelectedCountry] = useState({
//     code: "+234",
//     flag: "",
//     name: "Nigeria",
//   }); //selectedCountry variables

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: ""
//   }); //form variables


//   useEffect(() => {
//   fetch("https://restcountries.com/v3.1/all?fields=idd,name,flags")
//     .then(async (res) => {
//       if (!res.ok) {
//         throw new Error(`Failed to fetch countries. Status: ${res.status}`);
//       }
//       const data = await res.json();
//       if (!Array.isArray(data)) {
//         throw new Error("Invalid data format: expected array");
//       }

//       const countryData = data
//         .filter((country) => country.idd?.root && country.idd.suffixes && country.flags?.png)
//         .map((country) => ({
//           code: country.idd.root + (country.idd.suffixes?.[0] || ""),
//           flag: country.flags.png,
//           name: country.name.common,
//         }));
      
//       setCountries(countryData);
      
//       const nigeria = countryData.find((c) => c.code === "+234");
//       if (nigeria) setSelectedCountry(nigeria);
//     })
//     .catch((err) => {
//       console.error("🌍 Country fetch error:", err.message);
//     });
//   }, []);


//   //handleCountryChange function

//   // eslint-disable-next-line
//   const handleCountryChange = (country) => {
//     setSelectedCountry(country);
//     setShowDropdown(false);
//   };

//   //textarea function 

//   // eslint-disable-next-line
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };



//   // eslint-disable-next-line
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");
//     setSuccessMessage("");
//     setLoading(true);
//     const payload = {
//       ...formData,
//       countryCode: selectedCountry.code,
//     };

//     try {
//         const response = await axiosInstance.post('/contact',  payload );
//         const result = response.data;
    
//         if (result.status === 'success') {
//           setSuccessMessage(`Submitted successfully!`);
//         } 
//         else {
//           setErrorMessage(result.message || "Submission failed, email info@gracespringhospitals.com or gracespringhospitals@gmail.com");
//         }
//     } 

    
//     catch (err) {
//       const error = err;
    
//       if (error.response && error.response.data) {
//         setErrorMessage(error.response.data.message || "Something went wrong.");
//       } else if (error.message) {
//         setErrorMessage(error.message || "Network error, please try again.");
//       } else {
//         setErrorMessage("An unexpected error occurred.");
//       }
//     }
    
//     finally {
//         setLoading(false);
//     }

//   };

//   // Modal Toggle
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };
  

//   return (



//     <div className=" w-fit m-auto">

//       <div className=" w-fit mx-auto my-4">

//         <h3  className=" text-primary text-center font-bold tracking-wide">
//             Enter your details
//         </h3>

//       </div>

//       <form className=" flex flex-col space-y-4 w-full px-[0.5rem]" onSubmit={handleSubmit}>

//           <div className="flex gap-2">

//             <div>
//               <label className=" text-black">First name</label>
//               <input
//                 type="text"
//                 placeholder="E.g John"
//                 className="flex-1 p-2 border rounded-md focus:ring focus:outline-none w-full  text-black"
//                 name="firstName"
//                 onChange={handleChange}
//                 required
//               /> 
//             </div>

//             <div>
//               <label className=" text-black">Last name</label>
//               <input
//                 type="text"
//                 placeholder="E.g Support"
//                 className="flex-1 p-2 border rounded-md focus:ring focus:outline-none w-full  text-black"
//                 name="lastName"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//           </div>

//           <div>
//             <label className=" text-black">Email</label>
//             <input
//               type="email"
//               placeholder="E.g name@email.com"
//               className="w-full p-2 border rounded-md focus:ring focus:outline-none  text-black"
//               name="email"
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <div>
//             <label className=" text-black">Telephone</label>
//             <div className="flex items-center border rounded-md p-2 space-x-2   text-black">
//               <div className="relative">
//                 <button
//                   type="button"
//                   className="flex items-center space-x-2 p-2 focus:outline-none"
//                   // onClick={() => {
//                   //   /* Optional: Add a modal/dropdown to select the country */
//                   // }}

//                 onClick={() => setShowDropdown(!showDropdown)}
//                 >
//                   <Image
//                     // src={selectedCountry.flag || null}
//                     src={selectedCountry?.flag  || "/images/contact/flag.png"}
//                     width={50}
//                     height={50}
//                     alt="Flag"
//                     className="w-6 h-4 rounded-md"
//                   />
                  
//                   <span className="text-sm font-medium">{selectedCountry.code}</span>
//                 </button>

//                 {showDropdown && (
//                 <div className="absolute top-12 left-0 bg-white border shadow-md max-h-60 overflow-y-auto w-44 z-10">
//                   <input
//                     type="text"
//                     placeholder="Search country..."
//                     className="w-full p-2 border-b"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                   />
//               {countries
//                     .filter((c) =>
//                       c.name.toLowerCase().includes(search.toLowerCase())
//                     )
//                     .map((country) => (
//                       <div
//                         key={`${country.code}-${country.name}`}
//                         className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
//                         onClick={() => handleCountryChange(country)}
//                       >
//                         <Image
//                           src={country.flag || "/images/contact/flag.png"}
//                           alt={country.name}
//                           className="w-6 h-4 mr-2"
//                           width={500}
//                           height={500}
//                         />
//                         <span>{country.name} ({country.code})</span>
//                       </div>
//                     ))}
//                 </div>
//               )}
//                 </div>

//                 <input
//                   type="tel"
//                   placeholder="E.g 8143516481"
//                   className="flex-1 p-2 focus:ring focus:outline-none "
//                   name="phone"
//                   onChange={handleChange}
//                   required
//                 />
//             </div>
//           </div>
            
//           <div>


//             <label className="flex gap-2 text-sm my-3">
//             <input type="checkbox" /> Donate as an organisation
//             </label>
            
//           </div>



          
//           <button
//             // type="submit"
//             onClick={onNext}
//             className="w-full bg-primary text-white p-2 rounded-md hover:bg-black"
//             disabled={!isChecked} // Disable button when checkbox is unchecked
//           >
            
//             Continue
//           </button>
          
//           {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//           {successMessage && <p className="text-green-500">{successMessage}</p>}
//       </form>
          

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50  z-50 overflow-auto">
//             <button
//               className="mt-4 bg-primary text-white p-2 rounded-md hover:bg-black right"
//               onClick={toggleModal} // Close the modal
//             >
//               Close
//             </button>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <PrivacyPolicyQuestions/>
//           </div>
//         </div>
//       )}

//     </div>



//   );
// }





// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function StepBasicInfo({ value, onChange, onNext }) {
//   const [errors, setErrors] = useState({});
//   const [countries, setCountries] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [search, setSearch] = useState("");

//   // Fetch countries once
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all?fields=idd,name,flags")
//       .then((res) => res.json())
//       .then((data) =>
//         setCountries(
//           data
//             .filter((c) => c.idd?.root)
//             .map((c) => ({
//               code: c.idd.root + (c.idd.suffixes?.[0] || ""),
//               name: c.name.common,
//               flag: c.flags.png,
//             }))
//         )
//       );
//   }, []);

//   // Validation
//   const validate = () => {
//     const e = {};
//     if (!value.firstName) e.firstName = "First name required";
//     if (!value.lastName) e.lastName = "Last name required";
//     if (!/^\S+@\S+\.\S+$/.test(value.email))
//       e.email = "Invalid email";
//     if (!value.phone) e.phone = "Phone required";
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const handleNext = () => {
//     if (validate()) onNext();
//   };

//   const update = (k, v) => onChange({ ...value, [k]: v });

//   return (
//     <div>
//       <h3 className="text-center font-bold mb-4">Enter your details</h3>

//       <div className="space-y-3">
//         <input
//           placeholder="First name"
//           value={value.firstName}
//           onChange={(e) => update("firstName", e.target.value)}
//           className="input"
//         />
//         {errors.firstName && <p className="error">{errors.firstName}</p>}

//         <input
//           placeholder="Last name"
//           value={value.lastName}
//           onChange={(e) => update("lastName", e.target.value)}
//           className="input"
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={value.email}
//           onChange={(e) => update("email", e.target.value)}
//           className="input"
//         />
//         {errors.email && <p className="error">{errors.email}</p>}

//         {/* PHONE */}
//         <div className="flex border rounded-md p-2 gap-2">
//           <button
//             type="button"
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="flex items-center gap-2"
//           >
//             <span>{value.countryCode}</span>
//           </button>

//           <input
//             type="tel"
//             placeholder="Phone"
//             value={value.phone}
//             onChange={(e) => update("phone", e.target.value)}
//             className="flex-1 outline-none"
//           />
//         </div>

//         <label className="flex gap-2 text-sm">
//           <input
//             type="checkbox"
//             checked={value.donateAsOrganisation}
//             onChange={(e) =>
//               update("donateAsOrganisation", e.target.checked)
//             }
//           />
//           Donate as an organisation
//         </label>

//         <button
//           onClick={handleNext}
//           className="w-full bg-primary text-white p-2 rounded-md"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// }
