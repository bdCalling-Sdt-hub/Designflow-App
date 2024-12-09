"use client";  // Ensures client-side rendering

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { HiOutlineViewGrid, HiViewGrid } from "react-icons/hi";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoMdReturnRight } from "react-icons/io";
import { usePathname } from "next/navigation"; // Correct hook for path

export default function DashboardSidebar() {
  const [isClient, setIsClient] = useState(false); // Track if we're on the client side
  const pathname = usePathname(); // Initialize usePathname to get current path

  // Set isClient to true once the component has mounted
  useEffect(() => {
    setIsClient(true); // Mark client-side
  }, []);

  // Prevent rendering until client-side is confirmed
  if (!isClient) {
    return null; // Or you can return a loading spinner here
  }

  return (
    <div className="bg-[#232a20] w-[12.3vw] min-h-screen md:block hidden">
      <div className="p-3 bg-[#a5a8a6]">
        <Link href="/dashboard">
        <img className="w-14 mx-auto" src="/image/Login_logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="my-10">
        <ul>
          <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/dashboard/home" ? "bg-[#1f2521] text-white" : "text-white"
            }`} // Conditional class for active route
            href="/dashboard/home"
          >
            <HiViewGrid className="text-xl" /> Dashboard
          </Link>
          <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/dashboard/chat" ? "bg-[#1f2521] text-white" : "text-white"
            }`} // Conditional class for active route
            href="/dashboard/chat"
          >
            <IoChatbubbleEllipsesSharp className="text-xl" /> Chat
          </Link>
          <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/projects" ? "bg-[#1f2521] text-white" : "text-white"
            }`} // Conditional class for active route
            href="/projects"
          >
            <HiOutlineViewGrid className="text-xl" /> Projects
          </Link>
          <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/settings" ? "bg-[#1f2521] text-white" : "text-white"
            }`} // Conditional class for active route
            href="/settings"
          >
            <CiSettings className="text-xl" /> Settings
          </Link>
        </ul>
        <div className="text-red-600 px-6 flex items-center gap-2 font-semibold cursor-pointer">
          Logout <IoMdReturnRight />
        </div>
      </div>
    </div>
  );
}
