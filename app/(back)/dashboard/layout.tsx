import Header from "@/components/backend/Header";
import SlideBar from "@/components/backend/SlideBar";
import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";
export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="lg:block max-w-full border-r bg-muted/40   ">
        <SlideBar />
      </div>
      <div className="flex flex-col ">
        <Header />
        {children}
      </div>
    </div>
  );
}
