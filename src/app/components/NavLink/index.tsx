"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkPropTypes } from "./types";

export const NavLink = ({ name, href }: NavLinkPropTypes) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`font-semibold text-lg relative group uppercase ${
        pathname === href ? "text-green-700" : "text-black"
      }`}
    >
      {name}
      <span
        className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all group-hover:w-full ${
          pathname === href ? "bg-green-700" : "bg-black-900"
        }`}
      ></span>
    </Link>
  );
};
