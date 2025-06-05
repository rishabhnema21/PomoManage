import React from 'react'
import Logo from './Logo'
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
        <footer className="w-full px-6 py-6 border-t-[1px] border-slate-800 ">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 sm:justify-between px-4">
          <div className="left-part w-full text-center sm:text-start sm:w-1/2">
           <div className="w-full flex justify-center sm:justify-start sm:ml-1">
             <Logo />
           </div>

            <p className="w-full sm:w-1/2 text-sm ml-1 mt-2">Need a break? You’ve earned it. Work smart, rest well, and don’t forget to breathe.</p>

            <button
              onClick={() => navigate("/pomoTimer")}
              className="rounded-full mt-3 px-5 py-2 md:px-5 md:py-2 bg-gradient-to-br from-sky-950 to-green-800 hover:to-sky-700 transition ease-in-out duration-200"
            >
              Get Started
            </button>
          </div>

          <div className="w-full mt-5 sm:mt-0 sm:w-1/2 text-center sm:text-end">
            <h1 className="text-3xl">One <span className="text-sky-600 font-anton">Pomodoro</span> at a time!</h1>
            <button className="px-7 sm:px-9 sm:text-2xl hover:bg-sky-950 transition-all ease-in-out duration-200 rounded-2xl py-2 text-lg sm:py-3 bg-sky-900 mt-4">
              <FaGithub />
            </button>
            <div className="text-sm mt-3">
              <p>&copy; 2025 PomoManage. All rights reserved.</p>
              <p>Made with &#10084; by Rishabh Nema </p>
            </div>
            
          </div>
        </div>
      </footer>
  )
}

export default Footer