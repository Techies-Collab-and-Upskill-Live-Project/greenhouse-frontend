import React from "react";
import Image from "next/image";
import Avatar from "../../../../public/images/Avatar.png";
import { BsCloudUpload } from "react-icons/bs";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-lg">Personal info</h1>
        <p>Update your photo and personal details.</p>
      </div>

      <div className="bg-white rounded-lg mt-10">
        <div className="flex gap-10 mb-5 px-5 pt-5 ">
          <div className="flex-1">
            <label className="mb-3 " htmlFor="firstname">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              className="input"
              placeholder="John"
            />
          </div>
          <div className="flex-1 ">
            <label className="mb-3 " htmlFor="lastname">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              className="input"
              placeholder="Doe"
            />
          </div>
          {/* <div></div> */}
        </div>
        <div>
          <div className="px-5">
            <label className="mb-3 " htmlFor="lastname">
              Email address
            </label>
            <input
              type="text"
              id="lastname"
              className="input"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="pb-10 flex flex-col pt-6 lg:flex-row gap-6 p-5">
          <div className="w-[64px] h-[64px]">
            <Image src={Avatar} alt="image picture of the person" />
          </div>
          <div className="text_box rounded-lg w-full h-[126px] flex flex-col items-center justify-center ">
            <div className="text_box-sm w-[40px] h-[40px] rounded-lg flex items-center justify-center">
              <BsCloudUpload />
            </div>
            <p className="text-[12px] font-normal text-center">
              <span className="font-semibold">
                Click to upload or drag and drop
              </span>{" "}
              <br /> SVG, PNG,JPG or GIF (max. 800x400px)
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-end justify-end gap-4 p-4">
          <Button css={`text_box-sm text-[#000000]`}>Cancel</Button>
          <Button css={`bg-forest-green-800`}>Save changes</Button>
        </div>
      </div>

      <div className=" mt-10">
        <h1 className="font-semibold text-lg">Password</h1>
        <p className="mb-6">
          Please enter your current password to change your password.
        </p>
        <hr />
      </div>
      <div className="bg-white mt-10 rounded-lg p-5">
        <div className="grid grid-cols-1 md:grid-cols-[45fr,55fr] lg:grid-cols-[45fr, 55fr] mb-4">
          <div className="mb-4">
            <p className="font-semibold">Current password</p>
          </div>
          <div className="w-full">
            <div className="flex w-full border-2  border-[#D0D5DD] rounded-md">
              <div className="">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-20 px-4 py-1 h-10 bg-transparent border-2 border-[#D0D5DD] "
                  placeholder="******"
                />
              </div>
              <input
                type="text"
                className="py-3 px-2 flex-grow input border-none"
                placeholder="ewherheakpesiri@27"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-[45fr,55fr] lg:grid-cols-[45fr, 55fr] mb-4 py-8">
          <div className="mb-4">
            <p className="font-semibold">New password</p>
          </div>
          <div className="w-full">
            <input
              type="text"
              className="py-3 px-2 flex-grow input mb-1"
              placeholder="*********"
            />
            <p className="font-light text-[13px]">
              Your new password must be more than 8 characters
            </p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-[45fr,55fr] lg:grid-cols-[45fr, 55fr] mb-4 py-8">
          <div className="mb-4">
            <p className="font-semibold"> Confirm new password</p>
          </div>
          <div className="w-full">
            <div className="w-full">
              <input
                type="text"
                className="py-3 px-2 flex-grow input mb-1"
                placeholder="*********"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-end justify-end gap-4 p-4">
          <Button css={`text_box-sm text-[#000000]`}>Cancel</Button>
          <Button css={`bg-forest-green-800`}>Update password</Button>
        </div>
      </div>
    </div>
  );
}
