// components/SupportDropdown.jsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown visibility

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Toggle dropdown visibility
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close dropdown on link click
  };

  const closeDropdown = () => {
    setIsOpen(false); // Close dropdown and remove overlay
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container") && isOpen) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center gap-1">
        <IoIosMenu
          size={24}
          className="cursor-pointer"
          //   onClick={handleOpen}
        />
      </button>

      {/* overlay with green tint and opacity */}
      {isOpen && (
        <div className="fixed inset-0 bg-forest-green-500 opacity-40 z-10"></div>
      )}

      {isOpen && (
        <div className="dropdown-container absolute left-0 mt-2 w-40 p-5 text-left text-sm bg-white shadow-lg rounded-lg z-20 flex flex-col">
          {/* <Link
            href="/contact"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link> */}
          <Link
            href="/contact"
            className=" px-4 py-2"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
          <Link href="#" className=" px-4 py-2" onClick={handleLinkClick}>
            X
          </Link>
          <Link href="#" className=" px-4 py-2" onClick={handleLinkClick}>
            Instagram
          </Link>
          <Link href="#" className=" px-4 py-2" onClick={handleLinkClick}>
            Facebook
          </Link>
          <Link href="#" className=" pl-4" onClick={handleLinkClick}>
            Report
          </Link>
          <Link href="#" className="block px-4 py-2" onClick={handleLinkClick}>
            Returns
          </Link>
          <Image
            src="/images/_img.png"
            alt="bottom left cartoon image"
            width={30}
            height={30}
            className="absolute bottom-0 left-0 -z-20"
          />
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
