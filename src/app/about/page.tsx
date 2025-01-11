import React from 'react'
import Image from "next/image";
import { IoChevronForwardSharp } from "react-icons/io5";
import Header from "../components/Header";
import Footer from "../components/Footer";


const page = () => {
  return (
    <div>
           <Header/>
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
            Blog
          </h2>
          <div className="flex ">
            <p className="font-poppins font-semibold flex items-center">
              Home
              <IoChevronForwardSharp />
            </p>
            <span>Blog</span>
          </div>
        </div>
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
