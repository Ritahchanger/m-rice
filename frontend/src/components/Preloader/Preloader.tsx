// src/components/Preloader/Preloader.tsx
import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col justify-center items-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-700 text-sm font-medium animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Preloader;
