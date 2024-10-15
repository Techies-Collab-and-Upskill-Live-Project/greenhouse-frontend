import Link from "next/link";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex gap-10">
        <Link href="/customer/account">Go to customer</Link>
        <Link href="/vendor/dashboard">dashboard</Link>
        <Link href="/vendor/discounts">discounts</Link>
        <Link href="/vendor/orders">orders</Link>
        <Link href="/vendor/products">products</Link>
        <Link href="/vendor/account">accountStatment</Link>
      </div>
      {children}
    </div>
  );
}
