"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "./ui/Button";
import axios from "@/config/axios";

// OtpInput component
const OtpInput = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  // console.log(email);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "Backspace") {
      setError(false);
    }
  };

  const renderInputs = () => {
    return otp.map((value, index) => (
      <input
        key={index}
        ref={(ref) => {
          if (ref) inputRefs.current[index] = ref;
        }} // Modified ref callback function
        type="text"
        maxLength={1}
        defaultValue={value}
        onChange={(e) => handleChange(index, e.target.value)}
        onKeyDown={(e) => handleKeyDown(index, e)}
        className={`w-9 h-9 sm:w-14 sm:h-14  text-center outline-none sm:text-lg ${
          value ? "border-primary text-primary" : ""
        }`}
      />
    ));
  };

  async function handleSubmit(values) {
    setLoading(true);
    try {
      const otpString = otp.join("");
      // console.log(otp.join(""));

      const res = await axios.post("/users/verify-otp/", {
        email,
        otp: otpString,
      });

      if (res) {
        setLoading(false);
        router.push(`/createAccount?email=${email}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex justify-center gap-2">{renderInputs()}</div>
      {error && !otp.includes("") && (
        <div className="text-xs text-center mt-2 text-error">Invalid Otp</div>
      )}
      {!otp.includes("") && (
        <Button
          type="submit"
          css="text-white bg-forest-green-500 w-full mt-8"
          loading={loading}
          fn={handleSubmit}
        >
          Submit
        </Button>
      )}
    </div>
  );
};

export default OtpInput;
