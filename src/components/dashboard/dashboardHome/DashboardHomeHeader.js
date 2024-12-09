"use client"
import {React , useState} from "react";
import { IoNotifications } from "react-icons/io5";




export default function DashboardHomeHeader() {


    const [toggleDrop , setToggleDrop] = useState(false)

    const  handleShowDropdown = ()=>{
        setToggleDrop(!toggleDrop)
    }


  return (
    <div className="bg-[#1f2521] p-5 rounded-md flex items-center justify-between text-white">
      <div>
        <h2 className="text-3xl font-semibold mb-2">Welcome, Anika </h2>
        <p>Have a nice day</p>
      </div>
      <div onClick={handleShowDropdown} className="flex items-center cursor-pointer gap-2">
        <div>
          <IoNotifications className="text-3xl " />
        </div>
        <div>
            <img src="/image/Dashboard/user_Dropdown.png" alt="user Image"/>
        </div>
      </div>
      {
        toggleDrop && 
        <div className=" absolute top-24 bg-[#1f2521] right-5 py-5 px-10 rounded-md">
          <p>Profile</p>
        </div>
      }


    </div>
  );
}
