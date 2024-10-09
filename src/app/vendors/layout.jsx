"use client";
import React from "react";
import Image from "next/image";
import vendors from "../../../public/images/vendors.png";

export default function Layout({ children }) {
  return (
    <section className="h-screen">
      <div className="flex items-center justify-center w-full">
        <div className="flex-1 h-screen w-full relative">
          <Image
            src={vendors}
            alt="images of vendors"
            className="object-cover w-full h-full"
            width={700}
            height={700}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-green-800/60 to-forest-green-900/50 pointer-events-none"></div>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </section>
  );
}
