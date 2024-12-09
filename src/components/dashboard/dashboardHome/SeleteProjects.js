"use client";
import React, { useState } from "react";

export default function SeleteProjects() {
  const [selected, setSelected] = useState(1);

  const handleClick = (value) => {
    setSelected(value); // Update selected value
  };

  return (
    <div>
      <div className="lg:grid grid-cols-3 my-5 md:gap-10 gap-5">
        <div className="col-span-2">
          <div className="my-5">
            <h1 className="text-2xl font-semibold mb-2">Select Project Type</h1>
            <hr />
          </div>
          <div className="grid md:grid-cols-2 md:gap-10 gap-5">
            <label className="p-5 bg-[#f1f4f0] rounded-lg  inline-block">
              <img
                className="w-full"
                src="/image/Dashboard/home/select-project-4.png"
                alt=""
              />
              <label className="mt-5 inline-block">
                <input type="radio" className="accent-[#637f5c]" /> Residential
                Project
              </label>
            </label>
            <label className="p-5 bg-[#f1f4f0] rounded-lg  inline-block">
              <img
                className="w-full"
                src="/image/Dashboard/home/select-project-4.png"
                alt=""
              />
              <label className="mt-5 inline-block">
                <input type="radio" className="accent-[#637f5c]" /> Residential
                Project
              </label>
            </label>
            <label className="p-5 bg-[#f1f4f0] rounded-lg  inline-block">
              <img
                className="w-full"
                src="/image/Dashboard/home/select-project-4.png"
                alt=""
              />
              <label className="mt-5 inline-block">
                <input type="radio" className="accent-[#637f5c]" /> Residential
                Project
              </label>
            </label>
            <label className="p-5 bg-[#f1f4f0] rounded-lg  inline-block">
              <img
                className="w-full"
                src="/image/Dashboard/home/select-project-4.png"
                alt=""
              />
              <label className="mt-5 inline-block">
                <input type="radio" className="accent-[#637f5c] " /> Residential
                Project
              </label>
            </label>
          </div>
          <div>
            <div className="my-5">
              <h1 className="text-2xl font-semibold mb-2">Select Style</h1>
              <hr />
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5">
              <label className="rounded-2xl overflow-hidden relative cursor-pointer">
                <img
                  className="w-full"
                  src="/image/Dashboard/home/Rectangle-1.png"
                  alt=""
                />
                <h2 className="p-1 text-center font-semibold bg-[#344331] text-white">
                  Modern
                </h2>
                <label className="inline-flex items-center cursor-pointer absolute top-5 left-5">
                  <input
                    type="radio"
                    className="hidden peer"
                    name="radio"
                    value="1"
                  />
                  <div
                    className="w-10 h-10 flex items-center justify-center bg-transparent border-2 border-orange-500 rounded-full transition-all duration-300 ease-in-out
                          peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:scale-110"
                  >
                    <div
                      className="w-6 h-6 bg-transparent rounded-full transition-all duration-300 ease-in-out
                            peer-checked:translate-x-4"
                    ></div>
                  </div>
                </label>
              </label>
              <label className="rounded-2xl overflow-hidden relative cursor-pointer">
                <img
                  className="w-full"
                  src="/image/Dashboard/home/Rectangle-2.png"
                  alt=""
                />
                <h2 className="p-1 text-center font-semibold bg-[#344331] text-white">
                  Rustic
                </h2>
                <label className="inline-flex items-center cursor-pointer absolute top-5 left-5">
                  <input
                    type="radio"
                    className="hidden peer"
                    name="radio"
                    value="1"
                  />
                  <div
                    className="w-10 h-10 flex items-center justify-center bg-transparent border-2 border-orange-500 rounded-full transition-all duration-300 ease-in-out
                          peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:scale-110"
                  >
                    <div
                      className="w-6 h-6 bg-transparent rounded-full transition-all duration-300 ease-in-out
                            peer-checked:translate-x-4"
                    ></div>
                  </div>
                </label>
              </label>
              <label className="rounded-2xl overflow-hidden relative cursor-pointer">
                <img
                  className="w-full"
                  src="/image/Dashboard/home/Rectangle-3.png"
                  alt=""
                />
                <h2 className="p-1 text-center font-semibold bg-[#344331] text-white">
                  Bohemian
                </h2>
                <label className="inline-flex items-center cursor-pointer absolute top-5 left-5">
                  <input
                    type="radio"
                    className="hidden peer"
                    name="radio"
                    value="1"
                  />
                  <div
                    className="w-10 h-10 flex items-center justify-center bg-transparent border-2 border-orange-500 rounded-full transition-all duration-300 ease-in-out
                          peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:scale-110"
                  >
                    <div
                      className="w-6 h-6 bg-transparent rounded-full transition-all duration-300 ease-in-out
                            peer-checked:translate-x-4"
                    ></div>
                  </div>
                </label>
              </label>
              <label className="rounded-2xl overflow-hidden relative cursor-pointer">
                <img
                  className="w-full"
                  src="/image/Dashboard/home/Rectangle-4.png"
                  alt=""
                />
                <h2 className="p-1 text-center font-semibold bg-[#344331] text-white">
                  Futuristic
                </h2>
                <label className="inline-flex items-center cursor-pointer absolute top-5 left-5">
                  <input
                    type="radio"
                    className="hidden peer"
                    name="radio"
                    value="1"
                  />
                  <div
                    className="w-10 h-10 flex items-center justify-center bg-transparent border-2 border-orange-500 rounded-full transition-all duration-300 ease-in-out
                          peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:scale-110"
                  >
                    <div
                      className="w-6 h-6 bg-transparent rounded-full transition-all duration-300 ease-in-out
                            peer-checked:translate-x-4"
                    ></div>
                  </div>
                </label>
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className="my-5">
            <h1 className="text-2xl font-semibold mb-2">Select Category</h1>
            <hr />
          </div>
          <div className="flex">
            <button
              onClick={() => handleClick(1)}
              className={`w-[50%] h-16 font-semibold rounded-l-full transition-all duration-300 
                      ${
                        selected === 1
                          ? "bg-[#2e3c2a] text-white"
                          : "bg-gray-300 text-[#2e3c2a]"
                      }`}
            >
              Interior
            </button>
            <button
              onClick={() => handleClick(2)}
              className={`w-[50%] h-16 font-semibold rounded-r-full  transition-all duration-300 
                      ${
                        selected === 2
                          ? "bg-[#2e3c2a] text-white"
                          : "bg-gray-300 text-[#2e3c2a]"
                      }`}
            >
              Exterior
            </button>
          </div>

          <div className="my-5">
            <h1 className="text-2xl font-semibold mb-2">Select Service</h1>
            <hr />
          </div>

          <div className="p-10 bg-[#f1f4f0] rounded-lg">
            <label className="mb-5 block w-full cursor-pointer">
              <input
                type="radio"
                className="hidden peer"
                name="radio"
                value="1"
              />
              <div
                className="w-full h-auto flex items-center justify-center bg-transparent  rounded-full transition-all duration-100 ease-in-out
                          peer-checked:bg-[#2e3c2a] peer-checked:border-[#2e3c2a] peer-checked:text-white font-semibold"
              >
                <div
                  className="w-full h-auto flex items-center gap-2 justify-start bg-transparent rounded-full transition-all text-center  duration-300 ease-in-out p-2
                            "
                >
                  <div className=" bg-[#131613] p-2 rounded-full">
                    <img
                      className="w-12"
                      src="/image/Dashboard/home/services-1.png"
                      alt=""
                    />
                  </div>
                  3D Rendering
                </div>
              </div>
            </label>

            <label className="mb-5 block w-full cursor-pointer">
              <input
                type="radio"
                className="hidden peer"
                name="radio"
                value="1"
              />
              <div
                className="w-full h-auto flex items-center justify-center bg-transparent  rounded-full transition-all duration-100 ease-in-out
                          peer-checked:bg-[#2e3c2a] peer-checked:border-[#2e3c2a] peer-checked:text-white font-semibold"
              >
                <div
                  className="w-full h-auto flex items-center gap-2 justify-start bg-transparent rounded-full transition-all text-center  duration-300 ease-in-out p-2
                            "
                >
                  <div className=" bg-[#131613] p-2 rounded-full">
                    <img
                      className="w-12"
                      src="/image/Dashboard/home/services-2.png"
                      alt=""
                    />
                  </div>
                  3D Rendering Premium
                </div>
              </div>
            </label>

            <label className="mb-5 block w-full cursor-pointer">
              <input
                type="radio"
                className="hidden peer"
                name="radio"
                value="1"
              />
              <div
                className="w-full h-auto flex items-center justify-center bg-transparent  rounded-full transition-all duration-100 ease-in-out
                          peer-checked:bg-[#2e3c2a] peer-checked:border-[#2e3c2a] peer-checked:text-white font-semibold"
              >
                <div
                  className="w-full h-auto flex items-center gap-2 justify-start bg-transparent rounded-full transition-all text-center  duration-300 ease-in-out p-2
                            "
                >
                  <div className=" bg-[#131613] p-2 rounded-full">
                    <img
                      className="w-12"
                      src="/image/Dashboard/home/services-3.png"
                      alt=""
                    />
                  </div>
                  3D Rendering by Square Meter
                </div>
              </div>
            </label>

            <label className="mb-5 block w-full cursor-pointer">
              <input
                type="radio"
                className="hidden peer"
                name="radio"
                value="1"
              />
              <div
                className="w-full h-auto flex items-center justify-center bg-transparent  rounded-full transition-all duration-100 ease-in-out
                          peer-checked:bg-[#2e3c2a] peer-checked:border-[#2e3c2a] peer-checked:text-white font-semibold"
              >
                <div
                  className="w-full h-auto flex items-center gap-2 justify-start bg-transparent rounded-full transition-all text-center  duration-300 ease-in-out p-2
                            "
                >
                  <div className=" bg-[#131613] p-2 rounded-full">
                    <img
                      className="w-12"
                      src="/image/Dashboard/home/services-4.png"
                      alt=""
                    />
                  </div>
                  2D Layout Plan
                </div>
              </div>
            </label>
          </div>

          <div>
            <div className="my-5">
              <h1 className="text-2xl font-semibold mb-2">Provide Description</h1>
              <hr />
            </div>
              <p className="bg-[#f1f4f0] p-10 rounded-lg"> Lorem ipsum dolor sit amet, perfecto urbanitas ne qui, dicta commodo cu mei. Id eirmod alienum eloquentiam has. Saepe utamur     vim in. Et adhuc intellegat vim. Elitr graecis mandamus cu eos. Dicta alienum sadipscing cu mel, at has elit putent feugait, iusto    fierent persequeris eam et.</p>
              
              <div className="flex items-center justify-end mt-10">
              <button className="bg-[#637f5c] text-white px-10 py-3 rounded-lg">Submit </button>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
