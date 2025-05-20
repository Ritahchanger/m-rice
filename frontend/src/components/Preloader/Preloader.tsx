// src/components/Preloader/Preloader.tsx
import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col justify-center items-center">
      <div className="w-16 h-16 border-4 border-green-600 border-t-blue-600 rounded-full animate-spin"></div>
      <div className="mt-6 text-center">
        <h1 className="text-2xl font-extrabold text-green-800 tracking-wide">
          Meru University
        </h1>
        <p className="mt-1 text-base text-blue-700 font-semibold animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Preloader;
