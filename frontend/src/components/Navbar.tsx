"use client";

import React, { useEffect, useState } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext/ThemeContext";

const Navbar = () => {
  const { toggleTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false); // ensures client-side only

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="bg-green-600 text-white shadow-md fixed top-0 right-0 left-0 w-full z-50">
      <div className="mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-semibold tracking-wide">🌿 M & E</div>

        <div className="flex items-center gap-4">
          {/* Render icons only after client-side mount to avoid hydration mismatch */}
          {isMounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="text-white hover:text-emerald-200 transition"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          <Link
            href="/auth/login"
            className="bg-white text-emerald-600 hover:bg-emerald-100 font-medium py-1.5 px-4 rounded transition text-sm"
          >
            Login
          </Link>

          <button
            className="md:hidden text-white"
            aria-label="Toggle Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
