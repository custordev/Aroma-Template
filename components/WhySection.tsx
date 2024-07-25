import Image from "next/image";
import React from "react";

export default function WhySection() {
  return (
    <div className="flex items-center justify-center flex-col  gap-16 py-4">
      <h2 className="font-bold text-4xl">Why Aroma?</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        <div className="flex flex-col items-center gap-20">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image
                width={500}
                height={500}
                className="w-6 h-6"
                src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406b1c32a3c2b9fcd588e_Bullet.svg"
                alt=""
              />
              <span className="font-bold text-2xl">
                Exceptional Sound Quality
              </span>
            </div>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              varius commodo aliquam
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                width={500}
                height={500}
                className="w-6 h-6"
                src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406b1c32a3c2b9fcd588e_Bullet.svg"
                alt=""
              />
              <span className="font-bold text-2xl">
                Versatile and User-Friendly
              </span>
            </div>
            <p className="text-gray-500">
              Maecenas eu dui dictum, imperdiet metus et, dapibus nisl. Integer
              sit amet augue magna
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            width={1080}
            height={1080}
            className="lg:w-80 w-60 h-40"
            src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/64940630379efe9643f2220a_Earbuds-p-500.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center gap-20">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                width={500}
                height={500}
                className="w-6 h-6"
                src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406b1c32a3c2b9fcd588e_Bullet.svg"
                alt=""
              />
              <span className="font-bold text-2xl">Innovative Design</span>
            </div>
            <p className="text-gray-500">
              Mauris laoreet congue ipsum at ultricies. Phasellus mattis dictum
              neque, vel sagittis odio pellentesque at
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                width={500}
                height={500}
                className="w-6 h-6"
                src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406b1c32a3c2b9fcd588e_Bullet.svg"
                alt=""
              />
              <span className="font-bold text-2xl">
                Superior Build and Durability
              </span>
            </div>
            <p className="text-gray-500">
              Aliquam vel augue sed justo sagittis lobortis. Vestibulum
              porttitor sit amet magna id elementum
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <button className="py-2 px-8 bg-blue  font-bold rounded-md  bg-blue-600 hover:bg-blue-700 text-white ">
          Shop Now
        </button>
        <button className="py-2 px-8 border border-md rounded-md  bg-transparent  text-blue-600 font-bold">
          Learn More
        </button>
      </div>
    </div>
  );
}
