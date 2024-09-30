"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { useRouter, useSearchParams } from "next/navigation";

export default function AccountCreated() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");

  // useFormik hook
  const formik = useFormik({
    initialValues: {
      email,
      password: "",
      confirmPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setLoading(true);
      setTimeout(() => {
        console.log("Form submitted successfully!", values);
        setLoading(false);
        router.push(`/personalDetails?email=${email}`);
        setSubmitting(false);
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

        <form onSubmit={formik.handleSubmit} className="space-y-6 mb-6">
          {/* Email or Phone Number Field */}
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              disabled
              className="w-full px-2 py-3.5 border rounded focus:outline-none"
              placeholder="Enter your email "
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>

          {/* Password Field */}
          <div className="relative">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full px-3 py-3.5 border rounded focus:outline-none"
                placeholder="Your Password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <MdOutlineRemoveRedEye className="w-5 h-5 text-blue-500" />
                ) : (
                  <FaRegEyeSlash className="w-5 h-5 text-gray-500" />
                )}
              </div>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
          </div>

          {/* Confirm Password Field */}
          <div className="relative ">
            <label htmlFor="confirmPassword" className="block mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-3 py-3.5 border rounded focus:outline-none"
                placeholder="Confirm Your Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <MdOutlineRemoveRedEye className="w-5 h-5 text-blue-500" />
                ) : (
                  <FaRegEyeSlash className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>
            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <div className="text-red-500">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            css="text-white bg-forest-green-500 w-full mt-10"
            loading={loading || formik.isSubmitting}
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
}
