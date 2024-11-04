"use client";
import Link from "next/link";
import Image from "next/image";
import Clothes from "../../../public/icons/Clothes";
import Kitchen from "../../../public/icons/Kitchen";
import Care from "../../../public/icons/Care";
import Office from "../../../public/icons/Office";
import HouseHold from "../../../public/icons/HouseHold";
import Cosmetics from "../../../public/icons/Cosmetics";
import Travel from "../../../public/icons/Travel";
import Accessory from "../../../public/icons/Accessory";
import CategoryList from "./CategoryList";
import { useEffect, useState } from "react";
import { useGetCategories } from "@/zustand/stores";

export default function CatalogueDropdown() {
  const { categories } = useGetCategories();

  //   console.log(categories);

  const renderCategories = categories?.map((c, i) => (
    <CategoryList key={i} c={c} />
  ));

  return (
    <div className="flex items-center justify-center">
      <div className="w-[476px] h-[231px] p-6 bg-white flex items-center justify-center gap-8 rounded-lg relative">
        {/* <div className="flex items-start justify-evenly gap-6 flex-wrap"> */}
        <div className="grid grid-cols-2 justify-start gap-5">
          {renderCategories}
        </div>

        {/* Images positioned absolutely */}
        <Image
          src="/images/_img.png"
          alt="bottom-left cartoon image"
          width={40}
          height={40}
          className="absolute bottom-0 left-0"
        />
        <Image
          src="/images/_img3.png"
          alt="top-right cartoon image"
          height={40}
          width={40}
          className="absolute top-0 right-0"
        />
      </div>
    </div>
  );
}
