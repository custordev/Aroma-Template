import NextAuth from "next-auth";
import { UserRole } from "@prisma/client";
import type { DefaultUser, User } from "next-auth";
import "next-auth/jwt";
type UserId = string;

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    role: UserRole;
    firstName: string;
    lastName: string;
    phone: string;
  }
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User & {
      id: UserId;
      role: UserRole;
      firstName: string;
      lastName: string;
      phone: string;
    } & DefaultUser["user"];
  }
  interface User {
    id: String;
    role: UserRole;
    firstName: string;
    lastName: string;
    phone: string;
  }
}
