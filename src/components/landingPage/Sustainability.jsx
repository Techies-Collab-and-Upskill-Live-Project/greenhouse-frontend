"use client";
import Image from "next/image";
import Eco_img from "../../../public/images/Eco_img.png";
import Star3 from "../../../public/images/Star3.png";
import Vector from "../../../public/images/Vector.png";
import Star from "../../../public/images/Star.png";
export default function Sustain() {
  return (
    <section className="bg-forest-green-800 min-h-[100vh] mt-6">
      <div className="flex items-center justify-center container-md px-3 lg:px-11 gap-3 relative">
        <div className="text-white w-full md:w-full lg:w-[25%] relative">
          <div className="">
            <h1 className="pt-24 px-24 lg:px-2 whitespace-normal text-[32px] font-bold hero-title">
              Sustainability Highlight
            </h1>
            <div className="absolute top-3  lg:-top-8 lg:-left-7">
              <Image src={Vector} alt="picture of a butterfly" />
            </div>
          </div>
          <div className="mt-[550px] pl-24 lg:pl-2">
            <p className="hero-title">
              Shop confidently with our eco-certified vendors—{" "}
              <span className="font-bold">
                your choices make a real difference.
              </span>
            </p>
            <div className="absolute -bottom-10 -right-8 lg:-bottom-16 lg:-right-3">
              <Image src={Star3} alt="star" />
            </div>
          </div>
        </div>
        <div className="text-green-500  h-[150vh] w-[50%] hidden md:hidden lg:block">
          <Image
            alt="background image"
            src={Eco_img}
            width={700}
            height={700}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-white w-[25%] relative hidden md:hidden lg:block">
          <p className="hero-title">
            Shopping on Fysi means you are helping to build a more sustainable
            world and that makes you a hero.
          </p>
          <div className="absolute -top-10">
            <Image src={Star} alt="image of an icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
