import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="bg-white rounded-lg pb-10 sm:mt-10">
      <h2 className="font-semibold text-2xl p-4 border-b mb-2">Reviews (24)</h2>

      <div className="p-4 flex flex-col gap-5">
        <div className="border px-4 py-2 rounded-lg flex justify-between flex-wrap gap-5 max-sm:flexcol max-sm:justify-center">
          <div className="flex  gap-5 flex-wrap max-sm:justify-center max-sm:flex-col">
            <div className="h-[130px] w-[142px] rounded-lg overflow-hidden flex justify-center ">
              <Image
                height={400}
                width={400}
                className="h-full w-full object-cover"
                alt="img"
                src="/images/hero_img.jpeg"
              />
            </div>

            <div className="flex flex-col justify-between text-sm max-sm:items-center max-sm:text-center">
              <div>
                <p>Eco-friendly Tote Bag</p>
              </div>
              <div>
                <div>Order no: 1234564232</div>
                <div>Delivered on: 11 - 07 - 24</div>
              </div>
            </div>
          </div>

          <div className=" text-forest-green-500 font-medium  ">
            <Link href="#">Rate this product</Link>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="p-4 flex flex-col gap-5">
        <div className="border px-4 py-2 rounded-lg flex justify-between flex-wrap gap-5 max-sm:flexcol max-sm:justify-center">
          <div className="flex  gap-5 flex-wrap max-sm:justify-center max-sm:flex-col">
            <div className="h-[130px] w-[142px] rounded-lg overflow-hidden flex justify-center ">
              <Image
                height={400}
                width={400}
                className="h-full w-full object-cover"
                alt="img"
                src="/images/hero_img.jpeg"
              />
            </div>

            <div className="flex flex-col justify-between text-sm max-sm:items-center max-sm:text-center">
              <div>
                <p>Eco-friendly Tote Bag</p>
              </div>
              <div>
                <div>Order no: 1234564232</div>
                <div>Delivered on: 11 - 07 - 24</div>
              </div>
            </div>
          </div>

          <div className=" text-forest-green-500 font-medium  ">
            <Link href="#">Rate this product</Link>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="p-4 flex flex-col gap-5">
        <div className="border px-4 py-2 rounded-lg flex justify-between flex-wrap gap-5 max-sm:flexcol max-sm:justify-center">
          <div className="flex  gap-5 flex-wrap max-sm:justify-center max-sm:flex-col">
            <div className="h-[130px] w-[142px] rounded-lg overflow-hidden flex justify-center ">
              <Image
                height={400}
                width={400}
                className="h-full w-full object-cover"
                alt="img"
                src="/images/hero_img.jpeg"
              />
            </div>

            <div className="flex flex-col justify-between text-sm max-sm:items-center max-sm:text-center">
              <div>
                <p>Eco-friendly Tote Bag</p>
              </div>
              <div>
                <div>Order no: 1234564232</div>
                <div>Delivered on: 11 - 07 - 24</div>
              </div>
            </div>
          </div>

          <div className=" text-forest-green-500 font-medium  ">
            <Link href="#">Rate this product</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
