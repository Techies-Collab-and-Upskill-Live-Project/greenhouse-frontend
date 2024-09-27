"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import leaf from "/public/images/leaf.png";
import { LandingCards } from "@/lib/constants";
import LandingCard from "@/components/landingPage/LandingCard";

export default function Home() {
  const renderLandingCards = () => {
    return LandingCards.map((c, i) => {
      return <LandingCard key={i} imageUrl={c.image} text={c.text} />;
    });
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
            <p className="hero-title text-white">Shop Smart, Live Green</p>
            <Button css={`bg-white text-[black] w-[187px] h-[55px]`}>
              Shop Now
            </Button>
          </div>
        </div>
      </section>
      <section className="container mx-auto pt-6">
        <div className="flex justify-center flex-wrap items-center gap-10">
          {renderLandingCards()}
        </div>
      </section>
    </>
  );
}
