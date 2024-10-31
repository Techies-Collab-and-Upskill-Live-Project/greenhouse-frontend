"use client";
import React, { useEffect, useState } from "react";
import BambooBrush from "../../../../public/images/BambooBrush.jpeg";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd, IoIosArrowDown } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";
import CartCard from "@/components/ui/CartCard";
import axios from "@/config/axios";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import { useCart } from "@/zustand/stores";

export default function Page() {
  const axiosAuth = useAxiosAuth();
  const [loading, setLoading] = useState(false);

  const { cartItems, setCartItems } = useCart();

//   console.log(cartItems);


  return (
    <div className="flex flex-col gap-10 md:flex-row pt-10">
      <div className="bggreen-500 flex flex-col gap-8 md:w-2/3">
        <section className="min-h-[500px] max-h-[700px] overflow-auto bgred-700 px-8 py-4 bg-white rounded-xl flex flex-col gap-7">
          {cartItems.map((c, i) => (
            <CartCard key={i} item={c} />
          ))}
          {/* <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard /> */}
        </section>
        <section className="min-h-[500px] bg-Lime-Yellow-700">
        </section>
      </div>
      <div className="bg-pink-500 md:w-1/3">
        <section>Pay info</section>
      </div>
    </div>
  );
}
