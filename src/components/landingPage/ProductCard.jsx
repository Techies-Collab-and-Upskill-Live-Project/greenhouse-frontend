import { useEffect, useState } from "react";
import Image from "next/image";
import { LiaCartPlusSolid } from "react-icons/lia";
import { ImSpinner3 } from "react-icons/im";
import FavoriteBtn from "../ui/FavoriteBtn";
import { useGetProducts } from "@/zustand/stores";
import Link from "next/link";
import axios from "axios";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} passHref>
      <div className="relative group h-80 bg-white rounded-md hover:shadow-lg">
        <div className="relative w-56 h-80 p-3 rounded-md">
          {/* Product Image Container */}
          <div className="relative w-full h-[77%] overflow-hidden">
            <Image
              alt={`Product image of ${product?.name || "Eco Phone"}`}
              width={500}
              height={500}
              src={product?.images[0]?.image_url ?? "/images/mike.jpg"}
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-0 left-0 w-full h-9 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-forest-green-600 rounded-b-md text-white z-50">
              <div className="flex justify-center gap-2 items-center">
                <LiaCartPlusSolid className="text-white font-bold" size={25} />
                <p className="font-medium text-lg">Add to Cart</p>
              </div>
            </button>
          </div>
          <div className="mt-1">
            <h3 className="font-normal text-xs">
              {product?.name || "Eco Phone"}
            </h3>
            <p className="font-bold text-lg">
              ₦{product?.pricing?.base_price || "28,373"}
            </p>
            {product?.pricing?.sale_price && (
              <p className="font-normal text-base text-text__strike">
                <s>₦{product.pricing.sale_price}</s>
              </p>
            )}
          </div>
          <FavoriteBtn />
          <div className="absolute top-52 right-5 px-2 py-1 bg-grey-150 rounded-lg">
            <p className="text-sm text-forest-green-500 font-medium">-15%</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Product = () => {
  const { products, setProducts } = useGetProducts();
  const [isLoading, setIsLoading] = useState(false);
  const PRODUCTS_TO_SHOW = 10; // Number of products to display

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/products/");
        if (res.data) {
          console.log(res);
          setProducts(res.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-20 max-w-[1300px] px-4 mx-auto">
      <div className="max-w-full">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h1 className="hero-title font-bold text-[20px] sm:text-[28px]">
              Products on demand
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

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[320px]">
            <ImSpinner3
              size={150}
              className="animate-spin text-forest-green-500"
            />
          </div>
        ) : (
          <div className="flex gap-4 overflow-x-scroll md:overflow-x-auto whitespace-nowrap">
            {products?.slice(0, PRODUCTS_TO_SHOW).map((product, index) => (
              <ProductCard key={product.id || index} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Product;

// return (
//   <section className="py-20 max-w-[1300px] px-4 mx-auto flex items-center justify-center overflow-hidden">
//     <div className="max-w-full">
//       <div className="max-w-[1300px] mx-auto">
//         <div className="flex items-center justify-between gap-2 mb-2">
//           <h1 className="hero-title font-bold text-[20px] sm:text-[28px]">
//             Products on demand
//           </h1>
//           <div className="flex items-center justify-center gap-3">
//             <Link
//               href="/products"
//               className="text-forest-green-600 text-[16px] cursor-pointer "
//             >
//               Sell All
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="flex gap-4 overflow-x-scroll md:overflow-x-auto whitespace-nowrap">
//         <div className="relative group  h-[320px] bg-white bg-opacity-100 rounded-md hover:shadow-card">
//           <div className="relative w-[228px] h-[320px] p-3 rounded-md">
//             <div className="relative w-full h-[77%] overflow-hidden">
//               <Image
//                 alt="images of one of the popular products"
//                 width={500}
//                 height={500}
//                 src={products?.images?.image_url ?? "/images/mike.jpg"}
//                 className="w-full h-full object-cover rounded-md"
//               />
//               {/* Add to Cart button */}
//               <button className="absolute bottom-0 left-0 w-full h-[36px] opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-forest-green-600 rounded-b-md text-white z-50">
//                 <div className="flex justify-center gap-2 items-center">
//                   <LiaCartPlusSolid
//                     className="text-white font-bold"
//                     size={25}
//                   />
//                   <p className="font-medium text-[17px]">Add to Cart</p>
//                 </div>
//               </button>
//             </div>

//             <div className="mt-1">
//               <h3 className="font-normal text-[12px]">{products?.name}</h3>
//               <p className="font-bold text-[18px]">
//                 &#8358;{product?.pricing?.base_price}
//               </p>
//               <p className="font-normal text-[16px] text-text__strike">
//                 <s>&#8358;2,000</s>
//               </p>
//             </div>

//             <div className="absolute top-7 left-[175px] bg-white p-2 rounded-full">
//               <FaRegHeart className="text-forest-green-600" size={18} />
//             </div>
//             <div className="absolute top-[210px] h-[22.66px] left-[159px] bg-grey-150 p-2 rounded-[7.49px]">
//               <p className="text-[13px] -mt-[6px] text-forest-green-500 font-medium">
//                 -15%
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="relative group h-[320px] bg-white bg-opacity-100 rounded-md hover:shadow-card">
//           <div className="relative w-[228px] h-[320px] p-3 rounded-md">
//             <div className="relative w-full h-[77%] overflow-hidden">
//               <Image
//                 alt="images of one of the popular products"
//                 width={500}
//                 height={500}
//                 src={products?.images?.image_url ?? "/images/mike.jpg"}
//                 className="w-full h-full object-cover rounded-md"
//               />
//               {/* Add to Cart button */}
//               <button className="absolute bottom-0 left-0 w-full h-[36px] opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-forest-green-600 rounded-b-md text-white z-50">
//                 <div className="flex justify-center gap-2 items-center">
//                   <LiaCartPlusSolid
//                     className="text-white font-bold"
//                     size={25}
//                   />
//                   <p className="font-medium text-[17px]">Add to Cart</p>
//                 </div>
//               </button>
//             </div>

//             <div className="mt-1">
//               <h3 className="font-normal text-[12px]">Eco Phone</h3>
//               <p className="font-bold text-[18px]">&#8358;28,373</p>
//               <p className="font-normal text-[16px] text-text__strike">
//                 <s>&#8358;2,000</s>
//               </p>
//             </div>

//             <div className="absolute top-7 left-[175px] bg-white p-2 rounded-full">
//               <FaRegHeart className="text-forest-green-600" size={18} />
//             </div>
//             <div className="absolute top-[210px] h-[22.66px] left-[159px] bg-grey-150 p-2 rounded-[7.49px]">
//               <p className="text-[13px] -mt-[6px] text-forest-green-500 font-medium">
//                 -15%
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="relative group  h-[320px] bg-white bg-opacity-100 rounded-md hover:shadow-card">
//           <div className="relative w-[228px] h-[320px] p-3 rounded-md">
//             <div className="relative w-full h-[77%] overflow-hidden">
//               <Image
//                 alt="images of one of the popular products"
//                 width={500}
//                 height={500}
//                 src={products?.images?.image_url ?? "/images/mike.jpg"}
//                 className="w-full h-full object-cover rounded-md"
//               />
//               {/* Add to Cart button */}
//               <button className="absolute bottom-0 left-0 w-full h-[36px] opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-forest-green-600 rounded-b-md text-white z-50">
//                 <div className="flex justify-center gap-2 items-center">
//                   <LiaCartPlusSolid
//                     className="text-white font-bold"
//                     size={25}
//                   />
//                   <p className="font-medium text-[17px]">Add to Cart</p>
//                 </div>
//               </button>
//             </div>

//             <div className="mt-1">
//               <h3 className="font-normal text-[12px]">Eco Phone</h3>
//               <p className="font-bold text-[18px]">&#8358;28,373</p>
//               <p className="font-normal text-[16px] text-text__strike">
//                 <s>&#8358;2,000</s>
//               </p>
//             </div>
//             <FavoriteBtn />
//             <div className="absolute top-[210px] h-[22.66px] left-[159px] bg-grey-150 p-2 rounded-[7.49px]">
//               <p className="text-[13px] -mt-[6px] text-forest-green-500 font-medium">
//                 -15%
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="relative group  h-[320px] bg-white bg-opacity-100 rounded-md hover:shadow-card">
//           <div className="relative w-[228px] h-[320px] p-3 rounded-md">
//             <div className="relative w-full h-[77%] overflow-hidden">
//               <Image
//                 alt="images of one of the popular products"
//                 width={500}
//                 height={500}
//                 src={products?.images?.image_url ?? "/images/mike.jpg"}
//                 className="w-full h-full object-cover rounded-md"
//               />
//               {/* Add to Cart button */}
//               <button className="absolute bottom-0 left-0 w-full h-[36px] opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-forest-green-600 rounded-b-md text-white z-50">
//                 <div className="flex justify-center gap-2 items-center">
//                   <LiaCartPlusSolid
//                     className="text-white font-bold"
//                     size={25}
//                   />
//                   <p className="font-medium text-[17px]">Add to Cart</p>
//                 </div>
//               </button>
//             </div>

//             <div className="mt-1">
//               <h3 className="font-normal text-[12px]">Eco Phone</h3>
//               <p className="font-bold text-[18px]">&#8358;28,373</p>
//               <p className="font-normal text-[16px] text-text__strike">
//                 <s>&#8358;2,000</s>
//               </p>
//             </div>
//             <FavoriteBtn />
//             <div className="absolute top-[210px] h-[22.66px] left-[159px] bg-grey-150 p-2 rounded-[7.49px]">
//               <p className="text-[13px] -mt-[6px] text-forest-green-500 font-medium">
//                 -15%
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="relative group  h-[320px] bg-white bg-opacity-100 rounded-md hover:shadow-card">
//           <div className="relative w-[228px] h-[320px] p-3 rounded-md">
//             <div className="relative w-full h-[77%] overflow-hidden">
//               <Image
//                 alt="images of one of the popular products"
//                 width={500}
//                 height={500}
//                 src={products?.images?.image_url ?? "/images/mike.jpg"}
//                 className="w-full h-full object-cover rounded-md"
//               />
//               {/* Add to Cart button */}
//               <button className="absolute bottom-0 left-0 w-full h-[36px] opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-forest-green-600 rounded-b-md text-white z-50">
//                 <div className="flex justify-center gap-2 items-center">
//                   <LiaCartPlusSolid
//                     className="text-white font-bold"
//                     size={25}
//                   />
//                   <p className="font-medium text-[17px]">Add to Cart</p>
//                 </div>
//               </button>
//             </div>

//             <div className="mt-1">
//               <h3 className="font-normal text-[12px]">Eco Phone</h3>
//               <p className="font-bold text-[18px]">&#8358;28,373</p>
//               <p className="font-normal text-[16px] text-text__strike">
//                 <s>&#8358;2,000</s>
//               </p>
//             </div>
//             <FavoriteBtn />
//             <div className="absolute top-[210px] h-[22.66px] left-[159px] bg-grey-150 p-2 rounded-[7.49px]">
//               <p className="text-[13px] -mt-[6px] text-forest-green-500 font-medium">
//                 -15%
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <HomeProduct/> */}
//     </div>
//   </section>
// );
// }
