import React from 'react'
import time from "../assets/time.svg";

const Quote = () => {
  return (
          <section className="w-full flex-col gap-5 md:gap-0 md:flex-row flex justify-evenly items-center px-6 py-16 bg-gradient-to-br from-[#030009] via-[#002761] to-[#000d18]">
        <div className="w-full md:w-1/2 ">
          <blockquote className="text-5xl md:text-7xl relative font-anton tracking-wide italic text-gray-300">
            <svg
              className="w-50 h-50 absolute -top-4 opacity-20 text-[#868686] mb-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <p>Your future is created by what you do today, not tomorrow.
              <br />
              <span className="text-2xl text-end">&mdash;Robert Kiyosaki</span>
            </p>
          </blockquote>
        </div>

          <img className="w-[70%] md:w-[35%]" src={time} alt="" />
        
      </section>
  )
}

export default Quote