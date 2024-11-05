/* eslint-disable @next/next/no-img-element */
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
import { Toaster, toast } from "react-hot-toast";
import axios from "@/config/axios";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await axios.post("/users/send-otp/", {
          email: values.email,
        });

        if (res) {
          setLoading(false);
          toast.success("Otp sent succesfully!");
          // console.log(res);
          router.push(`/otp?email=${values.email}`);
        }
      } catch (error) {
        console.log(error.message);
          toast.error(error.response.data.error);
      } finally {
        setLoading(false);
      }
      // setTimeout(() => {
      //   console.log("Form submitted successfully!", values);
      //   setLoading(false);

      // }, 3000);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center px-8 md:px-16">
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "whitesmoke",
            color: "green",
          },
        }}
      />
      <Link href="/">
        <img src="/images/Logo.png" alt="logo" className="mb-6" />
      </Link>
      <div>
        <h1 className="text-2xl font-bold mb-2">Welcome to Fysi</h1>
        <p className="mb-6">
          Type your e-mail to verify your Fysi account
        </p>
        <form onSubmit={formik.handleSubmit} className="space-y-4 mb-6">
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
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

        <p className="mt-6 text-center whitespace-normal">
          By continuing you agree to Fysi’s <br />
          <Link href="#" className="text-green-800 hover:underline">
            Terms and Conditions
          </Link>
        </p>
      </div>
    </div>
  );
}
