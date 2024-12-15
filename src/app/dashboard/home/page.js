'use client'

import DashboardHomeHeader from "@/components/dashboard/dashboardHome/DashboardHomeHeader";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { CiDollar } from "react-icons/ci";
import { TiDocumentText } from "react-icons/ti";
import { FiCornerUpLeft } from "react-icons/fi";
import { IoEye } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import Link from "next/link";
import Swal from "sweetalert2";
import { Column } from '@ant-design/plots';
import { Area } from '@ant-design/plots';
import { Modal } from "antd";

const tableData = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", requestDate: "2024-12-10" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", requestDate: "2024-12-09" },
  { id: 3, name: "Tom Brown", email: "tom@example.com", phone: "456-789-0123", requestDate: "2024-12-08" },
  { id: 4, name: "Emily White", email: "emily@example.com", phone: "321-654-9870", requestDate: "2024-12-07" },
];

export default function Page() {

  const handleRemove = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/stocks.json',
      transform: [{ type: 'filter', callback: (d) => d.symbol === 'GOOG' }],
    },
    xField: (d) => new Date(d.date),
    yField: 'price',
    style: {
      fill: 'linear-gradient(90deg, white 0%, #f4b598 100%)',
    },
    axis: {
      y: { labelFormatter: '~s' },
    },
    line: {
      style: {
        stroke: '#f4b598',
        strokeWidth: 2,
      },
    },
  };

  const config2 = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json',
    },
    style: {
      fill: '#f4b598',
    },
    xField: '城市',
    yField: '销售额',
    scrollbar: {
      x: { ratio: 0.05 },
    },
    columnStyle: (datum) => {
      return {
        fill: datum.sales > 2000 ? '#FF6347' : '#f4b598', // Example condition
      };
    },
  };

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
    <div className="md:px-10">
      <div className="mt-10">
        <h2 className="text-3xl font-semibold mb-10">Overview</h2>
        <div className="pr-10 grid grid-cols-4 gap-10">
          <div className="flex items-center justify-between bg-[#171c17] p-8 rounded-lg">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white">
              <FaRegUser className="text-3xl" />
            </div>
            <div className="text-white flex justify-end flex-col items-end">
              <h2 className="text-4xl mb-2 font-semibold">52</h2>
              <p>Total Clients</p>
            </div>
          </div>
          <div className="flex items-center justify-between bg-[#171c17] p-8 rounded-lg">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white">
              <CiDollar className="text-4xl" />
            </div>
            <div className="text-white flex justify-end flex-col items-end">
              <h2 className="text-4xl mb-2 font-semibold">$20.5K</h2>
              <p>Total Earnings</p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#171c17] p-8 rounded-lg">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white">
              <TiDocumentText className="text-4xl" />
            </div>
            <div className="text-white flex justify-end flex-col items-end">
              <h2 className="text-4xl mb-2 font-semibold">800</h2>
              <p>Recent Appointment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 items-center gap-10">
        {/* Client Overview 1 */}
        <div className="w-full bg-gray-100 p-10 pb-20 rounded-xl my-10 h-[50vh]">
          <h2 className="mb-10 font-semibold text-xl">Client Overview</h2>
          <div className="h-full w-full">
            {/* Ensure the Area chart takes up the full height available */}
            <Area className="w-full h-full" {...config} />
          </div>
        </div>

        {/* Client Overview 2 */}
        <div className="w-full bg-gray-100 p-10 pb-20 rounded-xl my-10 h-[50vh]">
          <h2 className="mb-10 font-semibold text-xl">Client Overview</h2>
          <div className="h-full w-full">
            {/* Ensure the Area chart takes up the full height available */}
            <Column className="w-full h-full" {...config2} />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-10">Recent Requests</h2>

        <div className="overflow-x-auto pr-10">
          <table className="min-w-full table-auto border-collapse bg-white border-2">
            <thead className="bg-black">
              <tr>
                <th className="px-4 text-left font-semibold text-white py-4">#ID</th>
                <th className="px-4 text-left font-semibold text-white py-4">Client Name</th>
                <th className="px-4 text-left font-semibold text-white py-4">Email</th>
                <th className="px-4 text-left font-semibold text-white py-4">Phone Number</th>
                <th className="px-4 text-left font-semibold text-white py-4">Request Date</th>
                <th className="px-4 text-left font-semibold text-white py-4 flex justify-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((client) => (
                <tr key={client.id}>
                  <td className="px-4 py-4">{client.id}</td>
                  <td className="px-4 py-4 flex items-center gap-2">
                    <img className="w-10" src="/image/Dashboard/userImage.png" alt="client" />
                    {client.name}
                  </td>
                  <td className="px-4 py-4">{client.email}</td>
                  <td className="px-4 py-4">{client.phone}</td>
                  <td className="px-4 py-4">{client.requestDate}</td>
                  <td className="px-4 py-4 flex flex-wrap gap-5 justify-end">
                    <button onClick={showModal} className="bg-blue-800 text-white flex items-center py-2 px-8 rounded gap-2">
                      <FiCornerUpLeft /> Send Offer
                    </button>
                    <Link href={'/dashboard/home/sdf'} className="bg-orange-600 text-white flex items-center py-2 px-8 rounded gap-2">
                      <IoEye /> View
                    </Link>
                    <button onClick={handleRemove} className="bg-red-600 text-white flex items-center py-2 px-8 rounded gap-2">
                      <IoIosRemoveCircleOutline /> Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
          {/* Modal Header */}
          <div className="flex justify-between items-center pb-4 border-b">
            <h2 className="font-semibold text-2xl">Project Offer</h2>
            {/* Remove Cancel button here */}
          </div>

          {/* Modal Body/Form */}
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
                name="projectName"
                // value={formData.projectName}
                // onChange={handleChange}
                placeholder="Enter project name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                required
              />
            </label>

            {/* Timeline */}
            <label className="block mb-4">
              <span className="block mb-2 text-gray-700 font-medium">Timeline</span>
              <input
                type="text"
                name="timeline"
                // value={formData.timeline}
                // onChange={handleChange}
                placeholder="e.g., 3 weeks"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                required
              />
            </label>

            {/* Budget */}
            <label className="block mb-6">
              <span className="block mb-2 text-gray-700 font-medium">Budget</span>
              <input
                type="number"
                name="budget"
                // value={formData.budget}
                // onChange={handleChange}
                placeholder="Enter budget amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                required
              />
            </label>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
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
