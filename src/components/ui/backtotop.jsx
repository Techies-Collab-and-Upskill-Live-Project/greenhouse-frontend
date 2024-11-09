"use client";
import React from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 bg-forest-green-500 text-white py-4 px-4 rounded-full shadow-md hover:opacity-80 transition duration-300"
      aria-label="Scroll to Top"
    >
    <MdOutlineKeyboardArrowUp className="text-2xl"/>
    </button>
  );
};

export default BackToTop;