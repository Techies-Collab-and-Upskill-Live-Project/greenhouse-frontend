// components/SupportDropdown.jsx
import React, { useState } from "react";
import Link from "next/link";

const SupportDropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown visibility

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Toggle dropdown visibility
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close dropdown on link click
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 hover:text-green-700"
      >
        <span>Support</span>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
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
