'use client'
import DashboardHomeHeader from '@/components/dashboard/dashboardHome/DashboardHomeHeader';
import { DatePicker, Modal } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowLeft, FaExchangeAlt, FaSearch } from 'react-icons/fa';
import { FiCornerUpLeft } from 'react-icons/fi';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    return (
        <div>
            <DashboardHomeHeader></DashboardHomeHeader>
            <div className='mr-10'>
                <div className='flex items-center justify-between gap-5 flex-wrap'>
                    <Link href={'/dashboard/home'} className='flex items-center gap-3 text-3xl font-semibold' > <FaArrowLeft />Earning List</Link>

                    <div>
                        <div className='flex items-center gap-5'>
                            <button className='py-3 px-8 bg-primaryBg text-white flex items-center gap-3 justify-center rounded-md'><FaExchangeAlt /> Today’s Earn ing <span className='text-xl font-semibold'>$3230</span></button>
                            <button className='py-3 px-8 bg-primaryBg text-white flex items-center gap-3 justify-center rounded-md'><FaExchangeAlt />  All Earning <span className='text-xl font-semibold'>$3230</span></button>
                        </div>
                    </div>

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
                                    className="py-2 px-4 min-w-48 border border-gray-300 rounded-md"
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
            <div>
                <div className="overflow-x-auto mr-10 ">
                    <table className="min-w-full table-auto border-collapse bg-[#dee6dc] border-2 border-[#dee6dc]">
                        <thead className="bg-[#344331]">
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
                                        <button onClick={showModal} >
                                            <IoEye className='text-2xl' />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Modal open={isModalOpen} footer={false} onCancel={handleCancel}>
                    <div className="flex justify-between items-center pb-4 border-b">
                        <h2 className="font-semibold text-2xl">Project Offer</h2>
                        <button
                            onClick={handleCancel}
                            className="text-white bg-red-500 hover:bg-red-600 p-2 rounded-full focus:outline-none focus:ring focus:ring-red-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <form
                        className="p-6 w-full max-w-lg mx-auto"
                        onSubmit={(e) => {
                            e.preventDefault(); // Prevent default form submission
                            handleFormSubmit(); // Custom function to handle form submission
                        }}
                    >
                        {/* Project Name */}
                        <label className="block mb-4">
                            <span className="block mb-2 text-gray-700 font-medium">Project Name</span>
                            <input
                                type="text"
                                placeholder="Enter project name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                            />
                        </label>

                        {/* Timeline */}
                        <label className="block mb-4">
                            <span className="block mb-2 text-gray-700 font-medium">Timeline</span>
                            <input
                                type="text"
                                placeholder="e.g., 3 weeks"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                            />
                        </label>

                        {/* Budget */}
                        <label className="block mb-6">
                            <span className="block mb-2 text-gray-700 font-medium">Budget</span>
                            <input
                                type="number"
                                placeholder="Enter budget amount"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                            />
                        </label>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                onClick={handleOk}
                                className="w-48 mx-auto flex justify-center font-semibold text-xl items-center bg-primaryBg text-white py-3 px-4 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </Modal>



            </div>
        </div>
    );
}

export default page;