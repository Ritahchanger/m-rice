"use client";

import React, { useEffect, useState } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext/ThemeContext";

const Navbar = () => {
  const { toggleTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-md fixed top-0 right-0 left-0 w-full z-50 header">
      <div className="mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold tracking-wide flex items-center gap-2">
          <span>🌿</span> <span>Meru University</span>
        </div>

        <div className="flex items-center gap-4">
          {isMounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="text-white hover:text-blue-200 transition"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          <Link
            href="/dashboard"
            className="bg-white text-green-700 hover:bg-green-100 font-medium py-1.5 px-4  text-sm shadow transition"
          >
            Dashboard
          </Link>

          <Link
            href="/admin"
            className="bg-white text-blue-700 hover:bg-blue-100 font-medium py-1.5 px-4 text-sm shadow transition"
          >
            Admin
          </Link>

          <Link
            href="/auth/login"
            className="bg-white text-green-700 hover:bg-green-100 font-medium py-1.5 px-4 text-sm shadow transition"
          >
            Login
          </Link>

          <button className="md:hidden text-white" aria-label="Toggle Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
