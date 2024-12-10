import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
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
            Contact
          </h2>
          <div className="flex ">
            <p className="font-poppins font-semibold flex items-center">
              Home
              <IoChevronForwardSharp />
            </p>
            <span>Contact</span>
          </div>
        </div>
      </div>
      <div className="w-[1183px] mb-5 sec1 mx-auto my-0">
  

      <div className="text-center font-poppins mb-10 mt-8">
        <h5 className="font-bold text-[36px]">Get In Touch With Us</h5>
        <p className="text-[#9F9F9F] text-[16px]">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us
          <br />
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>
      <div className="flex gap-4 ">
        <div className="w-[399px] h-[537px] ">
          <div className="flex gap-2 mb-4">
            <FaLocationDot />
            <div className="">
              <h3 className="font-bold">Address</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="flex gap-2 mb-4">
            <FaPhoneAlt />
            <div>
              <h3 className="font-bold">Phone</h3>
              <p>
                Mobile: +(84) 546-6789
                <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <MdAccessTimeFilled />
            <div>
              <h3 className="font-bold">Working Time</h3>
              <p>
                Monday-Friday: 9:00 -22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-20">
          <div className="mb-4">
            <label htmlFor="" className="mb-3">
              Your name
            </label>
            <input
              type="text"
              className="w-full border rounded-md h-16 border-[#9F9F9F] px-5"
              placeholder="Abc"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="mb-3">
            Email address
            </label>
            <input
              type="text"
              className="w-full border rounded-md h-16 border-[#9F9F9F] px-5"
              placeholder="Abc@def.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="mb-3">
            Subject
            </label>
            <input
              type="text"
              className="w-full border rounded-md h-16 border-[#9F9F9F] px-5"
              placeholder="This is an optional"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="mb-3">
              Your name
            </label>
            <textarea name="" id=""   className="pt-3 w-full border rounded-md h-16 border-[#9F9F9F] px-5
            " placeholder="Hi! i’d like to ask about"></textarea>{" "}
          </div>
          <button className="mt-3 w-[222px] py-3 font-poppins font-bold bg-[#B88E2F] text-[#FFFFFF]">Submit</button>
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
  );
};

export default page;

