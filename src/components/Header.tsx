import Image from "next/image";
import React from "react";
import Logo from "../assets/image/unnamed (1).png";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

function Header() {
  return (
    <div className="h-12 mb-2">
      <div className="fixed flex px-12 items-center place-content-center p-3 bg-w2 z-50 shadow-2xl w-full ">
        <div className="w-[40%]">
          <div className="w-50 bg-red overflow-hidden">
            <Image src={Logo} alt="Logo" className="w-12 h-12 object-contain" />
          </div>
        </div>
        <div className="w-[55%] flex gap-4 list-none text-sm cursor-pointer ">
          <Link
            href={"/sermon"}
            className=" text-pDark/70 transition delay-700 duration-300 ease-in-out hover:text-pDark hover:font-semibold"
          >
            Sermon
          </Link>
          <Link
            href={"/sermon"}
            className=" text-pDark/70 hover:transition hover:delay-700 hover:duration-300 hover:ease-in-out hover:text-pDark hover:font-semibold"
          >
            Daily Devotion
          </Link>
          <Link
            href={"/sermon"}
            className=" text-pDark/70 hover:transition hover:delay-700 hover:duration-300 hover:ease-in-out hover:text-pDark hover:font-semibold"
          >
            Blog
          </Link>
          <Link
            href={"/sermon"}
            className=" text-pDark/70 hover:transition hover:delay-700 hover:duration-300 hover:ease-in-out hover:text-pDark hover:font-semibold"
          >
            About
          </Link>
          <Link
            href={"/sermon"}
            className=" text-pDark/70 hover:transition hover:delay-700 hover:duration-300 hover:ease-in-out hover:text-pDark hover:font-semibold"
          >
            Meet our Ministers
          </Link>
        </div>
        <div className="w-[5%]">
          <CiMenuBurger size={23} />
        </div>
      </div>
    </div>
  );
}

export default Header;
