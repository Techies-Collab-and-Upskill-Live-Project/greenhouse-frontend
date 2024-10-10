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
                <button className="text-white bg-green-800 hover:bg-green-600 px-4 py-2 rounded-md transition-all">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="bg-red-500 flex-1"></div>
          </div>
        </div>
      </section>
      <div className="bg-forest-green-700 text-white">
        <div className="container-md mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Logo and Tagline */}
            <div className="lg:col-2">
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
            <div className="">
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
            <div className="">
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

          <div className="container-md flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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
