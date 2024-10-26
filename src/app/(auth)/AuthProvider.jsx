"use client";
import React, { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetUserStore } from "@/zustand/stores";

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const { setUser } = useGetUserStore();

  useEffect(() => {
    // Check if the user is authenticated based on session storage data
    const accessToken = sessionStorage.getItem("accessToken");
    const user = sessionStorage.getItem("user");

    if (accessToken && user) {
      setUser(JSON.parse(user ? user : ""));
    } else {
      router.replace("/signin");
    }
  }, [router]);

  return <div className="">{children}</div>;
};

export default AuthProvider;
