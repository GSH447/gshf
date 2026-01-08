"use client";
import Product_ServicesImage from "./Product_ServicesImage";
import Product_Services from "./Product_Services";
import { product_services } from "../SiteMaps/data";
import { motion } from "framer-motion";

export default function Product_ServicesPage() {
  return (
    <div
    className='flex flex-col lg:flex-row bg-[#FDF2EB] justify-between w-full'
    id='services'
  >

      {/* Product_Services Form Section */}
      <div className="lg:my-auto lg:p-10 lg:flex">
        <Product_Services product_services={product_services}/>
      </div>

    </div>
  );
}
