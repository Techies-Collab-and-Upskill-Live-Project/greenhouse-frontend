"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Layout({ children }) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/closeup.png",
    "/images/stringbag.png",
    "/images/vendors.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen">
      <div className="flex items-center justify-center w-full">
        <div className="relative flex-1 h-screen w-full hidden md:block lg:block">
          {/* Image Slider */}
          {images.map((img, index) => (
            <img
              key={img}
              src={img}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              alt={`slider image ${index + 1}`}
            />
          ))}

          {/* Text on Top of Image */}
          <div className="absolute top-1/4 left-[10%] z-10">
            <h5 className="text-[69px] text-white font-bold">
              Go Green <br /> With Us
            </h5>
            <p className="text-white mt-4">
              List your eco-friendly products in our store
            </p>
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#002C17] opacity-60 pointer-events-none"></div>
        </div>

        {/* Children Content */}
        <div className="flex-1 h-screen">{children}</div>
      </div>
    </section>
  );
}
