import Image from "next/image";
import React from "react";

export default function ExperienceSection() {
  return (
    <div className="flex items-center justify-center flex-col  gap-16 py-4">
      <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl text-center">
        Experience Streamlined Shopping with Aroma
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="flex items-center justify-center flex-col text-center">
          <Image
            height={1080}
            width={1080}
            className="w-16 h-16"
            src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/64940686533aff4831e31f5d_Delivery.svg"
            alt=""
          />
          <h2 className="font-bold text-2xl">Free Delivery</h2>
          <p className="w-60 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsa
            saepe maxime aut aspernatur quo.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col text-center">
          <Image
            height={1080}
            width={1080}
            className="w-16 h-16"
            src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/64940686d729c189eba5410a_Pickup.svg"
            alt=""
          />
          <h2 className="font-bold text-2xl">Self Pick</h2>
          <p className="w-60 text-gray-500">
            Etiam vitae ornare nulla. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra
          </p>
        </div>
        <div className="flex items-center justify-center flex-col text-center">
          <Image
            height={1080}
            width={1080}
            className="w-16 h-16"
            src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406867a1a98426b15ac8d_Warranty.svg"
            alt=""
          />
          <h2 className="font-bold text-2xl">Warranty</h2>
          <p className="w-60 text-gray-500">
            Donec vehicula et nulla vel fringilla. Proin viverra fermentum erat,
            vitae aliquet erat dapibus vitae
          </p>
        </div>
      </div>
      <div>
        <button className="bg-blue-600 hover:bg-blue-700 py-2 px-4 text-gray-100 font-bold rounded-md">
          Shop Now
        </button>
      </div>
    </div>
  );
}
