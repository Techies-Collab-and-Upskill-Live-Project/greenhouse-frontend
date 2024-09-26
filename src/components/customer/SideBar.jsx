"use client";
import Link from "next/link";
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
  const renderLinks = () =>
    links.map((l, i) => (
      <Link
        key={i}
        href={l.link}
        className="text-sm px-4 py-2 bg-ed-400 hover:bg-[#E6ECE9]  duration-150"
      >
        {" "}
        {l.text}{" "}
      </Link>
    ));

  return (
    <div className="w-[240px] flex flex-col h-[296px] justify-between gap-1 b-red-300  text-[#101928] bg-white">
      {renderLinks()}
      <div className="text-sm px-4 py-2 bg-rd-400 hover:bg-[#E6ECE9] hover:text-white duration-150">
        Log Out
      </div>
    </div>
  );
}
