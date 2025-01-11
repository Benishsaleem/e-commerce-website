import React from 'react'
import Image from "next/image";
import { IoChevronForwardSharp } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaVectorSquare } from "react-icons/fa";
import { BsViewList } from "react-icons/bs";
import { PiLineVerticalThin } from "react-icons/pi";
import Header from "../components/Header";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
              <Header />
      <div className="h-[313px] w-full relative ">
        <Image
          src="/Images/shopbanner.png"
          width={1280}
          height={100}
          className="absolute w-full h-full"
          alt="banner"
        />
        <div className="flex justify-center items-center flex-col h-full z-50 relative">
          <h2 className="text-[40px] font-poppins font-bold text-center">
            Shop
          </h2>
          <div className="flex ">
            <p className="font-poppins font-semibold flex items-center">
              Home
              <IoChevronForwardSharp/>
            </p>
            <span>Shop</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center w-full relative h-auto lg:h-[80px] px-4 lg:px-20 py-5 bg-[#eee0e0]">
  {/* Filter Section */}
  <div className="flex gap-2 items-center">
    <GiSettingsKnobs className="w-4 h-4" />
    <p className="font-Poppins text-sm">Filter</p>
  </div>

  {/* View Icons */}
  <div className="flex ml-2 items-center gap-4">
    <FaVectorSquare className="w-4 h-4" />
    <BsViewList className="w-5 h-5" />
    <PiLineVerticalThin className="w-6 h-6" />
  </div>

  {/* Results Section */}
  <div className="text-center mt-4 lg:mt-0 lg:ml-20">
    <p className="font-Poppins font-medium text-xs lg:text-sm">
      Showing 1–16 of 32 results
    </p>
  </div>

  {/* Show and Sort Section */}
  <div className="flex gap-4 items-center mt-4 lg:mt-0 lg:ml-80">
    <p className="font-Poppins text-sm">Show</p>
    <button className="text-gray-400 bg-white text-sm w-8 h-8 rounded-md">16</button>
    <p className="font-Poppins text-sm">Sort by</p>
    <button className="text-gray-400 bg-white text-sm w-36 h-8 rounded-md">
      Default
    </button>
  </div>
     </div>
     <div className="justify-center items-center mx-auto p-4 bg-white">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10">
    <div>
      <Image src="/Images/bed.png" alt="bed" width={200} height={200} />
      <p className="font-Poppins font-medium text-sm">Trenton modular sofa_3</p>
      <h2 className="font-Poppins font-medium">Rs. 25,000.00</h2>
    </div>
    <div>
      <Image src="/Images/S0.png" alt="dining" width={200} height={200} />
      <p className="font-Poppins font-medium text-sm">Granite dining table with dining chair</p>
      <h2 className="font-Poppins font-medium">Rs. 25,000.00</h2>
    </div>
    <div>
      <Image src="/Images/S00.png" alt="outdoor table" width={200} height={200} />
      <p className="font-Poppins font-medium text-sm">Outdoor bar table and stool</p>
      <h2 className="font-Poppins font-medium">Rs. 25,000.00</h2>
    </div>
    <div>
      <Image src="/Images/bed1.png" alt="bed2" width={200} height={200} />
      <p className="font-Poppins font-medium text-sm">Plain console with teak mirror</p>
      <h2 className="font-Poppins font-medium">Rs. 25,000.00</h2>
    </div>
    <div>
      <Image src="/Images/S1.png" alt="table pic" width={200} height={200} />
      <p className="font-Poppins font-medium text-sm">Grain coffee table</p>
      <h2 className="font-Poppins font-medium">Rs. 25,000.00</h2>
    </div>
    <div>
      <Image src="/Images/S2.png" alt="table pic" width={200} height={200} />
      <p className="font-Poppins font-medium text-sm">Kent coffee table</p>
      <h2 className="font-Poppins font-medium">Rs. 25,000.00</h2>
    </div>
    <div>
      <Image src="/Images/S3.png" alt="table pic" width={200} height={200} />
      <p className="font-Poppins font-medium text-sm">Round coffee table_color 2</p>
      <h2 className="font-Poppins font-medium">Rs. 25,000.00</h2>
    </div>
    <div>
      <Image src="/Images/S4.png" alt="table pic" width={200} height={200} />
      <p className="font-Poppins font-medium text-sm">Reclaimed teak coffee table</p>
      <h2 className="font-Poppins font-medium">Rs. 25,000.00</h2>
    </div>
    <div>
      <Image src="/Images/S5.png" alt="table pic" width={200} height={200} />
      <p className="font-Poppins font-medium text-sm">Plain console_</p>
      <h2 className="font-Poppins font-medium">Rs. 25,000.00</h2>
    </div>
    <div>
      <Image src="/Images/S6.png" alt="cupboard" width={200} height={200} />
      <p className="font-Poppins font-medium text-sm">Reclaimed teak Sideboard</p>
      <h2 className="font-Poppins font-medium">Rs. 25,000.00</h2>
    </div>
    <div>
      <Image src="/Images/S7.png" alt="table chairs" width={200} height={200} />
      <p className="font-Poppins font-medium text-sm">SJP_0825</p>
      <h2 className="font-Poppins font-medium">Rs. 25,000.00</h2>
    </div>
    <div>
      <Image src="/Images/S8.png" alt="table chairs" width={200} height={200} />
      <p className="font-Poppins font-medium text-sm">Bella chair and table</p>
      <h2 className="font-Poppins font-medium">Rs. 25,000.00</h2>
    </div>
    <div>
      <Image src="/Images/S9.png" alt="table" width={200} height={200} />
      <p className="font-Poppins font-medium text-sm">Granite square side table</p>
      <h2 className="font-Poppins font-medium">Rs. 25,000.00</h2>
    </div>
    <div>
      <Image src="/Images/Sofaset2.png" alt="sofa set" width={200} height={200} />
      <p className="font-Poppins font-medium text-sm">Asgaard sofa</p>
      <h2 className="font-Poppins font-medium">Rs. 25,000.00</h2>
    </div>
    <div>
      <Image src="/Images/S11.png" alt="sofa set" width={200} height={200} />
      <p className="font-Poppins font-medium text-sm">Maya sofa three seater</p>
      <h2 className="font-Poppins font-medium">Rs. 25,000.00</h2>
    </div>
    <div>
      <Image src="/Images/S12.png" alt="sofa set" width={200} height={200} />
      <p className="font-Poppins font-medium text-sm">Outdoor sofa set</p>
      <h2 className="font-Poppins font-medium">Rs. 25,000.00</h2>
    </div>
  </div>
</div>
<div className='flex flex-wrap justify-center items-center w-full relative h-40 gap-10 bg-white'>
  <button className='bg-[#FBEBB5] w-10 h-10'>1</button>
  <button className='bg-[#FFF9E5] w-10 h-10'>2</button>
  <button className='bg-[#FFF9E5] w-10 h-10'>3</button>
  <button className='font-Poppins bg-[#FFF9E5] w-14 h-10'>Next</button>

</div>

      <div className="bg-[#FAF3EA] py-10 px-6 lg:py-20 lg:px-40">
  <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-6">
    {/* Free Delivery Section */}
    <div className="flex gap-4 items-start">
      <div>
        <h5 className="font-poppins font-bold text-[20px] lg:text-[24px]">Free Delivery</h5>
        <p className="text-[#898989] w-full lg:w-[250px] text-[14px] lg:text-[16px]">
          For all orders over $50, consectetur adipiscing elit.
        </p>
      </div>
    </div>

    {/* 90 Days Return Section */}
    <div className="flex gap-4 items-start">
      <div>
        <h5 className="font-poppins font-bold text-[20px] lg:text-[24px]">90 Days Return</h5>
        <p className="text-[#898989] w-full lg:w-[250px] text-[14px] lg:text-[16px]">
          If goods have problems, consectetur adipiscing elit.
        </p>
      </div>
    </div>

    {/* Secure Payment Section */}
    <div className="flex gap-4 items-start">
      <div>
        <h5 className="font-poppins font-bold text-[20px] lg:text-[24px]">Secure Payment</h5>
        <p className="text-[#898989] w-full lg:w-[250px] text-[14px] lg:text-[16px]">
          100% secure payment, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </div>
</div>


      
      
      <Footer/>
    </div>
  )
}

export default page
