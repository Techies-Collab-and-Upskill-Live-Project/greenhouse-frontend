"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);

      setTimeout(() => {
        console.log("Form submitted successfully!", values);
        setLoading(false);

        router.push(`/otp?email=${values.email}`);
      }, 3000);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center px-8 md:px-16">
      <Link href="/">
        <img src="/images/Logo.png" alt="logo" className="mb-6" />
      </Link>
      <div>
        <h1 className="text-2xl font-bold mb-2">Create your account</h1>
        <p className="mb-6">
          Let&apos;s get started by creating your account. To keep your account safe,
          we need a strong password.
        </p>
        <form onSubmit={formik.handleSubmit} className="space-y-4 mb-6">
          <div>
            <label htmlFor="email" className="block mb-1">
              Email or Phone Number*
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full px-2 py-3.5 border rounded focus:outline-none"
              placeholder="Enter your email "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>

          <Button
            type="submit"
            css="text-white bg-forest-green-500 w-full"
            loading={loading || formik.isSubmitting}
          >
            Continue
          </Button>
        </form>

        <div className="w-full mx-auto flex justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>

        <p className="mt-6 text-center">
          Already have an account?{" "}
          <Link href="/signin" className="text-green-800 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
