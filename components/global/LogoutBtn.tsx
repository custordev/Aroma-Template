"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function LogoutBtn() {
  const router = useRouter();
  async function handleLogout() {
    try {
      await signOut();
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button onClick={handleLogout} className="flex items-center space-x-2">
        <LogOut className="mr-2 h-4 w-4" />

        <span>Logout</span>
      </button>
    </div>
  );
}
