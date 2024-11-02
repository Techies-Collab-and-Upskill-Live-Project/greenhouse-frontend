"use client";
import React, { useEffect, useState } from "react";
// import BambooBrush from "../../../../public/images/BambooBrush.jpeg";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd, IoIosArrowDown } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";
import CartCard from "@/components/ui/CartCard";
import { CiLock } from "react-icons/ci";
import axios from "@/config/axios";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import { useCart } from "@/zustand/stores";
import Button from "@/components/ui/Button";

export default function Page() {
  const axiosAuth = useAxiosAuth();
  const [loading, setLoading] = useState(false);

  const { cartItems, setCartItems } = useCart();

  console.log(cartItems);

const getTotal = () => {
  const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  return total.toLocaleString("en-NG", { style: "currency", currency: "NGN" });
};


// console.log(getTotal());



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
        <section className="min-h-[500px]">
          <div className="w-full h-full  bg-white rounded-sm py-6 px-8">
            <h3 className="mb-6 font-bold text-[22px]">Delivery Information</h3>
            <form action="">
              <div className="flex items-center gap-6 mb-5 flex-col md:flex-row lg:flex-row">
                <div className="w-full  md:w-1/2 lg:w-1/2">
                  <label htmlFor="" className="text-sm">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="p-4 w-full h-[56px]"
                  />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="p-4 w-full h-[56px]"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="p-4 w-full h-[56px]"
                />
              </div>
              <div className="flex items-center gap-6 mb-5 flex-col md:flex-row lg:flex-row">
                <div className="w-full md:w-1/2 lg:w-1/2">
                  <label htmlFor="">City/Town</label>
                  <input
                    type="text"
                    placeholder="City/Town"
                    className="w-full h-[56px] p-4"
                  />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2">
                  <label htmlFor="">Zip Code</label>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="w-full h-[56px] p-4"
                  />
                </div>
              </div>
              <div className="flex items-center gap-6 mb-5 flex-col md:flex-row lg:flex-row">
                <div className="w-full md:w-1/2 lg:w-1/2">
                  <label htmlFor="">Mobile Number</label>
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="w-full h-[56px] p-4"
                  />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2">
                  <label htmlFor="">Email address</label>
                  <input
                    type="text"
                    placeholder="Email address"
                    className="w-full h-[56px] p-4"
                  />
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
      <div className="md:w-1/3">
        <section className="bg-white w-full rounded-lg">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-7">Payment Information</h2>
            <label htmlFor="" className="font-bold text-xl mb-3">
              Apply Discount
            </label>
            <div className="flex items-center gap-6 mb-4">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                className="w-full h-[56px] px-4 py-5"
              />
              <Button css={`bg-forest-green-800  w-[123px] h-[52px]`}>
                Apply
              </Button>
            </div>
            <div className="mb-6">
              <label htmlFor="" className="font-bold text-[18px] mb-5">
                Pay With
              </label>
              <div className="flex items-center justify-start gap-3 mb-2">
                <input type="radio" className="w-5 h-5" />
                <span className="font-semi-bold">Debit or Credit Card</span>
              </div>
              <div className="flex items-center justify-start gap-3">
                <input type="radio" className="w-5 h-5" />
                <span className="font-semi-bold">Pay on Delivery</span>
              </div>
            </div>
            <h2 className="mb-4">Enter Card Information</h2>
            <div className="mb-4">
              <label htmlFor="">Cardholder Name</label>
              <input
                type="text"
                placeholder="Nike Bankole"
                className="w-full h-[56px] px-4 py-5"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="">Card Number</label>
              <input
                type="text"
                placeholder="00-00-00-00"
                className="w-full h-[56px] px-4 py-5"
              />
            </div>
            <div className="mb-6">
              <div>
                <label htmlFor="">Expiry Date</label>
                <input type="date" className="px-4 py-5 w-full h-[56px]" />
              </div>
              <div>
                <label htmlFor="">CVV</label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="123"
                    className="px-3 py-5 w-full h-[56px]"
                  />
                  <CiLock className="w-5 h-5 absolute top-4 right-4" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <p>Sub Total</p>
              <p>#10,500</p>
            </div>
            <div className="flex items-center justify-between mb-6">
              <p>Promo Discount</p>
              <p>#250</p>
            </div>
            <div className="flex items-center justify-between mb-6">
              <p>Shipping</p>
              <p>#100</p>
            </div>
            <hr className="mb-6" />
            <div className="flex items-center justify-between mb-4">
              <p>Total</p>
              <p>{getTotal()}</p>
            </div>
            <Button
              css={`w-[450px] h-[55px] 
              bg-forest-green-800  `}
            >
              Pay {getTotal()}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
