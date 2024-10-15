import React from "react";
import { ImSpinner3 } from "react-icons/im";

export default function PageLoader() {
  return (
    <div className="h-screen flex justify-center items-center fixed left-0 right-0  bg-[#ffffff10] backdrop-blur-sm top-0">
      <ImSpinner3 size={150} className="animate-spin text-forest-green-500" />
    </div>
  );
}
