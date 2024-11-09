import React, { useEffect, useRef, useState } from "react";
import { useGetCategories } from "@/zustand/stores";
import { usePathname, useRouter } from "next/navigation";

export default function CategoryList({ c }) {
  const { toggleCategoryDropDown } = useGetCategories();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const categoryRef = useRef(null); // Initialize categoryRef with useRef

  const gotoProducts = () => {
    if (pathname !== "/products") {
      router.push(`/products`);
    }
  };

  const handleCategoryClick = () => {
    gotoProducts();
    console.log(gotoProducts());
    console.log(toggleCategoryDropDown());
    toggleCategoryDropDown();
    setShowModal(true); // Show modal when category is clicked
  };

  const handleClickOutside = (event) => {
    // Check if categoryRef is defined and the click is outside the category content
    if (categoryRef.current && !categoryRef.current.contains(event.target)) {
      setShowModal(false);
      toggleCategoryDropDown();
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      {/* Transparent Overlay */}
      {showModal && (
        <div
          onClick={(e) => e.stopPropagation()} // Prevents overlay clicks from bubbling up
          className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-40"
        />
      )}

      {/* Category List Item */}
      <div
        ref={categoryRef} // Attach ref to the main category item div
        onClick={(e) => {
          e.stopPropagation(); // Prevents click from bubbling up
          handleCategoryClick();
        }}
        className="place-self-start flex items-center justify-center gap-3 cursor-pointer z-50"
      >
        {c?.icon}
        <span>{c?.name}</span>
      </div>
    </>
  );
}
