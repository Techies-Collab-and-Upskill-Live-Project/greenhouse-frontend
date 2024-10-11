/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Image from 'next/image'
import React  from 'react'

const textImg = (props) => {
 
  return (
    <div className={ ` ${props.style} flex      py-16  items-center    gap-12`}>
      <div className="flex-1  ">
        <h5 className=" pb-1 font-bold text-[28px]">{props.title}</h5>
        <p className=" leading-8 text-[18px]">{props.text} </p>
        { props.l1 &&  <ul className='leading-8'><li>
          <p className="text-[18px] pb-2">{props.l1}</p>
           </li>
           <li>
          <p className="text-[18px] pb-2">{props.l2}</p> </li>
          <li>
          <p className="text-[18px]">{props.l3}</p>
          </li></ul>}

      </div>

      <div className="  ">
        <Image
          quality={100}
          priority={true}
          width={600}
          height={400}
          src={props.img}
          className="  rounded-lg object-contain"
          alt="img"
        />
      </div>
    </div>
  );
}

export default textImg