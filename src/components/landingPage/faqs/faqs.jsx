import React from 'react'
import Faq from '@/components/faqs/faq'
import Image from 'next/image'
 const faqs = () => {
  return (
    <div className='pt-56 pb-24 gap-36 flex justify-between  items-center'> 
<div> 
    <div className=' md:text-[32px] text-[27px] font-bold mb-16 text-center md:text-left'           >Frequently Asked Questions</div>
        <Faq question='What is Fysi?' answer='Fysi is an online marketplace that connects eco-conscious customers with vendors who share our passion for sustainability. Our platform features a wide  ' />

        <Faq question='How do I know if a product is truly eco-friendly?' answer='Fysi is an online marketplace that connects eco-conscious customers with vendors who share our passion for sustainability. Our platform features a wide  ' />
        <Faq question='Can I trust the vendors on Fysi?' answer='Fysi is an online marketplace that connects eco-conscious customers with vendors who share our passion for sustainability. Our platform features a wide  ' />
        <Faq question='How do I place an order?' answer='Fysi is an online marketplace that connects eco-conscious customers with vendors who share our passion for sustainability. Our platform features a wide  ' />
        <Faq question='What is the return policy?' answer='Fysi is an online marketplace that connects eco-conscious customers with vendors who share our passion for sustainability. Our platform features a wide  ' />
        <div className=' pt-1'><p>Didn&apos;t find the answer you were looking for? Contact our support team, we&apos;re here to help!</p>
        <button className='bg-forest-green-500   hover:bg-forest-green-400 text-white rounded-md px-4 py-2 mt-3 '>Contact Support</button>
        </div>
        </div>
        <div className=' hidden lg:block'>
            <Image width={1000} height={1000} quality={100} src='/images/faqfruit.png' alt='' />
        </div>
    </div>
  )
}

export default faqs