"use client";
import pens from "../../../public/images/pens.jpeg";
import bambooBrush from "../../../public/images/bambooBrush.jpeg";
// import AddCart from "../../../public/icons/AddCart.svg";
import { LiaCartPlusSolid } from "react-icons/lia";
import cotton from "../../../public/images/cotton.jpeg";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Hotdeal() {
  return (
    <section className="py-20 max-w-[1300px] px-4 mx-auto flex items-center justify-center overflow-hidden">
      <div className="max-w-full">
        <div className="lg:max-w-[1500px] flex items-center justify-between gap-2 mb-2">
          <div>
            <h1 className="hero-title font-bold text-[28px]">Hot Deals</h1>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/products"
              className="text-forest-green-600 text-[17px] cursor-pointer"
            >
              Sell All
            </Link>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-scroll md:overflow-x-auto whitespace-nowrap">
          <div className="relative group  h-[320px] bg-white bg-opacity-100 rounded-md hover:shadow-card">
            <div className="relative w-[228px] h-[320px] p-3 rounded-md">
              <div className="relative w-full h-[77%] overflow-hidden">
                <Image
                  alt="images of one of the popular products"
                  width={500}
                  height={500}
                  src={bambooBrush}
                  className="w-full h-full object-cover rounded-md"
                />
                {/* Add to Cart button */}
                <button className="absolute bottom-0 left-0 w-full h-[36px] opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-forest-green-600 rounded-b-md text-white z-50">
                  <div className="flex justify-center gap-2 items-center">
                    <LiaCartPlusSolid
                      className="text-white font-bold"
                      size={25}
                    />
                    <p className="font-medium text-[17px]">Add to Cart</p>
                  </div>
                </button>
              </div>

              <div className="mt-1">
                <h3 className="font-normal text-[12px]">Eco Phone</h3>
                <p className="font-bold text-[18px]">&#8358;28,373</p>
                <p className="font-normal text-[16px] text-text__strike">
                  <s>&#8358;2,000</s>
                </p>
              </div>

              <FavoriteBtn />
              <div className="absolute top-[210px] h-[22.66px] left-[159px] bg-grey-150 p-2 rounded-[7.49px]">
                <p className="text-[13px] -mt-[6px] text-forest-green-500 font-medium">
                  -15%
                </p>
              </div>
            </div>
          </div>
          <div className="relative group  h-[320px] bg-white bg-opacity-100 rounded-md hover:shadow-card">
            <div className="relative w-[228px] h-[320px] p-3 rounded-md">
              <div className="relative w-full h-[77%] overflow-hidden">
                <Image
                  alt="images of one of the popular products"
                  width={500}
                  height={500}
                  src={bambooBrush}
                  className="w-full h-full object-cover rounded-md"
                />
                {/* Add to Cart button */}
                <button className="absolute bottom-0 left-0 w-full h-[36px] opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-forest-green-600 rounded-b-md text-white z-50">
                  <div className="flex justify-center gap-2 items-center">
                    <LiaCartPlusSolid
                      className="text-white font-bold"
                      size={25}
                    />
                    <p className="font-medium text-[17px]">Add to Cart</p>
                  </div>
                </button>
              </div>

              <div className="mt-1">
                <h3 className="font-normal text-[12px]">Eco Phone</h3>
                <p className="font-bold text-[18px]">&#8358;28,373</p>
                <p className="font-normal text-[16px] text-text__strike">
                  <s>&#8358;2,000</s>
                </p>
              </div>

              <FavoriteBtn />
              <div className="absolute top-[210px] h-[22.66px] left-[159px] bg-grey-150 p-2 rounded-[7.49px]">
                <p className="text-[13px] -mt-[6px] text-forest-green-500 font-medium">
                  -15%
                </p>
              </div>
            </div>
          </div>
          <div className="relative group  h-[320px] bg-white bg-opacity-100 rounded-md hover:shadow-card">
            <div className="relative w-[228px] h-[320px] p-3 rounded-md">
              <div className="relative w-full h-[77%] overflow-hidden">
                <Image
                  alt="images of one of the popular products"
                  width={500}
                  height={500}
                  src={bambooBrush}
                  className="w-full h-full object-cover rounded-md"
                />
                {/* Add to Cart button */}
                <button className="absolute bottom-0 left-0 w-full h-[36px] opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-forest-green-600 rounded-b-md text-white z-50">
                  <div className="flex justify-center gap-2 items-center">
                    <LiaCartPlusSolid
                      className="text-white font-bold"
                      size={25}
                    />
                    <p className="font-medium text-[17px]">Add to Cart</p>
                  </div>
                </button>
              </div>

              <div className="mt-1">
                <h3 className="font-normal text-[12px]">Eco Phone</h3>
                <p className="font-bold text-[18px]">&#8358;28,373</p>
                <p className="font-normal text-[16px] text-text__strike">
                  <s>&#8358;2,000</s>
                </p>
              </div>

              <FavoriteBtn />
              <div className="absolute top-[210px] h-[22.66px] left-[159px] bg-grey-150 p-2 rounded-[7.49px]">
                <p className="text-[13px] -mt-[6px] text-forest-green-500 font-medium">
                  -15%
                </p>
              </div>
            </div>
          </div>
          <div className="relative group  h-[320px] bg-white bg-opacity-100 rounded-md hover:shadow-card">
            <div className="relative w-[228px] h-[320px] p-3 rounded-md">
              <div className="relative w-full h-[77%] overflow-hidden">
                <Image
                  alt="images of one of the popular products"
                  width={500}
                  height={500}
                  src={bambooBrush}
                  className="w-full h-full object-cover rounded-md"
                />
                {/* Add to Cart button */}
                <button className="absolute bottom-0 left-0 w-full h-[36px] opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-forest-green-600 rounded-b-md text-white z-50">
                  <div className="flex justify-center gap-2 items-center">
                    <LiaCartPlusSolid
                      className="text-white font-bold"
                      size={25}
                    />
                    <p className="font-medium text-[17px]">Add to Cart</p>
                  </div>
                </button>
              </div>

              <div className="mt-1">
                <h3 className="font-normal text-[12px]">Eco Phone</h3>
                <p className="font-bold text-[18px]">&#8358;28,373</p>
                <p className="font-normal text-[16px] text-text__strike">
                  <s>&#8358;2,000</s>
                </p>
              </div>

              <FavoriteBtn />
              <div className="absolute top-[210px] h-[22.66px] left-[159px] bg-grey-150 p-2 rounded-[7.49px]">
                <p className="text-[13px] -mt-[6px] text-forest-green-500 font-medium">
                  -15%
                </p>
              </div>
            </div>
          </div>
          <div className="relative group  h-[320px] bg-white bg-opacity-100 rounded-md hover:shadow-card">
            <div className="relative w-[228px] h-[320px] p-3 rounded-md">
              <div className="relative w-full h-[77%] overflow-hidden">
                <Image
                  alt="images of one of the popular products"
                  width={500}
                  height={500}
                  src={bambooBrush}
                  className="w-full h-full object-cover rounded-md"
                />
                {/* Add to Cart button */}
                <button className="absolute bottom-0 left-0 w-full h-[36px] opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-forest-green-600 rounded-b-md text-white z-50">
                  <div className="flex justify-center gap-2 items-center">
                    <LiaCartPlusSolid
                      className="text-white font-bold"
                      size={25}
                    />
                    <p className="font-medium text-[17px]">Add to Cart</p>
                  </div>
                </button>
              </div>

              <div className="mt-1">
                <h3 className="font-normal text-[12px]">Eco Phone</h3>
                <p className="font-bold text-[18px]">&#8358;28,373</p>
                <p className="font-normal text-[16px] text-text__strike">
                  <s>&#8358;2,000</s>
                </p>
              </div>

              <FavoriteBtn />
              <div className="absolute top-[210px] h-[22.66px] left-[159px] bg-grey-150 p-2 rounded-[7.49px]">
                <p className="text-[13px] -mt-[6px] text-forest-green-500 font-medium">
                  -15%
                </p>
              </div>
            </div>
          </div>
          <div className="relative group  h-[320px] bg-white bg-opacity-100 rounded-md hover:shadow-card">
            <div className="relative w-[228px] h-[320px] p-3 rounded-md">
              <div className="relative w-full h-[77%] overflow-hidden">
                <Image
                  alt="images of one of the popular products"
                  width={500}
                  height={500}
                  src={bambooBrush}
                  className="w-full h-full object-cover rounded-md"
                />
                {/* Add to Cart button */}
                <button className="absolute bottom-0 left-0 w-full h-[36px] opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-forest-green-600 rounded-b-md text-white z-50">
                  <div className="flex justify-center gap-2 items-center">
                    <LiaCartPlusSolid
                      className="text-white font-bold"
                      size={25}
                    />
                    <p className="font-medium text-[17px]">Add to Cart</p>
                  </div>
                </button>
              </div>

              <div className="mt-1">
                <h3 className="font-normal text-[12px]">Eco Phone</h3>
                <p className="font-bold text-[18px]">&#8358;28,373</p>
                <p className="font-normal text-[16px] text-text__strike">
                  <s>&#8358;2,000</s>
                </p>
              </div>

              <FavoriteBtn />
              <div className="absolute top-[210px] h-[22.66px] left-[159px] bg-grey-150 p-2 rounded-[7.49px]">
                <p className="text-[13px] -mt-[6px] text-forest-green-500 font-medium">
                  -15%
                </p>
              </div>
            </div>
          </div>
          <div className="relative group  h-[320px] bg-white bg-opacity-100 rounded-md hover:shadow-card">
            <div className="relative w-[228px] h-[320px] p-3 rounded-md">
              <div className="relative w-full h-[77%] overflow-hidden">
                <Image
                  alt="images of one of the popular products"
                  width={500}
                  height={500}
                  src={bambooBrush}
                  className="w-full h-full object-cover rounded-md"
                />
                {/* Add to Cart button */}
                <button className="absolute bottom-0 left-0 w-full h-[36px] opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-forest-green-600 rounded-b-md text-white z-50">
                  <div className="flex justify-center gap-2 items-center">
                    <LiaCartPlusSolid
                      className="text-white font-bold"
                      size={25}
                    />
                    <p className="font-medium text-[17px]">Add to Cart</p>
                  </div>
                </button>
              </div>

              <div className="mt-1">
                <h3 className="font-normal text-[12px]">Eco Phone</h3>
                <p className="font-bold text-[18px]">&#8358;28,373</p>
                <p className="font-normal text-[16px] text-text__strike">
                  <s>&#8358;2,000</s>
                </p>
              </div>

              <FavoriteBtn />
              <div className="absolute top-[210px] h-[22.66px] left-[159px] bg-grey-150 p-2 rounded-[7.49px]">
                <p className="text-[13px] -mt-[6px] text-forest-green-500 font-medium">
                  -15%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
