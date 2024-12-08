"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaLock } from "react-icons/fa";

export default function page() {



  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="lg:p-20 sm:p-10 p-5">
          <form>
            <div>
              <img
                className="w-24 h-24 mb-20"
                src="/image/Login_logo.png"
                alt="logo_image"
                width={192}
                height={192}
              />

              <h2 className="text-4xl font-bold">Verify Email</h2>
              <p className="my-5 font-semibold">
                Please check your email and enter the code
              </p>




            </div>

            <button className="bg-primaryBg text-white w-full p-2  mt-5 rounded-md">
              Verify
            </button>

            <p className="py-10 text-center flex justify-between">
              Don’t have an account?{" "}
              <span className="underline font-semibold cursor-pointer">
                Resend OTP
              </span>
            </p>
          </form>
        </div>
        <div className="lg:block hidden">
          <Image className="h-full" src="/image/Verify-otp.png" alt="login Banner" />
        </div>
      </div>
    </div>
  );
}
