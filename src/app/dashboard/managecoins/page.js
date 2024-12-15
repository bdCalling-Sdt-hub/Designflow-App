import Link from 'next/link';
import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { FiPlus } from 'react-icons/fi';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const Page = () => {
    return (
        <div className='md:mr-10 md:px-0 px-5'>
            <div className="flex items-center justify-between gap-5 flex-wrap my-10">
                {/* Select Dropdown */}
                <select
                    name=""
                    id=""
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-48"
                >
                    <option value="offer">Offer 1</option>
                    <option value="offer">Offer 2</option>
                    <option value="offer">Offer 3</option>
                </select>

                {/* Create Credit Button */}
                <div>
                    <Link href={'/dashboard/managecoins/createcredit'} className="flex items-center gap-2 bg-[#637f5c] text-white py-2 px-6 rounded-md hover:bg-[#4c6f3c] transition duration-200 ease-in-out">
                        Create Credit <FiPlus />
                    </Link>
                </div>
            </div>
            <div className='w-[100%]  overflow-x-auto'>
                <table className="min-w-full my-10">
                    <thead>
                        <tr className="text-left">
                            <th className="py-3 px-4">S.No</th>
                            <th className="py-3 px-4">Credit Code</th>
                            <th className="py-3 px-4">Discount</th>
                            <th className="py-3 px-4">Coin Count</th>
                            <th className="py-3 px-4">Validity Date</th>
                            <th className="py-3 px-4">Targeted Payment</th>
                            <th className="py-3 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example Row 1 */}
                        <tr className="">
                            <td className="py-3 px-4">1</td>
                            <td className="py-3 px-4">AB123</td>
                            <td className="py-3 px-4">10%</td>
                            <td className="py-3 px-4">100</td>
                            <td className="py-3 px-4">2025-12-31</td>
                            <td className="py-3 px-4">$200</td>
                            <td className="py-3 px-4  cursor-pointer flex items-center gap-3 text-2xl">
                                <Link href={'/dashboard/managecoins/sdfsdf'}

                                >
                                    <button><CiEdit className='text-blue-800' /></button>
                                </Link>
                                <button><RiDeleteBin6Fill className='text-red-500' /></button>

                            </td>
                        </tr>

                        {/* Example Row 2 */}
                        <tr className="">
                            <td className="py-3 px-4">2</td>
                            <td className="py-3 px-4">CD456</td>
                            <td className="py-3 px-4">15%</td>
                            <td className="py-3 px-4">200</td>
                            <td className="py-3 px-4">2024-06-30</td>
                            <td className="py-3 px-4">$400</td>
                            <td className="py-3 px-4  cursor-pointer flex items-center gap-3 text-2xl">
                                <Link href={'/dashboard/managecoins/sdfsdf'}
                                >
                                    <button><CiEdit className='text-blue-800' /></button>
                                </Link>
                                <button><RiDeleteBin6Fill className='text-red-500' /></button>

                            </td>
                        </tr>
                        {/* More rows can be added here */}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Page;
