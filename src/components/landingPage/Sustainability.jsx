"use client";
import Image from "next/image";
import Eco_img from "../../../public/images/Eco_img.png";
import Star3 from "../../../public/images/Star3.png";
import Vector from "../../../public/images/Vector.png";
import Star from "../../../public/images/Star.png";
import { useEffect, useState } from "react";

export default function Sustain() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/image2.png",
    "/images/image4.png",
    "/images/Eco_img.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="flex min-h-screen bg-forest-green-500 text-white">
      <div className="flex-1 relative flex flex-col overflow-hidden">
        <div className="mt-4 ml-10">
          <Image
            src={Vector}
            alt="picture of a butterfly"
            width={40}
            height={40}
          />
        </div>
        <div className="ml-[30%] mt-5 h-3/4 flex flex-col justify-between">
          <h2 className="text-2xl">
            Sustainability <br /> Highlight
          </h2>
          <p>
            Shop confidently with our eco- <br /> certified vendors—your choices{" "}
            <br /> make a real difference.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 sm:h-[200px] 2xl:h-[351px]">
          <Image
            src={Star3}
            alt="star"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="flex-1 relative max-sm:hidden">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`slider image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="flex-1 max-sm:hidden flex items-center">
        <div className="pl-5">
          <div>
            <Image src={Star} alt="image of an icon" width={40} height={40} />
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
