import Image from 'next/image'
import React from 'react'

const Contacthead = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse items-start justify-between pt-56 pb-24'> <div className="text ">
        <h3 className='font-bold text-[23px] pb-2 sm:text-[27px] '>Our Contacts</h3>
        <div className='font-[500] text-[19px]'>Working hours:</div>
        <div className='text-[15px]'>24hrs Mon - Sun</div>
        <div className='font-[500] text-[19px]'>Email:</div>
        <div className='text-[15px]'>Fysi@gmail.com</div>
        <div className='font-[500]   text-[19px]'>Phone Number:</div>
        <div className='text-[15px]'>+2348100000000</div>
        </div>
        <Image src='/images/FrameContact.png' alt='contact' quality={100} width={750} height={600} className='rounded-lg  ' />
        </div>
  )
}

export default Contacthead