import React from 'react'

const Footer = () => {
  return (
    <div className='className="container mx-auto max-w-[1280px] p-4'>
    <div className='flex flex-wrap gap-8 md:gap-12 lg:gap-[150px]'>
      <div className='flex flex-col'>
      <p className='font-Poppins font-medium text-sm lg:text-[12px] pt-6 lg:pt-[60px] w-[180px] text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables,</p>
      <p className='font-Poppins font-medium text-sm lg:text-[12px] w-[100px] text-[#9F9F9F]'>FL 33134 USA</p>
      </div>
      <div className='flex flex-col'>
        <p className='font-Poppins font-medium text-sm lg:text-[12px] pt-5 text-[#9F9F9F]'>Links</p>
        <p className='font-Poppins font-medium text-sm lg:text-[12px] pt-2 text-black'>Home</p>
        <p className='font-Poppins font-medium text-sm lg:text-[12px] pt-2 text-black'>Shop</p>
        <p className='font-Poppins font-medium text-sm lg:text-[12px] pt-2 text-black'>About</p>
        <p className='font-Poppins font-medium text-sm lg:text-[12px] pt-2 text-black'>Contact</p>
      </div>
      <div className='flex flex-col'>
        <p className='font-Poppins font-medium text-sm lg:text-[12px] pt-5 text-[#9F9F9F]'>Help</p>
        <p className='font-Poppins font-medium text-sm lg:text-[12px] pt-2 text-black'>Payment Options</p>
        <p className='font-Poppins font-medium text-sm lg:text-[12px] pt-2 text-black'>Returns</p>
        <p className='font-Poppins font-medium text-sm lg:text-[12px] pt-2 text-black'>Privacy Policies</p>
      </div>
      <div className='flex flex-col'>
       <p className='font-Poppins font-medium text-sm lg:text-[14px] pt-5 text-[#9F9F9F]'>New Sletter</p>
      <p className='font-Poppins font-light underline text-xs lg:text-[10px] pt-2 w-[120px] text-[#9F9F9F]' >Enter Your Email Address</p>
      </div>
      <div className='font-Poppins font-medium text-xs lg:text-[10px] underline pt-8 lg:pt-[80px] text-black'>Subscribe</div>
      
    </div>
    <div className='w-full h-[0.5px] bg-[#9F9F9F] mt-8'></div>
    <div className='font-Poppins font-medium text-xs lg:text-[11px] pt-4 text-black text-center lg:text-left'>2022 Meubel House. All rights reverved</div>
    </div>
  )
}

export default Footer
