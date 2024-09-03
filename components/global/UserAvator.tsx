"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutDashboard, LogOut, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getInitials } from "@/lib/generateInitials";
import { Session } from "next-auth";
import LogoutBtn from "./LogoutBtn";

export default function UserAvatar({ session }: { session: Session | null }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button>
          {session?.user?.picture ? (
            <Image
              src="/profile.JPG"
              alt="User profile"
              width={200}
              height={200}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <div className="w-10 h-10 p-4 flex items-center justify-center rounded-full bg-slate-50 text-black dark:text-white dark:bg-slate-800 shadow-md border border-slate-600">
              {getInitials(session?.user?.name)}
            </div>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="py-2 px-4 pr-8">
        <div>
          <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
          <DropdownMenuLabel>{session?.user?.email}</DropdownMenuLabel>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/dashboard" className="flex items-center space-x-2">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/dashboard/profile"
            className="flex items-center space-x-2"
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Edit Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogoutBtn />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
