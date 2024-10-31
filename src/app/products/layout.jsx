import React from "react";
import AuthProvider from "../(auth)/AuthProvider";

export default function Layout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
