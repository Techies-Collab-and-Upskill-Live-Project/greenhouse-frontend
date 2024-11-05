import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineFavoriteBorder, MdKeyboardArrowDown } from "react-icons/md";
import { BiCart } from "react-icons/bi";
import Logo from "./ui/Logo";
import SearchBar from "./ui/SearchBar";
import {
  useCart,
  useCustomerSidebarStore,
  useGetCategories,
  useGetUserStore,
} from "@/zustand/stores";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import { IoCloseOutline } from "react-icons/io5";
import CatalogueDropdown from "./ui/cataloguedropdown";
import { usePathname, useRouter } from "next/navigation";
import Signupdropdown from "./ui/signupdropdown";
import SupportDropdown from "./ui/supportdropdown";

export default function Header() {
  const { isOpen, toggleNavbar } = useCustomerSidebarStore();

  const axiosAuth = useAxiosAuth();
  const { user } = useGetUserStore();
  const { cartItemsLength, setCartItemsLength, setCartItems } = useCart();
  const {
    categoryDropDown,
    setCategory,
    closeCategoryDropDown,
    categories,
    toggleCategoryDropDown,
    setCategories,
  } = useGetCategories();
  // console.log(categoryDropDown);
  const router = useRouter();
  const pathname = usePathname();

  const gotoProducts = () => {
    if (pathname !== "/products") {
      router.push(`/products`);
    }
    return;
  };

  const handleOpen = () => {
    toggleNavbar();
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev); // Toggle dropdown visibility
  };

  const getCartItems = async () => {
    try {
      const res = await axiosAuth.get(`/customer/cart/`);
      if (res.data) {
        setCartItemsLength(res.data[0]?.items?.length);
        setCartItems(res.data[0]?.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const res = await axiosAuth.get(`/vendor/products/categories-list/`);
      if (res.data) {
        setCategories(res?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
    if (user) getCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <header className="">
      <div className="bg-forest-green-500 py-3 px-4 max-md:hidden">
        <div className="container mx-auto text-white font-light flex justify-between items-center text-xs">
          <div>
            <Link href="tel:+2349112312345" className="flex gap-1 items-center">
              <FaPhoneAlt size={10} /> +234 911 2312 345
            </Link>
          </div>
          <div>
            <div className="text-white flex items-center divide-x-2">
              <p className="pr-5">Get 50% off of selected items</p>
              <Link href="#">
                <p className="pl-6">Sell on Fysi</p>
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="bg-white px-4">
        <div className="max-w-[1536px] mx-auto flex items-center py-6 gap-10 justify-between max-lg:flex-wrap">
          <div className="flex items-center gap-2 sm:gap-10">
            <IoIosMenu
              size={24}
              className="cursor-pointer lg:hidden"
              onClick={handleOpen}
            />
            <Logo />
          </div>

          <div className="flex gap-7 items-center max-lg:hidden">
            <IoIosMenu size={24} className="cursor-pointer max-lg:hidden" />
            <div className="relative flex items-center">
              <button
                onClick={() => toggleCategoryDropDown()}
                className="flex items-center gap-1"
              >
                <span>Catalogue</span>
                <MdKeyboardArrowDown size={28} />
              </button>
              {categoryDropDown && (
                <div className="absolute top-full mt-2 z-10">
                  <CatalogueDropdown />{" "}
                  {/* Render the dropdown when state is true */}
                </div>
              )}
            </div>
            <div className="whitespace-nowrap">
              <Link href="/about">About Us</Link>
            </div>
            <div>
              <SupportDropdown />
            </div>
          </div>

          <div className="w-full lg:max-w-[400px] min-w-[200px] max-lg:order-5">
            <SearchBar />
          </div>

          <div className="flex gap-7">
            <div className="whitespace-nowrap max-md:hidden">
              <Signupdropdown />
            </div>
            <div className="flex items-center gap-2 cursor-pointer max-md:hidden">
              <MdOutlineFavoriteBorder size={24} />
              <span>Wishlist</span>
            </div>
            <Link href="/customer/orderSummary">
              <div className="flex items-center relative cursor-pointer gap-1">
                <BiCart className="text-3xl max-sm:text-3xl" />
                <span className="max-xl:hidden">Cart</span>
                <span className="absolute -right-1 -top-0.5 md:right-[1.80rem] lg:left-5 flex items-center justify-center bg-[#D42620] h-3 w-3 text-xs rounded-full text-white p-2">
                  {cartItemsLength}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        className={`fixed text-white bg-forest-green-500 top-0 bottom-0 w-full max-w-[300px] flex flex-col px-2 py-7 ${
          isOpen ? "translate-x-0" : "-translate-x-[200%]"
        } 
        duration-150 lg:hidden overflow-y-auto`}
      >
        <div className="flex justify-between px-4">
          <div className="h-[38px]">
            <Image
              height={200}
              width={200}
              alt="logo"
              src="/images/Footer_img.png"
              className="w-full h-full object-contain"
            />
          </div>
          <IoCloseOutline
            size={36}
            className="text-white"
            onClick={handleOpen}
          />
        </div>

        {/* Auth menu */}
        <div className="flex flex-col gap-4 mt-10 px-4 border-b pb-7">
          <Link href="/customer/account">My Account</Link>
          <Link href="/customer/orderHistory">Order History</Link>
          <Link href="/customer/inbox">Inbox</Link>
          <Link href="/customer/review">Review</Link>
          <Link href="/customer/wishlist">Wishlist</Link>
        </div>
        {/* Catalog items */}
        <div className="mt-5 px-4 border-b pb-4">
          <div className="mb-3 text-lg">Catalog</div>
          <div className="flex flex-col gap-4 overflow-y-auto max-h-36">
            {categories?.map((c, i) => (
              <div
                key={i}
                onClick={() => {
                  setCategory(c);
                  gotoProducts();
                  toggleNavbar();
                }}
                className="place-self-start flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>{c?.name}</span>
              </div>
            ))}
            {/* <Link href="/clothing">Clothes</Link>
            <Link href="/kitchen">Kitchen Items</Link>
            <Link href="/care">Personal Care</Link>
            <Link href="/office">Office Supplies</Link>
            <Link href="/household">Household Items</Link>
            <Link href="/cosmetics">Beauty & Cosmetics</Link>
            <Link href="/travel">Outdoor and Travels</Link>
            <Link href="/accessories">Accessories</Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
