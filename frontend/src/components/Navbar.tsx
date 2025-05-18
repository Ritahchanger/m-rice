import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-emerald-600 text-white shadow-md">
      <div className="mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-semibold tracking-wide">🌿 M & E</div>
        {/* <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:text-emerald-200 transition">
            Home
          </a>
          <a href="#" className="hover:text-emerald-200 transition">
            Projects
          </a>
          <a href="#" className="hover:text-emerald-200 transition">
            About
          </a>
          <a href="#" className="hover:text-emerald-200 transition">
            Contact
          </a>
        </nav> */}
        <div className="flex items-center gap-4">
          <Link
            href="/auth/login"
            className="bg-white text-emerald-600 hover:bg-emerald-100 font-medium py-1.5 px-4 rounded transition text-sm"
          >
            Login
          </Link>
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
