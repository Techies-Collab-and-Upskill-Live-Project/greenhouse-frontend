/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState } from 'react'
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";


const faq = (props) => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <div className=' flex  justify-between pb-1 sm:pb-4'> 
      
      <div>
        <h6 className='pb-3 font-bold text-[20px]'>{props.question}</h6>
        {}
        <p className={` ${dropdown ? 'opacity-60 visible ' : 'opacity-0  '} text-[17px] transition-opacity  leading-8`}>{props.answer}</p>
      </div>
      <div className=' cursor-pointer' onClick={() => setDropdown(!dropdown)}>
        { dropdown ? <TfiAngleUp className='text-[23px]  sm:text-[27px]'/> : <TfiAngleDown className=' text-[23px] sm:text-[27px]'/>}

      </div>
 

    </div>
  )
}

export default faq