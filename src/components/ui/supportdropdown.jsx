// components/SupportDropdown.jsx
import React, { useState, useEffect } from "react";
import Link from "next/link";

const SupportDropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown visibility

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Toggle dropdown visibility
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close dropdown on link click
  };

   const closeDropdown = () => {
    setIsOpen(false); // Close dropdown and remove overlay
    
   }


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
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 hover:text-green-700"
      >
        <span>Support</span>
      </button>
     
     {/* overlay with green tint and opacity */}
     {isOpen && (
      <div className="fixed inset-0 bg-forest-green-500 opacity-40 z-10"></div>
     )}

      {isOpen && (
        <div className="dropdown-container absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-20">
          {/* <Link
            href="/contact"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link> */}
          <Link
            href="/faq"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={handleLinkClick}
          >
            FAQ
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={handleLinkClick}
          >
            Help Center
          </Link>
        </div>
      )}
    </div>
  );
};

export default SupportDropdown;
