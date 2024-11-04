"use client";
import Link from "next/link";
import Image from "next/image";
import { GiClothes } from "react-icons/gi";
import { FaKitchenSet } from "react-icons/fa6";
import HouseHold from "../../../public/icons/HouseHold";
import Accessory from "../../../public/icons/Accessory";
import Care from "../../../public/icons/Care";
import Cosmetics from "../../../public/icons/Cosmetics";
import Travel from "../../../public/icons/Travel";
import Kitchen from "../../../public/icons/Kitchen";
import Clothes from "../../../public/icons/Clothes";
import Office from "../../../public/icons/Office";

export default function CatalogueDropdown() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[476px] h-[231px] p-6 bg-white flex items-center justify-center gap-8 rounded-lg">
        <div className="flex items-start gap-6 flex-col">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 cursor-pointer"
          >
            <Clothes className="bg-forest-green-600" />
            <span>Clothing</span>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-3 cursor-pointer"
          >
            <Kitchen className="bg-forest-green-600" />
            <span>Kitchen Items</span>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-3 cursor-pointer"
          >
            <Care className="bg-forest-green-600" />
            <span>Personal care</span>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-3 cursor-pointer"
          >
            <Office className="bg-forest-green-600" />
            <span>Office supplies</span>
          </Link>
        </div>
        <div className="flex items-start gap-6 flex-col">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 cursor-pointer"
          >
            <HouseHold className="bg-forest-green-600" />
            <span>House Hold Items</span>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-3 cursor-pointer"
          >
            <Cosmetics className="bg-forest-green-600" />
            <span>Beauty & Cosmetics</span>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-3 cursor-pointer"
          >
            <Travel className="bg-forest-green-600" />
            <span>Outdoor & Travel</span>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-3 cursor-pointer"
          >
            <Accessory className="bg-forest-green-600" />
            <span>Acessories</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
