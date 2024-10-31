"use client";
import { useCustomerSidebarStore, useGetUserStore } from "@/zustand/stores";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const links = [
  {
    text: "My Account",
    icon: "/public/icons/user",
    link: "/customer/account",
  },
  {
    text: "Order History",
    icon: "/public/icons/Order",
    link: "/customer/orderHistory",
  },
  {
    text: "Inbox",
    icon: "/public/icons/Mail",
    link: "/customer/inbox",
  },
  {
    text: "Reviews",
    icon: "/public/icons/Review",
    link: "/customer/review",
  },
  {
    text: "Settings",
    icon: "/public/icons/Settings",
    link: "/customer/settings",
  },
];

export default function SideBar() {
  const pathname = usePathname();
  const { isOpen, openNavbar, closeNavbar, toggleNavbar } =
    useCustomerSidebarStore();
  const router = useRouter();

  const { setUser } = useGetUserStore();

  const logOut = () => {
    sessionStorage.setItem("accessToken", "");
    sessionStorage.setItem("user", "");
    setUser({});
    router.push("/signin");
  };

  const renderLinks = () =>
    links.map((l, i, z) => (
      <Link
        key={i}
        href={l.link}
        onClick={closeNavbar}
        className={`${
          pathname.startsWith(l.link) && "bg-[#E6ECE9]"
        } text-sm px-4 py-2  hover:bg-grey-600  duration-150`}
      >
        {z.icon}
        {l.text}{" "}
      </Link>
    ));

  return (
    <div
      className={`min-w-[240px] flex flex-col h-[296px] justify-between gap-1 b-red-300  text-[#101928] bg-white max-lg:fixed max-lg:top-52 max-lg:left-2 max-lg:-translate-x-[200%] duration-150 `}
    >
      {/* <div className="relative pl-4"> */}
      {renderLinks()}
      <div
        onClick={logOut}
        className="text-sm cursor-pointer px-4 py-2 bg-rd-400 hover:bg-[#E6ECE9] hover:text-white duration-150"
      >
        Log Out
      </div>
    </div>
  );
}
