"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GoogleLogin } from "@react-oauth/google";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "@/config/axios";
import { Toaster, toast } from "react-hot-toast"; // Import toast

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      const toastId = toast.loading("Logging in..."); // Show loading toast

      try {
        const res = await axios.post("/users/login/", {
          email: values.email,
          password: values.password,
        });

        if (res) {
          const accessToken = res.data?.token.access;
          const user = res.data?.user;
          sessionStorage.setItem("accessToken", accessToken);
          sessionStorage.setItem("user", JSON.stringify(user));
          setLoading(false);

          toast.success("Login successful!", { id: toastId }); // Replace with success toast

          const route =
            user?.user_type === "Customer"
              ? "/customer/account"
              : "/vendor/dashboard";

          router.push(route);
        }
      } catch (error) {
        console.error(error);
        toast.error(error.response.data.error, {
          id: toastId,
        }); // Replace with error toast
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center">
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
      <div>
        <Link href="/">
          <Image
            width={100}
            height={100}
            src="/images/Logo.png"
            alt="logo"
            className="mb-6"
          />
        </Link>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
        <p className="mb-6">Welcome back! Please enter your details.</p>
        <form onSubmit={formik.handleSubmit} className="space-y-6 mb-6">
          <div>
            <label htmlFor="email" className="block mb-1">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-[20rem] md:w-[25rem] px-2 py-2 border rounded focus:outline-none"
              placeholder="Enter your e-mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="relative">
            <label htmlFor="password" className="block mb-1">
              Password*
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none mb-2"
              placeholder="Your Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <div
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer absolute right-2 top-8"
            >
              {showPassword ? (
                <FaRegEyeSlash className="w-5 h-5 text-gray-500" />
              ) : (
                <MdOutlineRemoveRedEye className="w-5 h-5 text-gray-500" />
              )}
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label
                  htmlFor="remember"
                  className="text-[12px] whitespace-nowrap"
                >
                  Remember me for 30 days
                </label>
              </div>
              <Link
                href="#"
                className="text-forest-green-800 hover:underline text-[12px]"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <Button
            type="submit"
            css="text-white bg-forest-green-500 w-full"
            loading={loading || formik.isSubmitting}
          >
            Sign In
          </Button>
        </form>
        <div className="w-full mx-auto flex justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              toast.error("Google login failed!"); // Show error toast for Google login
              console.log("Login Failed");
            }}
          />
        </div>

        <p className="mt-6 text-center">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-green-800 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
