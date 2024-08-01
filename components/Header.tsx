"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo-cropped.png";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed w-full py-3 px-1.5 bg-white">
      <div className="md:container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="NPF logo" width={60} height={60} />

          <div className="flex flex-col font-extrabold text-lg text-[#022444]">
            <p>BADAGRY LGA</p>
            <p>CRIME REPORTING SYSTEM</p>
          </div>
        </div>

        {/* MOBILE */}
        <Popover>
          <PopoverTrigger>
            <Menu className="md:hidden" size={35} />
          </PopoverTrigger>
          <PopoverContent className="w-32">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname === "/" ? "font-bold text-[#022444]" : ""
                  } hover:font-semibold hover:text-[#022444]`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/check-status"
                  className={`${
                    pathname === "/check-status"
                      ? "font-bold text-[#022444]"
                      : ""
                  } hover:font-semibold hover:text-[#022444]`}
                >
                  Check Status
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className={`${
                    pathname === "/contact-us" ? "font-bold text-[#022444]" : ""
                  } hover:font-semibold hover:text-[#022444]`}
                >
                  Contact Us
                </Link>
              </li>

              {/* ADMIN */}
              <li>
                <Link
                  href="/admin"
                  className={`${
                    pathname === "/admin" ? "font-bold text-[#022444]" : ""
                  } hover:font-semibold hover:text-[#022444]`}
                >
                  Admin
                </Link>
              </li>
            </ul>
          </PopoverContent>
        </Popover>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "font-bold text-[#022444]" : ""
                } hover:font-semibold hover:text-[#022444]`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/check-status"
                className={`${
                  pathname === "/check-status" ? "font-bold text-[#022444]" : ""
                } hover:font-semibold hover:text-[#022444]`}
              >
                Check Status
              </Link>
            </li>

            {/* CONTACT US */}
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/contact-us" ? "font-bold text-[#022444]" : ""
                } hover:font-semibold hover:text-[#022444]`}
              >
                Contact Us
              </Link>
            </li>

            {/* ADMIN */}
            <li>
              <Link
                href="/admin"
                className={`${
                  pathname === "/admin" ? "font-bold text-[#022444]" : ""
                } hover:font-semibold hover:text-[#022444]`}
              >
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
