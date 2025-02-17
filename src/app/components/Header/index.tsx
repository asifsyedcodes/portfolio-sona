"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="text-white px-8 py-3">
      <nav className="flex w-full justify-between items-center">
        <Link href="/" className="">
          <Image alt="logo" src={"/assets/logo.png"} width={80} height={80} />
        </Link>
        <div className="px-8 flex gap-6">
          <Link
            href="/about"
            className={`font-semibold text-lg ${
              pathname === "/about"
                ? "text-green-700"
                : "text-black hover:text-gray-700"
            }`}
          >
            ABOUT
          </Link>
          <Link
            href="/portfolio"
            className={`font-semibold text-lg ${
              pathname === "/portfolio"
                ? "text-green-700"
                : "text-black hover:text-gray-700"
            }`}
          >
            PORTFOLIO
          </Link>
        </div>
      </nav>
    </header>
  );
};
