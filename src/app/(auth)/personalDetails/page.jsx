"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Toaster, toast } from "react-hot-toast";
// import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import axios from "@/config/axios";

const countryCodes = [
  { code: "1", label: "+1" },
  { code: "44", label: "+44" },
  { code: "33", label: "+33" },
  { code: "49", label: "+49" },
  { code: "39", label: "+39" },
  { code: "34", label: "+34" },
  { code: "7", label: "+7" },
  { code: "81", label: "+81" },
  { code: "86", label: "+86" },
  { code: "61", label: "+61" },
  { code: "55", label: "+55" },
  { code: "27", label: "+27" },
  { code: "91", label: "+91" },
  { code: "82", label: "+82" },
  { code: "971", label: "+971" },
  { code: "53", label: "+53" },
  { code: "46", label: "+46" },
  { code: "31", label: "+31" },
  { code: "60", label: "+60" },
  { code: "21", label: "+21" },
  { code: "48", label: "+48" },
  { code: "64", label: "+64" },
  { code: "420", label: "+420" },
  { code: "385", label: "+385" },
  { code: "389", label: "+389" },
  { code: "234", label: "+234" },
];

export default function PersonalDetails() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      countryCode: "234",
      lastName: "",
      firstName: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .matches(/^\d{10,15}$/, "Phone number is not valid")
        .required("Phone number is required"),
      lastName: Yup.string().required("Last name is required"),
      firstName: Yup.string().required("First name is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setLoading(true);
      try {
        const res = await axios.post("/users/complete-profile/", {
          email,
          first_name: values.firstName,
          last_name: values.lastName,
          phone_number: values.phoneNumber,
        });

        if (res) {
          setLoading(false);
          toast.success("Details succefully saved");
          router.push("/signin");
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8">
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
        <Image
          src="/images/Logo.png"
          alt="logo"
          className="mb-6"
          width={100}
          height={100}
        />
      </Link>
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Personal Details</h1>
        <p className="mb-6 text-sm md:text-base">
          We&apos;d love to get to know you better! Please fill in a few details
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-4 mb-6">
          <div>
            <div className="flex flex-row items-center gap-2 w-full">
              <select
                name="countryCode"
                id="countryCode"
                className="flex-shrink-0 w-1/4 px-3 py-2 border rounded-md"
                value={formik.values.countryCode}
                onChange={formik.handleChange}
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.label}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                className="flex-grow w-full px-3 py-2 border rounded-md"
                placeholder="Enter your phone number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
              <div className="text-red-500 text-sm">
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
              placeholder="Enter your last name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            {formik.errors.lastName && formik.touched.lastName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.lastName}
              </div>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
              placeholder="Enter your first name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            {formik.errors.firstName && formik.touched.firstName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>

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
