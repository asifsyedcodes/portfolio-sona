"use client";

import Link from "next/link"
import { variantStyles } from "./styles";
import { ButtonLinkPropTypes } from "./types";

export const ButtonLink = ({
  id,
  name,
  variant = "primary",
  href,
  children,
}: ButtonLinkPropTypes) => {
  return (
    <Link
      id={id}
      aria-label={name}
      href={href}
      className={`px-3 py-2 text-center text-lg rounded-2xl min-w-28 border transition-colors duration-300 ${variantStyles[variant]}`}
    >
      {children}
    </Link>
  );
};
