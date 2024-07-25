import Link from "next/link";
import React from "react";

export default function LogoComponent() {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Your Company</span>
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
        Aroma
      </h1>
    </Link>
  );
}
