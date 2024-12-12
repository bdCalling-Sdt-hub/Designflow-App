'use client'
import DashboardHomeHeader from "@/components/dashboard/dashboardHome/DashboardHomeHeader";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { CiDollar } from "react-icons/ci";
import { TiDocumentText } from "react-icons/ti";
import { FiCornerUpLeft } from "react-icons/fi";
import { IoEye } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import Link from "next/link";
import Swal from "sweetalert2";

const tableData = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", requestDate: "2024-12-10" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", requestDate: "2024-12-09" },
  { id: 3, name: "Tom Brown", email: "tom@example.com", phone: "456-789-0123", requestDate: "2024-12-08" },
  { id: 4, name: "Emily White", email: "emily@example.com", phone: "321-654-9870", requestDate: "2024-12-07" },
];


export default function page() {


  const handleRemove = ()=>{
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


  return (
    <div clssName="md:px-10">
      <div className="my-10">
        <h2 className="text-3xl font-semibold mb-10">Overview</h2>
        <div className="pr-10 grid grid-cols-4 gap-10">
          <div className="flex items-center justify-between bg-[#171c17] p-8 rounded-lg">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white">
              <FaRegUser className="text-3xl" />
            </div>
            <div className="text-white flex justify-end flex-col items-end">
              <h2 className="text-4xl mb-2 font-semibold ">52</h2>
              <p>Total Clients</p>
            </div>
          </div>
          <div className="flex items-center justify-between bg-[#171c17] p-8 rounded-lg">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white">
              <CiDollar className="text-4xl" />
            </div>
            <div className="text-white flex justify-end flex-col items-end">
              <h2 className="text-4xl mb-2 font-semibold ">$20.5K</h2>
              <p>Total Earnings</p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#171c17] p-8 rounded-lg">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white">
              <TiDocumentText className="text-4xl" />
            </div>
            <div className="text-white flex justify-end flex-col items-end">
              <h2 className="text-4xl mb-2 font-semibold ">800</h2>
              <p>Recent Appointment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-3xl font-semibold mb-10">Recent Requests</h2>

        <div className="overflow-x-auto pr-10 ">
          <table className="min-w-full table-auto border-collapse bg-white  border-2">
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
                <tr key={client.id} className="">
                  <td className="px-4 py-4">{client.id}</td>
                  <td className="px-4 py-4 flex items-center gap-2">
                      <img className="w-10" src="/image/Dashboard/userImage.png" alt="image" />
                     {client.name}</td>
                  <td className="px-4 py-4">{client.email}</td>
                  <td className="px-4 py-4">{client.phone}</td>
                  <td className="px-4 py-4">{client.requestDate}</td>
                  <td className="px-4 py-4 flex flex-wrap gap-5 justify-end">
                    <button className="bg-blue-800 text-white flex items-center py-2 px-8 rounded gap-2"><FiCornerUpLeft />Send Offer</button>
                    <Link href={'/dashboard/home/sdf'} className="bg-orange-600 text-white flex items-center py-2 px-8 rounded gap-2"><IoEye />View</Link>
                    <button onClick={handleRemove} className="bg-red-600 text-white flex items-center py-2 px-8 rounded gap-2"><IoIosRemoveCircleOutline />Remove</button>
                     
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        
      </div>

    </div >
  );
}
