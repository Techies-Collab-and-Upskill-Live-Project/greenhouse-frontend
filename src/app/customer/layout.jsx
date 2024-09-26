import SideBar from "@/components/customer/SideBar";
import Link from "next/link";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="pt-36">
      <div className="flex container mx-auto gap-10">
        <div className="">
          <SideBar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
