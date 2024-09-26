import React from "react";
import Logo from "./ui/Logo";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiCart } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import SearchBar from "./ui/SearchBar";

function Button() {
  return (
    <>
      <div>Hello worlds</div>
    </>
  );
}

export default function Header() {
  return (
    <header className="">
      <div className=" bg-forest-green-500 py-3 px-4 max-md:hidden">
        <div className="container mx-auto text-white font-light flex justify-between text-xs">
          <div>
            <Link href="tel:+2349112312345" className="flex gap-1 items-center">
              {" "}
              <FaPhoneAlt size={10} /> +234 911 2312 345
            </Link>
          </div>
          <div>
            <span className="text-grey-150">
              Get 50% Off on Selected Items | Sell on Fysi{" "}
            </span>
          </div>
          <div></div>
        </div>
      </div>
      <div className=" bg-white px-4">
        <div className="max-w-[1536px] con mx-auto flex items-center py-6 gap-10 justify-between max-lg:flex-wrap">
          <div className="flex items-center gap-2 sm:gap-10">
            <IoIosMenu size={24} className="cursor-pointer lg:hidden" />
            <Logo />
          </div>

          <div className="flex gap-7 items-center  max-lg:hidden">
            <IoIosMenu size={24} className="cursor-pointer max-lg:hidden" />
            <div className="flex items-center">
              <span>Catalogue</span> <MdKeyboardArrowDown size={28} />
            </div>
            <div className="whitespace-nowrap">
              <Link href="/about">About Us</Link>
            </div>
            <div>
              <Link href="/contact">Support</Link>
            </div>
          </div>

          <div className="w-full lg:max-w-[400px] min-w-[200px] max-lg:order-5  ">
            <SearchBar />
          </div>

          <div className="flex gap-7">
            <div className="whitespace-nowrap max-md:hidden">
              <Link href="/signup">Sign Up</Link>
            </div>
            <div className="flex items-center gap-2 cursor-pointer max-md:hidden">
              <MdOutlineFavoriteBorder size={24} />
              <span className="">Wishlist</span>
            </div>
            <div className="flex items-center relative cursor-pointer gap-1">
              <BiCart className="text-2xl max-sm:text-3xl" />
              <span className="max-xl:hidden">Cart</span>
              <span className="absolute right-1 -top-0.5 flex items-center justify-center bg-[#D42620] h-3 w-3 text-xs rounded-full text-white p-2">
                3
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
