import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";


export default function Chating() {
  return (
    <div className="h-srceen md:flex justify-center items-center">
      <div className="md:w-[80%] mx-auto md:my-10 my-5 rounded-3xl overflow-hidden bg-[#f7f7f7]">
        <div className="flex items-center justify-between bg-[#a7bca2] p-5">
          <div className="flex items-center gap-5">
            <img className="w-12" src="/image/Dashboard/userImage.png" alt="" />
            <h2>Jon Deo</h2>
          </div>
          <div className="p-2 bg-[#f7f7f7] w-10 h-10 flex justify-center items-center rounded-full cursor-pointer" >
            <BsThreeDotsVertical className="text-2xl " />
          </div>
        </div>
        <div className=" py-5 px-10">
          <div className="h-[60vh] overflow-y-scroll">
            <div className=" ">
              <div>
                <p className="p-5 bg-[#ede9e9] md:w-[350px] w-[250px] mb-1 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
                  Auctor urna, varius duis suspendisse mi in dictum. Interdum
                  egestas ut porttitor tortor aliquet massa.
                </p>
                <p className="font-semibold ml-1">
                  Anika <span className="font-normal text-sm">08:23 AM</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div>
                <p className="p-5 bg-[#a7bca2] md:w-[350px] w-[250px] mb-1  rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl">
                  Auctor urna, varius . Interdum egestas ut porttitor tortor
                  aliquet massa.
                </p>
                <p className=" flex justify-end items-center gap-1">
                  {" "}<span className="font-normal text-sm">08:23 AM</span> You
                </p>
              </div>
            </div>
            <div className=" ">
              <div>
                <p className="p-5 bg-[#ede9e9] md:w-[350px] w-[250px] mb-1 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
                  Auctor urna, varius duis suspendisse mi in dictum. Interdum
                  egestas ut porttitor tortor aliquet massa. Auctor urna, varius
                  duis suspendisse mi in dictum. Interdum egestas ut porttitor
                  tortor aliquet massa
                </p>
                <p className="font-semibold ml-1">
                  Anika <span className="font-normal text-sm">08:23 AM</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div>
                <p className="p-5 bg-[#a7bca2] md:w-[350px] w-[250px] mb-1  rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl">
                  Auctor urna, varius duis suspendisse mi in dictum. Interdum
                  egestas ut porttitor tortor aliquet massa.
                </p>
                <p className=" flex justify-end items-center gap-1">
                  {" "}<span className="font-normal text-sm">08:23 AM</span> You
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
