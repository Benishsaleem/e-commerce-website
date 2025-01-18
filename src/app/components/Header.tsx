"use client";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";




const Header = () => {
  return (
    <div className="flex flex-wrap items-center lg:pl-[400px] lg:gap-[200px] sm:gap-20 w-full h-[80px] bg-[#FBEBB5] px-4">

      <ul className="flex flex-wrap gap-4 md:gap-[60px] md:justify-center font-Poppins">
        <Link href="/">
          <li className="text-[16px] font-normal">Home</li>
        </Link>
        <Link href="/shop">
          <li className="text-[16px] font-normal">Shop</li>
        </Link>
        <Link href="/about">
          <li className="text-[16px] font-normal">About</li>
        </Link>
        <Link href="/contact">
          <li className="text-[16px] font-normal">Contact</li>
        </Link>
      </ul>

    
      <div className="flex gap-6">
        <FaRegUser className="text-[20px] md:text-[24px]" />
        <FiSearch className="text-[20px] md:text-[24px]" />
        <FaRegHeart className="text-[20px] md:text-[24px]" />
       <Link href="/cart">
       <AiOutlineShoppingCart className="text-[20px] md:text-[24px]" /></Link> 
      </div>
      
      
    </div>
  );
};

export default Header;

