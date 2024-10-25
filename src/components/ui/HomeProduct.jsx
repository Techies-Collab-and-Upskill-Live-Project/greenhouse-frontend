"use client";

import Image from "next/image";
import { LiaCartPlusSolid } from "react-icons/lia";
import FavoriteBtn from "./FavoriteBtn";

export default function HomeProduct({
  id,
  name,
  price,
  originalPrice,
  discountPercentage,
  imageSrc,
  onAddToCart,
}) {
  return (
    <div className="relative group h-[320px] bg-white bg-opacity-100 rounded-md hover:shadow-card">
      <div className="relative w-[228px] h-[320px] p-3 rounded-md">
        <div className="relative w-full h-[77%] overflow-hidden">
          <Image
            alt={`Image of ${name}`}
            width={500}
            height={500}
            src={imageSrc}
            className="w-full h-full object-cover rounded-md"
          />
          {/* Add to Cart button */}
          <button
            onClick={onAddToCart}
            className="absolute bottom-0 left-0 w-full h-[36px] opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-forest-green-600 rounded-b-md text-white z-50"
          >
            <div className="flex justify-center gap-2 items-center">
              <LiaCartPlusSolid className="text-white font-bold" size={25} />
              <p className="font-medium text-[17px]">Add to Cart</p>
            </div>
          </button>
        </div>

        <div className="mt-1">
          <h3 className="font-normal text-[12px]">{name}</h3>
          <p className="font-bold text-[18px]">
            &#8358;{price}
          </p>
          <p className="font-normal text-[16px] text-text__strike">
            <s>&#8358;{originalPrice}</s>
          </p>
        </div>
        <FavoriteBtn
          product={{
            id,
            name,
            price,
            originalPrice,
            discountPercentage,
            imageSrc,
          }}
        />
        {discountPercentage > 0 && (
          <div className="absolute top-[210px] h-[22.66px] left-[159px] bg-grey-150 p-2 rounded-[7.49px]">
            <p className="text-[13px] -mt-[6px] text-forest-green-500 font-medium">
              -{discountPercentage}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
