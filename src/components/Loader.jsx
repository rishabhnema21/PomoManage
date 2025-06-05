import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#060c25] text-white transition-opacity duration-500">
      <h1 className="text-2xl animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4 md:w-6 md:h-6 text-center text-blue-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 3h12M6 21h12M8 3v2.586a2 2 0 0 0 .586 1.414L12 10l3.414-3.414A2 2 0 0 0 16 5.586V3M8 21v-2.586a2 2 0 0 1 .586-1.414L12 14l3.414 3.414A2 2 0 0 1 16 18.414V21"
          />
        </svg>
        Loading...
      </h1>
    </div>
  );
};

export default Loader;
