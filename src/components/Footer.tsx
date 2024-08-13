import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-w1 border-t border-t-pDark/5 px-24">
      <div className="w-[85%] m-auto flex justify-between mb-8 gap-8 py-12">
        <div>
          <h5 className="text-sm font-bold text-p1 mb-3">About</h5>
          <ul className="list-none flex flex-col gap-4 text-base">
            <Link href={"#"}>Our Mission</Link>
            <Link href={"#"}>Our Vision</Link>
            <Link href={"#"}>Our Values</Link>
            <Link href={"#"}>Our Ministers</Link>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-bold text-p1 mb-3">Ministries</h5>
          <ul className="list-none flex flex-col gap-4 text-base">
            <Link href={"#"}>Evangelism/Outreach</Link>
            <Link href={"#"}>Youth</Link>
            <Link href={"#"}>C.E.U</Link>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-bold text-p1 mb-3">Media</h5>
          <ul className="list-none flex flex-col gap-4 text-base">
            <Link href={"#"}>Sermons</Link>
            <Link href={"#"}>Service Summary</Link>
            <Link href={"#"}>Events</Link>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-bold text-p1 mb-3">Join Us</h5>
          <ul className="list-none flex flex-col gap-4 text-base">
            <Link href={"#"}>Our Location</Link>
            <Link href={"#"}>Our Church</Link>
            <Link href={"#"}>Our Services</Link>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-bold text-p1 mb-3">Others</h5>
          <ul className="list-none flex flex-col gap-4 text-base">
            <Link href={"#"}>Lets pray with you</Link>
          </ul>
        </div>
      </div>
      <div className="border-t border-t-pDark/10 p-8 flex justify-between items-center">
        <div className="flex text-sm font-semibold">
          <p className="mr-2">
            19 Olatunji Ige Street, Ikosi Ketu, Lagos State, NG.
            &#127475;&#127468; |{" "}
          </p>
          <Link href="mailto:gofamintketuassembly@gmail.com" className="text-s3">
            gofamintketuassembly@gmail.com
          </Link>
        </div>
        <div className="flex gap-8">
          <Link href={"#"}>
            <IoLogoYoutube size={25} />
          </Link>
          <Link href={"#"}>
            <FaSquareFacebook size={25} />
          </Link>
          <Link href={"#"}>
            <AiFillInstagram size={25} />
          </Link>
        </div>
      </div>
      <div className="text-sm w-[80%] m-auto text-center border-t border-t-pDark/5 p-8">
        <span className="text-amber-500 font-bold relative inline-flex items-center shiny-text">
          Celebrating 50 years of Gods faithfulness
        </span>{" "}
        | © 2024 GOFAMINT KETU ASSEMBLY. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
