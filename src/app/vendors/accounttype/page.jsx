"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/modal";
import { useConfirmAccountModal } from "@/zustand/stores";

const validationSchema = Yup.object().shape({
  accountType: Yup.string().required("Please select an account type"),
  shopName: Yup.string().required("Shop name is required"),
  shippingZone: Yup.string().required("Please select a shipping zone"),
  heardAbout: Yup.string().required("Please select how you heard about us"),
});

const shippingZones = ["Zone A", "Zone B", "Zone C", "Zone D"];
const heardAboutOptions = [
  "Social Media",
  "Friend or Family",
  "Online Advertisement",
  "Search Engine",
  "Other",
];

export default function Page() {
  const [loading, setLoading] = useState(false);
  const { isOpen, openModal } = useConfirmAccountModal();

  const showModal = () => {
    openModal();
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);
    // Simulate API call or processing
    setTimeout(() => {
      console.log(values);
      setLoading(false);
      setSubmitting(false);
    }, 3000);
  };

  return (
    <div className=" flex items-center justify-center pt-6 flex-col relative">
      <div className="flex items-center justify-center flex-col w-full max-w-lg ">
        <div className="mb-2">
          <Link href="/">
            <img src="/images/Logo.png" alt="logo" className="mb-4" />
          </Link>
        </div>
        <div className="mb-8 w-full">
          <h1 className="hero-title font-medium text-[16px] text-center mb-4">
            Set up your shop by completing the following details
          </h1>
          <Formik
            initialValues={{
              accountType: "",
              shopName: "",
              shippingZone: "",
              heardAbout: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-4">
                <div>
                  <h2 className="hero-title text-[16px] mb-2 font-bold">
                    Account Type
                  </h2>
                  <div className="flex space-x-4">
                    <label className="flex items-center w-[10rem]">
                      <Field
                        type="radio"
                        name="accountType"
                        value="business"
                        className="form-radio rounded-full h-4 w-4 text-blue-600"
                      />
                      <span className="ml-3">Business</span>
                    </label>
                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="accountType"
                        value="individual"
                        className="form-radio rounded-full h-4 w-4 text-blue-600"
                      />
                      <span className="ml-3">Individual</span>
                    </label>
                  </div>
                  <ErrorMessage
                    name="accountType"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="shopName" className="block mb-1">
                    Shop Name
                  </label>
                  <Field
                    type="text"
                    name="shopName"
                    id="shopName"
                    placeholder="Enter your shop name"
                    className="w-full h-[56px] px-3 py-2 border rounded-md"
                  />
                  <ErrorMessage
                    name="shopName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field name="shippingZone">
                    {({ field, form }) => (
                      <select
                        {...field}
                        className="w-full h-[56px] px-3 py-2 border rounded-md text-gray-500"
                        onChange={(e) => {
                          field.onChange(e);
                          form.setFieldTouched("shippingZone", true, false);
                        }}
                      >
                        <option value="" disabled selected hidden>
                          Enter your shipping zone
                        </option>
                        {shippingZones.map((zone) => (
                          <option
                            key={zone}
                            value={zone}
                            className="text-gray-900"
                          >
                            {zone}
                          </option>
                        ))}
                      </select>
                    )}
                  </Field>
                  <ErrorMessage
                    name="shippingZone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field name="heardAbout">
                    {({ field, form }) => (
                      <select
                        {...field}
                        className="w-full h-[56px] px-3 py-2 border rounded-md text-gray-500"
                        onChange={(e) => {
                          field.onChange(e);
                          form.setFieldTouched("heardAbout", true, false);
                        }}
                      >
                        <option value="" disabled selected hidden>
                          How did you hear about Fysi stores
                        </option>
                        {heardAboutOptions.map((option) => (
                          <option
                            key={option}
                            value={option}
                            className="text-gray-900"
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                  </Field>
                  <ErrorMessage
                    name="heardAbout"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="flex gap-2 items-start justify-start w-full">
                  <input type="checkbox" name="" id="" className="w-4 h-4" />
                  <p className="text-[12px]">
                    I hearby confirm that i have read and agreed to fysi stores{" "}
                    <span className="text-forest-green-500">
                      sellers contracts,
                      <br /> codes, policies and guidelines, Privacy notice
                    </span>{" "}
                    and{" "}
                    <span className="text-forest-green-500">
                      cookies notice
                    </span>{" "}
                    referenced <br /> therein
                  </p>
                </div>
                <Button
                  fn={showModal}
                  type="submit"
                  css="text-white bg-forest-green-500 w-full mt-8"
                  loading={loading}
                >
                  Submit
                </Button>
                {isOpen && <Modal />}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
