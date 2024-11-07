/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import Image from "next/image";

const FaqPage = () => {
  const faqsData = [
    {
      question: "What is Fysi?",
      answer:
        "Fysi is an online marketplace that connects eco-conscious customers with vendors who share our passion for sustainability. Our platform features a wide range of eco-friendly products.",
    },
    {
      question: "How do I know if a product is truly eco-friendly?",
      answer:
        "Fysi is committed to ensuring that all products listed on our platform meet stringent eco-friendly standards. We provide sustainability scores and certifications to guide your purchase decisions.",
    },
    {
      question: "Can I trust the vendors on Fysi?",
      answer:
        "Our team verifies each vendor to ensure they comply with our strict eco-friendly guidelines, so you can shop with confidence.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Placing an order on Fysi is simple! Just browse through our marketplace, add your chosen items to the cart, and proceed to checkout.",
    },
    {
      question: "What is the return policy?",
      answer:
        "Fysi offers a customer-friendly return policy that allows you to return products within 30 days, provided they meet the return conditions.",
    },
  ];

  const FaqItem = ({ question, answer }) => {
    const [dropdown, setDropdown] = useState(false);

    return (
      <div className="flex justify-between pb-1 sm:pb-4 mx-auto container w-full">
        <div>
          <h6 className="pb-3 font-bold text-[20px]">{question}</h6>
          <p
            className={` ${
              dropdown ? "block " : "hidden  "
            } text-[17px] transition-opacity leading-8`}
          >
            {answer}
          </p>
        </div>
        <div className="cursor-pointer" onClick={() => setDropdown(!dropdown)}>
          {dropdown ? (
            <TfiAngleUp className="text-[23px] sm:text-[27px]" />
          ) : (
            <TfiAngleDown className="text-[23px] sm:text-[27px]" />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="pt-56 lg:pt-48 flex justify-between items-cnter w-full container mx-auto p-6 ">
      <div className="lg:w-1/2 w-full ">
        <div className="md:text-[32px] text-[27px] font-bold mb-16 text-center md:text-left">
          Frequently Asked Questions
        </div>

        <div className="flex flex-col gap-4">
          {faqsData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="pt-1">
          <p>
            Didn&apos;t find the answer you were looking for? Contact our
            support team, we&apos;re here to help!
          </p>
          <button className="bg-forest-green-500 hover:bg-forest-green-400 text-white rounded-md px-4 py-2 mt-3">
            Contact Support
          </button>
        </div>
      </div>

      <div className="hidden lg:block w-1/2 -mt-28">
        <Image
          width={1000}
          height={1000}
          quality={100}
          src="/images/faqfruit.png"
          alt="FAQ Illustration"
          className="object-top"
        />
      </div>
    </div>
  );
};

export default FaqPage;
