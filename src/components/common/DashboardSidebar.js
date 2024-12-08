import Link from 'next/link'
import React from 'react'
import { CiSettings } from 'react-icons/ci';
import { HiOutlineViewGrid, HiViewGrid } from "react-icons/hi";
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';
import { IoMdReturnRight } from "react-icons/io";


export default function DashboardSidebar() {
  return (
    <div className=' bg-[#232a20] w-[12.3vw] top-0 md:block hidden'>
        <div className='p-3 bg-[#a5a8a6]'>
            <img  className='w-14 mx-auto' src="/image/Login_logo.png" alt="" />
        </div>
      <div className='my-10'>
        <ul className=''>
            <Link className='mb-10 flex items-center gap-2 px-6  text-white  ' href={'/'}><HiViewGrid className='text-xl' /> Explore Dashboard</Link>
            <Link className='mb-10 flex items-center gap-2 px-6  text-white  ' href={'/'}><IoChatbubbleEllipsesSharp className='text-xl' /> Chat</Link>
            <Link className='mb-10 flex items-center gap-2 px-6  text-white  ' href={'/'}><HiOutlineViewGrid className='text-xl' /> Projects</Link>
            <Link className='mb-10 flex items-center gap-2 px-6  text-white  ' href={'/'}><CiSettings className='text-xl' /> Setting</Link>  
        </ul>
        <div className='text-red-600 px-6 flex items-center gap-2 font-semibold cursor-pointer'>
          Logout <IoMdReturnRight />
        </div>
      </div>
    </div>
  )
}
