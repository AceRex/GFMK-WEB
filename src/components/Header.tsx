import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "../assets/image/unnamed (1).png";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-w2 shadow-2xl z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" className="h-12 w-12 object-contain" />
        </div>
        <nav className="hidden md:flex space-x-8 text-sm">
          <Link href="/sermons" className="text-pDark/70 hover:text-pDark hover:font-semibold transition-all duration-300">
            Sermon
          </Link>
          <Link href="/daily-devotion" className="text-pDark/70 hover:text-pDark hover:font-semibold transition-all duration-300">
            Daily Devotion
          </Link>
          <Link href="/blog" className="text-pDark/70 hover:text-pDark hover:font-semibold transition-all duration-300">
            Blog
          </Link>
          <Link href="/about" className="text-pDark/70 hover:text-pDark hover:font-semibold transition-all duration-300">
            About
          </Link>
          <Link href="/ministers" className="text-pDark/70 hover:text-pDark hover:font-semibold transition-all duration-300">
            Meet our Ministers
          </Link>
        </nav>
        <div className="flex md:hidden">
          <CiMenuBurger size={24} aria-label="Menu" />
        </div>
      </div>
    </header>
  );
}

export default Header;
