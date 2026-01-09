"use client";
import Product_Services from "./Product_Services";
import { product_services } from "../SiteMaps/data";

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
