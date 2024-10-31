import { FaRegHeart } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import FavoriteBtn from "../ui/FavoriteBtn";
import { useGetProducts } from "@/zustand/stores";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import axios from "@/config/axios";

const ProductCard = ({ product }) => {
  return (
    <div className="relative group h-[320px] bg-white bg-opacity-100 rounded-md hover:shadow-card">
      <div className="relative w-[228px] h-[320px] p-3 rounded-md">
        <div className="relative w-full h-[77%] overflow-hidden">
          <Image
            alt="images of one of the popular products"
            width={500}
            height={500}
            src={product?.images?.image_url ?? "/images/mike.jpg"}
            className="w-full h-full object-cover rounded-md"
          />
          <button className="absolute bottom-0 left-0 w-full h-[36px] opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-forest-green-600 rounded-b-md text-white z-50">
            <div className="flex justify-center gap-2 items-center">
              <LiaCartPlusSolid className="text-white font-bold" size={25} />
              <p className="font-medium text-[17px]">Add to Cart</p>
            </div>
          </button>
        </div>

        <div className="mt-1">
          <h3 className="font-normal text-[12px]">
            {product?.name || "Eco Phone"}
          </h3>
          <p className="font-bold text-[18px]">
            &#8358;{product?.pricing?.base_price || "28,373"}
          </p>
          <p className="font-normal text-[16px] text-text__strike">
            <s>&#8358;{product?.pricing?.sale_price}</s>
          </p>
        </div>

        <FavoriteBtn />
        <div className="absolute top-[210px] h-[22.66px] left-[159px] bg-grey-150 p-2 rounded-[7.49px]">
          <p className="text-[13px] -mt-[6px] text-forest-green-500 font-medium">
            -15%
          </p>
        </div>
      </div>
    </div>
  );
};

export default function HotProduct() {
  const { products, setProducts } = useGetProducts();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products/");
        if (res.data) {
          console.log(res);
          setProducts(res.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [setProducts]); // Empty dependency array means this runs once on mount

  return (
    <section className="py-20 max-w-[1300px] px-4 mx-auto">
      <div className="max-w-full">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h1 className="hero-title font-bold text-[20px] sm:text-[28px]">
              New In
            </h1>
            <div className="flex items-center justify-center gap-3">
              <Link
                href="/products"
                className="text-forest-green-600 text-[16px] cursor-pointer"
              >
                See All
              </Link>
            </div>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-scroll md:overflow-x-auto whitespace-nowrap">
          {products?.map((product, index) => (
            <ProductCard key={product.id || index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
