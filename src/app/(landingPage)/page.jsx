import React from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import leaf from "/public/images/leaf.png";
import { LandingCards, Cards } from "@/lib/constants";
import LandingCard from "@/components/landingPage/LandingCard";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import CatergoriesCard from "@/components/landingPage/CatergoriesCard";

export default function Home() {
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
              <div className="w-8 h-8 bg-forest-green-800 rounded-full flex items-center justify-center">
                <MdOutlineKeyboardArrowLeft className="text-white w-5 h-5" />
              </div>
              <div className="w-8 h-8 bg-forest-green-800 rounded-full flex items-center justify-center">
                <MdOutlineKeyboardArrowRight className="text-white w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-x-auto lg:overflow-x-visible">
          <div className="grid place-items-center grid-cols-3 gap-6">
            {renderCategoriesCards()}
          </div>
        </div>
      </section>
    </>
  );
}
