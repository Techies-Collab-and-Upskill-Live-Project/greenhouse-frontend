"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/components/ui/Button";
import axios from "@/config/axios";
import Image from "next/image";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  verificationCode: Yup.string()
    .length(4, "Verification code must be 4 digits")
    .matches(/^[0-9]+$/, "Verification code must only contain numbers")
    .required("Verification code is required"),
});

// The main component
export default function Page() {
  const [loading, setLoading] = useState(false);

  return (
    // <Suspense fallback={<div>Loading...</div>}>
    // </Suspense>
    <FormComponent />
  );
}

// The form component wrapped inside Suspense
function FormComponent() {
  const [loading, setLoading] = useState(false);
  // const searchParams = useSearchParams();
  // const email = searchParams.get("email");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      verificationCode: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      setLoading(true);
      try {
        const res = await axios.post("/vendor/otp-verify/", {
          email: values.email,
          activation_pin: values.verificationCode,
        });
        // console.log(res);
        // console.log(values);
        if (res) {
          router.push("/vendors/personalinformation");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setSubmitting(false);
      }
    },
  });

  // const handleResendCode = async () => {
  //   try {
  //     await axios.post("/vendor/resend-otp/", { email: formik.values.email });
  //     alert("Verification code resent!");
  //   } catch (error) {
  //     console.error("Error resending code:", error);
  //     alert("Failed to resend code. Please try again.");
  //   }
  // };

  return (
    <div className="flex items-center justify-center py-40 flex-col px-4">
      <div className="flex items-center justify-center flex-col">
        <Link href="/">
          <Image height={500} width={500} src="/images/Logo.png" alt="logo" className="mb-6" />
        </Link>
        <h1 className="hero-title font-medium text-[16px] mb-8">
          Set up your shop by completing the following details
        </h1>
        <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="hero-title font-medium text-[14px] block mb-2"
            >
              E-mail Address
            </label>
            <input
              type="email"
              id="email"
              {...formik.getFieldProps("email")}
              placeholder="Enter your email"
              className="block w-full h-[56px] bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="verificationCode"
              className="hero-title font-medium text-[14px] block mb-2"
            >
              Verification Code
            </label>
            <input
              type="text"
              id="verificationCode"
              {...formik.getFieldProps("verificationCode")}
              placeholder="Enter 4-digit verification code"
              maxLength={4}
              className="block w-full h-[56px] bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {formik.touched.verificationCode &&
              formik.errors.verificationCode && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.verificationCode}
                </div>
              )}
          </div>

          <Button
            type="submit"
            css="bg-forest-green-500 w-full mt-4"
            loading={loading || formik.isSubmitting}
          >
            Verify
          </Button>

          <Button
            type="button"
            css="border border-forest-green-400 w-full mt-4 text-[#0B6623]"
            // onClick={handleResendCode}
          >
            Resend Code
          </Button>
        </form>
      </div>
    </div>
  );
}
