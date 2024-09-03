import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

import Link from "next/link";
import LogoutBtn from "./LogoutBtn";
import { getInitials } from "@/lib/generateInitials";
import { Session } from "next-auth";

export default function AuthenticatedAvatar({
  session,
}: {
  session: Session | null;
}) {
  return (
    <div className="flex relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer absolute">
          <div>
            {/* Wrap the Button and Avatar inside a div */}
            {/* <Button variant="outline">Open</Button> */}
            <Avatar>
              <AvatarImage src={session?.user?.picture} alt={""} />
              <AvatarFallback>
                {getInitials(session?.user?.name)}
              </AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>
            <p>{session?.user?.name}</p>
            <p className="text-xs text-muted-foreground">
              {session?.user?.email}
            </p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/dashboard/edit">Edit</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutBtn />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
