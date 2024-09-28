import React from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

export default function CatergoriesCard() {
  return (
    // <section><section/>
    <section>
      <div className="container mx-auto py-6 px-3">
        <div className="flex items-center justify-between gap-2">
          <h1 className="hero-title font-bold text-[28px]">Categories</h1>
          <div className="flex items-center justify-center gap-3">
            <div className="w-5 h-5 bg-forest-green-800 rounded-full flex items-center justify-center">
              <MdOutlineKeyboardArrowRight className="text-white w-3 h-3" />
            </div>
            <div className="w-5 h-5 bg-forest-green-800 rounded-full flex items-center justify-center">
              <MdOutlineKeyboardArrowLeft className="text-white w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
