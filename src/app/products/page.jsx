/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Button from "@/components/ui/Button";
import PageLoader from "@/components/ui/PageLoader";
import ProductCard from "@/components/ui/ProductCard";
import axios from "@/config/axios";
import { useGetProducts } from "@/zustand/stores";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Page() {
  const { products, setProducts, searchTerm } = useGetProducts();
  const [loading, setLoading] = useState(false);

  // console.log(products);

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `/vendor/products/listing?color=&vendor=&brand=&search=${searchTerm}&category`
      );

      // console.log(res.data);
      if (res?.data) {
        setProducts(res.data);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [searchTerm]);

  const renderProducts = () => {
    return products.map((p, i) => <ProductCard key={i} product={p} />);
  };

  return (
    <>
      {loading ? (
        <div className="min-h-svh   max-lg:pt-52 lg:pt-36 max-w-[1536px]  mx-auto  px-4">
          <PageLoader />
        </div>
      ) : products?.length === 0 && !loading ? (
        <div className="min-h-svh   max-lg:pt-52 lg:pt-36 max-w-[1536px]  mx-auto  px-4">
          <div className="gap-10 sm:gap-20 h-screen pt-52 flex justifycenter text-center items-center flex-col px-8">
            <h1 className="text-xl sm:text-6xl ">Oops! No Product Found</h1>
            <div className="h-40 sm:h-80">
              <Image
                src="/images/404-image.svg"
                height={500}
                width={500}
                className="object-contain w-full h-full"
                alt="404"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-svh   max-lg:pt-52 lg:pt-36 max-w-[1536px]  mx-auto  px-4">
          <div className="font-bold md:text-2xl mt-2 max-md:hidden">{`Products `}</div>
          <div className="font-bold text-3xl max-md:block hidden -mt-6">{`Products`}</div>

          <section className="mt-10 grid  max-[340px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-10  md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6">
            {renderProducts()}
          </section>
        </div>
      )}
    </>
  );
}
