"use client";
import Lottie from "lottie-react";
import React from "react";
import LoaderAnimation from "../public/loading.json";
export default function Loading() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[400px] ">
          <Lottie animationData={LoaderAnimation} />
        </div>
        {/* <div className="pt-4">
          <p className="text-muted-foreground text-sm">Loading...</p>
        </div> */}
      </div>
    </div>
  );
}
