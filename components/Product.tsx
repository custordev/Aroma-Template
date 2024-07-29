import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Product() {
  return (
    <Link
      href=""
      className="flex flex-col  bg-[#E6E7F2] px-4 py-2 gap-1 rounded-2xl w-64"
    >
      <Image
        width={1080}
        height={1080}
        className="w-60 h-60 hover:animate-pulse"
        src="https://assets-global.website-files.com/649409997a1a98426b1aa230/6494209ae4949b66bd9c69f1_Earbud%20Y168A-p-500.jpg"
        alt=""
      />
      <h3 className="text-gray-400 font-semibold">Category</h3>
      <p className=" font-bold">Title</p>
      <span className="text-blue-600">$200</span>
    </Link>
  );
}
