"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/components/ui/Button";
import axios from "@/config/axios";
import Image from "next/image";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Nigeria",
    // Add more countries as needed
  ];

  const formik = useFormik({
    initialValues: {
      country: "",
    },
    validationSchema: Yup.object({
      country: Yup.string().required("Please select a country"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await axios.post("/vendor/country/", values);
        console.log(res);
        if (res) {
          router.push("/vendors/enteremail");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="flex items-center justify-center py-40 flex-col px-4 min-h-screen">
      <div className="flex items-center justify-end flex-col">
        <div>
          <Link href="/">
            <Image src="/images/Logo.png" alt="logo" className="mb-6" width={100} height={100} />
          </Link>
        </div>
        <div className="mb-8">
          <h1 className="hero-title font-medium text-[16px]">
            Set up your shop by completing the following details
          </h1>
        </div>
        <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label
              htmlFor="country"
              className="hero-title font-medium text-[14px] block mb-2"
            >
              Country
            </label>
            <select
              id="country"
              name="country"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
              className="block w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="" disabled>
                Select country
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {formik.touched.country && formik.errors.country ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.country}
              </div>
            ) : null}
          </div>

          <Button
            type="submit"
            css="bg-forest-green-500 w-full mt-4"
            loading={loading}
          >
            Next
          </Button>
        </form>
      </div>
    </div>
  );
}
