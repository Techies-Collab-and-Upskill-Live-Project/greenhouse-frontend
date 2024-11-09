import Image from "next/image";
import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { LiaCartPlusSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import FavoriteBtn from "./FavoriteBtn";
export default function ProductCard({ product }) {
  const router = useRouter();

  const gotoProductPage = () => {
    router.push(`/products/${product?.id}`);
  };

  return (
    <div
      onClick={gotoProductPage}
      className="relative cursor-pointer bg-white group p-2 rounded-xl min-w-[150px] h-fit shadow-sm"
    >
      <div className="relative hover:scale-95 bg-white duration-150 h-[208px] rounded-xl overflow-hidden ">
        <Image
          height={500}
          width={500}
          alt="product name"
          loading="lazy"
          className="h-full w-full object-cover "
          src={product?.images[0]?.image_url ?? "/images/mike.jpg"}
        />
        <button className="absolute bottom-0 left-0 w-full h-[36px] opacity-0  md:group-hover:opacity-100 transition-opacity duration-300 bg-forest-green-600 rounded-b-md text-white z-50">
          <div className="flex justify-center gap-2 items-center">
            <LiaCartPlusSolid className="text-white font-bold" size={25} />
            <p className="font-medium text-[17px]">Add to Cart</p>
          </div>
        </button>

        <div className="absolute bottom-2 h-[22.66px] right-2 bg-grey-150 p-2 rounded-[7.49px]">
          <p className="text-[13px] -mt-[6px] text-forest-green-500 font-medium">
            -15%
          </p>
        </div>
      </div>
      <FavoriteBtn product={product} />
      <div className="flex flex-col items-start mt-4">
        <span className="text-xs sm:text-lg line-clamp-1 ">
          {product?.name}
        </span>
        <span className=" flex items-center text-sm font-bold sm:text-lg">
          <TbCurrencyNaira size={24} />
          <span>{product?.pricing?.base_price}</span>
        </span>
        <span className="flex line-through text-gray-600 text-sm">
          <TbCurrencyNaira size={20} />
          <span className="">{product?.pricing?.sale_price}</span>
        </span>
      </div>
    </div>
  );
}
