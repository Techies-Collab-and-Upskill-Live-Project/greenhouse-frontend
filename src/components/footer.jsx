"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import Button from "./ui/Button";
// import Footer_img from "/public";

export default function footer() {
  return (
    <footer className="">
      <div className="relative min-h-[60vh] lg:min-h-[100vh] px-8 xl:px-44">
        <div className="absolute inset-0 flower_background"></div>
        <div className="absolute bottom-8 left-1 lg:left-3 lg:bottom-40 flex items-center justify-center">
          <div className="w-[370px]  md:w-[480px] lg:w-[615px] h-[350px] md:h-[300px] lg:h-[240px] bg-forest-green-500 text-white p-8 rounded-md shadow-lg">
            <h2 className="text-[24px] font-bold mb-4 hero-title">
              Subscribe to our newsletter
            </h2>
            <p className="mb-6 hero-title font-normal text-[20px]">
              Be the first to know about exclusive offers, eco-tips, and new{" "}
              arrivals
            </p>
            <div>
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <IoMailOutline className="text-slate-400" />
                  </div>
                  <input
                    className="block p-3 pl-10 w-[250px] lg:w-[317px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-2 px-5 w-full lg:w-[109px] text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-primary-900 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 border dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-forest-green-700 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Logo and Tagline */}
            <div className="lg:col-span-2">
              <div className="w-36">
                <Image
                  width={143}
                  height={65}
                  src="/images/Footer_img.png"
                  alt="logo of FYSI"
                  className="w-full"
                />
              </div>
              <h3 className="text-white mt-2">
                Shop Smart. <span className="font-bold">Live Green</span>
              </h3>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="font-medium text-lg mb-4">Quick Links</h2>
              <ul className="space-y-2">
                {[
                  "Contact",
                  "Instagram",
                  "X",
                  "Facebook",
                  "Returns & Refunds",
                  "Report a Product/Problem",
                ].map((item) => (
                  <li key={item}>
                    <Link href="/contact" className="text-sm hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Catalogue */}
            <div>
              <h2 className="font-medium text-lg mb-4">Catalogue</h2>
              <ul className="space-y-2">
                {[
                  "Clothing",
                  "Kitchen Items",
                  "Personal Care",
                  "Office Supplies",
                  "Household Items",
                  "Beauty & Cosmetics",
                  "Outdoor & Travel",
                ].map((item) => (
                  <li key={item}>
                    <Link href="/contact" className="text-sm hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Account */}
            <div>
              <h2 className="font-medium text-lg mb-4">Account</h2>
              <ul className="space-y-2">
                {[
                  "Sign in",
                  "Order history",
                  "Profile",
                  "WishList",
                  "Payment",
                ].map((item) => (
                  <li key={item}>
                    <Link href="/contact" className="text-sm hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support and Social */}
            <div>
              <h2 className="font-medium text-lg mb-4">Support</h2>
              <ul className="space-y-2 mb-6">
                {["FAQs", "Help Center"].map((item) => (
                  <li key={item}>
                    <Link href="/contact" className="text-sm hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <h2 className="font-medium text-lg mb-4">Sell on Fysi</h2>
              <div className="flex space-x-4">
                {[
                  { href: "/facebook", icon: FaFacebookF },
                  { href: "/instagram", icon: ImInstagram },
                  { href: "/twitter", icon: FaTwitter },
                ].map(({ href, icon: Icon }) => (
                  <Link key={href} href={href} className="block">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <Icon className="text-forest-green-700 w-5 h-5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <hr className="my-8 border-white/20" />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {["Terms and Conditions", "Privacy Policy", "Legal Notice"].map(
                (item) => (
                  <Link key={item} href="/" className="text-sm hover:underline">
                    {item}
                  </Link>
                )
              )}
            </div>
            <div className="text-sm">
              &copy; 2023 Fysi. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
