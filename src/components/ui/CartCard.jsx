"use client";
import React, { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
// import BambooBrush from "/images/BambooBrush.jpeg";
import Image from "next/image";
import axios from "@/config/axios";
import { useCart, useGetUserStore } from "@/zustand/stores";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";

const CartCard = ({ item }) => {
  console.log(item);
  const axiosAuth = useAxiosAuth();
  const { cartItems, setCartItems } = useCart();
  const { user } = useGetUserStore();

  const addToCart = async () => {
    console.log("hello");

    try {
      //  setCartLoading(true);
      const res = await axiosAuth.post("/customer/cart/remove_item/", {
        cart_item_id: item?.id,
        quantity: item.quantity,
      });

      console.log(res);

      if (res) {
        //  setCartLoading(false);
        getCartItems();
      }
    } catch (error) {
      //  setCartLoading(false);
      console.log(error);
    }
  };

  

  async function getCartItems() {
    try {
      const res = await axiosAuth.get(`/customer/cart/${user?.id}`);
      console.log(res, "headre");
      if (res.data) {
        setCartItems(res.data?.items);
      }
    } catch (error) {
      console.log(error);
    }
  }

 

  return (
    <div className="flex max-w-[697px] items-center gap-5">
      <div className="overflow-hidden max-h-[200px] h-[160px] max-w-[200px] min-w-[120px] w-1/3 rounded-xl">
        <Image
          src={item.product?.images[1]?.image_url ?? "/images/BambooBrush.jpeg"}
          // src="/images/BambooBrush.jpeg"
          alt="picture of the products"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full">
        <h4 className="flex justify-between mb-2">
          <span>{item?.product?.name}</span>
          <span>#{item.subtotal ?? 0}</span>
        </h4>
        <p>Color: {item?.product?.color}</p>
        <div className="flex justify-between mt-8 items-center">
          <div className="mt-4 text-[#898A8A] bg-[#E3E4E4] w-fit flex py-3 rounded-lg justify-between items-center px-4">
            {/* <FiMinus /> */}
            <span className="2xl">{item.quantity ?? 0}</span>
            {/* <IoIosAdd
              onClick={addToCart}
              className="cursor-pointer"
              size={24}
            /> */}
          </div>
          <AiOutlineDelete size={20} />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
