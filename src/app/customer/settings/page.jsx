import React from "react";

export default function Page() {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-lg">Personal info</h1>
        <p>Update your photo and personal details.</p>
      </div>

      <div className="bg-white rounded-lg ">
        <div className="flex gap-10 mb-5 p-4">
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
          <div className="p-4">
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
        <div></div>
      </div>

      <div className="bg-white mt-10 rounded-lg">
        <div className="p-4">
          <h1 className="font-semibold">Password</h1>
          <p>Please enter your current password to change your password.</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
