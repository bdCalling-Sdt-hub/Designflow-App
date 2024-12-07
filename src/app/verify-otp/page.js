"use client";
import { useRef, useState } from "react";
import { FaLock } from "react-icons/fa";

export default function page() {
  const [otp, setOtp] = useState(Array(6).fill("")); // Array with 6 empty strings
  const inputRefs = useRef([]); // Array of refs for each input field

  const handleKeyDown = (e) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      const index = inputRefs.current.indexOf(e.target);
      if (index > 0) {
        setOtp((prevOtp) => [
          ...prevOtp.slice(0, index - 1),
          "",
          ...prevOtp.slice(index)
        ]);
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleInput = (e) => {
    const { target } = e;
    const index = inputRefs.current.indexOf(target);
    if (target.value) {
      setOtp((prevOtp) => [
        ...prevOtp.slice(0, index),
        target.value,
        ...prevOtp.slice(index + 1)
      ]);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
      return;
    }
    const digits = text.split("");
    setOtp(digits);
  };

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

              <h2 className="text-4xl font-bold">Verify Email</h2>
              <p className="my-5 font-semibold">
                Please check your email and enter the code
              </p>

              <div id="otp-form" className="flex justify-between gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                    onPaste={handlePaste}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="shadow-xs flex w-[14%] items-center justify-between border-b-2 border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5"
                  />
                ))}
                {/* You can conditionally render a submit button here based on otp length */}
              </div>
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
        <div>
          <img src="/image/Verify-otp.png" alt="login Banner" />
        </div>
      </div>
    </div>
  );
}
