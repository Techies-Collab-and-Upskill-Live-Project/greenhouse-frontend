"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Delivered"); // Set the default active tab

  const tabs = ["Delivered", "Cancelled", "Delivery Failed", "Returned"];
  const orderId = "orderId";

  const renderTabs = () => {
    return (
      <div className="flex space-x-8 w-fit items-center mb-8 border-b-2">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 cursor-pointer border-b-2 -mb-0.5 duration-150 
          ${
            activeTab === tab
              ? "text-forest-green-500 border-forest-green-500"
              : "text-gray-500 border-transparent hover:text-forest-green-500 hover:border-forest-green-500"
          }`}
          >
            {tab}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className=" flex flex-col ">
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      <>{renderTabs()}</>
      <div className="bg-white rounded-lg overflow-hidden border-2">
        <table className="table-auto w-full">
          <thead>
            <tr className="text-left border-t-0 bg-[#F9FAFB] font-medium text-sm">
              <th className="">Order Id</th>
              <th className="">Date</th>
              <th className="">Price</th>
              <th className="">Status</th>
              <th className="">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="py-6 ">
              <td className="">
                <Link href={`/customer/orderHistory/${orderId}`}>
                  1sacacacs
                </Link>
              </td>
              <td className="">2</td>
              <td className="">3</td>
              <td className="">
                <span className="bg-green-300 text-forest-green-500 py-1 px-3 rounded-xl text-sm font-medium">
                  Shipped
                </span>
              </td>
              <td className="">Actions</td>
            </tr>
            <tr className="py-6 ">
              <td className="">
                <Link href={`/customer/orderHistory/${orderId}`}>
                  1sacacacs
                </Link>
              </td>
              <td className="">2</td>
              <td className="">3</td>
              <td className="">
                <span className="bg-green-300 text-forest-green-500 py-1 px-3 rounded-xl text-sm font-medium">
                  Shipped
                </span>
              </td>
              <td className="">Actions</td>
            </tr>
            <tr className="py-6 ">
              <td className="">
                <Link href={`/customer/orderHistory/${orderId}`}>
                  1sacacacs
                </Link>
              </td>
              <td className="">2</td>
              <td className="">3</td>
              <td className="">
                <span className="bg-green-300 text-forest-green-500 py-1 px-3 rounded-xl text-sm font-medium">
                  Shipped
                </span>
              </td>
              <td className="">Actions</td>
            </tr>
            <tr className="py-6 ">
              <td className="">
                <Link href={`/customer/orderHistory/${orderId}`}>
                  1sacacacs
                </Link>
              </td>
              <td className="">2</td>
              <td className="">3</td>
              <td className="">
                <span className="bg-green-300 text-forest-green-500 py-1 px-3 rounded-xl text-sm font-medium">
                  Shipped
                </span>
              </td>
              <td className="">Actions</td>
            </tr>
            <tr className="py-6 ">
              <td className="">
                <Link href={`/customer/orderHistory/${orderId}`}>
                  1sacacacs
                </Link>
              </td>
              <td className="">2</td>
              <td className="">3</td>
              <td className="">
                <span className="bg-green-300 text-forest-green-500 py-1 px-3 rounded-xl text-sm font-medium">
                  Shipped
                </span>
              </td>
              <td className="">Actions</td>
            </tr>
            <tr className="py-6 ">
              <td className="">
                <Link href={`/customer/orderHistory/${orderId}`}>
                  1sacacacs
                </Link>
              </td>
              <td className="">2</td>
              <td className="">3</td>
              <td className="">
                <span className="bg-green-300 text-forest-green-500 py-1 px-3 rounded-xl text-sm font-medium">
                  Shipped
                </span>
              </td>
              <td className="">Actions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
