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
      <div className="container mx-auto mb-5 px-4">
  <div className="text-center font-poppins mb-10 mt-8">
    <h5 className="font-bold text-2xl sm:text-3xl lg:text-4xl">Get In Touch With Us</h5>
    <p className="text-[#9F9F9F] text-sm sm:text-base lg:text-lg mt-2">
      For More Information About Our Product & Services. Please Feel Free To Drop Us
      <br />
      An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
    </p>
  </div>

  <div className="flex flex-wrap lg:flex-nowrap gap-6">
    {/* Left Section */}
    <div className="w-full lg:w-1/3">
      <div className="flex gap-2 mb-6">
        <FaLocationDot className="text-lg" />
        <div>
          <h3 className="font-bold text-lg">Address</h3>
          <p className="text-sm sm:text-base">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>
      <div className="flex gap-2 mb-6">
        <FaPhoneAlt className="text-lg" />
        <div>
          <h3 className="font-bold text-lg">Phone</h3>
          <p className="text-sm sm:text-base">
            Mobile: +(84) 546-6789
            <br />
            Hotline: +(84) 456-6789
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <MdAccessTimeFilled className="text-lg" />
        <div>
          <h3 className="font-bold text-lg">Working Time</h3>
          <p className="text-sm sm:text-base">
            Monday-Friday: 9:00 - 22:00
            <br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full lg:w-2/3">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
        <input
          type="text"
          id="name"
          className="w-full border rounded-md h-12 border-[#9F9F9F] px-4"
          placeholder="Abc"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
        <input
          type="email"
          id="email"
          className="w-full border rounded-md h-12 border-[#9F9F9F] px-4"
          placeholder="Abc@def.com"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
        <input
          type="text"
          id="subject"
          className="w-full border rounded-md h-12 border-[#9F9F9F] px-4"
          placeholder="This is optional"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
        <textarea
          id="message"
          className="w-full border rounded-md h-24 border-[#9F9F9F] px-4 py-2"
          placeholder="Hi! I’d like to ask about..."
        ></textarea>
      </div>
      <button className="w-full lg:w-[222px] py-3 font-semibold border-black border-[1.0px]   text-black rounded-md">
        Submit
      </button>
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
  );
};

export default page;

