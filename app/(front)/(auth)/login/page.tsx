import LoginForm from "@/components/forms/LoginForm";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);
  // console.log(session);
  if (session) {
    redirect("/shop");
  }
  return (
    <section>
      <div className="md:container px-4 md:px-0">
        <div className="border-gray-200 dark:border-gray-700 max-w-md mx-auto border my-3 shadow rounded-md ">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
