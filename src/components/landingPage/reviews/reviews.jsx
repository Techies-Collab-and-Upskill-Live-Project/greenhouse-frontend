'use client'
import React from 'react'
import ReviewCard from './reviewCard'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const reviews = () => {
  return (
    <> 
    <div>
        <h4 className=' font-bold text-[23px] mb-3'>Testimonials</h4>
    </div>
         <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        loop={true}
        pagination={{
            dynamicBullets: true,
          }}
          modules={[ Pagination]}
          className="mySwiper  "
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0, // Adjust this value for mobile view
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10, // Adjust this value for desktop view
            },
          }}
      >
                <SwiperSlide > <ReviewCard text='Fysi has completely changed the way I shop! I love knowing that every purchase I make supports sustainable practices and eco-friendly products. It&apos;s like shopping with a purpose.' img='/images/reviewimg.png' name='Grace Adebayo' title=' Customer' /></SwiperSlide>
                <SwiperSlide><ReviewCard text='Listing my products on Fysi has been a game-changer for my business. The platform&apos;s focus on eco-friendly products has connected me with the right audience who truly value sustainability.' img='/images/reviewimg.png' name='Chinedu Okafor' title=' Vendor' /></SwiperSlide>  
                <SwiperSlide>  <ReviewCard text='Shopping on Fysi feels empowering! The sustainability scores and eco-certifications make it easy for me to choose products that align with my values. It&apos;s my go-to marketplace for all things green.' img='/images/revImage.png' name='Tunde Adebayo' title=' Customer' /></SwiperSlide>  
                <SwiperSlide>  <ReviewCard text='Shopping on Fysi feels empowering! The sustainability scores and eco-certifications make it easy for me to choose products that align with my values. It&apos;s my go-to marketplace for all things green.' img='/images/revImage.png' name='Tunde Adebayo' title=' Customer' /></SwiperSlide>  
                <SwiperSlide>  <ReviewCard text='Shopping on Fysi feels empowering! The sustainability scores and eco-certifications make it easy for me to choose products that align with my values. It&apos;s my go-to marketplace for all things green.' img='/images/revImage.png' name='Tunde Adebayo' title=' Customer' /></SwiperSlide>  
                <SwiperSlide>  <ReviewCard text='Shopping on Fysi feels empowering! The sustainability scores and eco-certifications make it easy for me to choose products that align with my values. It&apos;s my go-to marketplace for all things green.' img='/images/revImage.png' name='Tunde Adebayo' title=' Customer' /></SwiperSlide>  
                <SwiperSlide>  <ReviewCard text='Shopping on Fysi feels empowering! The sustainability scores and eco-certifications make it easy for me to choose products that align with my values. It&apos;s my go-to marketplace for all things green.' img='/images/revImage.png' name='Tunde Adebayo' title=' Customer' /></SwiperSlide>  


 </Swiper>

    </>
  )
}

export default reviews