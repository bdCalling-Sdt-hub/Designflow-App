import React from "react";
import { CiHome } from "react-icons/ci";
import { MdOutlineAddCircleOutline } from "react-icons/md";

export default function DashboardAddProject() {
  return (
    <div className="md:w-[78%] w-[90%] mx-auto my-10 md:my-20">
      <div className="text-center mb-10">
        <h2 className="mb-3 text-5xl uppercase">My Projects</h2>
        <p>Track, manage, and collaborate on your interior design projects.</p>
        
      </div>
      <div className="grid md:grid-cols-2 md:gap-16 gap-8">
        <div className="bg-[#f1f4f0] p-5 rounded-xl">
          <img className="w-full" src="/image/hero/Project-image.png" alt="" />
          <h2 className="mb-2 mt-5 font-medium flex items-center gap-2">
            <CiHome className="text-xl" />{" "}
            <span className="text-[#EA733C]">Project Name </span>
          </h2>
          <div className="flex my-2 items-center gap-5">
            <div
              className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="flex w-[90%] flex-col justify-center rounded-full overflow-hidden bg-[#74956c] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500">
                {" "}
              </div>
            </div>
            90%
          </div>
          <button className="py-2  px-10 font-semibold rounded-md text-white bg-[#ea733c]">
            Dashboard
          </button>
        </div>
        <div className="bg-[#f1f4f0]  rounded-xl flex justify-center items-center cursor-pointer p-10">
          <div className="flex flex-col justify-center items-center gap-5">
            <MdOutlineAddCircleOutline className="text-5xl" />
            <h2>Start a New Request</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
