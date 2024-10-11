import { FaRegHeart } from "react-icons/fa";
import Bambo from "../../../public/images/Bambo.jpeg";
import Soap from "../../../public/images/Soap.jpeg";
import Crochet from "../../../public/images/Crochet.jpeg";
import HandKitten from "../../../public/images/HandKitten.jpeg";

import Image from "next/image";

export default function Product() {
  return (
    <section className="py-20 max-w-[1300px] px-4 mx-auto flex items-center justify-center overflow-hidden">
      <div className="max-w-full">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h1 className="hero-title font-bold text-[28px]">
              Products on demand
            </h1>
            <div className="flex items-center justify-center gap-3">
              <h1 className="text-forest-green-600 text-[16px]">Sell All</h1>
            </div>
          </div>
        </div>
        <div className="flex gap-4 overflow-scroll md:overflow-visible">
          <div className="relative group">
            <div className="w-[288px] h-[417px] overflow-hidden">
              <Image
                alt="images of one of the popular products"
                width={700}
                height={700}
                src={Bambo}
                className="w-full h-full object-cover rounded-[9px]transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-2 left-60 bg-forest-green-500 p-2 rounded-full">
                <FaRegHeart className="text-white" size={16} />
              </div>
            </div>
            <div>
              <h3 className="font-normal text-[12px]">Bamboo water bottle</h3>
              <p className="font-bold text-[12px]">&#8358;500</p>
            </div>
          </div>
          <div className="relative group">
            <div className="w-[288px] h-[417px] overflow-hidden">
              <Image
                alt="images of one of the popular products"
                width={700}
                height={700}
                src={HandKitten}
                className="w-full h-full object-cover rounded-[9px] transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-2 left-60 bg-forest-green-500 p-2 rounded-full">
                <FaRegHeart className="text-white" size={16} />
              </div>
            </div>
            <div>
              <h3 className="font-normal text-[12px]">Bamboo water bottle</h3>
              <p className="font-bold text-[12px]">&#8358;500</p>
            </div>
          </div>
          <div className="relative group">
            <div className="w-[288px] h-[417px] overflow-hidden">
              <Image
                alt="images of one of the popular products"
                width={700}
                height={700}
                src={Soap}
                className="w-full h-full object-cover rounded-[9px] transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-2 left-60 bg-forest-green-500 p-2 rounded-full">
                <FaRegHeart className="text-white" size={16} />
              </div>
            </div>
            <div>
              <h3 className="font-normal text-[12px]">Bamboo water bottle</h3>
              <p className="font-bold text-[12px]">&#8358;500</p>
            </div>
          </div>
          <div className="relative group">
            <div className="w-[288px] h-[417px] overflow-hidden">
              <Image
                alt="images of one of the popular products"
                width={700}
                height={700}
                src={Crochet}
                className="w-full h-full object-cover rounded-[9px] transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-2 left-60 bg-forest-green-500 p-2 rounded-full">
                <FaRegHeart className="text-white" size={16} />
              </div>
            </div>
            <div>
              <h3 className="font-normal text-[12px]">Bamboo water bottle</h3>
              <p className="font-bold text-[12px]">&#8358;500</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <section className="py-20 max-w-[1300px] px-4 mx-auto flex flex-col items-center justify-center overflow-hidden">
  <div className="w-full">
    <div className="flex flex-col md:flex-row items-center justify-between gap-2 mb-2">
      <h1 className="hero-title font-bold text-[24px] md:text-[28px]">
        Products on demand
      </h1>
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-forest-green-600 text-[14px] md:text-[16px] cursor-pointer">
          Sell All
        </h1>
      </div>
    </div>
  </div>
  <div className="flex gap-4 overflow-scroll md:overflow-visible">
    {/* Product cards go here */
}
//   </div>
// </section>; */}
