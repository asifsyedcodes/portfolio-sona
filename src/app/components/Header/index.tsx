import Image from "next/image";
import Link from "next/link";
import { NavLink } from "../NavLink";

export const Header = () => {
  return (
    <header className="text-white px-4 md:px-8 py-3">
      <nav className="flex w-full justify-between items-center">
        <Link href="/" className="animate-slide-from-top">
          <Image alt="logo" src={"/assets/logo.svg"} width={90} height={80} />
        </Link>
        <div className="flex gap-6">
          <NavLink name="About" href="/about" />
          <NavLink name="Portfolio" href="/portfolio" />
        </div>
      </nav>
    </header>
  );
};
