
import Image from "next/image";
import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";


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
          <Link href="/" className="font-poppins font-semibold flex items-center">
          Home <IoChevronForwardSharp />
        </Link>
            <span>Blog</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 w-[85%] mx-auto my-0">
    <div className="w-full">
      <div className="font-poppins mt-6">
        <Image
          src="/Images/blog1.png"
          width={817}
          height={500}
          className="w-full h-[500px] rounded-[10px]"
          alt="Blog Image 1"
        /><br/>
        <h5 className="font-bold text-[30px] leading-[25px] mt-2 mb-2 text-[#000000]">
          Going all-in with millennial design
        </h5><br/>
        <p className="text-[#9F9F9F] font-normal text-[15px] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
          mauris vitae ultricies leo integer malesuada nunc. In nulla
          posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
          at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
          in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
          mattis nunc sed blandit libero. Pellentesque elit ullamcorper
          dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
          euismod elementum.
        </p>
      </div>
      <div className="font-poppins text-[16px] text-justify mt-3">
        <h2 className="underline">Read more</h2>
      </div>

      <div className="font-poppins mt-6">
        <Image
          src="/Images/blog2.png"
          width={817}
          height={500}
          className="w-full h-[500px] rounded-[10px] mt-4"
          alt="Blog Image 2"
        /><br/>
        <h5 className="font-bold text-[30px] leading-[25px] mt-2 mb-2 text-[#000000]">
          Exploring new ways of decorating
        </h5><br/>
        <p className="text-[#9F9F9F] font-normal text-[15px] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
          mauris vitae ultricies leo integer malesuada nunc. In nulla
          posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
          at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
          in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
          mattis nunc sed blandit libero. Pellentesque elit ullamcorper
          dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
          euismod elementum.
        </p>
      </div>

      <div className="font-poppins text-[16px] text-justify mt-3">
        <h2 className="underline">Read more</h2>
      </div>

      <div className="font-poppins mt-6">
        <Image
          src="/Images/blog3.png"
          width={817}
          height={500}
          className="w-full h-[500px] rounded-[10px] mt-4"
          alt="Blog Image 3"
        /><br/>
        <h5 className="font-bold text-[30px] leading-[25px] mt-2 mb-2 text-[#000000]">
          Exploring new ways of decorating
        </h5><br/>
        <p className="text-[#9F9F9F] font-normal text-[15px] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
          mauris vitae ultricies leo integer malesuada nunc. In nulla
          posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
          at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
          in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
          mattis nunc sed blandit libero. Pellentesque elit ullamcorper
          dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
          euismod elementum.
        </p>
      </div>

      <div className="font-poppins text-[16px] text-justify mt-3">
        <h2 className="underline">Read more</h2>
      </div>
    </div>

    <div className="w-full lg:w-[30%] mt-7">
      <div className="relative w-full lg:w-[311px] h-[58px] mx-auto">
        <input
          type="text"
          placeholder="Enter"
          className="w-full h-full rounded border-2 text-[#9F9F9F] focus:outline-none px-4"
        />
        <CiSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 w-[30px] h-[30px] text-gray-500" />
      </div>

      <div className="text-[#9F9F9F] mt-9 px-4 lg:px-8">
        <h1 className="font-poppins text-[24px] font-bold text-[#000000]">
          Categories
        </h1>
        <div className="space-y-4 flex flex-col mt-4">
          <div className="flex justify-between items-center">
            <p className="mr-4">Crafts</p>
            <span>2</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="mr-4">Design</p>
            <span>8</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="mr-4">Handmade</p>
            <span>7</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="mr-4">Interior</p>
            <span>1</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="mr-4">Wood</p>
            <span>8</span>
          </div>
        </div>
      </div>

      <div className="font-poppins mt-10 px-4">
        <h1 className="text-[24px] font-bold">Recent Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-10">
          <Image
            src="/Images/bs1.png"
            width={100}
            height={80}
            alt=""
            className="rounded-[10px] h-20 w-full"
          />
          <div className="flex flex-col">
            <p>Going all-in with millennial design</p>
            <span className="w-[119px] h-[18px] text-[#9F9F9F] font-[400] text-[12px]">
              03 Aug 2022
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-10">
          <Image
            src="/Images/bs2.png"
            width={100}
            height={80}
            alt=""
            className="rounded-[10px] h-20 w-full"
          />
          <div className="flex flex-col">
            <p>Exploring new ways of decorating</p>
            <span className="w-[119px] h-[18px] text-[#9F9F9F] font-[400] text-[12px]">
              03 Aug 2022
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-10">
          <Image
            src="/Images/bs3.png"
            width={100}
            height={80}
            alt=""
            className="rounded-[10px] h-20 w-full"
          />
          <div className="flex flex-col">
            <p>Handmade pieces that took time to make</p>
            <span className="w-[119px] h-[18px] text-[#9F9F9F] font-[400] text-[12px]">
              03 Aug 2022
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-10">
          <Image
            src="/Images/bs4.png"
            width={100}
            height={80}
            alt=""
            className="rounded-[10px] h-20 w-full"
          />
          <div className="flex flex-col">
            <p>Modern home in Milan</p>
            <span className="w-[119px] h-[18px] text-[#9F9F9F] font-[400] text-[12px]">
              03 Aug 2022
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-10">
          <Image
            src="/Images/bs5.png"
            width={100}
            height={80}
            alt=""
            className="rounded-[10px] h-20 w-full"
          />
          <div className="flex flex-col">
            <p>Colorful office redesign</p>
            <span className="w-[119px] h-[18px] text-[#9F9F9F] font-[400] text-[12px]">
              03 Aug 2022
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="text-center mt-5 mb-8 flex justify-center">
    <ul className="flex gap-5">
      <li className="w-14 h-14 bg-[#FBEBB5] text-black rounded-md flex justify-center items-center">
        1
      </li>
      <li className="w-14 h-14 bg-[#FFF9E5] rounded-md flex justify-center items-center">
        2
      </li>
      <li className="w-14 h-14 bg-[#FFF9E5] rounded-md flex justify-center items-center">
        3
      </li>
      <li className="w-20 h-14 bg-[#FFF9E5] rounded-md flex justify-center items-center">
        Next
      </li>
    </ul>
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
