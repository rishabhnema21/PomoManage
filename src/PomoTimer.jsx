import React from "react";
import Timer from "./components/Timer";
import Todolist from "./components/Todolist";

const PomoTimer = () => {
  return (
    <>
      <div className="wrapper overflow-x-hidden select-none min-h-screen w-full bg-[#010118] text-gray-300">
        <div className="header sticky top-0 left-0 px-2 py-2 md:px-6 md:py-6">
          <div id="logo" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6 text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 3h12M6 21h12M8 3v2.586a2 2 0 0 0 .586 1.414L12 10l3.414-3.414A2 2 0 0 0 16 5.586V3M8 21v-2.586a2 2 0 0 1 .586-1.414L12 14l3.414 3.414A2 2 0 0 1 16 18.414V21"
              />
            </svg>
            <a className="text-sm md:text-xl z-40 font-bold tracking-tighter" href="#home">
              pomo
              <span className="bg-gradient-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                Manage
              </span>
            </a>
          </div>
        </div>

        <div className="w-full px-6 py-12 flex flex-col md:flex-row-reverse">
            <Timer />
            <Todolist />
        </div>

      </div>
    </>
  );
};

export default PomoTimer;
