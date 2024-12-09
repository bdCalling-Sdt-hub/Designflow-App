import React from 'react'
import { SlLocationPin } from "react-icons/sl";


export default function Notification() {
  return (
    <div className="mx-10 py-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
            <img className="w-20" src="/image/Dashboard/notification-User.png" alt="" />
            <div >
                <h2 className="text-xl font-semibold mb-2">Richard Co.</h2>
                <p className="flex items-center gap-2"><SlLocationPin /> Dhaka Bangladesh </p>
            </div>
        </div>
        <button className="py-3 px-10 bg-[#ffe102] font-semibold"> Pending Work </button>
      </div>
      <div className="my-10"> 
      <h2 className="text-xl font-semibold mb-2">Employee Details</h2>
      </div>
    </div>
  )
}
