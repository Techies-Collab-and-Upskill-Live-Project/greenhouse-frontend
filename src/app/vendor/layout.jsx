"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineViewGrid, HiMenuAlt2, HiChevronDown } from "react-icons/hi";
import { BsBox } from "react-icons/bs";
import { TbFileInvoice } from "react-icons/tb";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BiLineChart } from "react-icons/bi";
import { IoMdSettings, IoMdLogOut } from "react-icons/io";
import { PiHeadset } from "react-icons/pi";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const productLinks = [
    { href: "/vendor/products/all", label: "All Products" },
    { href: "/vendor/products/add", label: "Add New" },
    { href: "/vendor/products/categories", label: "Categories" },
  ];

  const orderLinks = [
    { href: "/vendor/orders/all", label: "All Orders" },
    { href: "/vendor/orders/pending", label: "Pending" },
    { href: "/vendor/orders/completed", label: "Completed" },
  ];

  const promotionLinks = [
    { href: "/vendor/discounts/active", label: "Active Promotions" },
    { href: "/vendor/discounts/create", label: "Create New" },
  ];

  const links = [
    {
      href: "/vendor/dashboard",
      label: "Dashboard",
      icon: <HiOutlineViewGrid className="w-5 h-5" />,
    },
    {
      label: "Products",
      icon: <BsBox className="w-5 h-5" />,
      dropdown: productLinks,
    },
    {
      label: "Orders",
      icon: <TbFileInvoice className="w-5 h-5" />,
      dropdown: orderLinks,
    },
    {
      label: "Discount & Promotions",
      icon: <MdOutlineLocalOffer className="w-5 h-5" />,
      dropdown: promotionLinks,
    },
    {
      href: "/vendor/account",
      label: "Account Statement",
      icon: <BiLineChart className="w-5 h-5" />,
    },
  ];

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <aside className="bg-forest-green-800 py-4 px-4 border-r flex flex-col h-screen">
      {/* Header */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center">
          <div className="w-10 h-10">
            <Image
              src="/images/Fysi.png"
              alt="Fysi's logo"
              width={32}
              height={32}
              priority
            />
          </div>
          <span className="text-[12px] text-white ml-2">FYSI VENDOR HUB</span>
        </div>
        <button
          className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiMenuAlt2 className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-8 space-y-2 flex-grow">
        {links.map((link) => (
          <div key={link.label}>
            {link.dropdown ? (
              <div className="space-y-1">
                <button
                  onClick={() => toggleDropdown(link.label)}
                  className="w-full flex items-center justify-between gap-3 py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-white"
                >
                  <div className="flex items-center gap-3">
                    {link.icon}
                    <span className="text-sm">{link.label}</span>
                  </div>
                  <HiChevronDown
                    className={`w-4 h-4 transform transition-transform ${
                      openDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === link.label && (
                  <div className="ml-12 space-y-1">
                    {link.dropdown.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="block py-2 px-4 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={link.href}
                className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-white"
              >
                {link.icon}
                <span className="text-sm">{link.label}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>

      <hr className="border-white/20 my-4" />

      {/* Settings and Help */}
      <div className="space-y-2">
        <Link
          href="/vendor/settings"
          className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-white"
        >
          <IoMdSettings className="w-5 h-5" />
          <span className="text-sm">Settings</span>
        </Link>
        <Link
          href="/vendor/help"
          className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-white"
        >
          <PiHeadset className="w-5 h-5" />
          <span className="text-sm">Help Center</span>
        </Link>
      </div>

      {/* User Profile */}
      <div className="mt-4 p-4 bg-white/10 rounded-lg">
        <div className="flex items-center gap-3">
          <Image
            src="/images/default-avatar.png"
            alt="User avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="flex-grow">
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-white/70">john@example.com</p>
          </div>
          <button
            className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
            aria-label="Logout"
          >
            <IoMdLogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  );
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-cols-[17rem,1fr]">
      <Sidebar />
      <main className="bg-gray-100 p-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
