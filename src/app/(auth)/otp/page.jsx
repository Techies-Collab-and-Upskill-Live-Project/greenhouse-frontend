"use client";
/* eslint-disable @next/next/no-img-element */
import OtpForm from "@/components/OtpForm";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdOutlinePermDeviceInformation } from "react-icons/md";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  // Timer state
  const [counter, setCounter] = useState(60);
  const [isTimerActive, setIsTimerActive] = useState(true);

  // Countdown logic
  useEffect(() => {
    let timer;
    if (counter > 0 && isTimerActive) {
      timer = setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      setIsTimerActive(false); // Stop the timer
    }
    return () => clearTimeout(timer);
  }, [counter, isTimerActive]);

  const handleResendOtp = () => {
    setCounter(60); // Reset timer to 60 seconds
    setIsTimerActive(true); // Restart the timer
    // Logic to resend the OTP
    // console.log("Resend OTP");
  };

  return (
    <section className="flex justify-center">
      {/* <ToastContainer position="top-center" autoClose={3000} /> */}
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

          <p className="text-center mt-4">
            Didn&apos;t receive the verification code? It might take a moment.{" "}
            <span className="block md:inline">
              You can request a new code in{" "}
              <span className="text-green-900">
                {isTimerActive ? `${counter} seconds` : "now"}.
              </span>
            </span>
          </p>

          {!isTimerActive && (
            <button
              onClick={handleResendOtp}
              className="mt-4 text-blue-500 hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;
