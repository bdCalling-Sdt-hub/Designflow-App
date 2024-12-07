import React from "react";
import { MdEmail } from "react-icons/md";

export default function page() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
        <div className="p-20 ">
          <form>
            <div>
              <img
                className="w-24 h-24 mb-20"
                src="/image/Login_logo.png"
                alt="logo_image"
                width={192}
                height={192}
              />

              <h2 className="text-4xl font-bold">Forgot Password</h2>
              <p className="my-5 font-semibold">
                Please enter your Email to reset your password.
              </p>

              <label className="block mt-5">
                <span className="mb-2 block">Email</span>
                <div className="flex items-center border-b-2 rounded-md bg-secondaryBg border-gray-300">
                  <MdEmail className="text-gray-600 mx-3 " /> {/* Lock Icon */}
                  <input
                    className="p-2 w-full bg-transparent focus:border-primaryBg focus:border-0 active:border-0"
                    placeholder="Enter Email"
                    type="email"
                  />
                </div>
              </label>
            </div>

            <button className="bg-primaryBg text-white w-full p-2  mt-5 rounded-md">
              Login
            </button>
          </form>
        </div>
        <div>
          <img src="/image/Verify-otp.png" alt="login Banner" />
        </div>
      </div>
    </div>
  );
}
