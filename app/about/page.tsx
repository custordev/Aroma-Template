import ExperienceSection from "@/components/ExperienceSection";
import ValueSection from "@/components/ValueSection";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-8 ">
      <h2 className="text-4xl text-center font-black mt-4 ">About Aroma</h2>
      <section className="flex flex-col gap-6 lg:flex-row  lg:relative items-center lg:ml-14">
        <div>
          <Image
            height={1080}
            width={1080}
            className="lg:w-[33rem] lg:h-full rounded-3xl"
            src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/6494064ee7c39da6541c5740_About-p-1080.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-8  shadow-2xl bg-white lg:absolute lg:w-[48%] lg:h-96 rounded-xl py-4 px-8 lg:left-[28rem] lg:top-16">
          <h2 className="lg:text-4xl  font-black mt-4 ">Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            laborum consequuntur exercitationem neque nam impedit dolore
            voluptates perspiciatis, itaque consequatur ducimus maxime sunt
            vitae illum doloremque rerum veniam ex magni.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            laborum consequuntur exercitationem neque nam impedit dolore
            voluptates perspiciatis, itaque consequatur ducimus maxime sunt
            vitae illum doloremque rerum veniam ex magni.
          </p>
        </div>
      </section>
      <div className="lg:grid  hidden bg-[#EEEFFA] lg:p-1 rounded-sm lg:grid-cols-4 grid-cols-2 items-center justify-center lg:place-items-center gap-6 px-4 py-6">
        <div className="flex flex-col items-center  gap-2">
          {/* <CountUp
                end=`${20}+`}
                className="lg:text-6xl text-4xl font-extrabold text-blue-600"
              /> */}

          <p className="font-bold ">years of experinece</p>
        </div>
        <div className="flex items-center gap-2">
          {/* <CountUp
               end=`${100}+`}
                className="lg:text-6xl text-4xl font-extrabold text-blue-600"
              /> */}
          <p className="font-bold  ">Audio Products</p>
        </div>
        <div className="flex items-center gap-2">
          {/* <CountUp
                end=`${10}+`
                className="lg:text-6xl text-4xl font-extrabold text-blue-600"
              /> */}
          <p className="font-bold  ">Industry Awards</p>
        </div>
        <div className="flex items-center gap-2">
          {/* <CountUp
                end=`${1000}K`
                className="lg:text-6xl text-4xl font-extrabold text-blue-600"
              /> */}
          <p className="font-bold  ">Community Members</p>
        </div>
      </div>
      {/* <ValueSection /> */}
      {/* <ExperienceSection /> */}
    </div>
  );
}
