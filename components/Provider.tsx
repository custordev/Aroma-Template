"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <>
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </>
    </SessionProvider>
  );
}
