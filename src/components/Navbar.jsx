"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const user = true;
  const pathName = usePathname();

  return (
    <nav className="w-full h-28 flex items-center justify-around fixed z-10">
      <Link href={"/"} className="text-4xl font-black">
        PLAY<span className="text-[#45F882]">GRID</span>
      </Link>
      <div className="flex items-center gap-10">
        <ul className="flex gap-5 font-semibold">
          <li>
            <Link
              href={"/"}
              className={`transition duration-300 ease-in-out hover:text-[#45F882] ${
                pathName === "/" ? "text-[#45F882]" : ""
              }`}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className={`transition duration-300 ease-in-out hover:text-[#45F882] ${
                pathName === "/store" ? "text-[#45F882]" : ""
              }`}>
              Store
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className={`transition duration-300 ease-in-out hover:text-[#45F882] ${
                pathName === "/library" ? "text-[#45F882]" : ""
              }`}>
              Library
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className={`transition duration-300 ease-in-out hover:text-[#45F882] ${
                pathName === "/esports" ? "text-[#45F882]" : ""
              }`}>
              E-Sports
            </Link>
          </li>
        </ul>
        {user && (
          <div className="inline-flex text-xs  font-semibold space-x-2 border border-[#45F882] rounded-full">
            <Link
              href={"#"}
              className="py-2 px-4 transition duration-300 ease-in-out hover:text-[#45F882]">
              LOGIN
            </Link>
            <span className="w-0.5 bg-[#45F882]/70"></span>
            <Link
              href={"#"}
              className="py-2 px-4 transition duration-300 ease-in-out hover:text-[#45F882]">
              SIGN UP
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
