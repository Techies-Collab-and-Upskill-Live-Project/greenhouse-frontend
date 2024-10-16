"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@/components/ui/Button";

// Validation schema for both email and verification code
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  verificationCode: Yup.string()
    .min(6, "Verification code must be 6 characters")
    .required("Verification code is required"),
});

export default function Page() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const email = searchParams.get("email"); // Get email from query params
  const router = useRouter();

  const handleSubmit = (values) => {
    setLoading(true);
    // Simulate API call or processing
    setTimeout(() => {
      setLoading(false);
      router.push("/vendors/personalinformation"); // Navigate after successful form submission
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center py-40 flex-col px-4">
      <div className="flex items-center justify-center flex-col">
        <div>
          <Link href="/">
            <img src="/images/Logo.png" alt="logo" className="mb-6" />
          </Link>
        </div>
        <div className="mb-8">
          <h1 className="hero-title font-medium text-[16px]">
            Set up your shop by completing the following details
          </h1>
        </div>
        <Formik
          initialValues={{ email: email || "", verificationCode: "" }} // Prefill email from URL
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-full max-w-md">
              {/* Email field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="hero-title font-medium text-[14px] block mb-2"
                >
                  E-mail Address
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="block w-full h-[56px] bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Verification code field */}
              <div className="mb-4">
                <label
                  htmlFor="verificationCode"
                  className="hero-title font-medium text-[14px] block mb-2"
                >
                  Verification Code
                </label>
                <Field
                  type="text"
                  id="verificationCode"
                  name="verificationCode"
                  placeholder="Enter verification code"
                  className="block w-full h-[56px] bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
                <ErrorMessage
                  name="verificationCode"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Verify button */}
              <Button
                type="submit"
                css="bg-forest-green-500 w-full mt-4"
                loading={loading}
              >
                Verify
              </Button>

              {/* Resend code button (just a regular button for this example) */}
              <Button
                type="button" // This should not submit the form
                css="border border-forest-green-400 w-full mt-4 text-[#0B6623]"
                onClick={() => {
                  // Handle resend code logic
                  alert("Verification code resent!");
                }}
              >
                Resend Code
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
