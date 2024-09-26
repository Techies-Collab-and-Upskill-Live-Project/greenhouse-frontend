import React from "react";
import Loader from "./Loader";

export default function Button({ loading, css, fn, children }) {
  return (
    <button
      onClick={fn}
      disabled={loading}
      className={`${css} flex justify-center items-center gap-1 font-semibold text-white px-3 py-2 rounded-lg min-w-24 hover:scale-[0.96] active:scale-[1.01] duration-150`}
    >
      {loading ? <Loader /> : children}
    </button>
  );
}
