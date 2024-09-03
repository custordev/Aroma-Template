import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/moving-border";
import Link from "next/link";
export type CustomLinkButtonProps = {
  title: string;
  href: string;
};
export default function CustomLinkButton({
  title,
  href,
}: CustomLinkButtonProps) {
  return (
    <Button
      borderRadius="1.5rem"
      className="bg-white  dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
    >
      <Link href={href}>{title}</Link>
    </Button>
  );
}
