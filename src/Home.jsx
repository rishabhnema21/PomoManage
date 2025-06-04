import React, { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import hourglass from "./assets/hourglass.png";
import image01 from "./assets/image01.png";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import FeatureCard from "./components/FeatureCard";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Quote from "./components/Quote";
import { useNavigate } from "react-router-dom";
import Logo from "./components/Logo.jsx";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  const ref = useRef(null);
  const navigate = useNavigate();


  const featureDetails = [
    {
      icon: <CiClock2 />,
      title: "Structured Pomodoro Timer",
      description:
        "Maintain deep focus with a customizable Pomodoro timer that structures your work into manageable intervals, helping you avoid burnout and improve efficiency.",
    },

    {
      icon: <MdOutlineFreeBreakfast />,
      title: "Smart Break Reminders",
      description:
        "Stay energized and prevent fatigue with intelligent break reminders that adapt to your session patterns, ensuring timely rest without breaking your flow.",
    },

    {
      icon: <SiSimpleanalytics />,
      title: "Persistent Productivity",
      description:
        "Your tasks and focus sessions are safely stored in your browser using local storage, so you can return anytime without losing progress — no login needed.",
    },
  ];

  return (
    <div className="wrapper scroll-smooth select-none min-h-screen w-full text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}

      <section
        id="home"
        className="flex flex-col items-center justify-center gap-10 px-6 pt-16 pb-8 text-center relative"
      >
        {/* Hourglass Image */}

        <div className="absolute -top-14 opacity-30 left-1/2 -translate-x-1/2 lg:left-1/3 lg:-top-32 w-72 md:w-64 lg:w-100 rotate-[20deg] z-10 md:opacity-90">
          <img src={hourglass} alt="hourglass" className="w-full h-auto" />
        </div>

        {/* Headings */}
        <div>
          <h1 className="text-7xl sm:text-7xl md:text-7xl lg:text-9xl font-anton bg-gradient-to-r from-sky-400 via-indigo-600 to-indigo-950 bg-clip-text text-transparent leading-tight">
            Stay Focused,
          </h1>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-anton bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent mt-4">
            Work Smarter.
          </h1>
        </div>

        {/* Quote */}
        <div className="max-w-xl md:mt-3 px-4 md:px-0 relative">
          <RiDoubleQuotesL className="text-sky-500 hidden md:visible text-md md:text-xl absolute -left-4 -top-4" />
          <p className="text-sm md:text-md bg-gradient-to-r from-sky-400 via-indigo-600 to-sky-700 bg-clip-text text-transparent">
            Manage your time with the Pomodoro technique. Stay on task, beat
            distractions, and get more done — one timer at a time.
          </p>
          <RiDoubleQuotesR className="text-sky-500 hidden md:visible text-md md:text-xl absolute -right-4 -bottom-4" />
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/pomoTimer")}
          className="rounded-full px-5 py-2 md:px-5 md:py-2 bg-gradient-to-br from-sky-950 to-green-800 hover:to-sky-700 transition ease-in-out duration-200"
        >
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen w-full mt-10 px-6 py-14">
        <h4 className="text-center text-sm opacity-50 tracking-wide">About</h4>
        <h1 className="text-center text-3xl sm:text-4xl mt-2">
          What is{" "}
          <span className="font-anton bg-gradient-to-r from-sky-400 via-indigo-600 to-sky-700 bg-clip-text text-transparent">
            Pomodoro?
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={image01}
              alt="Pomodoro Illustration"
              className="w-3/4 sm:w-2/3 md:w-[70%] contrast-125"
            />
          </div>

          {/* Text */}
          <div className="lg:pr-12">
            <h2 className="text-2xl sm:text-3xl text-center mb-5 font-anton">
              Small Sprints. Big{" "}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-600 to-sky-700 bg-clip-text text-transparent">
                Wins.
              </span>
            </h2>
            <p className="text-center text-sm tracking-wide sm:text-lg">
              The Pomodoro Technique is a mindful productivity method where you
              work in 25-minute sprints, followed by short rest breaks. It’s not
              just a timer — it’s a rhythm. A way to stay focused, fight
              burnout, and actually enjoy the work you do. With every tick,
              you're not rushing — you're flowing.
            </p>

            <h2 className="text-2xl sm:text-3xl text-center mt-14 mb-5 font-anton">
              How Pomodoro{" "}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-600 to-sky-700 bg-clip-text text-transparent">
                Works?
              </span>
            </h2>
            <p className="text-center text-sm tracking-wide sm:text-lg">
              🧠 Sharpen your focus <br />
              🕰️ Manage your time wisely <br />
              🔄 Build consistency <br />
              🌿 Avoid burnout <br />✅ Get more done, stress-free
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="min-h-screen w-full mt-10 px-6 py-16">
        <h4 className="text-center text-sm opacity-50 tracking-wide">
          Features
        </h4>
        <h1 className="text-center text-3xl sm:text-4xl mt-2">
          Your Focus{" "}
          <span className="font-anton bg-gradient-to-r from-sky-400 via-indigo-600 to-sky-700 bg-clip-text text-transparent">
            Toolkit
          </span>
        </h1>

        <div className="feature-container my-9 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featureDetails.map((detail, idx) => (
            <FeatureCard key={idx} data={detail} reference={ref} />
          ))}
        </div>
      </section>

      <Quote />

      {/* Frequently Asked Questions */}
      <Faq />

      {/* Contact Section */}
      <Contact />

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
    </div>
  );
};

export default Home;
