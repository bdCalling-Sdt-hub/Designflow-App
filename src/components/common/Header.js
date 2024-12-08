"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import react icons

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="md:w-[80%] w-[90%] mt-3 z-[9999999999] bg-white p-2 mx-auto flex justify-between items-center  fixed top-0 left-0 right-0  ">
      <Link href={"/"}>
        <img className="w-14 h-14" src="/image/Login_logo.png" alt="Logo" />
      </Link>
      <ul
        className={`md:relative top-20 px-3 md:px-0 md:top-0 bg-white w-full md:w-auto left-0 absolute items-center justify-center gap-14 ${
          isMenuOpen ? "block" : "hidden"
        } md:flex`}
      >
        <li className="my-5">
          <Link href={"/"} className={`${pathname === '/' ? 'active' : ''}`}>Home</Link>
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
      <div className="flex justify-between">
        {/* <ul
          className={`md:relative md:hidden  top-20 md:top-0 bg-white w-full md:w-auto left-0 absolute items-center justify-center gap-14 ${
            isMenuOpen ? "hidden" : "hidden"
          } md:flex`}
        >
          <li className="my-5">
            <Link href={"/"}>Home</Link>
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
        </ul> */}
        <div className="flex items-center gap-2">
          <button className="py-3 px-10 font-semibold rounded-md text-white bg-[#ea733c]">
            Login
          </button>
          <div className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>
    </div>
  );
}
