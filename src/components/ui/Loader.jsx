import React from "react";
import { ImSpinner3 } from "react-icons/im";

export default function Loader() {
  return (
    <div>
      <ImSpinner3 size={24} className="animate-spin" />
    </div>
  );
}
