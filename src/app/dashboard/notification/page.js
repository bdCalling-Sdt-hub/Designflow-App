 
import DashboardHomeHeader from '@/components/dashboard/dashboardHome/DashboardHomeHeader'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";




export default function page() {
  return (
    <div className="md:ml-5 mx-5 md:mx-0">
        <DashboardHomeHeader></DashboardHomeHeader>
        <div>
            <Link href={'/dashboard/home'} className='text-2xl font-semibold flex items-center justify-start gap-3 my-10'><FaArrowLeft /> Notification</Link>
        </div>
        <div className="md:mr-5 mx-5 md:mx-0">
            <Link href={'/dashboard/notification/:id'} className="flex items-center gap-5 border-2 border-gray-600 rounded p-5 mb-2">
                <div className="p-3 border-2 rounded-full ">
                    <div className="relative">
                    <IoMdNotificationsOutline  className="text-3xl " />
                    <span className="block h-3 w-3 bg-black absolute top-1 right-1 rounded-full"></span>
                    </div>
                </div>
                <div>
                    <h2> You have a new message from Luke.</h2>
                    <span>2 min ago</span>
                </div>
            </Link>
            <Link href={'/dashboard/notification/:id'} className="flex items-center gap-5 border-2 border-gray-600 rounded p-5 mb-2">
                <div className="p-3 border-2 rounded-full ">
                    <div className="relative">
                    <IoMdNotificationsOutline  className="text-3xl " />
                    <span className="block h-3 w-3 bg-black absolute top-1 right-1 rounded-full"></span>
                    </div>
                </div>
                <div>
                    <h2> You have a new message from Luke.</h2>
                    <span>2 min ago</span>
                </div>
            </Link>
            <Link href={'/dashboard/notification/:id'} className="flex items-center gap-5 border-2 border-gray-600 rounded p-5 mb-2">
                <div className="p-3 border-2 rounded-full ">
                    <div className="relative">
                    <IoMdNotificationsOutline  className="text-3xl " />
                    <span className="block h-3 w-3 bg-black absolute top-1 right-1 rounded-full"></span>
                    </div>
                </div>
                <div>
                    <h2> You have a new message from Luke.</h2>
                    <span>2 min ago</span>
                </div>
            </Link>
        </div>
    </div>
  )
}
