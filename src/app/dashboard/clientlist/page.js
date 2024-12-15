import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { IoMdEye } from 'react-icons/io';

const Page = () => {
    return (
        <div className='mr-10'>
            <div className='flex justify-between items-center flex-wrap my-10'>
                <Link href={'/'} className='flex items-center gap-5 text-2xl font-semibold'><FaArrowLeft />Client List</Link>
                <div className='flex items-center gap-5'>
                    {/* Date Picker and Search */}
                    <div className="flex gap-5 items-center my-5">
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



            <div className="overflow-x-auto">
                <table className="min-w-full bg-white  border-gray-200 ">
                    <thead>
                        <tr className="text-left  text-sm font-semibold text-white bg-black">
                            <th className="px-4 py-4">#SL</th>
                            <th className="px-4 py-4">Provider Name</th>
                            <th className="px-4 py-4">Email</th>
                            <th className="px-4 py-4">Phone Number</th>
                            <th className="px-4 py-4">Time & Date</th>
                            <th className="px-4 py-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Row 1 */}
                        <tr className="text-sm py-2  border-gray-200">
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">John Doe</td>
                            <td className="px-4 py-2">john.doe@example.com</td>
                            <td className="px-4 py-2">+1 123-456-7890</td>
                            <td className="px-4 py-2">2024/12/14 - 10:00 AM</td>
                            <td className="px-4 py-2 text-center">
                                <Link href={'/dashboard/clientlist/1'} ><IoMdEye className='text-3xl' /></Link>
                            </td>
                        </tr>

                        {/* Row 2 */}
                        <tr className="text-sm  py-2 border-gray-200">
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">Jane Smith</td>
                            <td className="px-4 py-2">jane.smith@example.com</td>
                            <td className="px-4 py-2">+1 987-654-3210</td>
                            <td className="px-4 py-2">2024/12/15 - 2:00 PM</td>
                            <td className="px-4 py-2 text-center">
                                <Link href={'/dashboard/clientlist/1'} ><IoMdEye className='text-3xl' /></Link>
                            </td>
                        </tr>

                        {/* Row 3 */}
                        <tr className="text-sm py-2 border-gray-200">
                            <td className="px-4 py-2">3</td>
                            <td className="px-4 py-2">Richard Co.</td>
                            <td className="px-4 py-2">richard.co@example.com</td>
                            <td className="px-4 py-2">+1 555-555-5555</td>
                            <td className="px-4 py-2">2024/12/16 - 9:00 AM</td>
                            <td className="px-4 py-2 text-center">
                                <Link href={'/dashboard/clientlist/1'} ><IoMdEye className='text-3xl' /></Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Page;
