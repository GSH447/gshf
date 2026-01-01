"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axiosInstance from "../../../lib/axios";

const TITLES = ["Mr", "Mrs", "Miss", "Dr", "Prof"];

// export default function StepBasicInfo({ onNext, onChange }) {
export default function StepBasicInfo({ data, onChange, onNext, onBack }) {
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

  // const [formData, setFormData] = useState({
  //   title: "",
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   donateAsOrganisation: false,
  // });

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

    if (!data.title) e.title = "Title is required";
    if (!data.firstName.trim()) e.firstName = "First name required";
    if (!data.lastName.trim()) e.lastName = "Last name required";

    if (!/^\S+@\S+\.\S+$/.test(data.email))
      e.email = "Invalid email address";

    if (!data.phone || data.phone.length < 7)
      e.phone = "Valid phone number required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ---------------- CONTINUE ---------------- */
  const handleContinue = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = {
      ...data,
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
            // value={formData.title}
            // onChange={handleChange}
            value={data.title || ""}
            onChange={(e) => onChange({ title: e.target.value })}
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
              // value={formData.firstName}
              // onChange={handleChange}
              value={data.firstName || ""}
              onChange={(e) => onChange({ firstName: e.target.value })}
              className="p-2 border rounded-md w-full text-black"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>

          <div className="w-1/2">
            <label className="text-black">Last name</label>
            <input
              type="text"
              name="lastName"
              // value={formData.lastName}
              // onChange={handleChange}
              value={data.lastName || ""}
              onChange={(e) => onChange({ lastName: e.target.value })}
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
            // value={formData.email}
            // onChange={handleChange}
            value={data.email || ""}
            onChange={(e) => onChange({ email: e.target.value })}
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
              // value={formData.phone}
              // onChange={handleChange}
              value={data.phone || ""}
              onChange={(e) => onChange({ phone: e.target.value })}
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
            checked={data.donateAsOrganisation}
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
