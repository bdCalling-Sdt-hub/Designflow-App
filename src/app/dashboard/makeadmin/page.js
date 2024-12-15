import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaRegEdit, FaSearch } from 'react-icons/fa';

const Page = () => {

    const data = [
        { sl: 1, functionClass: 'Rendering', functionName: '3D Rendering', price: '$122.20' },
        { sl: 2, functionClass: 'Design', functionName: 'Interior Design', price: '$150.00' },
        { sl: 3, functionClass: 'Animation', functionName: '2D Animation', price: '$80.00' },
        { sl: 4, functionClass: 'Rendering', functionName: 'Virtual Reality', price: '$200.00' },
        { sl: 5, functionClass: 'Development', functionName: 'Web Development', price: '$300.00' },
    ];

    return (
        <div className='my-10 mr-10'>
            <div className='flex justify-end items-center flex-wrap my-10'>
                 
                <div className='flex items-center gap-5'>
                    <Link href={'makeadmin/addadmin'} className='py-2 px-8 bg-primaryBg text-white flex items-center gap-2 rounded-md'><span className='text-xl'>+</span>  Add Admin</Link>
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
                <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr className="text-left text-sm font-semibold text-white bg-black">
                            <th className="px-4 py-3">#SL</th>
                            <th className="px-4 py-3">Full Name</th>
                            <th className="px-4 py-3">E-mail</th>
                            <th className="px-4 py-3">User Type</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.sl} className="text-sm border-b border-gray-200">
                                <td className="px-4 py-2">{item.sl}</td>
                                <td className="px-4 py-2">{item.functionClass}</td>
                                <td className="px-4 py-2">{item.functionName}</td>
                                <td className="px-4 py-2">{item.price}</td>
                                <td className="px-4 py-2">
                                    <Link href={'/dashboard/makeadmin/edit'}>
                                        <FaRegEdit className="text-2xl" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Page;
