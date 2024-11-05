import Link from "next/link";
import React from "react";
import { useGetCategories } from "@/zustand/stores";
import { usePathname, useRouter } from "next/navigation";

export default function CategoryList({ c }) {
  const { setCategory, closeCategoryDropDown } = useGetCategories();
  const router = useRouter();
  const pathname = usePathname();

  const gotoProducts = () => {
    if (pathname !== "/products") {
      router.push(`/products`);
    }
    return;
  };

  return (
    <div
      onClick={() => {
        setCategory(c);
        gotoProducts();
        closeCategoryDropDown();
      }}
      className="place-self-start flex items-center justify-center gap-3 cursor-pointer"
    >
      {c?.icon}
      <span>{c?.name}</span>
    </div>
    // </div>
  );
}
