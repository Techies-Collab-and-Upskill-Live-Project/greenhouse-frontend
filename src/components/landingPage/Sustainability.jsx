"use client";
import Image from "next/image";
import Eco_img from "../../../public/images/Eco_img.png";
import Star3 from "../../../public/images/Star3.png";
import Vector from "../../../public/images/Vector.png";
import Star from "../../../public/images/Star.png";
export default function Sustain() {
  return (
    // <section className="bg-forest-green-800 min-h-screen mt-6">
    //   <div className="flex items-center justify-center container-sm px-3 lg:px-11 gap-3 relative">
    //     <div className="text-white w-full md:w-full lg:w-[25%] relative">
    //       <div className="relative">
    //         <h1 className="pt-24 px-24 lg:px-2 whitespace-normal text-[32px] font-bold hero-title">
    //           Sustainability Highlight
    //         </h1>
    //         <div className="absolute top-3  lg:-top-8 lg:-left-7">
    //           <Image src={Vector} alt="picture of a butterfly" />
    //         </div>
    //       </div>
    //       <div className="mt-[450px] lg:mt-[640px] pl-24 lg:pl-2 relative">
    //         <p className="hero-title">
    //           Shop confidently with our eco-certified vendors—{" "}
    //           <span className="font-bold">
    //             your choices make a real difference.
    //           </span>
    //         </p>
    //         <div className="absolute h-36 w-36 -bottom-2 z-0 -right-5 lg:-bottom-20 lg:-right-3">
    //           <Image
    //             src={Star3}
    //             alt="star"
    //             className="h-full w-full object-contain"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="text-green-500 h-[100vh] w-[50%] hidden md:hidden lg:block">
    //       <Image
    //         alt="background image"
    //         src={Eco_img}
    //         width={700}
    //         height={700}
    //         className="w-full h-full object-cover"
    //       />
    //     </div>
    //     <div className="text-white w-[25%] relative hidden md:hidden lg:block">
    //       <p className="hero-title">
    //         Shopping on Fysi means you are helping to build a more sustainable
    //         world and that makes you a hero.
    //       </p>
    //       <div className="absolute -top-10 -left-2">
    //         <Image src={Star} alt="image of an icon" />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className=" flex bg-forest-green-500 text-white max-sm:h-screen ">
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
        <div className="overflow-hidden  sm:h-[200px] 2xl:h-[351px] absolute bottom-0 right-0">
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
