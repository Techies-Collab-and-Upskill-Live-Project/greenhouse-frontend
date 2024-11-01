"use client";
import React, { useState } from "react";
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

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center gap-1 hover:text-green-700">
        <span>
          {user && user.profile?.last_name
            ? `🤗 Hi, ${user.profile.last_name}`
            : "Sign Up"}
        </span>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
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
              <Link
                href="/products"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                View Products
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
