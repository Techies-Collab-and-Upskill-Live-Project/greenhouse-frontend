"use client";
import React, { useRef } from "react";
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
import Link from "next/link";

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
      const cardWidth = container.firstElementChild?.offsetWidth || 300; // Approximate width if exact width is unavailable
      container.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="">
      <section className="">
        <div className="pt-32 min-h-[70vh] md:min-h-[70vh] lg:min-h-[100vh] background_img flex justify-center items-center">
          <div className="flex gap-3 lg:gap-8 items-center justify-center text-center flex-col">
            <h1 className="font-bold text-[48px] lg:text-[107px] text-white hero-title">
              Eco-Products,
              <br />
              Made for You
            </h1>
            <p className="hero-title text-white text-[14px] md:text-[20px] lg:text-[26px]">
              Shop Smart, Live Green
            </p>
            <Button css={`bg-white  w-[187px] h-[55px] lg:mt-3`}>
              <Link href="/products" >
                {" "}
                <span className="text-forest-green-500">Shop Now</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="px-4 max-w-[1300px] mx-auto py-20 flex flex-col items-center justify-center">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {renderLandingCards()}
        </div>
      </section>
      <section className="max-w-[1300px] px-4 mx-auto py-10 text-center">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2 xl:px-4">
            <h1 className="hero-title font-bold text-[20px] sm:text-[28px]">
              Categories
            </h1>
            <div className="flex items-center gap-3">
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
          className="w-full overflow-x-auto flex justify-start"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
          }}
        >
          <div
            className="flex gap-6 justify-center w-full items-center"
            style={{ minWidth: "max-content" }}
          >
            {renderCategoriesCards()}
          </div>
        </div>
      </section>

      <Product />
      <Hotdeal />
      <Sustain />
      <New />
    </div>
  );
}
