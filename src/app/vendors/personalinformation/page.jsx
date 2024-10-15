"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/components/ui/Button";
import { FiEye, FiEyeOff } from "react-icons/fi";

const validationSchema = Yup.object().shape({
  countryCode: Yup.string().required("Please select a country code"),
  phoneNumber: Yup.string().required("Please enter your phone number"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const countryCodes = [
  { code: "1", label: "+1" },
  { code: "44", label: "+44" },
  // ... (other country codes)
];

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);
    // Simulate API call or processing
    setTimeout(() => {
      setLoading(false);
      setSubmitting(false);
      router.push("/vendors/accounttype/");
    }, 3000);
  };

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="flex items-center justify-center pt-36 flex-col px-4">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4">
          <Link href="/">
            <img src="/images/Logo.png" alt="logo" className="mb-6" />
          </Link>
          <p className="hero-title text-center text-[16px] font-bold">
            Personal Information
          </p>
        </div>
        <div className="mb-8">
          <h1 className="hero-title font-medium text-[16px]">
            Set up your password and provide your phone number
          </h1>
        </div>
        <Formik
          initialValues={{
            countryCode: "+234",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="w-full max-w-md">
              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-row items-center gap-2">
                  <Field
                    as="select"
                    name="countryCode"
                    className="flex-shrink-0 w-1/5 px-2 py-2 h-[56px] border rounded-md"
                  >
                    <option value="+234">+234</option>
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.label}
                      </option>
                    ))}
                  </Field>
                  <Field
                    type="text"
                    name="phoneNumber"
                    className="flex-grow w-full h-[56px] px-3 py-2 border rounded-md"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="w-full h-[56px] px-3 py-2 border rounded-md pr-10"
                    placeholder="Your Password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => togglePasswordVisibility("password")}
                  >
                    {showPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </button>
                </div>
                <div className="relative">
                  <Field
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    className="w-full h-[56px] px-3 py-2 border rounded-md pr-10"
                    placeholder="Your Password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => togglePasswordVisibility("confirmPassword")}
                  >
                    {showConfirmPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </button>
                </div>
                <p className="text-[12px] hero-title">
                  Password should contain at least 8 characters containing a
                  capital <br /> letter a lower letter, a number and a special
                  character
                </p>
              </div>
              <ErrorMessage
                name="countryCode"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <Button
                type="submit"
                css="text-white bg-forest-green-500 w-full mt-8"
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
