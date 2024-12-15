"use client"
import { React, useState } from "react";
import { IoNotifications } from "react-icons/io5";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


export default function DashboardHomeHeader() {


  const [toggleDrop, setToggleDrop] = useState(false)

  const handleShowDropdown = () => {
    setToggleDrop(!toggleDrop)
  }


  return (
    <div className="bg-[#1f2521] p-5 rounded-md flex items-center justify-between text-white">
      <div>
        <h2 className="text-3xl font-semibold mb-2">Welcome, Anika </h2>
        <p>Have a nice day</p>
      </div>
      <div className="flex items-center cursor-pointer gap-2">
        <Link href="/dashboard/notification">

          <IoNotifications className="text-3xl" />

        </Link>
        <div onClick={handleShowDropdown} className="flex items-center gap-2">
          <img className="w-10 rounded-full" src="/image/Dashboard/userImage.png" alt="user Image" />
          {
            !toggleDrop ? <FaChevronDown /> : <FaChevronUp />
          }
        </div>
      </div>
      {
        toggleDrop &&
        <div className="z-[9999999] hover:bg-[#637f5c] hover:text-white hover:cursor-pointer absolute top-28 bg-[#1f2521] right-5 py-5 px-10 rounded-md">
          <Link href={'/dashboard/setting/personalinformation'} >Profile</Link>
        </div>
      }


    </div>
  );
}
