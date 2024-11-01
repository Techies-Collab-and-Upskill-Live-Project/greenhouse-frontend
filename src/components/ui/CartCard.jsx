"use client";
import React, { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
// import BambooBrush from "/images/BambooBrush.jpeg";
import Image from "next/image";
import axios from "@/config/axios";

const CartCard = ({ item }) => {
  const [product, setProduct] = useState({});

  console.log(item);
  console.log(product);

  // const getProduct = async () => {
  //   // setLoading(true);
  //   try {
  //     const res = await axios.get(
  //       `/vendor/products/${item?.id}/detail/`
  //     );

  //       console.log(res);
  //     if (res?.data) {
  //       setProduct(res.data);
  //       // setLoading(false);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     // setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getProduct();
  // }, [item]);

  return (
    <div className="flex max-w-[697px] items-center gap-5">
      <div className="overflow-hidden max-h-[190] max-w-[210px] rounded-xl">
        <Image
          src="/images/BambooBrush.jpeg"
          alt="picture of the products"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full">
        <h4 className="flex justify-between mb-2">
          <span>Eco-freindly soap</span>
          <span>#500</span>
        </h4>
        <p>Color: Black</p>
        <div className="flex justify-between mt-8 items-center">
          <div className="mt-4 text-[#898A8A] bg-[#E3E4E4] w-[127px] flex py-3 rounded-lg justify-between items-center px-4">
            <FiMinus />
            <span className="2xl">0</span>
            <IoIosAdd size={24} />
          </div>
          <AiOutlineDelete size={20} />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
