import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto space-y-3 flex flex-col justify-center items-center py-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Page Not Found
      </h1>
      <div className="">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-balance">
          The page your looking for does not exist
        </h2>
      </div>
      <p className="max-w-xl">
        You must have typed in a wrong address or the page was removed, in the
        meantime try again or{" "}
        <Link href={"/"} className="text-blue-600">
          return to the home page
        </Link>
      </p>
      <Image
        className="w-96"
        src="/404.jpg"
        width={740}
        height={740}
        alt="404"
      />
    </div>
  );
}
