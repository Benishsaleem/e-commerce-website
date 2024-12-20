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
        <p className='font-Poppins text-[12px] w-[150px] h-[18px] pt-[4px]'>Showing 1–16 of 32 results</p>
       </div>
       <div className='flex ml-[500px] gap-[10px]'>
        <p className='font-Poppins text-[14px] pt-[5px] w-[30px] h-[18px]'>Show</p>
        <button className='text-gray-400 bg-[#FFFFFF] text-[14px] w-[30px] h-[30px] rounded-4'>16</button>
        <p className='font-Poppins text-[14px] pt-[5px] w-60px] h-[18px]'>Sort by</p>
        <button className='text-gray-400 bg-[#FFFFFF] text-[14px] w-[150px] h-[30px] rounded-4'>Default</button>
       </div>

     
      </div> 
       <div className='container w-[1250px] h-[1400px] bg-white'>
       <div className='grid grid-rows-4 grid-cols-4 pt-10 gap-10 w-[1300px] h-[1200px]'>
        <div>
          <Image src='/Images/bed.png' alt='bed' width='200' height='200'/>
          <p className='font-Poppins font-medium text-[12px] h-[20px]'>Trenton modular sofa_3</p>
          <h2 className='font-Poppins font-medium'>Rs. 25,000.00</h2>
        </div>
        <div>
        <Image src='/Images/S0.png' alt='dining' width='200' height='200'/>
        <p className='font-Poppins font-medium text-[12px] h-[20px]'>Granite dining table with dining chair</p>
        <h2 className='font-Poppins font-medium'>Rs. 25,000.00</h2>
        </div>
        <div>
        <Image src='/Images/S00.png' alt='outdoor table' width='200' height='200'/>
        <p className='font-Poppins font-medium text-[12px] h-[20px]'>Outdoor bar table and stool</p>
        <h2 className='font-Poppins font-medium'>Rs. 25,000.00</h2>
        </div>
        <div>
        <Image src='/Images/bed1.png' alt='bed2' width='200' height='200'/>
        <p className='font-Poppins font-medium text-[12px] h-[20px]'>Plain console with teak mirror</p>
        <h2 className='font-Poppins font-medium'>Rs. 25,000.00</h2>
        </div>
        <div>
        <Image src='/Images/S1.png' alt='table pic' width='200' height='200'/>
        <p className='font-Poppins font-medium text-[12px] h-[20px]'>Grain coffee table</p>
        <h2 className='font-Poppins font-medium'>Rs. 25,000.00</h2>
        </div>
        <div> <Image src='/Images/S2.png' alt='table pic' width='200' height='200'/>
        <p className='font-Poppins font-medium text-[12px] h-[20px]'>Kent coffee table</p>
        <h2 className='font-Poppins font-medium'>Rs. 25,000.00</h2>
        </div>
        <div>
        <Image src='/Images/S3.png' alt='table pic' width='200' height='200'/>
        <p className='font-Poppins font-medium text-[12px] h-[20px]'>Round coffee table_color 2</p>
        <h2 className='font-Poppins font-medium'>Rs. 25,000.00</h2>
        </div>
        <div>
        <Image src='/Images/S4.png' alt='table pic' width='200' height='200'/>
        <p className='font-Poppins font-medium text-[12px] h-[20px]'>Reclaimed teak coffee table</p>
        <h2 className='font-Poppins font-medium'>Rs. 25,000.00</h2>
        </div>
        <div>
        <Image src='/Images/S5.png' alt='table pic' width='200' height='200'/>
        <p className='font-Poppins font-medium text-[12px] h-[20px]'>Plain console_</p>
        <h2 className='font-Poppins font-medium'>Rs. 25,000.00</h2>
        </div>
        <div>
        <Image src='/Images/S6.png' alt='cupboard' width='200' height='200'/>
        <p className='font-Poppins font-medium text-[12px] h-[20px]'>Reclaimed teak Sideboard </p>
        <h2 className='font-Poppins font-medium'>Rs. 25,000.00</h2>
        </div>
        <div>
        <Image src='/Images/S7.png' alt='table chairs' width='200' height='200'/>
        <p className='font-Poppins font-medium text-[12px] h-[20px]'>SJP_0825</p>
        <h2 className='font-Poppins font-medium'>Rs. 25,000.00</h2>
        </div>
        <div>
        <Image src='/Images/S8.png' alt='table chairs' width='200' height='200'/>
        <p className='font-Poppins font-medium text-[12px] h-[20px]'>Bella chair and table</p>
        <h2 className='font-Poppins font-medium'>Rs. 25,000.00</h2>
        </div>
        <div>
        <Image src='/Images/S9.png' alt='table' width='200' height='200'/>
        <p className='font-Poppins font-medium text-[12px] h-[20px]'>Granite square side table</p>
        <h2 className='font-Poppins font-medium'>Rs. 25,000.00</h2>
        </div>
        <div>
        <Image src='/Images/Sofaset2.png' alt='sofa set' width='200' height='200'/>
        <p className='font-Poppins font-medium text-[12px] h-[20px]'>Asgaard sofa</p>
        <h2 className='font-Poppins font-medium'>Rs. 25,000.00</h2>
        </div>
        <div>
        <Image src='/Images/S11.png' alt='sofa set' width='200' height='200'/>
        <p className='font-Poppins font-medium text-[12px] h-[20px]'>Maya sofa three seater</p>
        <h2 className='font-Poppins font-medium'>Rs. 25,000.00</h2>
        </div>
        <div>
        <Image src='/Images/S12.png' alt='sofa set' width='200' height='200'/>
        <p className='font-Poppins font-medium text-[12px] h-[20px]'>Outdoor sofa set</p>
        <h2 className='font-Poppins font-medium'>Rs. 25,000.00</h2>
        </div>

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
