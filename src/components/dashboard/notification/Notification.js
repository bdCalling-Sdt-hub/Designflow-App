import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { CiWallet } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";

export default function Notification() {
  return (
    <div className="md:mx-10 py-10">

      <div className="md:flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img
            className="w-20"
            src="/image/Dashboard/notification-User.png"
            alt=""
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">Richard Co.</h2>
            <p className="flex items-center gap-2">
              <SlLocationPin /> Dhaka Bangladesh{" "}
            </p>
          </div>
        </div>
        <button className="py-3 md:mt-0 mt-5 px-10 bg-[#ffe102] font-semibold">
          {" "}Pending Work{" "}
        </button>
      </div>
      <div className="my-10">
        <h2 className="text-2xl font-semibold mb-5">Employee Details</h2>
        <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10">
          <div>
            <h2 className="font-semibold text-xl mb-2">Project Name</h2>
            <div className="flex items-center gap-3">
              <img
                className="w-8"
                src="/image/Dashboard/notification-User.png"
                alt=""
              />
              <span>Richard Co.</span>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Net Payable</h2>
            <div className="flex items-center gap-3">
              <CiWallet className="text-2xl font-semibold" />
              <span> $ 12,000</span>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Location</h2>
            <div className="flex items-center gap-3">
              <SlLocationPin className="text-2xl font-semibold" />
              <span> Dhaka Bangladesh</span>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Starting Date</h2>
            <div className="flex items-center gap-3">
              <CiCalendar className="text-2xl font-semibold" />
              <span> 1 Jan 2025</span>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Delivery Date</h2>
            <div className="flex items-center gap-3">
              <CiCalendar className="text-2xl font-semibold" />
              <span> 1 Jan 2025</span>
            </div>
          </div>


        </div>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-flow-row gap-10">
        <div>
          <h2 className="text-xl font-semibold">Project Type</h2>
          <hr className="my-5" />

          <div className="p-5 rounded-xl bg-[#344331]">
            <img
              className="rounded-xl w-full"
              src="/image/Dashboard/notification-Details.png"
              alt=""
            />
            <h2 className="text-white pt-5">Residential Project</h2>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Select Style</h2>
          <hr className="my-5" />

          <div className="p-5 rounded-xl bg-[#344331]">
            <img
              className="rounded-xl w-full"
              src="/image/Dashboard/notification-Details.png"
              alt=""
            />
            <h2 className="text-white pt-5">Modern</h2>
          </div>
        </div>

        <div className="">
          <div>
            <h2 className="text-xl font-semibold">Select Style</h2>
            <hr className="my-5" />

            <div className="p-5 rounded-full text-center text-xl text-white bg-[#344331]">
              Interior
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold">Select Service</h2>
            <hr className="my-5" />

            <div className="p-5 rounded-full gap-3 flex items-center justify-start px-3 text-center text-xl text-white bg-[#344331]">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center 5">
                <img src="/image/Dashboard/home/services-1.png" alt="sdf" />
              </div>{" "}
              3D Rendering
            </div>

            <div className="mt-20 flex justify-end ">
              <button className="bg-[#637f5c] text-white px-10 py-3 rounded-lg">
                Accept Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
