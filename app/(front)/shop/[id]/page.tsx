import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex mt-3">
        {" "}
        <Link href="/shop" className="text-blue-600 font-bold flex">
          Products <ChevronRight />
        </Link>
        <Link href="/shop" className="text-blue-600 font-bold flex">
          Category <ChevronRight />
        </Link>
        <Link href="/shop" className="text-gray-600 font-bold flex">
          Product
        </Link>
      </div>
      <div className="flex  justify-between">
        <div className="flex">
          <Image
            width={1080}
            height={1080}
            className="w-full h-[28rem] rounded-2xl"
            src="https://assets-global.website-files.com/649409997a1a98426b1aa230/6494204fe02b9ba4e337801e_Wireless%20Charger-p-800.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-6 ">
          <p className="text-md text-gray-500 font-semibold">Categories</p>
          <h2 className="text-4xl font-extrabold">Wireless Charger</h2>
          <p className="w-96 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            repellat delectus commodi est, ratione velit?
          </p>
          <ul className="list-disc ml-6 text-gray-500">
            <li>Etiam consequat neque et ligula dignissim sagittis</li>
            <li>
              Praesent vel nisl pretium, consectetur lectus eget, commodo odio
            </li>
            <li>Nullam in libero id turpis tempor dapibus</li>
          </ul>
          <p className="text-blue-600 font-bold">$35.00 USD</p>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 py-2 px-4 text-gray-100 font-bold rounded-md">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
