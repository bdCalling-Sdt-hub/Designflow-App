"use client";  // Ensures client-side rendering

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiDollar, CiLogout, CiSettings } from "react-icons/ci";
import { HiOutlineViewGrid, HiUserAdd, HiViewGrid } from "react-icons/hi";
import { IoChatbubbleEllipsesSharp, IoSettingsOutline } from "react-icons/io5";
import { IoMdReturnRight } from "react-icons/io";
import { usePathname } from "next/navigation"; // Correct hook for path
import { RiMenuUnfoldFill } from "react-icons/ri";
import { FaUser, FaUsers } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { LuWallet } from "react-icons/lu";



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
              pathname === "/dashboard/home" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"
            }`} // Conditional class for active route
            href="/dashboard/home"
          >
            <HiViewGrid className="text-xl" /> Dashboard
          </Link>

          <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/dashboard/servicerequests" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"
            }`} // Conditional class for active route
            href="/dashboard/servicerequests"
          >
            <RiMenuUnfoldFill className="text-xl" /> Service Requests
          </Link>

          <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/dashboard/chat" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"
            }`} // Conditional class for active route
            href="/dashboard/chat"
          >
            <BsFillChatDotsFill className="text-xl" /> chat
          </Link>

          <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/dashboard/earning" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"
            }`} // Conditional class for active route
            href="/dashboard/earning"
          >
            <CiDollar className="text-xl" /> Earning
          </Link>

          <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/dashboard/projects" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"
            }`} // Conditional class for active route
            href="/dashboard/projects"
          >
            <HiOutlineViewGrid className="text-xl" /> Projects
          </Link>

          <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/dashboard/designers" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"
            }`} // Conditional class for active route
            href="/dashboard/designers"
          >
            <FaUsers className="text-xl" /> Designers
          </Link>

          <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/dashboard/clientlist" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"
            }`} // Conditional class for active route
            href="/dashboard/clientlist"
          >
            <FaUser className="text-xl" /> Users
          </Link>

          <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/dashboard/services" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"
            }`} // Conditional class for active route
            href="/dashboard/services"
          >
            <HiOutlineViewGrid className="text-xl" /> Services
          </Link>

          <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/dashboard/makeadmin" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"
            }`} // Conditional class for active route
            href="/dashboard/makeadmin"
          >
            <HiUserAdd className="text-xl" /> Make Admin
          </Link>

          <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/dashboard/managecoins" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"
            }`} // Conditional class for active route
            href="/dashboard/managecoins"
          >
            <LuWallet className="text-xl" /> Manage Coins
          </Link>

          <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/dashboard/setting" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"
            }`} // Conditional class for active route
            href="/dashboard/setting"
          >
            <IoSettingsOutline className="text-xl" /> Setting
          </Link>



          {/* <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/dashboard/chat" ? "bg-[#9c1818] text-white" : "text-white"
            }`} // Conditional class for active route
            href="/dashboard/chat"
          >
            <IoChatbubbleEllipsesSharp className="text-xl" /> Chat
          </Link>
          <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/projects" ? "bg-[#9c1818] text-white" : "text-white"
            }`} // Conditional class for active route
            href="/projects"
          >
            <HiOutlineViewGrid className="text-xl" /> Projects
          </Link>
          <Link
            className={`mb-5 flex items-center gap-2 px-6 py-2 ${
              pathname === "/settings" ? "bg-[#9c1818] text-white" : "text-white"
            }`} // Conditional class for active route
            href="/settings"
          >
            <CiSettings className="text-xl" /> Settings
          </Link> */}



        </ul>
        <div className="text-red-600 px-6 mt-20 flex items-center gap-2 font-semibold cursor-pointer">
           <CiLogout className="text-xl font-bold" /> Logout
        </div>
      </div>
    </div>
  );
}
