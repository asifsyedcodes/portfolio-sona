"use client"
import { HiDocumentText, HiMail } from "react-icons/hi";
import { RiLinkedinBoxFill } from "react-icons/ri";
import Link from "next/link";

export const Footer = () => {

  return (
    <div className="mt-auto w-full bg-green-300 py-5 flex items-center justify-center gap-3">
      {/* TODO -> Resume */}
      <Link
        href="https://www.linkedin.com/in/sonasathar/"
        target="_blank"
        className="p-2 rounded-full bg-green-100 flex items-center justify-center justify-center transform transition-transform duration-300 ease-in-out hover:rotate-12"
      >
        <HiDocumentText className="h-6 w-6 text-green-900" />
      </Link>

      <Link
        href="https://www.linkedin.com/in/sonasathar/"
        target="_blank"
        className="p-2 rounded-full bg-green-100 flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:rotate-12"
      >
        <RiLinkedinBoxFill className="h-6 w-6 text-green-900" />
      </Link>

      <Link
        href="mailto:sonasathar@gmail.com"
        target="_blank"
        className="p-2 rounded-full bg-green-100 flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:rotate-12"
      >
        <HiMail className="h-6 w-6 text-green-900" />
      </Link>
    </div>
  );
};

