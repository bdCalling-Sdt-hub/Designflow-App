'use client'
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

export default function page() {

  const router = useRouter(); // Initialize useRouter

  const handleOnClick = (e) => {
    e.preventDefault();
    router.push('/dashboard/home'); // Programmatically navigate to the target page
  };


  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div className="lg:p-20 sm:p-10 p-5">
        <form>
          <div>
            <img
              className="w-20 h-20 mb-10"
              src="/image/Login_logo.png"
              alt="logo_image"
              width={192}
              height={192}
            />

            <h2 className="text-4xl font-bold">Hello, Welcome!</h2>
            <p className="my-5 font-semibold">
              Please Enter Your Details Below to Continue
            </p>

            <label>
              <span className="mb-2 block">Your email</span>
              <div className="flex items-center border-b-2 rounded-md bg-secondaryBg border-gray-300">
                <FaUser className="text-gray-600 mr-2 mx-3" /> {/* User Icon */}
                <input
                  className="p-2 w-full bg-transparent focus:border-primaryBg focus:border-0 active:border-0"
                  placeholder="Your email"
                  type="email"
                />
              </div>
            </label>

            <label className="block mt-5">
              <span className="mb-2 block">Password</span>
              <div className="flex items-center border-b-2 rounded-md bg-secondaryBg border-gray-300">
                <FaLock className="text-gray-600 mx-3 " /> {/* Lock Icon */}
                <input
                  className="p-2 w-full bg-transparent focus:border-primaryBg focus:border-0 active:border-0"
                  placeholder="Your Password"
                  type="password"
                />
              </div>
            </label>

            <div className="flex items-center justify-between">
              <div className="flex items-center my-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Default checkbox
                </label>
              </div>
              <button> Forgot password?</button>
            </div>
          </div>

          <button onClick={handleOnClick} className="bg-primaryBg text-white w-full p-2 my-3 rounded-md">
            Login
          </button>

          <p className="lg:py-10 py-5 text-center">
            Don’t have an account?{" "}
            <Link href={'/register'} className="underline font-semibold cursor-pointer">
              Sign up
            </Link>
          </p>

          <div className="flex items-center justify-between">
            <span className="w-[40%] h-[2px] bg-primaryBg block"></span>
            <h2>Or login with</h2>
            <span className="w-[40%] h-[2px] bg-primaryBg block"></span>
          </div>
          <div className="w-16 cursor-pointer h-16 mx-auto mt-10 rounded-full flex justify-center items-center bg-secondaryBg">
            <img
              className="w-12 h-12 p-3"
              src="/image/google.png"
              alt="google Logo"
            />
          </div>
        </form>
      </div>
      <div className="lg:block hidden">
        <img className="h-full" src="/image/Login-pageBanner-image.png" alt="login Banner" />
      </div>
    </div>
  );
}
