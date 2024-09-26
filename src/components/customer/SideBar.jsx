"use client";
import { useCustomerSidebarStore } from "@/zustand/stores";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    text: "My Account",
    link: "/customer/account",
  },
  {
    text: "Order History",
    link: "/customer/orderHistory",
  },
  {
    text: "Inbox",
    link: "/customer/inbox",
  },
  {
    text: "Reviews",
    link: "/customer/review",
  },
  {
    text: "Settings",
    link: "/customer/settings",
  },
];

export default function SideBar() {
  const pathname = usePathname();
  const { isOpen, openNavbar, closeNavbar, toggleNavbar } =
    useCustomerSidebarStore();

  const renderLinks = () =>
    links.map((l, i) => (
      <Link
        key={i}
        href={l.link}
        onClick={closeNavbar}
        className={`${
          pathname.startsWith(l.link) && "bg-[#E6ECE9]"
        } text-sm px-4 py-2  hover:bg-grey-600  duration-150`}
      >
        {" "}
        {l.text}{" "}
      </Link>
    ));

  return (
    <div
      className={`min-w-[240px] flex flex-col h-[296px] justify-between gap-1 b-red-300  text-[#101928] bg-white max-lg:fixed max-lg:top-52 max-lg:left-2 ${
        isOpen ? "translate-x-0" : "max-lg:-translate-x-[200%]"
      } duration-150 `}
    >
      {/* <div className="relative pl-4"> */}
      {renderLinks()}
      <div className="text-sm px-4 py-2 bg-rd-400 hover:bg-[#E6ECE9] hover:text-white duration-150">
        Log Out
      </div>
    </div>
  );
}
