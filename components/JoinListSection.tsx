import Image from "next/image";
import React from "react";

export default function JoinListSection() {
  return (
    <div className="flex items-center  bg-white gap-36 rounded-r-lg">
      <div>
        <Image
          width={1080}
          height={1080}
          className="w-[26rem] h-full rounded-l-lg"
          src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/6494063738783c5b3be71fae_Subscribe-p-800.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center gap-6 ">
        <div className="flex flex-col gap-1">
          {" "}
          <h2 className="lg:text-4xl font-bold ">Join Our List Today!</h2>
          <p className="text-gray-400">Be the first to know</p>
        </div>
        <ul className="grid grid-cols-2 gap-6">
          <span className="flex">
            <img
              src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406b10bee68e0b82f1c69_Check.svg"
              alt=""
            />
            Limited edition products
          </span>
          <span className="flex">
            <img
              src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406b10bee68e0b82f1c69_Check.svg"
              alt=""
            />
            Exclusive contents
          </span>
          <span className="flex">
            <img
              src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406b10bee68e0b82f1c69_Check.svg"
              alt=""
            />
            Special offers
          </span>
          <span className="flex">
            <img
              src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406b10bee68e0b82f1c69_Check.svg"
              alt=""
            />
            No spams!
          </span>
        </ul>
        <div className="flex items-start justify-start  flex-col gap-3">
          <input
            type="text"
            placeholder="Your Email"
            className="py-2 px-8 rounded-md border border-md  bg-transparent text-gray-400 lg:w-96"
          />
          <button className="bg-blue-600 hover:bg-blue-700 py-2 px-4 text-gray-100 font-bold rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
