import { DatePicker, Pagination } from 'antd';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';


const tableData = [
    {
        id: 1,
        clientName: 'John Doe',
        clientId: 'JD12345',
        type: 'Premium',
        service: 'Website Development',
        requestDate: '2024-12-10',
        deadline: '2025-01-10',
        revenue: '$5000',
        visuals: '3 Images',
    },
    {
        id: 2,
        clientName: 'Jane Smith',
        clientId: 'JS98765',
        type: 'Standard',
        service: 'SEO Optimization',
        requestDate: '2024-12-09',
        deadline: '2025-02-01',
        revenue: '$1500',
        visuals: '1 Image',
    },
    // Add more rows as needed
];

const page = () => {



    return (
        <div className='my-10 md:mr-10 md:px-0 px-5'>
            <div className='flex items-center justify-between gap-5 flex-wrap'>
                <Link href={'/dashboard/servicerequests'} className='flex items-center gap-3 text-3xl font-semibold' > <FaArrowLeft />Service Requests</Link>
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
            <div>
                <div className="overflow-x-auto bg-[#dee6dc]">
                    <table className="min-w-full table-auto border-collapse  border-2">
                        <thead className="bg-[#212721]">
                            <tr>
                                <th className="px-4 text-left font-semibold text-white py-4">#ID</th>
                                <th className="px-4 text-left font-semibold text-white py-4">Client Name</th>
                                <th className="px-4 text-left font-semibold text-white py-4">Client ID</th>
                                <th className="px-4 text-left font-semibold text-white py-4">Type</th>
                                <th className="px-4 text-left font-semibold text-white py-4">Service</th>
                                <th className="px-4 text-left font-semibold text-white py-4">Request Date</th>
                                <th className="px-4 text-left font-semibold text-white py-4">Deadline</th>
                                <th className="px-4 text-left font-semibold text-white py-4">Revenue</th>
                                <th className="px-4 text-left font-semibold text-white py-4">Visuals</th>
                                <th className="px-4 text-left font-semibold text-white py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((client) => (
                                <tr key={client.id}>
                                    <td className="px-4 py-4">{client.id}</td>
                                    <td className="px-4 py-4">{client.clientName}</td>
                                    <td className="px-4 py-4">{client.clientId}</td>
                                    <td className="px-4 py-4">{client.type}</td>
                                    <td className="px-4 py-4">{client.service}</td>
                                    <td className="px-4 py-4">{client.requestDate}</td>
                                    <td className="px-4 py-4">{client.deadline}</td>
                                    <td className="px-4 py-4">{client.revenue}</td>
                                    <td className="px-4 py-4">{client.visuals}</td>
                                    <td className="px-4 py-4 flex justify-start gap-4">
                                        <Link href={'/dashboard/servicerequests/details/items'}><IoEye /> </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='flex items-center justify-between p-5'>
                        <h2 className='font-semibold'>SHOWING 1-12 OF 250</h2>
                        <div className='flex items-center justify-end'>
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;
