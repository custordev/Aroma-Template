import { ButtonDemo } from "@/components/Buy-Template";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  // console.log(session, "session in nav bar");
  return (
    <div>
      <div className="bg-[#F7F8FF] min-h-screen">
        <div className="py-4 lg:px-24 px-6">
          <Navbar session={session} />
          {children}
          <ButtonDemo />
        </div>
        <Footer />
      </div>
    </div>
  );
}
