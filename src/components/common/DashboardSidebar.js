"use client";  // Ensures client-side rendering

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiDollar, CiLogout, CiSettings } from "react-icons/ci";
import { HiOutlineViewGrid, HiUserAdd, HiViewGrid } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname } from "next/navigation"; // Correct hook for path
import { RiMenuUnfoldFill } from "react-icons/ri";
import { FaUser, FaUsers } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { LuWallet } from "react-icons/lu";
import { AiOutlineMenuFold } from "react-icons/ai"; 
import { MdOutlineCancel } from "react-icons/md";

export default function DashboardSidebar() {
  const [isClient, setIsClient] = useState(false); // Track if we're on the client side
  const [show, setShow] = useState(false); // State for mobile menu toggle
  const pathname = usePathname(); // Initialize usePathname to get current path

  // Set isClient to true once the component has mounted
  useEffect(() => {
    setIsClient(true); // Mark client-side
  }, []);

  // Prevent rendering until client-side is confirmed
  if (!isClient) {
    return null; // Or you can return a loading spinner here
  }

  const handleShowMenu = () => {
    setShow(!show);
  };

  return (
    <div className="bg-[#232a20] min-h-screen ">
      {/* Menu Button for Mobile */}

      {
        !show &&
        <div onClick={handleShowMenu} className="px-2 py-2 absolute top-5 left-0 bg-[#1f2521] md:hidden">
          <AiOutlineMenuFold

            className="text-3xl font-semibold text-white "
          />
        </div>
      }

      <div>
        {/* Logo Section */}
        <div className="p-3 bg-[#a5a8a6] md:block hidden">
          <Link href="/dashboard">
            <img className="w-14 mx-auto" src="/image/Login_logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Sidebar Links - Visible on large screens */}
        <div className={`md:block ${show ? "block" : "hidden"} my-10 relative `}>
          <div onClick={handleShowMenu} className="px-2 py-[5px] absolute -top-10 right-0 bg-[#1f2521] md:hidden">
            <MdOutlineCancel
              className="text-3xl font-semibold text-white "
            />
          </div>
          <ul>
            <Link 
              onClick={handleShowMenu}
              className={`mb-5 flex items-center gap-2 md:px-6 px-2 py-2 ${pathname === "/dashboard/home" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"}`}
              href="/dashboard/home"
            >
              <HiViewGrid className="text-xl" /> Dashboard
            </Link>

            <Link 
              onClick={handleShowMenu}
              className={`mb-5 flex items-center gap-2 md:px-6 px-2 py-2 ${pathname === "/dashboard/servicerequests" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"}`}
              href="/dashboard/servicerequests"
            >
              <RiMenuUnfoldFill className="text-xl" /> Service Requests
            </Link>

            <Link 
              onClick={handleShowMenu}
              className={`mb-5 flex items-center gap-2 md:px-6 px-2 py-2 ${pathname === "/dashboard/chat" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"}`}
              href="/dashboard/chat"
            >
              <BsFillChatDotsFill className="text-xl" /> Chat
            </Link>

            <Link 
              onClick={handleShowMenu}
              className={`mb-5 flex items-center gap-2 md:px-6 px-2 py-2 ${pathname === "/dashboard/earning" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"}`}
              href="/dashboard/earning"
            >
              <CiDollar className="text-xl" /> Earning
            </Link>

            <Link 
              onClick={handleShowMenu}
              className={`mb-5 flex items-center gap-2 md:px-6 px-2 py-2 ${pathname === "/dashboard/projects" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"}`}
              href="/dashboard/projects"
            >
              <HiOutlineViewGrid className="text-xl" /> Projects
            </Link>

            <Link 
              onClick={handleShowMenu}
              className={`mb-5 flex items-center gap-2 md:px-6 px-2 py-2 ${pathname === "/dashboard/designers" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"}`}
              href="/dashboard/designers"
            >
              <FaUsers className="text-xl" /> Designers
            </Link>

            <Link 
              onClick={handleShowMenu}
              className={`mb-5 flex items-center gap-2 md:px-6 px-2 py-2 ${pathname === "/dashboard/clientlist" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"}`}
              href="/dashboard/clientlist"
            >
              <FaUser className="text-xl" /> Users
            </Link>

            <Link 
              onClick={handleShowMenu}
              className={`mb-5 flex items-center gap-2 md:px-6 px-2 py-2 ${pathname === "/dashboard/services" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"}`}
              href="/dashboard/services"
            >
              <HiOutlineViewGrid className="text-xl" /> Services
            </Link>

            <Link 
              onClick={handleShowMenu}
              className={`mb-5 flex items-center gap-2 md:px-6 px-2 py-2 ${pathname === "/dashboard/makeadmin" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"}`}
              href="/dashboard/makeadmin"
            >
              <HiUserAdd className="text-xl" /> Make Admin
            </Link>

            <Link 
              onClick={handleShowMenu}
              className={`mb-5 flex items-center gap-2 md:px-6 px-2 py-2 ${pathname === "/dashboard/managecoins" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"}`}
              href="/dashboard/managecoins"
            >
              <LuWallet className="text-xl" /> Manage Coins
            </Link>

            <Link 
              onClick={handleShowMenu}
              className={`mb-5 flex items-center gap-2 md:px-6 px-2 py-2 ${pathname === "/dashboard/setting" ? "bg-[#637f5c] border-l-4 border-gray-50 text-white" : "text-white"}`}
              href="/dashboard/setting"
            >
              <IoSettingsOutline className="text-xl" /> Setting
            </Link>

          </ul>

          <div 
            onClick={handleShowMenu} className="text-red-600 md:px-6 px-2 mt-20 flex items-center gap-2 font-semibold cursor-pointer">
            <CiLogout className="text-xl font-bold" /> Logout
          </div>
        </div>
      </div>
    </div>
  );
}
