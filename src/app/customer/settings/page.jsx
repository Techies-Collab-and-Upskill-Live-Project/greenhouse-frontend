import React from "react";

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
        <div className="pb-10 ">
          
        </div>
      </div>

      <div className=" mt-10">
        <h1 className="font-semibold text-lg">Password</h1>
        <p>Please enter your current password to change your password.</p>
      </div>
      <div className="bg-white mt-10 rounded-lg p-5">
        <div>pass</div>
      </div>
    </div>
  );
}
