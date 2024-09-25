import Link from "next/link";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex gap-10">
        <Link href="/customer/account">Account</Link>
        <Link href="/customer/orderHistory">orderHistory</Link>
        <Link href="/customer/inbox">inbox</Link>
        <Link href="/customer/review">review</Link>
        <Link href="/customer/settings">settings</Link>
        <Link href="/signin">Logout</Link>
      </div>
      {children}
    </div>
  );
}
