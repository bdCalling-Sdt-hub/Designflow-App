import Link from "next/link";
import React from "react";

export default function DashboardFooter() {


  
  return (
    <div className="bg-[#6e655c] py-10 md:py-20">
      <div className="md:w-[78%] w-[90%] mx-auto lg:grid grid-cols-4 gap-10">
        <div className="col-span-1">
          <img className="w-20 h-20" src="./image/Login_logo.png" alt="Logo" />
          <h2 className="text-2xl font-semibold text-white my-5">Designflow</h2>
          <p className="text-lime-50">
            Your trusted partner for personalized and professional interior
            design solutions. Transforming your vision into reality, one space
            at a time.
          </p>
        </div>
        <div className="col-span-3">
          <ul className="flex items-center md:gap-10 gap-5 text-white flex-wrap lg:mt-0 mt-10">
            <h2 className="text-2xl">Explore</h2>

            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Service</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Portfolio</Link>
            <Link href={"/"}>Contact</Link>
          </ul>
          <ul className="flex items-center md:gap-10 gap-5 text-white mt-10 flex-wrap">
            <h2 className="text-2xl">Support</h2>
            <Link href={"/"}>Terms & Condition</Link>
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>FAQ.s</Link>
          </ul>
        </div>
      </div>
      <div className="md:w-[78%] w-[90%] mx-auto">
        <hr className=" my-10" />
        <p className="text-lime-50">Copyright @2024. All Rights Reserved</p>
      </div>
    </div>
  );
}
