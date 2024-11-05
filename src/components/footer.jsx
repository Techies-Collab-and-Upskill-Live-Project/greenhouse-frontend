"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import Button from "./ui/Button";
import { useGetCategories } from "@/zustand/stores";
import { usePathname, useRouter } from "next/navigation";
// import Footer_img from "/public";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const router = useRouter();
  const pathname = usePathname();
  const {
    categoryDropDown,
    setCategory,
    closeCategoryDropDown,
    categories,
    toggleCategoryDropDown,
    setCategories,
  } = useGetCategories();

  const gotoProducts = () => {
    if (pathname !== "/products") {
      router.push(`/products`);
    }
    return;
  };
   
useEffect(() => {
  setCurrentYear(new Date().getFullYear());
}, []);

  return (
    <footer>
      <section className="flower_background h-[60vh] lg:min-h-screen relative">
        <div className="container-sm px-8">
          <div className="flex items-start justify-start pt-2 lg:pt-64">
            <div className="bg-forest-green-700 flex-2 w-[343px] h-[329px] lg:w-[615px] lg:h-[256px] p-10 rounded-lg">
              <p className="text-white text-[20px] font-bold mb-7">
                Subscribe to our newsletter
              </p>
              <p className="text-white text-[14px] lg:text-[20px] font-extralight hero-title mb-5">
                Be the first to know about exclusive offers, eco-tips, and new{" "}
                <br />
                arrivals!
              </p>
              <div className="w-[250px] lg:w-[350px] h-[40px] bg-white relative flex items-center rounded-md shadow-sm border">
                <IoMailOutline className="absolute left-2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Your email"
                  className="flex-grow pl-8 pr-4 py-2 bg-transparent border-none outline-none text-gray-800"
                />
                <button className="text-white bg-green-800 hover:bg-green-600 -mx-1 px-4 py-2 rounded-md transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-forest-green-700">
        <div className="px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr,3.3fr] gap-10 text-white container mx-auto px-4 py-4">
            <div className="w-[143px] h-[65px]">
              <Link href="/">
                <Image
                  width={400}
                  height={400}
                  src="/images/Footer_img.png"
                  alt="logo of FYSI"
                  className="w-full"
                />
              </Link>
            </div>

            <div className="flex mx-auto flex-wrap gap-10 pt-8 justify-between font-sans">
              <div className="flex gap-1 flex-col">
                <h1 className="font-medium">Categories</h1>

                {categories?.map((c, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setCategory(c);
                      gotoProducts();
                      // toggleNavbar();
                    }}
                    className="place-self-start flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <span>{c?.name}</span>
                  </div>
                ))}
                {/* <div className="mt-2">
                  <Link href="/product/clothing" className="cursor-pointer">
                    Clothing
                  </Link>
                </div>
                <div>
                  <Link href="/product/kitchen" className="cursor-pointer">
                    Kitchen Items
                  </Link>
                </div>
                <div>
                  <Link href="/product/personalcare" className="cursor-pointer">
                    Personal Care
                  </Link>
                </div>
                <div>
                  <Link
                    href="/product/officesupplies"
                    className="cursor-pointer"
                  >
                    Office Supplies
                  </Link>
                </div>
                <div>
                  <Link href="/product/household" className="cursor-pointer">
                    Household Items
                  </Link>
                </div>
                <div>
                  <Link href="/product/cosmetics" className="cursor-pointer">
                    Beauty & Cosmetics
                  </Link>
                </div>
                <div>
                  <Link href="/product/travel" className="cursor-pointer">
                    Outdoor & Travel
                  </Link>
                </div> */}
              </div>

              <div className="flex gap-1 flex-col">
                <h1 className="font-medium text-base">Useful Links</h1>
                <div className="mt-2">
                  <Link href="#" className="cursor-pointer">
                    Returns and Refunds
                  </Link>
                </div>
                <div>
                  <Link href="#" className="cursor-pointer">
                    Report a Product
                  </Link>
                </div>
                <div>
                  <Link href="#" className="cursor-pointer">
                    Sell on Fysi
                  </Link>
                </div>
              </div>

              <div>
                <h1 className="font-medium">Our Company</h1>
                <div className="mt-2">
                  <Link href="/about" className="cursor-pointer">
                    About Us
                  </Link>
                </div>
                <div>
                  <Link href="#" className="cursor-pointer">
                    Our Blog
                  </Link>
                </div>
              </div>

              <div>
                <h1 className="font-medium text-[16px]">Support</h1>
                <div className="mt-2">
                  <Link href="/faq" className="cursor-pointer">
                    FAQS
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="cursor-pointer">
                    Help Center
                  </Link>
                </div>
              </div>

              <div>
                <div>
                  <h1 className="font-medium">Join Us</h1>
                  <div className="flex space-x-4 mt-3">
                    <Link href="/facebook" className="block">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <FaFacebookF className="text-black w-5 h-5" />
                      </div>
                    </Link>
                    <Link href="/instagram" className="block">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <ImInstagram className="text-black w-5 h-5" />
                      </div>
                    </Link>
                    <Link href="/twitter" className="block">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <FaTwitter className="text-black w-5 h-5" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-2" />

          <div className="flex items-center justify-between flex-col lg:flex-row w-full space-y-2 lg:space-y-0 lg:space-x-4 lg:w-auto font-sans">
            <div className="flex items-center justify-center gap-2 lg:gap-4 py-2 flex-col lg:flex-row lg:m-6">
              <div className="text-white">
                <Link href="#" className="cursor-pointer text-[12px]">
                  Terms and Conditions
                </Link>
              </div>
              <div className="text-white">
                <Link href="#" className="cursor-pointer text-[12px]">
                  Privacy Policy
                </Link>
              </div>
              <div className="text-white">
                <Link href="#" className="cursor-pointer text-[12px]">
                  Legal Notice
                </Link>
              </div>
            </div>
            <div className="text-white text-[12px]">
              @{currentYear} Fysi. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
