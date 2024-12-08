"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <div className="md:w-[78%] w-[100%] z-[9999999999] bg-white p-2 mx-auto flex justify-between items-center  fixed top-0 left-0 right-0  ">
        {/* <Link href={"/"}>
          <img className="w-14 h-14" src="/image/Login_logo.png" alt="Logo" />
        </Link> */}
        <span></span>
        <ul
          className={`md:relative top-[70px] px-3 md:px-0 md:top-0 bg-white w-full md:w-auto left-0 absolute items-center justify-center gap-14 ${
            isMenuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <li className="my-5">
            <Link href={"/dashboard"} className={`${pathname === "/dashboard" ? "active" : ""}`}>
              Home
            </Link>
          </li>
          <li className="my-5">
            <Link href={"/"}>About</Link>
          </li>
          <li className="my-5">
            <Link href={"/"}>Service</Link>
          </li>
          <li className="my-5">
            <Link href={"/"}>Portfolio</Link>
          </li>
          <li className="my-5">
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
        <div className="flex justify-between ">
          <div className="flex items-center md:gap-5 gap-3">
            <button className="py-3 md:px-10 px-5 font-semibold rounded-md text-white bg-[#ea733c]">
                Request Service
            </button>
            <div className="w-14 h-14 bg-[#f1f4f0] rounded-full flex justify-center items-center cursor-pointer">
            <MdEmail className="text-xl" />

            </div>
            <img className="w-12 cursor-pointer" src="/image/Dashboard/userImage.png" alt="" />



            <div className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
