"use client";
import React, { useState } from "react";
import Button from "../Button";
import {
  useConfirmAccountModal,
  useConfirmRegisterModals,
} from "@/zustand/stores";
import { useDoneAccountModal } from "@/zustand/stores";
// import { useSwitchBetweeModals } from "@/zustand/stores";
import { useRouter } from "next/navigation";

export default function Modal() {
  const [loading, setLoading] = useState(false);

  const confirm = useConfirmRegisterModals();
  const { closeModal, isOpen, activeModal, switchModal } =
    useConfirmAccountModal(); // Make sure modal is open initially
  const { openModal } = useDoneAccountModal();
  const router = useRouter();

  const handleCloseModal = () => {
    // setIsCloseModal((prevState) => !prevState); // Toggle modal open/close
    closeModal();
  };

  const handleNextModal = () => {
    // setLoading(true);
    // setTimeout(() => {
    // router.push("/modals/confirmmodal");
    closeModal();
    confirm.openModal();
    // setLoading(false);
    // }, 1000);
    // console.log("this is working fine!");
  };

  return (
    <div className="min-h-screen">
      {isOpen && (
        <div className="fixed z-10 bottom-0 top-0 left-0 w-full flex justify-center items-center bg-[#00000090] backdrop-blur-[3px]">
          <div className="flex items-center justify-center bg-white rounded-[25px] shadow-md z-10 max-w-[705px] h-2/3 relative">
            <button
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center absolute right-10 top-6"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <div className="w-full h-full px-24 py-16">
              <h1 className="hero-title text-[28px] font-medium text-center">
                Confirm your Account Type
              </h1>
              <p className="hero-title text-[16px] text-center font-light mb-4 text-[#8D8484]">
                Kindly validate your account type as once confirmed, <br /> it
                cannot be changed later
              </p>
              <p className="mb-10">
                <span className="text-forest-green-500">Individual:</span> if
                you are a seller without any registered or <br /> incorporated
                company{" "}
              </p>
              <p>
                <span className="text-forest-green-500">Business:</span> if you
                are a registered or incorporated company <br /> with the
                required document{" "}
              </p>
              <Button
                fn={handleNextModal}
                type="submit"
                css="text-white bg-forest-green-500 w-full mt-8"
                loading={loading}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
