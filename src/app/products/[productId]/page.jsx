/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Button from "@/components/ui/Button";
import StarRating from "@/components/ui/Stars";
import axios from "@/config/axios";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import {
  useCart,
  useGetCategories,
  useGetProduct,
  useGetUserStore,
} from "@/zustand/stores";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { ImSpinner3 } from "react-icons/im";
import { IoIosAdd, IoIosArrowDown } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";

export default function Page() {
  const axiosAuth = useAxiosAuth();
  const { user } = useGetUserStore();
  const [loading, setLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const [count, setCount] = useState(1);
  const { product, setProduct } = useGetProduct();
  const { cartItems, setCartItemsLength } = useCart();
  const params = useParams();
  const productId = params?.productId;
  const { categories } = useGetCategories();

  const totalPrice =
    parseInt(product?.pricing?.base_price) * count ??
    product?.pricing?.base_price;

  const getCategory = categories?.find((c) => c?.id === product?.category);
  // console.log(getCategory);

  const getProduct = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/products/${productId}/`);

      console.log(res);
      if (res?.data) {
        setProduct(res.data);
        setLoading(false);
      }
    } catch (e) {
      console.log("Error fetching product ID and details:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
    console.log("Product images:", product?.images);
  }, []);

  // const res =  await axios.get("/vendor/products/{id}/")

  function handleClick() {
    // console.log("Hello")
    setCount(count + 1);
  }

  function removeClick() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  //   ADD TO CART FUNCTION
  const addToCart = async () => {
    try {
      setCartLoading(true);
      const res = await axiosAuth.post("/customer/cart/add_item/", {
        product_id: product?.id,
        variation_id: product?.variations[0].id,
        quantity: count,
      });

      console.log(res);

      if (res) {
        setCartLoading(false);
        getCartItems();
      }
    } catch (error) {
      setCartLoading(false);
    } finally {
      setCartLoading(false);
    }
  };

  async function getCartItems() {
    try {
      const res = await axiosAuth.get(`/customer/cart/`);
      // console.log(res, "headre");
      if (res.data) {
        setCartItemsLength(res.data[0]?.items?.length);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <>
      {" "}
      {loading ? (
        <div className="min-h-svh max-lg:pt-52 lg:pt-36 max-w-[1536px] mx-auto  px-4">
          <div className="h-screen flex justify-center items-center">
            <ImSpinner3
              size={150}
              className="animate-spin text-forest-green-500"
            />
          </div>
        </div>
      ) : (
        <div className="pt-48 md-max:pt-56 mx-auto container px-4">
          <section>
            <div>Products &gt; {product?.name}</div>
          </section>

          <section className="mt-10 flex flex-col lg:gap-5 xl:gap-10 lg:flex-row items-center  lg:justify-center">
            <div className="relative flex items-center justify-center max-[320px]:h-[276px] max-h-[447px] max-w-[518px] md:h-[447px] overflow-hidden rounded-lg">
              <div className="absolute top-4 right-4  bg-forest-green-200 p-2 rounded-full flex items-center justify-center">
                <FaRegHeart className="text-[#E6ECE9]" size={24} />
              </div>
              <Image
                height={500}
                width={500}
                src={product?.images[0]?.image_url ?? "/images/bio.jpeg"}
                alt=""
                className="rounded-[8px] h-full w-full object-cover "
              />
            </div>

            <div className="bg-rd-300 ">
              <div className="bg-red500 flex flex-col gap-1 border-b-2 pb-1 w-full mt-4 lg:mt-0">
                <h3 className="font-semibold text-[#898a8a] lg:text-2xl">
                  {getCategory?.name} <br />
                  <span className="text-black">{product?.name}</span>{" "}
                </h3>
                <div className="text-xs flex items-center gap-[10px] ">
                  <div>
                    <StarRating rating={5} />
                  </div>
                  <div>3 Reviews</div>
                  <div className="font-normal text-[12px]">
                    SKU:{product?.sku}
                  </div>
                </div>
                <div className="font-bold">
                  {" "}
                  <span className=" flex items-center text-sm font-bold sm:text-lg">
                    <TbCurrencyNaira size={24} />
                    <span>{product?.pricing?.base_price && totalPrice}</span>
                  </span>
                </div>
              </div>

              <div>
                <h4 className="mt-4 text-xs font-medium hero-title">
                  {/* {product?.description} */}
                  {/* Lorem ipsum dolor sit amet. */}
                  {product?.description}
                </h4>

                <div className="mt-4 flex gap-2 flex-wrap">
                  <div className="text-xs border-2 py-1 flex justify-center items-center w-fit px-3 rounded-lg border-[#003e20] text-forest-green-500 font-medium ">
                    Non toxic
                  </div>
                  <div className="text-xs border-2 py-1 flex justify-center items-center w-fit px-3 rounded-lg border-[#003e20] text-forest-green-500 font-medium ">
                    Biodegradable
                  </div>
                  <div className="text-xs border-2 py-1 flex justify-center items-center w-fit px-3 rounded-lg border-[#003e20] text-forest-green-500 font-medium ">
                    Non toxic
                  </div>
                  <div className="text-xs border-2 py-1 flex justify-center items-center w-fit px-3 rounded-lg border-[#003e20] text-forest-green-500 font-medium ">
                    Non toxic
                  </div>
                  <div className="text-xs border-2 py-1 flex justify-center items-center w-fit px-3 rounded-lg border-[#003e20] text-forest-green-500 font-medium ">
                    Non toxic
                  </div>
                </div>

                <div className="flex flex-col  pb-5 lg:flex-row gap-4">
                  <div className="mt-4 text-[#898A8A] bg-[#E3E4E4] w-[127px] flex py-3 rounded-lg justify-between items-center px-4">
                    <FiMinus onClick={removeClick} />
                    <span className="2xl">{count}</span>
                    <IoIosAdd size={24} onClick={handleClick} />
                  </div>
                  <div className="mt-4 flex justify-between gap-4 flex-1 ">
                    <Button
                      fn={addToCart}
                      css="text-white bg-forest-green-600 flex-1 lg:max-w-[338px]"
                      loading={cartLoading}
                    >
                      Add to Cart
                    </Button>
                    <div className=" bg-forest-green-200 p-2 w-11 h-11 rounded-full flex items-center justify-center">
                      <FaRegHeart className="text-[#E6ECE9]" size={20} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 pb-8 border-t-2">
                  <div>Eco Certification</div>
                  <IoIosArrowDown size={22} />
                </div>
                <div className="flex items-center justify-between py-4 border-t-2">
                  <div>Delivery Information</div>
                  <IoIosArrowDown size={22} />
                </div>
              </div>
            </div>
          </section>

          {/* <section>x</section>

          <section>two</section> */}
        </div>
      )}
    </>
  );
}
