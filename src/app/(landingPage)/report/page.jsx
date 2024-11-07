import React from "react";
import { BsTypeH1 } from "react-icons/bs";
import Link from "next/link";

export default function Page() {
  return (
    <section className="pt-56 lg:pt-48 p-6 ">
      <div className="container mx-auto">
        <div className="mb-4">
          <h1 className="font-light md:font-bold lg:font-bold  text-xl md:text-2xl lg:text-2xl mb-3">
            Returns & Refunds
          </h1>
          <p>
            At Fysi, we want you to be completely satisfied with your purchase.
            If for any reason you are not, our Returns and Refunds policy is
            here to help.
          </p>
        </div>
        <div className="mb-4">
          <h1 className="font-light md:font-bold lg:font-bold  text-xl md:text-2xl lg:text-2xl mb-3">
            Easy Returns
          </h1>
          <p>
            If you wish to return an item, you can do so within 14 days of
            receiving your order. Please ensure that the product is unused, in
            its original packaging, and in the same condition you received it.
          </p>
        </div>
        <div className="mb-4">
          <h1 className="font-light md:font-bold lg:font-bold  text-xl md:text-2xl lg:text-2xl mb-3">
            How to Initiate a Return
          </h1>
          <p className="mb-1">
            If you wish to return an item, you can do so within 14 days of
            receiving your order. Please ensure that the product is unused, in
            its original packaging, and in the same condition you received it.
          </p>
          <ul className="list-disc md:list-none lg:list-none">
            <li className="mb-2">
              <span className="text-forest-green-400">Contact Us:</span> Start
              by reaching out to our customer support team through our contact
              form or email.
            </li>
            <li className="mb-2">
              <span className="text-forest-green-400">
                Receive Return Instructions:
              </span>{" "}
              We’ll guide you through the return process, including how to ship
              the item back to us.
            </li>
            <liv className="mb-2">
              <span className="text-forest-green-400">Ship the Item:</span> Pack
              the item securely and send it to the address provided by our team.
            </liv>
          </ul>
        </div>
        <div className="mb-4">
          <h1 className="font-light md:font-bold lg:font-bold  text-xl md:text-2xl lg:text-2xl mb-3">
            Refund Process
          </h1>
          <p>
            If you wish to return an item, you can do so within 14 days of
            receiving your order. Please ensure that the product is unused, in
            its original packaging, and in the same condition you received it.
          </p>
        </div>
        <div className="mb-4">
          <h1 className="font-light md:font-bold lg:font-bold  text-xl md:text-2xl lg:text-2xl mb-3">
            Exceptions
          </h1>
          <p>
            Certain items, such as perishable goods or personalized products,
            may not be eligible for return. Please check the product description
            for specific return eligibility.
          </p>
        </div>
        <div className="mb-4">
          <h1 className="font-light md:font-bold lg:font-bold  text-xl md:text-2xl lg:text-2xl mb-3">
            Exchanges
          </h1>
          <p>
            If you received a defective or damaged item, we’re happy to offer a
            replacement. Contact us within 7 days of receiving your order, and
            we’ll arrange an exchange.
          </p>
        </div>
        <div className="mb-4">
          <h1 className="font-light md:font-bold lg:font-bold  text-xl md:text-2xl lg:text-2xl mb-3">
            Need Assistance?
          </h1>
          <p>
            If you have any questions or need help with your return, our
            customer support team is here for you. Reach out anytime, and we’ll
            be glad to assist you!
          </p>
        </div>
        <button className="bg-forest-green-500 hover:bg-forest-green-400 text-white rounded-md px-4 py-2 mt-3">
         <Link href="/faq">Contact Support</Link>
        </button>
      </div>
    </section>
  );
}
