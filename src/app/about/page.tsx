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
      <div className="bg-[#FAF3EA] py-20 px-10 flex justify-between gap-6">
        <div className="flex gap-4">
            
            <div>
                <h5 className="font-poppins font-bold text-[24px]">Free Delivery</h5>
                <p className="text-[#898989]">For all oders over $50, consectetur adipim scing elit.</p>
            </div>
        </div>
        <div className="flex gap-4">
          
            <div>
                <h5 className="font-poppins font-bold text-[24px]">90 Days Return</h5>
                <p className="text-[#898989]">If goods have problems, consectetur adipim scing elit.</p>
            </div>
        </div>
        <div className="flex gap-4">
  
            <div>
                <h5 className="font-poppins font-bold text-[24px]">Secure Payment</h5>
                <p className="text-[#898989]">100% secure payment, consectetur adipim scing elit.</p>
            </div>
        </div>
        </div>
    
      <Footer/>
      
    </div>
  )
}

export default page
