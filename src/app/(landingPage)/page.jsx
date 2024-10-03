"use client";
import React, { useRef } from "react";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { FaRegHeart } from "react-icons/fa";
import { LandingCards, Cards } from "@/lib/constants";
import LandingCard from "@/components/landingPage/LandingCard";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import CatergoriesCard from "@/components/landingPage/CatergoriesCard";
import Product from "@/components/landingPage/ProductCard";
import Hotdeal from "@/components/landingPage/Hotdeal";
import Sustain from "@/components/landingPage/Sustainability";
import New from "@/components/landingPage/New";

export default function Home() {
  const scrollContainerRef = useRef(null);

  const renderLandingCards = () => {
    return LandingCards.map((c, i) => (
      <LandingCard key={i} imageUrl={c.image} text={c.text} />
    ));
  };

  const renderCategoriesCards = () => {
    return Cards.map((c, i) => (
      <CatergoriesCard key={i} image={c.image} text={c.text} />
    ));
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300; // Adjust this value to control scroll distance
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="">
        <div className="pt-32 min-h-[100vh] background_img flex justify-center items-center">
          <div className="flex gap-3 lg:gap-8 items-center justify-center text-center flex-col">
            <h1 className="font-bold text-[48px] lg:text-[107px] text-white hero-title">
              Eco-Products,
              <br />
              Made for You
            </h1>
            <p className="hero-title text-white text-[14px] md:text-[20px] lg:text-[26px]">
              Shop Smart, Live Green
            </p>
            <Button css={`bg-white  w-[187px] h-[55px]`}>
              <span className="text-forest-green-500">Shop Now</span>
            </Button>
          </div>
        </div>
      </section>
      <section className="container-md mx-auto pt-6 px-1 lg:px-11">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 place-items-center lg:gap-10">
          {renderLandingCards()}
        </div>
      </section>
      <section className="container-md mx-auto pt-6 px-3 lg:px-11">
        <div className="">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h1 className="hero-title font-bold text-[28px]">Categories</h1>
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-8 h-8 bg-forest-green-800 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => scroll("left")}
              >
                <MdOutlineKeyboardArrowLeft className="text-white w-5 h-5" />
              </div>
              <div
                className="w-8 h-8 bg-forest-green-800 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => scroll("right")}
              >
                <MdOutlineKeyboardArrowRight className="text-white w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto lg:overflow-x-hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-6" style={{ minWidth: "max-content" }}>
            {renderCategoriesCards()}
          </div>
        </div>
      </section>
      <Product />
      <Hotdeal />
      <Sustain />
      <New />
    </>
  );
}
