import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import Link from "next/link"; 

export default function page() {
  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div className="lg:p-20 sm:p-10 p-5 ">
        <form>
          <div>
            <img
              className="w-20 h-20 mb-10"
              src="/image/Login_logo.png"
              alt="logo_image"
              width={192}
              height={192}
            />

            <h2 className="text-4xl font-bold">Create an Account</h2>
            <p className="my-5 font-semibold">
              Hello there, Let’s start Your Design Journey—Let’s Bring Your
              Vision to Life.
            </p>

            <label>
              <span className="mb-2 block">Name</span>
              <div className="flex items-center border-b-2 rounded-md bg-secondaryBg border-gray-300">
                <FaUser className="text-gray-600 mr-2 mx-3" /> {/* User Icon */}
                <input
                  className="p-2 w-full bg-transparent focus:border-primaryBg focus:border-0 active:border-0"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
            </label>

            <label className="block mt-5">
              <span className="mb-2 block">Email</span>
              <div className="flex items-center border-b-2 rounded-md bg-secondaryBg border-gray-300">
                <MdEmail className="text-gray-600 mx-3 " /> {/* Lock Icon */}
                <input
                  className="p-2 w-full bg-transparent focus:border-primaryBg focus:border-0 active:border-0"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
            </label>

            <label className="block mt-5">
              <span className="mb-2 block">Phone Number</span>
              <div className="flex items-center border-b-2 rounded-md bg-secondaryBg border-gray-300">
                <IoCall className="text-gray-600 mx-3 " /> {/* Lock Icon */}
                <input
                  className="p-2 w-full bg-transparent focus:border-primaryBg focus:border-0 active:border-0"
                  placeholder="Enter Phone name"
                  type="number"
                />
              </div>
            </label>

            <label className="block mt-5">
              <span className="mb-2 block">Address</span>
              <div className="flex items-center border-b-2 rounded-md bg-secondaryBg border-gray-300">
                <IoLocation className="text-gray-600 mx-3 " /> {/* Lock Icon */}
                <input
                  className="p-2 w-full bg-transparent focus:border-primaryBg focus:border-0 active:border-0"
                  placeholder="Type Location"
                  type="text"
                />
              </div>
            </label>

            <label className="block mt-5">
              <span className="mb-2 block">Password</span>
              <div className="flex items-center border-b-2 rounded-md bg-secondaryBg border-gray-300">
                <IoMdLock className="text-gray-600 mx-3 " /> {/* Lock Icon */}
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
                  I accept the Terms of Service and Privacy Policy.
                </label>
              </div>
              <Link href={'/forgot-password'}> Forgot password?</Link>
            </div>
          </div>

          <button className="bg-primaryBg text-white w-full p-2 my-3 rounded-md">
            Sign Up
          </button>

          <p className="lg:py-10 py-5 text-center">
            Already have an account ?
            <Link href={'/login'} className="underline font-semibold cursor-pointer ml-2">
               Login
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
        <img className="h-full" src="/image/register-accout.png" alt="login Banner" />
      </div>
    </div>
  );
}
