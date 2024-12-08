import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (

    <div className='flex gap-[5px] bg-[#FBEBB5] w-[1280px] h-[600px] justify-end'>
     <div className='w-[350px] h-[265px] mt-[200px] ml-[300px]'>
      <h1 className='w-[350px] h-[176px] font-medium font-Poppins text-[54px]'>
      Rocket single seater </h1>
      <p className='w-[160px] mt-[10px] h-[50px] font-normal text-[30px] font-Poppins'>Shop Now</p>
      <div className='w-[140px] h-[2px] bg-black mt-[0px]'></div>

      </div>
      <div>
        <Image src='/images/singleseater.png' alt='seater image' width='500' height='600' className='mr-[80px]'/>
      </div>
    </div>


  )
}
export default Hero

export const Hero2 = () => {
    return (
        <div className='bg-[#ffefef] w-[1280px] h-[550px]'>
            <div className='flex gap-[120px] justify-end pt-[60px] pr-[150px]'>

            <Image src='/Images/table1.png' alt='table' width='400' height='200'/>
            <Image src='/Images/sofa1.png' alt='sofa' width='400' height='200'/>
            </div>
           <div className='flex pr-[150px] justify-evenly'>
            <div>
           <h1 className='w-[200px] h-[40px] font-Poppins text-medium text-[26px]'>Side Table</h1>
           <p className='w-[120px] h-[5px] font-Poppins font-normal'>View More</p>
           <div className='w-[80px] h-[2px] bg-black mt-[20px]'></div>
           </div>
           <div>
             <h1 className='w-[200px] h-[40px] font-Poppins text-medium text-[26px]'>Side Sofa</h1>
             <p className='w-[120px] h-[5px] font-Poppins font-normal'>View More</p>
             <div className='w-[80px] h-[2px] bg-black mt-[20px]'></div>
             </div>
            </div>
            </div>
          )}
          export const Hero3 = () => {
            return ( <div className='w-[1280px] h-[600px] bg-[#FFFFFF]'>
              <div className='text-center'>
                <h1 className='pt-[30px] font-medium font-Poppins text-black text-[25px]'>Top Picks For You</h1>
                <p className=' mb-[4px] font-medium font-Poppins text-[#9F9F9F] text-[12px]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
              </div>
              <div className='flex justify-evenly pt-[50px]'>
                <Image src='/Images/bed.png' alt='bed' width='200' height='200'/>
                <Image src='/Images/dining.png' alt='dining' width='200' height='200'/>
                <Image src='/Images/outdoor bar.png' alt='outdoor bar' width='200' height='200'/>
                <Image src='/Images/bed1.png' alt='bed1' width='200' height='200'/>
             </div>
             <div className='flex justify-evenly pt-[20px]'>
              <div>
                <p className='font-Poppins font-medium text-[12px] mb-[2px]'>Trenton modular sofa_3</p>
                <h2>Rs. 25,000.00</h2>
              </div>
              <div>
                <p className='font-Poppins font-medium text-[12px] mb-[2px]'>Granite dining table with dining chair</p>
                <h2>Rs. 25,000.00</h2>
              </div>
              <div>
                <p className='font-Poppins font-medium text-[12px] mb-[2px]'>Outdoor bar table and stool</p>
                <h2>Rs. 25,000.00</h2>
                </div>
              <div>
                <p className='font-Poppins font-medium text-[12px] mb-[2px]'>Plain console with teak mirror</p>
                <h2>Rs. 25,000.00</h2>
                </div>
                </div>
                <div className='pl-[600px] pt-[60px]'>
                <div className='w-[100px] h-[20px] font-Poppins text-black'>View More </div>
                <div className='w-[80px] h-[2px] bg-black mt-[10px]'></div>
                </div>
               </div>
               )}
            export const Hero4 = () => {
              return (
              <div className='w-[1280px] h-[700px] bg-[#FFF9E5]'>
                <div className='flex'>
                <div className='flex pt-[50px] pl-[50px] pr-[50px]'>
                  <Image src='/Images/sofaset1.png' alt='sofa set' width='750' height='550'/>
                </div>
                <div className='pt-[250px] pl-60px] text-center'>
                  <p className='font-Poppins text-[20px] w-[300px] h-[30px] pl-[10px]'>New Arrivals</p>
                  <h1 className='font-Poppins font-bold text-[48px] w-[330px] h-[80px]'>Asgaard Sofa</h1>
                  <button className='border-black border-[1.5px] w-[200px] mt-[8px] h-[40px] rounded-[4px]'>Order Now</button>
                </div>
                </div>

             </div>
         )}
         export const Hero5 = () => {
          return (
            <div className='w-[1280px] h-[600px] bg-[#FFFFFF] text-center'>
              <div>
                <h1 className='pt-[30px] font-medium font-Poppins text-black text-[25px]'>Our Blogs</h1>
                <p className=' mb-[4px] font-medium font-Poppins text-[#9F9F9F] text-[12px]'>Find a bright ideal to suit your taste with our great selection</p>
              </div>
              <div className='flex gap-[40px] pl-[150px] pr-[50px] pt-[30px]'>
               <Image src='/Images/Rectangle1.png' alt='lap1' width='300' height='300'/>
               <Image src='/Images/Rectangle2.png' alt='lap2' width='300' height='300'/>
               <Image src='/Images/Rectangle3.png' alt='lap3' width='300' height='300'/>
              </div>
              <div className='flex justify-evenly pt-[20px]'>
                <div>
                <p className=' mb-[4px] font-medium font-Poppins text-[#9F9F9F] text-[12px]'>Going all-in with millennial design</p>
                <p className='underline font-Poppins'>Read More</p>
                
                </div>
                <div>
                  <p className='mb-[4px] font-medium font-Poppins text-[#9F9F9F] text-[12px]'>Going all-in with millennial design</p>
                  <p className='underline font-Poppins'>Read More</p>
                  
                </div>
                <div>
                  <p className='mb-[4px] font-medium font-Poppins text-[#9F9F9F] text-[12px]'>Going all-in with millennial design</p>
                  <p className='underline font-Poppins'>Read More</p>
                </div>
                
                </div>
                <div className='text-center pt-[40px] underline font-Poppins text-[12px] font-medium'>View All Post</div>
                
            </div>
          )}
          export const Hero6 = () => {
            return (
              <div className='w-[1280px] h-[500px] bg-white'>
                <Image src='/Images/bottom1.png' alt='bottom picture' width='1280' height='250'/>

              </div>
            )
          }

          
