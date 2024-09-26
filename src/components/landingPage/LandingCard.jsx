import Image from "next/image";
import React from "react";

export default function LandingCard({ imageUrl, text }) {
  return (
    <div className="w-[292px] h-[201px] bg-[#E6ECE9] flex gap-2 items-center justify-center flex-col rounded-lg">
      <div className="h-16 w-16">
        <Image
          height={200}
          width={200}
          src={imageUrl}
          alt="picture of a leaf"
          className="w-full h-full object-contain"
        />
      </div>
      <h1>{text}</h1>
    </div>
  );
}
