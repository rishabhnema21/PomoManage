import React, { useEffect, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoPlayForwardSharp } from "react-icons/io5";
import { RiResetLeftLine } from "react-icons/ri";

const durations = {
    focus: 25 * 60,
    short: 5 * 60,
    long: 30 * 60,
}

const Timer = () => {

  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(durations.focus);
  const [cycles, setCycles] = useState(0);
  const [phase, setPhase] = useState("focus");

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handlePhaseEnd = () => {
    setIsRunning(false);

    if (phase === "focus") {
        setCycles(prev => {
            const updatedCycles = prev + 1;

            if (updatedCycles % 4 === 0) {
                switchPhase("long");
            } else switchPhase("short");

            return updatedCycles;
        });
    }
    else switchPhase("focus")
  }

  const switchPhase = (newPhase) => {
    setPhase(newPhase);
    setIsRunning(true);
    setTimeLeft(durations[newPhase]);
  } 

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setCycles(0);
    setPhase("focus");
    setTimeLeft(durations.focus);
  };

  const handleSkip = () => {
    handlePhaseEnd();
  }

  const getLabel = () => {
    switch(phase) {
        case "focus" :
            return "Focus";
        case "short" :
            return "Short";
        case "long" :
            return "Long";
    }
  }

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="timer-container py-8 w-1/2 flex-col justify-center items-center text-center ">
      <button className="border-[1px] border-sky-400 px-5 py-1 rounded-2xl">{getLabel()}</button>
      <div className="timer-display">
        <h1 className="text-[10rem] tracking-wide leading-none font-sans">
          {minutes}:{seconds}
        </h1>
      </div>
      <div className="ctrl-buttons mt-8 flex justify-center items-center gap-4">
        <button
          onClick={resetTimer}
          className="px-4 py-4 cursor-pointer bg-gradient-to-br from-sky-950 to-green-800 hover:to-sky-700 transition ease-in-out duration-200 rounded-2xl border-none"
        >
          <RiResetLeftLine />
        </button>
        <button
          onClick={toggleTimer}
          className="px-6 py-6 cursor-pointer bg-gradient-to-br from-sky-950 to-green-800 hover:to-sky-700 transition ease-in-out duration-200 rounded-2xl border-none"
        >
          {isRunning ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={handleSkip} className="px-4 py-4 cursor-pointer bg-gradient-to-br from-sky-950 to-green-800 hover:to-sky-700 transition ease-in-out duration-200 rounded-2xl border-none">
          <IoPlayForwardSharp />
        </button>
      </div>
    </div>
  );
};

export default Timer;
