import { PlusCircle } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
export type LinkButtonProps = {
  linkText: string;
  href: string;
};
export default function LinkButton({ href, linkText }: LinkButtonProps) {
  return (
    <Button className="bg-white  flex gap-1 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
      <PlusCircle />
      <Link href={href}>{linkText}</Link>
    </Button>
  );
}
