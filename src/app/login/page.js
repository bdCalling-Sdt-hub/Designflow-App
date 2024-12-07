import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="p-20 ">
        <div>
          {/* <img
          className="w-48 h-48"
          src="../../../public/common/Login_logo.png" // Path from the 'public' folder
          alt="logo_image"
          width={192} // Specify width
          height={192} // Specify height
        /> */}

          <h2 className="text-4xl font-bold ">Hello,Welcome!</h2>
          <p className="my-5 font-semibold">
            Please Enter Your Details Below to Continue
          </p>
          <label>
            <span className="mb-2 block">Your email</span>
            <input
              className="p-2 w-full bg-secondaryBg focus:border-primaryBg focus:border-0 active:border-0"
              placeholder="Your email"
              type="text"
            />
          </label>
          <label className="block mt-5">
            <span className="mb-2 block">Password</span>
            <input
              className="p-2 w-full bg-secondaryBg focus:border-primaryBg focus:border-0 active:border-0"
              placeholder="Your Password"
              type="Password"
            />
          </label>
          <div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Default checkbox
              </label>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
