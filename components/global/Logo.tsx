import Link from "next/link";
import React from "react";
type LogoProps = {
  title?: string;
  href: string;
  labelShown?: boolean;
};
export default function Logo({ title, href, labelShown }: LogoProps) {
  return (
    <Link href={href} className="-m-1.5 p-1.5">
      {labelShown && <span className="sr-only"> {title}</span>}
      <img
        alt=""
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        className="h-8 w-auto"
      />
    </Link>
  );
}
