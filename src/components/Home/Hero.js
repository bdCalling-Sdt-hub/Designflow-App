import React from "react";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="bg-[url('/image/hero/HeroColorBg.png')] bg-cover  md:min-h-screen h-[60vh]  md:h-[70vh] md:w-[60%] w-[90%] bg-no-repeat absolute right-0 top-0 z-0 rounded-bl-3xl">
        <img
          className="absolute right-0 md:bottom-20 bottom-10 z-10 md:rounded-none rounded-xl w-[60%] md:w-auto"
          src="/image/hero/HeroDown.png"
          alt=""
        />
        <img
          className="absolute w-[80%] md:w-auto right-[30%] md:bottom-36 bottom-20 z-20 md:rounded-none rounded-xl"
          src="/image/hero/HeroUp.png"
          alt=""
        />
      </div>
      <div className=" w-[90%] md:mt-0 mx-auto md:relative absolute -bottom-10 left-0 right-0 flex items-center md:min-h-screen h-[70vh] z-[99999]">
        <div>
          <div className="  md:text-6xl text-2xl font-medium uppercase text-center md:text-left leading-[1.2]">
            <span className="bg-[#f1f4f0] py-2 px-5 md:leading-[1.3] leading-[1.5]">
              Bringing Your
            </span>
            <br className="" />
            <span className="bg-[#f1f4f0] py-2 px-5">
              Interior Vision to Life
            </span>
          </div>
          <p className="md:my-10 my-5 bg-white md:bg-transparent text-center md:text-left">
            Explore creative design solutions tailored to your <br /> space,
            budget, and preferences. Take the first step <br /> toward your
            dream design.
          </p>
          <div className="md:block flex justify-center">
            <button className="py-3 px-10 font-semibold rounded-md text-white bg-[#ea733c]">
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className="relative">
    //   <div className="bg-[url('/image/hero/HeroColorBg.png')] md:min-h-screen h-[70vh] w-[60%] bg-no-repeat absolute right-0 z-10">
    //     <img
    //       className="absolute right-0 bottom-20 z-10"
    //       src="/image/hero/HeroDown.png"
    //       alt=""
    //     />
    //     <img
    //       className="absolute right-[30%] md:bottom-32 bottom-40 z-20"
    //       src="/image/hero/HeroUp.png"
    //       alt=""
    //     />
    //   </div>
    //   <div className="md:w-[80%] w-[90%] mx-auto relative flex items-center md:min-h-screen h-[70vh] z-[99999]">
    //     <div>
    //       <div className="  md:text-6xl text-2xl font-medium uppercase leading-[1.2]">
    //         <span className="bg-[#f1f4f0] py-2 px-5 md:leading-[1.3] leading-[1.5]">Bringing Your</span><br /><span className="bg-[#f1f4f0] py-2 px-5">Interior Vision to Life</span>
    //       </div>
    //       <p className="my-10 bg-white md:bg-transparent">
    //         Explore creative design solutions tailored to  your <br /> space,
    //         budget, and preferences.  Take the first step <br /> toward your
    //         dream design.
    //       </p>
    //       <button className="py-3 px-10 font-semibold rounded-md text-white bg-[#ea733c]">About Us</button>
    //     </div>
    //   </div>
    // </div>
  );
}
