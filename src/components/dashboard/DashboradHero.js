import React from "react";

export default function DashboardHero() {
  return (
    <div className="relative">
      <div className="bg-[url('/image/Dashboard/DashboardHeroColorBg.png')] md:min-h-screen h-[70vh] w-[60%] bg-no-repeat absolute right-0 z-10">
        <img
          className="absolute right-0 bottom-20 z-10"
          src="/image/hero/HeroDown.png"
          alt=""
        />
        <img
          className="absolute right-[30%] md:bottom-36 bottom-40 z-20"
          src="/image/hero/HeroUp.png"
          alt=""
        />
      </div>
      <div className=" w-[90%] mx-auto relative flex items-center md:min-h-screen h-[70vh] z-[99999]">
        <div>
          <div className="  md:text-6xl text-2xl font-medium uppercase leading-[1.2]">
            <span className="bg-[#f1f4f0] py-2 px-5 md:leading-[1.3] leading-[1.5]">Bringing Your</span><br /><span className="bg-[#f1f4f0] py-2 px-5">Interior Vision to Life</span>
          </div>
          <p className="my-10 bg-white md:bg-transparent">
            Explore creative design solutions tailored to  your <br /> space,
            budget, and preferences.  Take the first step <br /> toward your
            dream design.
          </p>
          <button className="py-3 px-10 font-semibold rounded-md text-white bg-[#ea733c]">About Us</button>
        </div>
      </div>
    </div>
  );
}
