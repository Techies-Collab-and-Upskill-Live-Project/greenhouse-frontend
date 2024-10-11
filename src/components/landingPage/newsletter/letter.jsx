/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState } from 'react'

 import { IoMailOutline } from 'react-icons/io5'
 
const letter = () => {
  const [email, setEmail] = useState('');

  return (
    <div  className="bg-[url('/images/flower.png')] bg-contain bg-[#efeee8] bg-no-repeat  mt-20   relative w-[100vw] h-[527px]   " > 
    <div className=" absolute z-10 top-0 left-0 right-0 bottom-0 bg-[#eae8e0] bg-opacity-50"></div>

    <div className='flex z-40   mx-5   absolute top-[30%] sm:right-[10%]   items-center text-white'> 
        <div className=' mx-auto   px-5 py-8 rounded-lg bg-forest-green-400  float-right'>
           <h5 className='pb-4 text-[20px]'>Subscribe to our newsletter</h5>
           <p className='pb-2  text-[20px] font-thin'>Be the first to know about exclusive offers, eco-tips, and new arrivals!
           </p>
               
            <div className="relative w-full  ">
       {!email && (
        <IoMailOutline className="absolute left-3 text-[23px] top-1/2 transform -translate-y-1/2 text-gray-300" />
      )}
      <input 
        type="email" 
        className="pl-10  text-gray-950 border rounded-md w-full py-2 focus:outline-none focus:ring-2 text-[15px]  focus:ring-forest-green-500" 
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}  
      />
      <button className="bg-forest-green-700 text-white rounded-md px-4 py-2 absolute right-0 top-0 h-full">
        Subscribe
      </button>
    </div>
        </div>
    </div></div>
  )
}

export default letter