"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container flex flex-wrap gap-6 bg-[#FBEBB5] w-full relative h-auto px-4 py-8 md:h-[600px]">
    
      <div className="flex flex-col w-full md:w-auto md:mt-[200px] md:ml-[300px] md:text-left">
        <h1 className="font-medium font-Poppins text-[28px] md:text-[44px] lg:w-[300px]">
          Rocket single seater
        </h1>
        <p className="mt-4 font-normal text-[20px] md:text-[30px] font-Poppins underline">
          Shop Now
        </p>
      </div>


      <div className="w-full flex md:w-auto">
        <Image
          src="/Images/singleseater.png"
          alt="seater image"
          width={500}
          height={600}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;

export const Hero2 = () => {
  return (
    <div className="container flex flex-wrap gap-10 justify-center items-center bg-[#ffefef] w-full relative py-10 md:gap-20 md:h-[550px]">
    
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <Image
          src="/Images/table1.png"
          alt="table"
          width={400}
          height={200}
          className="max-w-full h-auto"
        />
        <h1 className="font-Poppins text-medium text-[20px] md:text-[26px] mt-4">
          Side Table
        </h1>
        <p className="font-Poppins font-normal text-[16px]">View More</p>
        <div className="w-[80px] h-[2px] bg-black mt-4"></div>
      </div>

    
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <Image
          src="/Images/sofa1.png"
          alt="sofa"
          width={400}
          height={200}
          className="max-w-full h-auto"
        />
        <h1 className="font-Poppins text-medium text-[20px] md:text-[26px] mt-4">
          Side Sofa
        </h1>
        <p className="font-Poppins font-normal text-[16px]">View More</p>
        <div className="w-[80px] h-[2px] bg-black mt-4"></div>
      </div>
    </div>
  );
};

export const Hero3 = () => {
  return (
    <div className="container flex flex-col w-full relative bg-[#FFFFFF] py-10">
      {/* Header Section */}
      <div className="text-center px-4">
        <h1 className="font-medium font-Poppins text-black text-[20px] md:text-[25px]">
          Top Picks For You
        </h1>
        <p className="mt-2 font-medium font-Poppins text-[#9F9F9F] text-[12px] md:text-[14px]">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      {/* Product Section */}
      <div className="flex flex-wrap justify-center gap-8 pt-6 px-4">
        {/* Product Card 1 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Images/bed.png"
            alt="bed"
            width={200}
            height={200}
            className="max-w-full h-auto"
          />
          <p className="font-Poppins font-medium text-[12px] mt-2">
            Trenton modular sofa_3
          </p>
          <h2 className="font-Poppins text-black text-[14px] md:text-[16px]">
            Rs. 25,000.00
          </h2>
        </div>

        {/* Product Card 2 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Images/dining.png"
            alt="dining"
            width={200}
            height={200}
            className="max-w-full h-auto"
          />
          <p className="font-Poppins font-medium text-[12px] mt-2">
            Granite dining table with dining chair
          </p>
          <h2 className="font-Poppins text-black text-[14px] md:text-[16px]">
            Rs. 25,000.00
          </h2>
        </div>

        {/* Product Card 3 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Images/outdoor bar.png"
            alt="outdoor bar"
            width={200}
            height={200}
            className="max-w-full h-auto"
          />
          <p className="font-Poppins font-medium text-[12px] mt-2">
            Outdoor bar table and stool
          </p>
          <h2 className="font-Poppins text-black text-[14px] md:text-[16px]">
            Rs. 25,000.00
          </h2>
        </div>

        {/* Product Card 4 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Images/bed1.png"
            alt="bed1"
            width={200}
            height={200}
            className="max-w-full h-auto"
          />
          <p className="font-Poppins font-medium text-[12px] mt-2">
            Plain console with teak mirror
          </p>
          <h2 className="font-Poppins text-black text-[14px] md:text-[16px]">
            Rs. 25,000.00
          </h2>
        </div>
      </div>

      {/* View More Section */}
      <div className="flex flex-col justify-center items-center pt-10">
        <div className="w-auto h-auto font-Poppins text-black underline cursor-pointer text-[14px] md:text-[16px]">
          View More
        </div>
      </div>
    </div>
  );
};


export const Hero4 = () => {
  return (
    <div className="container w-full relative bg-[#FFF9E5] py-10">
      {/* Wrapper for Content */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between px-4 lg:px-20">
        {/* Image Section */}
        <div className="flex justify-center lg:pt-10 lg:pl-10">
          <Image
            src="/Images/sofaset1.png"
            alt="sofa set"
            width={750}
            height={550}
            className="max-w-full h-auto"
          />
        </div>

        {/* Text and Button Section */}
        <div className="text-center lg:text-left lg:pt-40 mt-8 lg:mt-0">
          <p className="font-Poppins text-[18px] lg:text-[20px] text-gray-800">
            New Arrivals
          </p>
          <h1 className="font-Poppins font-bold text-[32px] lg:text-[48px] text-gray-900 mt-4">
            Asgaard Sofa
          </h1>
          <button className="border-black border-[1.5px] px-6 py-2 mt-6 rounded-md text-[16px] hover:bg-black hover:text-white transition-all">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
export const Hero5 = () => {
  return (
    <div className="container w-full bg-[#FFFFFF] text-center py-10">
      {/* Header Section */}
      <div>
        <h1 className="text-[20px] lg:text-[25px] font-medium font-Poppins text-black">
          Our Blogs
        </h1>
        <p className="mb-4 font-medium font-Poppins text-[#9F9F9F] text-[14px] lg:text-[12px]">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>

      {/* Blog Cards Section */}
      <div className="flex flex-wrap gap-10 justify-center items-center pt-6">
        {/* Card 1 */}
        <div className="w-full md:w-[300px]">
          <Image
            src="/Images/Rectangle1.png"
            alt="lap1"
            width={300}
            height={300}
            className="w-full h-auto"
          />
          <p className="mt-4 mb-2 font-medium font-Poppins text-[#9F9F9F] text-[14px] lg:text-[12px]">
            Going all-in with millennial design
          </p>
          <p className="underline font-Poppins text-[14px]">Read More</p>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-[300px]">
          <Image
            src="/Images/Rectangle2.png"
            alt="lap2"
            width={300}
            height={300}
            className="w-full h-auto"
          />
          <p className="mt-4 mb-2 font-medium font-Poppins text-[#9F9F9F] text-[14px] lg:text-[12px]">
            Going all-in with millennial design
          </p>
          <p className="underline font-Poppins text-[14px]">Read More</p>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-[300px]">
          <Image
            src="/Images/Rectangle3.png"
            alt="lap3"
            width={300}
            height={300}
            className="w-full h-auto"
          />
          <p className="mt-4 mb-2 font-medium font-Poppins text-[#9F9F9F] text-[14px] lg:text-[12px]">
            Going all-in with millennial design
          </p>
          <p className="underline font-Poppins text-[14px]">Read More</p>
        </div>
      </div>

      {/* View All Posts Section */}
      <div className="text-center pt-10 underline font-Poppins text-[14px] font-medium">
        View All Posts
      </div>
    </div>
  );
};
export const Hero6 = () => {
 return (
  <div className="h-[313px] w-full relative ">
          <Image
            src="/Images/herobottom.png"
            width={1280}
            height={100}
            className="absolute h-full"
            alt="bottom"
          />
          <div className="flex justify-center items-center flex-col h-full z-50 relative">
            <h2 className="text-[40px] font-poppins font-bold text-center">
              Our Instagram</h2>  
              <p className="font-Poppins">Follow our store on Instagram</p> 
              <button className="font-Poppins text-medium mt-6 w-[180px] h-[50px] border-[1.5px] bg-[#FAF4F4] rounded-full">Follow Us</button>


              </div>
        

          
        </div>

  )
};



      
        
           
        


          
