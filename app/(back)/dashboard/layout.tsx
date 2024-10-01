import Header from "@/components/backend/Header";
import SlideBar from "@/components/backend/SlideBar";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import React, { ReactNode } from "react";
export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="lg:block max-w-full border-r bg-muted/40   ">
        <SlideBar />
      </div>
      <div className="flex flex-col ">
        <Header session={session}/>
        {children}
      </div>
    </div>
  );
}
