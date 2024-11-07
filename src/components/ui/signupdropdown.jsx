"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useGetUserStore } from "@/zustand/stores";

const SignupDropdown = () => {
  const { user } = useGetUserStore(); // Destructure user from the store
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
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 hover:text-green-700"
      >
        <span>
          {user && user.profile?.last_name
            ? `🤗 Hi, ${user.profile.last_name}`
            : "Sign Up"}
        </span>
      </button>
       
       {/*  overlay with green tint and opacity */}
       {isOpen && (
        <div className="fixed inset-0 bg-forest-green-500 opacity-40 z-10"></div>)}

      {isOpen && (
        <div className="dropdown-container absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-20">
          {user ? (
            <>
              <Link
                href="/customer/account"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                My Account
              </Link>
              <Link
                href="/customer/orderHistory"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                Order History
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/signup"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                Login
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SignupDropdown;
