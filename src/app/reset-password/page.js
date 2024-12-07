import React from "react";
import { IoMdLock } from "react-icons/io";

export default function page() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="lg:p-20 sm:p-10 p-5 ">
          <form>
            <div>
              <img
                className="w-24 h-24 mb-20"
                src="/image/Login_logo.png"
                alt="logo_image"
                width={192}
                height={192}
              />

              <h2 className="text-4xl font-bold">Reset Password</h2>
              <p className="my-5 font-semibold">
              Your password must be 8-10 character long.
              </p>

              <label className="block mt-5">
                <span className="mb-2 block">New Password</span>
                <div className="flex items-center border-b-2 rounded-md bg-secondaryBg border-gray-300">
                  <IoMdLock className="text-gray-600 mx-3 " /> {/* Lock Icon */}
                  <input
                    className="p-2 w-full bg-transparent focus:border-primaryBg focus:border-0 active:border-0"
                    placeholder="New Password"
                    type="password"
                  />
                </div>
              </label>

              <label className="block mt-5">
                <span className="mb-2 block">Confirm Password</span>
                <div className="flex items-center border-b-2 rounded-md bg-secondaryBg border-gray-300">
                  <IoMdLock className="text-gray-600 mx-3 " /> {/* Lock Icon */}
                  <input
                    className="p-2 w-full bg-transparent focus:border-primaryBg focus:border-0 active:border-0"
                    placeholder="Confirm Password"
                    type="password"
                  />
                </div>
              </label>


            </div>

            <button className="bg-primaryBg text-white w-full p-2  mt-5 rounded-md">
            Reset
            </button>

             
          </form>
        </div>
        <div className="lg:block hidden">
          <img className="h-full" src="/image/Verify-otp.png" alt="login Banner" />
        </div>
      </div>
    </div>
  );
}
