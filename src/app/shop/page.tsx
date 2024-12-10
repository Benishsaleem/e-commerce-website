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
      <div className='flex w-[full] relative h-[80px] px-[100px] py-[25px] bg-[#eee0e0]'>
          <div className='flex gap-2'>
          <GiSettingsKnobs className='w-[18px] h-[18px] pt-[4px]' />
          <p className='font-Poppins font-[300px] h-[20px]'>Filter</p>
       </div>
       <FaVectorSquare className='w-[18px] h-[18px] pt-[5px] ml-[20px]'/>
       <BsViewList className='w-[20px] h-[20px] pt-[5px] ml-[20px]'/>
       <PiLineVerticalThin className='w-[30px] h-[30px] ml-[18px] mt-[-2px]'/>
       <div className='ml-[20px]'>
        <p className='font-Poppins text-[14px] pt-[4px]'>Showing 1–16 of 32 results</p>
       </div>
       <div className='flex ml-[500px] gap-[10px]'>
        <p className='font-Poppins text-[16px] pt-[5px]'>Show</p>
        <button className='text-gray-400 bg-[#FFFFFF] text-[14px] w-[30px] h-[30px]'>16</button>
        <p className='font-Poppins text-[16px] pt-[5px]'>Sort by</p>
        <button className='text-gray-400 bg-[#FFFFFF] text-[14px] w-[150px] h-[30px]'>Default</button>
       </div>


      </div>
      <div className="bg-[#FAF3EA] py-20 px-40 flex justify-between gap-6">
        <div className="flex gap-4">
            
            <div>
                <h5 className="font-poppins font-bold text-[24px]">Free Delivery</h5>
                <p className="text-[#898989] w-[250px]">For all oders over $50, consectetur adipim scing elit.</p>
            </div>
        </div>
        <div className="flex gap-4">
          
            <div>
                <h5 className="font-poppins font-bold text-[24px]">90 Days Return</h5>
                <p className="text-[#898989] w-[250px]">If goods have problems, consectetur adipim scing elit.</p>
            </div>
        </div>
        <div className="flex gap-4">
  
            <div>
                <h5 className="font-poppins font-bold text-[24px]">Secure Payment</h5>
                <p className="text-[#898989] w-[250px]">100% secure payment, consectetur adipim scing elit.</p>
            </div>
        </div>
        </div>
      
      <Footer/>
    </div>
  )
}

export default page
