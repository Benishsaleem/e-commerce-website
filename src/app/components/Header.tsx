"use client"
import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex gap-[150px] w-[1280px] h-[80px] bg-[#FBEBB5]'>
        <ul className='flex gap-[60px] bg-red w-[217px] h-[24px] px-[400px] py-[25px] font-Poppins'>
           <Link href='/'><li  className='w-[48px] h-[24px] text-[16px] font-normal'>Home</li></Link>
           <Link href='/shop'> <li className='w-[42px] h-[24px] text-[16px] font-normal'>Shop</li></Link>
           <Link href='/about'> <li className='w-[49px] h-[24px] text-[16px] font-normal'>About</li></Link>
           <Link href='/contact'><li className='w-[66px] h-[24px] text-[16px] font-normal'>Contact</li></Link>
        </ul>
        <div className='flex gap-[40px] py-[30px] h-[28px]'>
               <FaRegUser />
               <FiSearch />
               <FaRegHeart />
               <AiOutlineShoppingCart />
        </div>
    </div>
  )
}

export default Header
