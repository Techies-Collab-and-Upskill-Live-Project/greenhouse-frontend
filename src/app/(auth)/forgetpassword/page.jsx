"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleLogin } from "@react-oauth/google";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "@/config/axios";
import { Toaster, toast } from "react-hot-toast";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm({
  //     resolver: yupResolver(validationSchema),
  //   });

  const handleSumbit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("sending Otp...");

    // console.log(data.target);
    try {
      const res = await axios.post("/users/send-otp/", {
        email,
      });
      if (res) {
        setLoading(false);

        // const accessToken = res.data?.token.access;
        // const user = res.data?.user;
        // sessionStorage.setItem("accessToken", accessToken);
        // sessionStorage.setItem("user", JSON.stringify(user));
        console.log(res);

        toast.success("Otp sent successfully!", { id: toastId });
        // router.push(route);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);

      toast.error(error.response.data.error, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: { fontSize: "16px", maxWidth: "500px", padding: "16px 24px" },
        }}
      />

      <Link href="/">
        <Image
          width={100}
          height={100}
          src="/images/Logo.png"
          alt="logo"
          className="mb-6"
        />
      </Link>

      <h1 className="text-2xl font-bold mb-2">Forget password</h1>
      <p className="mb-6 text-[13px]">
        Enter your email and we&apos;ll send you a link to reset your password
      </p>

      <form onSubmit={handleSumbit} className="space-y-6 mb-6">
        <div>
          <label htmlFor="email" className="block mb-1">
            Email*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            className="w-[20rem] md:w-[25rem] px-2 py-2 border rounded focus:outline-none"
            placeholder="Enter your e-mail"
            // {...register("email")}
          />
          {/* {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )} */}
        </div>

        <Button
          //   fn={handleSubmit}
          type="submit"
          css="text-white bg-forest-green-500 w-full"
          loading={loading}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
