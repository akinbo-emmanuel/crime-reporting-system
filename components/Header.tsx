import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo-cropped.png";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed w-full py-3 px-1.5 md:px-10 lg:px-16 flex items-center justify-between bg-white">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="NPF logo" width={60} height={60} />

        <div className="flex flex-col font-extrabold text-lg text-[#022444]">
          <p>BADAGRY LGA</p>
          <p>CRIME REPORTING SYSTEM</p>
        </div>
      </div>

      <Menu className="md:hidden" size={35}/>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/" className="hover:font-semibold hover:text-[#022444]">
              Home
            </Link>
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
