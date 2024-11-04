import Link from "next/link";
import React from "react";
import Kitchen from "../../../public/icons/Kitchen";
import { useGetCategories } from "@/zustand/stores";

export default function CategoryList({ c }) {
  const { setCategory, closeCategoryDropDown } = useGetCategories();

  return (
    <div
      onClick={() => {
        setCategory(c);
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
