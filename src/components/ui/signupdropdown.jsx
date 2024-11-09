"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useGetUserStore } from "@/zustand/stores";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import Image from "next/image";

const SignupDropdown = () => {
  const { user, setUser } = useGetUserStore(); // Access user data and setUser function
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown visibility
  const router = useRouter();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const closeDropdown = () => setIsOpen(false);

  const logOut = () => {
    // Clear user data from session and Zustand store
    sessionStorage.setItem("accessToken", "");
    sessionStorage.setItem("user", "");
    setUser({});

    // Show toast message and navigate to sign-in page
    toast.success("You have logged out successfully");
    setTimeout(() => {
      router.push("/signin");
    }, 500);

    closeDropdown(); // Close the dropdown after logging out
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container") && isOpen) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1"
      >
        <span>
          {user && user.profile?.last_name
            ? `🤗 Hi, ${user.profile.last_name}`
            : "Sign Up"}
        </span>
      </button>

      <Toaster />

      {/* Overlay for dropdown */}
      {isOpen && (
        <div className="fixed inset-0 bg-forest-green-500 opacity-40 z-10"></div>
      )}

      {/* Dropdown menu */}
      {isOpen && (
        <div className="dropdown-container absolute left-0 mt-2 w-52 p-3 bg-white shadow-lg rounded-lg z-20 text-center">
          {user && user.profile ? (
            <>
              <Link
                href="/customer/account"
                className="block px-4 py-2"
                onClick={closeDropdown}
              >
                My Account
              </Link>
              <Link
                href="/customer/orderHistory"
                className="block px-4 py-2"
                onClick={closeDropdown}
              >
                Order History
              </Link>
              <button
                onClick={logOut}
                className="w-full px-4 py-2"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signup"
                className="block px-4 py-2"
                onClick={closeDropdown}
              >
                Sign Up
              </Link>
              <Link
                href="/signin"
                className="block px-4 py-2 hover:-z-10"
                onClick={closeDropdown}
              >
                Sign In
              </Link>
            </>
          )}
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

export default SignupDropdown;
