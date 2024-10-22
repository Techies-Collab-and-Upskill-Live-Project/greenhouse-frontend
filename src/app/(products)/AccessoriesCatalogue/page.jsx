"use client";
import React, { useEffect } from "react";

const AccessoriesCatalogue = () => {
  useEffect(() => {
    console.log("AccessoriesCatalogue component mounted!");
  }, []);

  return (
    <div className="bg-green-500 p-7 mt-5 text-white">
      <h1>Hello</h1>
    </div>
  );
};
export default AccessoriesCatalogue;
