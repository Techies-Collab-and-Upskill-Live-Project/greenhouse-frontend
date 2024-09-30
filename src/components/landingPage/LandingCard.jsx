import Image from "next/image";
import React from "react";

export default function LandingCard({ imageUrl, text }) {
  return (
    <div className=" w-[180px] h-[168px] md:w-[250px] md:h-[250px]  lg:w-[280px] lg:h-[201px] bg-[#E6ECE9] flex gap-2 items-center justify-center flex-col rounded-lg">
      <div className="h-11 w-11 lg:h-16 lg:w-16">
        <Image
          height={70}
          width={70}
          src={imageUrl}
          alt="picture of a leaf"
          className="w-[70px] h-[70px] object-contain"
        />
      </div>
      <h1 className="text-[12px] text-forest-green-600">{text}</h1>
    </div>
  );
}
