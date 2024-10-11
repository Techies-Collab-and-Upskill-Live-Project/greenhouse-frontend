import Image from 'next/image'
import React from 'react'
 
const reviewCard = (props) => {
  return (
    <div className='bg-white py-4 px-6 rounded-md   '> 
         <div className="quote pb-3">
         <Image width={30} height={30} alt='' src='/icons/quote.svg' /> 

         </div>
         <p className='text-gray-950 text-[16px]'>{props.text}</p>
         <div className="star pt-3 flex justify-between items-center">
            <div className='flex items-center gap-2'> 
            <Image width={60} quality={100} className=' object-contain' height={40} alt='' src={props.img}/>
            <div className="text  ">
                <h3 className=' font-bold text-[17px]'>{props.name}</h3>
                <p className='text-gray-400'>{props.title}</p>
            </div>
            </div>
            <div className="star-icons">
               <Image width={100} height={100} alt='' src='/icons/star.svg' /> 
             </div>
         </div>
    </div>
  )
}

export default reviewCard