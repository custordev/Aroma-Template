import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section>
      <div className="flex items-center justify-between bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950 min-h-full lg:h-[30rem] w-full  lg:px-12 lg:py-8 lg:flex-row rounded-3xl lg:mt-16 md:flex-col md:h-[81vh] md:mt-14 gap-6 flex-col mt-6 h-[100vh] px-4 py-3">
        <div className="flex flex-col text-white lg:gap-8 gap-3 ">
          <h2 className="lg:text-5xl md:text-5xl lg:text-start md:text-center text-3xl text-center font-bold font-serif">
            Elevate Your Audio Journey
          </h2>
          <p className="lg:text-2xl md:text-md lg:text-start md:text-center  text-center font-semibold">
            Experience Sound in Its Purest Form
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <button className="py-2 px-8 bg-white text-black font-bold rounded-md hover:bg-transparent hover:text-white hover:border">
              Shop Now
            </button>
            <button className="py-2 px-8 border border-md rounded-md  bg-transparent hover:bg-white hover:text-black font-bold">
              Learn More
            </button>
          </div>
        </div>
        <div className="">
          <Image
            width={1080}
            height={1080}
            className="w-full h-[28rem] "
            src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/6494062b71fbb5f238835e71_Hero-p-500.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
