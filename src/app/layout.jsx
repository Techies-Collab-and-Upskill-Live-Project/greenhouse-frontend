"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "../components/footer";

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
      <body className="flex flex-col justify-between">
        {/* <nav>
          <Link href="/vendor/dashboard">Go to Vendor</Link>
          <Link href="/customer/account">Go to Customer</Link>
          <Link href="/admin/overview">Go to Admin</Link>
        </nav> */}

        {showHeaderFooter && (
          <header className="fixed left-0 right-0 z-10">
            <Header />
          </header>
        )}
        <main className="min-h-[50vh]">{children}</main>
        {showHeaderFooter && (
          <div className="mt-20">
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
