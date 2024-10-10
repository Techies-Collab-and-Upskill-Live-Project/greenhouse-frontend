"use client";
import React from "react";
import Image from "next/image";
import vendors from "../../../public/images/vendors.png";

export default function Layout({ children }) {
  return (
    <section className="h-screen">
      <div className="flex items-center justify-center w-full">
        <div className="flex-1 h-screen w-full relative hidden md:block lg:block">
          <Image
            src={vendors}
            alt="images of vendors"
            className="object-cover w-full h-full"
            width={700}
            height={700}
          />
          <div className="-mt-[70%] ml-[10%] z-10">
            <h5 className="text-[69px] text-white hero-title font-bold">
              Go Green <br /> With Us
            </h5>
            <p className="text-white">
              List your eco-friendly products in our store
            </p>
          </div>
          <div className="absolute inset-0 bg-[#002C17] opacity-60 pointer-events-none"></div>
        </div>
        <div className="flex-1 h-screen">{children}</div>
      </div>
    </section>
  );
}
