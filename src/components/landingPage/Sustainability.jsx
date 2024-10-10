"use client";
import Image from "next/image";
import Eco_img from "../../../public/images/Eco_img.png";
import Star3 from "../../../public/images/Star3.png";
import Vector from "../../../public/images/Vector.png";
import Star from "../../../public/images/Star.png";
export default function Sustain() {
  return (
    <section className=" flex bg-forest-green-500 text-white max-sm:h-screen">
      <div className="flex-1 overflow-hidden relative flex flex-col">
        <div className="mt-4 ml-10">
          <Image src={Vector} alt="picture of a butterfly" />
        </div>
        <div className="ml-[30%] mt-5 bg-purple400 h-3/4 flex flex-col justify-between">
          <h2 className="text-2xl ">
            Sustainability <br /> Highlight
          </h2>
          <p>
            Shop confidently with our eco- <br /> certified vendors—your choices{" "}
            <br /> make a real difference.
          </p>
        </div>
        <div className="overflow-hidden sm:h-[200px] 2xl:h-[351px] absolute bottom-0 right-0">
          <Image
            src={Star3}
            alt="star"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <div className="bg-pink-300 flex-1 max-sm:hidden">
        <Image
          alt="background image"
          src={Eco_img}
          width={700}
          height={700}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="bg-purple300 flex-1 max-sm:hidden flex items-center">
        <div className="pl-5 ">
          <div>
            <Image src={Star} alt="image of an icon" />
          </div>
          <div>
            <p>
              Shopping on Fysi means you are <br /> helping to build a more{" "}
              <br /> sustainable world and that <br /> makes you a hero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
