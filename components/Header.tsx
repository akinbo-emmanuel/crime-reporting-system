import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full py-3 px-1.5 md:px-10 lg:px-16 flex items-center justify-between bg-white">
      <Image
        src="https://www.npf.gov.ng/images/logo.png"
        alt="NPF logo"
        width={300}
        height={100}
      />

      <nav className="hidden md:block">
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/" className="hover:font-semibold hover:text-[#022444]">Home</Link>
          </li>
          <li>Admin</li>
          <li>
            <Link href="https://www.npf.gov.ng/">NPF</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
