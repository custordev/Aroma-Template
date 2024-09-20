import Image from "next/image";
import React from "react";

export default function JoinListSection() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white gap-8 md:gap-36 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
      <div className="w-full md:w-1/2">
        <Image
          width={1080}
          height={1080}
          className="w-full h-auto rounded-lg object-cover"
          src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/6494063738783c5b3be71fae_Subscribe-p-800.jpg"
          alt="Join our list"
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2 gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
            Join Our List Today!
          </h2>
          <p className="text-gray-500">Be the first to know</p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <li className="flex items-center gap-2">
            <img
              src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406b10bee68e0b82f1c69_Check.svg"
              alt="Check icon"
              className="w-6 h-6"
            />
            Limited edition products
          </li>
          <li className="flex items-center gap-2">
            <img
              src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406b10bee68e0b82f1c69_Check.svg"
              alt="Check icon"
              className="w-6 h-6"
            />
            Exclusive contents
          </li>
          <li className="flex items-center gap-2">
            <img
              src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406b10bee68e0b82f1c69_Check.svg"
              alt="Check icon"
              className="w-6 h-6"
            />
            Special offers
          </li>
          <li className="flex items-center gap-2">
            <img
              src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406b10bee68e0b82f1c69_Check.svg"
              alt="Check icon"
              className="w-6 h-6"
            />
            No spams!
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Your Email"
            className="py-2 px-4 w-full sm:w-auto rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button className="bg-blue-600 hover:bg-blue-700 py-2 px-6 text-white font-bold rounded-md transition duration-300 ease-in-out">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
