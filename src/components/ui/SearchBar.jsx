"use client";
import { useGetProducts } from "@/zustand/stores";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
  const { setSearchTerm, searchTerm } = useGetProducts();

  // console.log(searchTerm);

  const handleChange = (e) => {
    const term = e.target.value;

    setSearchTerm(term);
  };

  return (
    <div className="bg-red-0 flex relative w-full min-w-[200px]">
      <input
        type="text"
        placeholder="Search Categories"
        className=" pr-4 pl-8"
        onChange={handleChange}
      />
      <IoSearchOutline
        size={20}
        strokeWidth={2}
        className="absolute top-2 left-2 text-[#667185]"
      />
    </div>
  );
}
