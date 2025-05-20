"use client";
import React, { useEffect, useState } from "react";
import { Menu, Sun, Moon, X } from "lucide-react"; // Added X icon for close
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { toggleTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Toggle mobile menu open/close
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu on link click (optional)
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-md fixed top-0 right-0 left-0 w-full z-50 header">
      <div className="mx-auto px-4 h-[50px] flex items-center justify-between relative">
        <div className="text-xl font-bold tracking-wide flex items-center gap-2">
          <span>🌿</span> <span>Meru University</span>
        </div>

        <div className="flex items-center gap-4 h-full relative ">
          {isMounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="text-white hover:text-blue-200 transition"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          {/* Desktop Links */}
          <div className="hidden md:grid grid-cols-3 gap-[1rem] ">
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
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden text-white z-50"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu with animation */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute top-[100%] left-[-3rem] bg-white rounded-b-md shadow-md flex flex-col md:hidden"
              >
                <Link
                  href="/user/task"
                  onClick={closeMenu}
                  className="text-green-700 hover:bg-green-100 font-medium py-3 px-4 text-sm shadow transition block"
                >
                  Dashboard
                </Link>

                <Link
                  href="/admin"
                  onClick={closeMenu}
                  className="text-blue-700 hover:bg-blue-100 font-medium py-3 px-4 text-sm shadow transition block"
                >
                  Admin
                </Link>

                <Link
                  href="/auth/login"
                  onClick={closeMenu}
                  className="text-green-700 hover:bg-green-100 font-medium py-3 px-4 text-sm shadow transition block"
                >
                  Login
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
