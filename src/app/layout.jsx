"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Helper function to determine if layout should include header/footer
  const showHeaderFooter =
    !pathname.startsWith("/vendor") && !pathname.startsWith("/admin");

  return (
    <html lang="en">
      <head>
        <title>Green House</title>
      </head>
      <body className="">
        {/* <nav>
          <Link href="/vendor/dashboard">Go to Vendor</Link>
          <Link href="/customer/account">Go to Customer</Link>
          <Link href="/admin/overview">Go to Admin</Link>
        </nav> */}

        {showHeaderFooter && (
          <header className="fixed left-0 right-0">
            <Header />
          </header>
        )}
        <main>{children}</main>
        {showHeaderFooter && <div>Footer</div>}
      </body>
    </html>
  );
}
