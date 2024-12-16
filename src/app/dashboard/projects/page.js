import DashboardHome from '@/components/dashboard/dashboardHome/DashboardHome'
import DashboardHomeHeader from '@/components/dashboard/dashboardHome/DashboardHomeHeader'
import { DatePicker, Pagination } from 'antd'
import Link from 'next/link'
import React from 'react'
import { CiCalendar, CiHome } from 'react-icons/ci'
import { FaSearch } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

export default function page() {
  return (
    <div className=" md:mx-0 ">
      {/* <DashboardHomeHeader></DashboardHomeHeader> */}
      {/* <DashboardHome></DashboardHome> */}

      <div className='md:mr-10 md:px-0 px-5 my-10'>
        <div className='my-10 flex items-center justify-between flex-wrap'>
          <div className='flex items-center gap-5 flex-wrap'>
            <button className='pb-3  text-xl font-semibold '>Projects on Progress <br /> <span className='block w-full bg-primaryBg h-2 mt-3 rounded-tl-lg rounded-tr-lg '></span></button>
            <button className='pb-3  text-xl font-semibold '>Complete Work </button>
          </div>
          <div>
            <div className='flex items-center gap-5'>
              {/* Date Picker and Search */}
              <div className="flex gap-5 items-center my-5">
                {/* Date Picker */}
                <div className="relative">
                  <DatePicker
                    // selected={selectedDate}
                    // onChange={handleDateChange}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Select a date"
                    className="py-2 px-4 md:min-w-48 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Search Input */}
                <div className="relative w-full max-w-sm">
                  <input
                    type="text"
                    // value={searchQuery}
                    // onChange={handleSearchChange}
                    placeholder="Search requests..."
                    className="py-2 px-4 w-full border border-gray-300 rounded-md pl-10"
                  />
                  <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                </div>
                <button className='min-h-12 min-w-12 flex items-center justify-center rounded-full bg-[#212721]'><FaSearch className=" text-white" /></button>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-5 bg-[#fcf3f3] p-5 rounded-lg border-red-400 border'>

          <div className='flex items-center gap-5 flex-wrap '>
            <img className='w-14 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
            <div>
              <h2 className='text-xl font-semibold'>12345</h2>
              <p className='flex items-center gap-2'><IoLocationSharp />Dhaka Bangladesh</p>
            </div>
          </div>
          <div className='pl-10 my-5'>
            <hr />
          </div>

          <div className='grid md:grid-cols-5  pl-10 mt-5'>
            <div className='md:col-span-4 col-span-5 flex justify-center flex-wrap items-center md:gap-48 gap-5'>
              <div>
                <h3 className='font-semibold mb-2'>Starting Date</h3>
                <p className='flex items-center gap-2'><CiCalendar className='text-2xl' />Dhaka Bangladesh</p>
              </div>
              <div>
                <h3 className='font-semibold mb-2'>Delivery Date</h3>
                <p className='flex items-center gap-2'><CiCalendar className='text-2xl' />Dhaka Bangladesh</p>
              </div>
              <div>
                <h3 className='font-semibold mb-2'>Project</h3>
                <p className='flex items-center gap-2'><CiHome className='text-2xl' />Dhaka Bangladesh</p>
              </div>
            </div>
            <div className='md:col-span-1 col-span-5 mt-5 md:mt-0'>
              <Link href={'/dashboard/projects/details'} className='py-3 w-full block text-center bg-yellow-300 font-semibold'>Project on Progress</Link>
            </div>
          </div>


        </div>

        <div className='mt-5 bg-[#fcf3f3] p-5 rounded-lg border-red-400 border'>

          <div className='flex items-center gap-5 flex-wrap '>
            <img className='w-14 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
            <div>
              <h2 className='text-xl font-semibold'>12345</h2>
              <p className='flex items-center gap-2'><IoLocationSharp />Dhaka Bangladesh</p>
            </div>
          </div>
          <div className='pl-10 my-5'>
            <hr />
          </div>

          <div className='grid md:grid-cols-5  pl-10 mt-5'>
            <div className='md:col-span-4 col-span-5 flex justify-center flex-wrap items-center md:gap-48 gap-5'>
              <div>
                <h3 className='font-semibold mb-2'>Starting Date</h3>
                <p className='flex items-center gap-2'><CiCalendar className='text-2xl' />Dhaka Bangladesh</p>
              </div>
              <div>
                <h3 className='font-semibold mb-2'>Delivery Date</h3>
                <p className='flex items-center gap-2'><CiCalendar className='text-2xl' />Dhaka Bangladesh</p>
              </div>
              <div>
                <h3 className='font-semibold mb-2'>Project</h3>
                <p className='flex items-center gap-2'><CiHome className='text-2xl' />Dhaka Bangladesh</p>
              </div>
            </div>
            <div className='md:col-span-1 col-span-5 mt-5 md:mt-0'>
              <Link href={'/dashboard/projects/details'} className='py-3 w-full block text-center bg-yellow-300 font-semibold'>Project on Progress</Link>
            </div>
          </div>


        </div>

        <div className='mt-5 bg-[#fcf3f3] p-5 rounded-lg border-red-400 border'>

          <div className='flex items-center gap-5 flex-wrap '>
            <img className='w-14 rounded-full' src="/image/Dashboard/userImage.png" alt="" />
            <div>
              <h2 className='text-xl font-semibold'>12345</h2>
              <p className='flex items-center gap-2'><IoLocationSharp />Dhaka Bangladesh</p>
            </div>
          </div>
          <div className='pl-10 my-5'>
            <hr />
          </div>

          <div className='grid md:grid-cols-5  pl-10 mt-5'>
            <div className='md:col-span-4 col-span-5 flex justify-center flex-wrap items-center md:gap-48 gap-5'>
              <div>
                <h3 className='font-semibold mb-2'>Starting Date</h3>
                <p className='flex items-center gap-2'><CiCalendar className='text-2xl' />Dhaka Bangladesh</p>
              </div>
              <div>
                <h3 className='font-semibold mb-2'>Delivery Date</h3>
                <p className='flex items-center gap-2'><CiCalendar className='text-2xl' />Dhaka Bangladesh</p>
              </div>
              <div>
                <h3 className='font-semibold mb-2'>Project</h3>
                <p className='flex items-center gap-2'><CiHome className='text-2xl' />Dhaka Bangladesh</p>
              </div>
            </div>
            <div className='md:col-span-1 col-span-5 mt-5 md:mt-0'>
              <Link href={'/dashboard/projects/details'} className='py-3 w-full block text-center bg-yellow-300 font-semibold'>Project on Progress</Link>
            </div>
          </div>


        </div>

      

      </div>
      <div className='flex items-center justify-between p-5'>
        <h2 className='font-semibold'>SHOWING 1-12 OF 250</h2>
        <div className='flex items-center justify-end'>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>

    </div>
  )
}
