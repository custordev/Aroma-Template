"use client";
import store from "@/app/store/store";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}

export default Providers;
