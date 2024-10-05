"use client";
import pens from "../../../public/images/pens.jpeg";
import ecophone from "../../../public/images/ecophone.jpeg";
import bio from "../../../public/images/bio.jpeg";
import cotton from "../../../public/images/cotton.jpeg";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";

export default function Hotdeal() {
  return (
    <section className="py-20 px-4 flex items-center justify-center pt-6 overflow-hidden">
      <div className="max-w-full">
        <div className="lg:max-w-[1500px] flex items-center justify-between gap-2 mb-2">
          <div>
            <h1 className="hero-title font-bold text-[28px]">Hot Deals</h1>
          </div>
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-forest-green-600 text-[17px]">Sell All</h1>
          </div>
        </div>
        <div className="flex gap-4 overflow-scroll md:overflow-scroll lg:overflow-visible">
          <div className="relative group">
            <div className="w-[288px] h-[417px] overflow-hidden">
              <Image
                alt="images of one of the popular products"
                width={700}
                height={700}
                src={ecophone}
                className="w-full h-full object-cover rounded-[9px] transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-2 left-60 bg-forest-green-500 p-2 rounded-full">
                <FaRegHeart className="text-white" size={16} />
              </div>
            </div>
            <div>
              <h3 className="font-normal text-[12px]">Eco Phone cases</h3>
              <p className="font-bold text-[12px]">&#8358;500</p>
            </div>
          </div>
          <div className="relative group">
            <div className="w-[288px] h-[417px] overflow-hidden">
              <Image
                alt="images of one of the popular products"
                width={700}
                height={700}
                src={pens}
                className="w-full h-full object-cover rounded-[9px] transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-2 left-60 bg-forest-green-500 p-2 rounded-full">
                <FaRegHeart className="text-white" size={16} />
              </div>
            </div>
            <div>
              <h3 className="font-normal text-[12px]">Eco Pens</h3>
              <p className="font-bold text-[12px]">&#8358;500</p>
            </div>
          </div>
          <div className="relative group">
            <div className="w-[288px] h-[417px] overflow-hidden">
              <Image
                alt="images of one of the popular products"
                width={700}
                height={700}
                src={cotton}
                className="w-full h-full object-cover rounded-[9px] transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-2 left-60 bg-forest-green-500 p-2 rounded-full">
                <FaRegHeart className="text-white" size={16} />
              </div>
            </div>
            <div>
              <h3 className="font-normal text-[12px]">Bamboo cotton buds</h3>
              <p className="font-bold text-[12px]">&#8358;500</p>
            </div>
          </div>
          <div className="relative group">
            <div className="w-[288px] h-[417px] overflow-hidden hover:scale-100">
              <Image
                alt="images of one of the popular products"
                width={700}
                height={700}
                src={bio}
                className="w-full h-full object-cover rounded-[9px] transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute top-2 left-60 bg-forest-green-500 p-2 rounded-full">
                <FaRegHeart className="text-white" size={16} />
              </div>
            </div>
            <div>
              <h3 className="font-normal text-[12px]">
                Biodegradable kitchen sponge
              </h3>
              <p className="font-bold text-[12px]">&#8358;500</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
