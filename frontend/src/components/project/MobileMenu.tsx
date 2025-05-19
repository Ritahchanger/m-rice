import React from "react";

import Link from "next/link";

const MobileMenu = () => {
  return (
    <div>
      <div className="flex flex-col absolute md:hidden top-[100%]">
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
    </div>
  );
};

export default MobileMenu;
