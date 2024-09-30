"use client";
/* eslint-disable @next/next/no-img-element */
import OtpForm from "@/components/OtpForm";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { MdOutlinePermDeviceInformation } from "react-icons/md";

const Page = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  // console.log(email);

  return (
    <section className="flex">
      <div className="flex flex-col items-center md:items-start justify-center px-6 md:px-16">
        <div className="flex items-center justify-center w-full">
          <Link href="/">
            <img src="/images/Logo.png" alt="logo" className="mb-6" />
          </Link>
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-2 text-center ">
            Verify your email address
          </h1>
          <p className="mb-6 text-center ">
            We have sent a verification code to {email}
          </p>
          <OtpForm />
          {/* <Button fn={handleSubmit} text="submit" load={loading} /> */}
          <p className="text-center  mt-4">
            Didn&apos;t receive the verification code? It might take a moment.{" "}
            <span className="block md:inline">
              You can request a{" "}
              <span className="text-green-900">
                {/* new code in {counter} seconds */}
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
