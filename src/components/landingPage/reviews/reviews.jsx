"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Reviews = () => {
  const reviewData = [
    {
      text: "Fysi has completely changed the way I shop! I love knowing that every purchase I make supports sustainable practices and eco-friendly products. It's like shopping with a purpose.",
      img: "/images/reviewimg.png",
      name: "Grace Adebayo",
      title: "Customer",
    },
    {
      text: "Listing my products on Fysi has been a game-changer for my business. The platform's focus on eco-friendly products has connected me with the right audience who truly value sustainability.",
      img: "/images/reviewimg.png",
      name: "Chinedu Okafor",
      title: "Vendor",
    },
    {
      text: "Shopping on Fysi feels empowering! The sustainability scores and eco-certifications make it easy for me to choose products that align with my values. It's my go-to marketplace for all things green.",
      img: "/images/revImage.png",
      name: "Tunde Adebayo",
      title: "Customer",
    },
  ];

  return (
    <>
      <div>
        <h4 className="font-bold text-[23px] mb-3">Testimonials</h4>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 3, spaceBetween: 10 },
        }}
      >
        {reviewData.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white py-4 px-6 rounded-md">
              <div className="quote pb-3">
                <Image width={30} height={30} alt="" src="/icons/quote.svg" />
              </div>
              <p className="text-gray-950 text-[16px]">{review.text}</p>
              <div className="star pt-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image
                    width={60}
                    quality={100}
                    className="object-contain"
                    height={40}
                    alt=""
                    src={review.img}
                  />
                  <div className="text">
                    <h3 className="font-bold text-[17px]">{review.name}</h3>
                    <p className="text-gray-400">{review.title}</p>
                  </div>
                </div>
                <div className="star-icons">
                  <Image
                    width={100}
                    height={100}
                    alt=""
                    src="/icons/star.svg"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Reviews;
