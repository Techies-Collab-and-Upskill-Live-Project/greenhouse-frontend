"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSearchParams } from "next/navigation";
import * as Yup from "yup";
import Button from "@/components/ui/Button";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default function Page() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || ""; // default to empty string if no email is provided
  const router = useRouter();

  const handleSubmit = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(`/vendors/verifyemail?email=${values.email}`); // Use the email value from the form
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
          initialValues={{ email }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, isSubmitting }) => (
            <Form className="w-full max-w-md">
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
                  value={values.email} // Access values.email directly from Formik props
                  onChange={handleChange} // Call handleChange provided by Formik
                  className="block w-full h-[56px] bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <Button
                type="submit"
                css="bg-forest-green-500 w-full mt-4"
                loading={loading}
              >
                Next
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
