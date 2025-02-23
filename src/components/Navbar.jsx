import Link from "next/link";

export default function Navbar() {
  const user = true;

  return (
    <nav className="h-24 flex items-center justify-around">
      <Link href={"/"} className="text-4xl font-black">
        PLAY<span className="text-[#45F882]">GRID</span>
      </Link>
      <div className="flex items-center gap-10">
        <ul className="flex gap-5 font-semibold">
          <Link
            href={"#"}
            className="transition duration-300 ease-in-out hover:text-[#45F882]">
            <li>Home</li>
          </Link>
          <Link
            href={"#"}
            className="transition duration-300 ease-in-out hover:text-[#45F882]">
            <li>Store</li>
          </Link>
          <Link
            href={"#"}
            className="transition duration-300 ease-in-out hover:text-[#45F882]">
            <li>Library</li>
          </Link>
          <Link
            href={"#"}
            className="transition duration-300 ease-in-out hover:text-[#45F882]">
            <li>E-Sports</li>
          </Link>
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
