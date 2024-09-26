"use client";
import Button from "@/components/ui/Button";
import GoBack from "@/components/ui/GoBack";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const params = useParams();

  //   console.log(params);

  return (
    <div>
      <div className="flex gap-4 items-center">
        <GoBack />
        <span className="text-2xl font-medium">Order Details</span>
      </div>

      <div className="mt-6 text-sm flex flex-col gap-2">
        <div className="font-bold text-sm">Order ID: {params.orderId}</div>
        <p>3 Products</p>
        <p>05 August 2024</p>
      </div>

      <div className="mt-8 flex justify-between">
        <div className="flex gap-6">
          <div className="h-[130px] w-[142px] rounded-lg overflow-hidden">
            <Image
              height={1000}
              width={1000}
              src="/images/img1.png"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-sm text-[#696969] mt-2 flex flex-col gap-2">
            <p>Eco-friendly Tote Bag</p>
            <p>Qty: 1</p>
            <p className="text-base">#45,000</p>
          </div>
        </div>

        <div>
          <Button css="bg-forest-green-500 text-white text-xs">
            Buy Again
          </Button>
        </div>
      </div>

      <div className="flex justify-between gap-10 mt-10">
        <div className="flex-1 bg-white rounded-lg p-6 border h-[300px]">
          <h1 className="font-semibold border-b-2 pb-4">Delivery Details</h1>
          <div className="mt-4">
            <h2 className="font-semibold">Delivery Method</h2>
            <p className="text-sm mt-2">Pay on delivery</p>
          </div>
          <div className="mt-4">
            <h2 className="font-semibold">Delivery Address</h2>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              inventore?
            </p>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg p-6 border min-h-[300px]">
          <h1 className="font-semibold border-b-2 pb-4">Payment Details</h1>
          <div className="mt-4">
            <h2 className="font-semibold">Payment Method</h2>
            <p className="text-sm mt-2">Pay with Bank Transfer on Delivery</p>
          </div>
          <div className="mt-4">
            <h2 className="font-semibold">Payement Details</h2>
            <p className="text-sm mt-2">Subtotal: #4,500</p>
            <p className="text-sm mt-2">Discount: #250</p>
            <p className="text-sm mt-2">Shipping Fee: #250</p>
            <p className="text-sm mt-2 font-bold">Total: #250</p>
          </div>
        </div>
      </div>
    </div>
  );
}
