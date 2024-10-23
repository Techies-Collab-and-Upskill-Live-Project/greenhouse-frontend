"use client";
import React from "react";
import Button from "../Button";
import {
  useConfirmAccountModal,
  useConfirmRegisterModals,
} from "@/zustand/stores";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ConfirmModal() {
  const router = useRouter();
  const { closeModal, isOpen, activeModal } = useConfirmAccountModal(); // Access global state
  const confirm = useConfirmRegisterModals(); // Access global state
  // console.log(confirm);
  // const { isOpenModal } = useDoneAccountModal();

  const closeModalHandle = () => {
    confirm.closeModal();
  };

  const handleSubmit = () => {
    confirm.closeModal(), router.push("/vendor/dashboard");
  };

  return (
    <div className="min-h-screen z-50 fixed top-0 bottom-0 left-0 right-0">
      {confirm.isOpen && (
        <div className="fixed  bottom-0 top-0 left-0 w-full flex justify-center items-center bg-[#00000090] backdrop-blur-[3px]">
          <div className="flex items-center justify-center bg-white rounded-[25px] shadow-md z-10 max-w-[705px] h-2/3 relative">
            <button
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center absolute right-10 top-6"
              onClick={closeModalHandle}
            >
              &times;
            </button>
            <div className="px-32 py-16 flex items-center justify-center flex-col">
              <div className="flex items-center justify-center w-[255px] h-[255px]">
                <Image
                  width={500}
                  height={500}
                  quality={100}
                  src="/images/done.png"
                  alt="FAQ Illustration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-center text-[16px] font-normal mb-4 text-[#8D8484] hero-title">
                  Congratulations
                </h1>
                <p className="text-center text-[12px] font-light hero-title">
                  your store is setup
                </p>
              </div>

              <Button
                fn={handleSubmit}
                type="button"
                css="text-white bg-forest-green-500 w-full mt-6"
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
