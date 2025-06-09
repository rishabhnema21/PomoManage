import React, { useEffect, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoPlayForwardSharp } from "react-icons/io5";
import { RiResetLeftLine } from "react-icons/ri";
import { Howl } from "howler";
import bell from "../assets/bell.mp3";
import clock from "../assets/clock.mp3";

const durations = {
  short: 5 * 60,
  long: 30 * 60,
};

const clockSound = new Howl({
  src: [clock],
  volume: 0.3,
  loop: true,
});

const bellSound = new Howl({
  src: [bell],
});

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [focusDuration, setFocusDuration] = useState(25 * 60);
  const [timeLeft, setTimeLeft] = useState(focusDuration);
  const [focusCount, setFocusCount] = useState(0);
  const [phase, setPhase] = useState("focus");
  

  // Effect to manage the timer countdown sound
  useEffect(() => {
    if (!isRunning) {
      clockSound.pause();
      return;
    }

    clockSound.play();

    // Countdown logic: decrease time every second
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          handlePhaseEnd(); // Phase ends when time reaches zero
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup the interval on unmount or when isRunning changes

    return () => clearInterval(interval);
  }, [isRunning]);

  const handlePhaseEnd = () => {
    setIsRunning(false);
    bellSound.play();

        // This is the countdown interval (when the timer switches between the durations, it will make a short delay)

    setTimeout(() => {
      if (phase === "focus") {
        const newCount = focusCount + 1;

        if (newCount % 4 === 0) {
          setFocusCount(newCount);
          switchPhase("long");
        } else {
          setFocusCount(newCount);
          switchPhase("short");
        }
      } else switchPhase("focus");
    }, 1600);
  };

  // switching between phases (focus | short | long)
  const switchPhase = (newPhase) => {
    setPhase(newPhase);
    setIsRunning(true);
    setTimeLeft(newPhase === "focus" ? focusDuration : durations[newPhase]);
  };


  // Starts or pauses the timer
  const toggleTimer = () => {
    setIsRunning((prev) => {
      const newIsRunning = !prev;

      if (newIsRunning) {
        clockSound.play();
      } else clockSound.pause();

      return newIsRunning;
    });
  };

  const resetTimer = () => {
    setIsRunning(false);
    clockSound.pause();
    setFocusCount(0);
    setPhase("focus");
    setTimeLeft(focusDuration);
  };

  const handleSkip = () => {
    handlePhaseEnd();
    bellSound.play();
  };

  const getLabel = () => {
    switch (phase) {
      case "focus":
        return "Focus";
      case "short":
        return "Short";
      case "long":
        return "Long";
    }
  };

    // Convert timeLeft into MM:SS format
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="timer-container py-8 w-full md:w-1/2 flex-col justify-center items-center text-center ">
      <button className="border-[1px] border-sky-400 text-sm sm:text-md md:text-base px-5 py-1 rounded-2xl">
        {getLabel()}
      </button>
      <div className="timer-display">
        <h1 className="text-[5rem] sm:text-8xl md:text-9xl lg:text-[10rem] tracking-wide leading-none font-sans">
          {minutes}:{seconds}
        </h1>
      </div>
      <div className="ctrl-buttons mt-5 md:mt-8 flex justify-center items-center gap-2 md:gap-4">
        <button
          onClick={resetTimer}
          className="px-3 py-3 md:px-4 md:py-4 cursor-pointer bg-gradient-to-br from-sky-950 to-green-800 hover:to-sky-700 transition ease-in-out duration-200 rounded-2xl border-none"
        >
          <RiResetLeftLine />
        </button>
        <button
          onClick={toggleTimer}
          className="px-4 py-4 md:px-6 md:py-6 cursor-pointer bg-gradient-to-br from-sky-950 to-green-800 hover:to-sky-700 transition ease-in-out duration-200 rounded-2xl border-none"
        >
          {isRunning ? <FaPause /> : <FaPlay />}
        </button>
        <button
          onClick={handleSkip}
          className="px-3 py-3 md:px-4 md:py-4 cursor-pointer bg-gradient-to-br from-sky-950 to-green-800 hover:to-sky-700 transition ease-in-out duration-200 rounded-2xl border-none"
        >
          <IoPlayForwardSharp />
        </button>
      </div>

      <div className="my-4">
        <label className="text-slate-300 mr-2" htmlFor="">
          Focus Duration:{" "}
        </label>
        <select
          value={focusDuration}
          onChange={(e) => {
            const newDuration = Number(e.target.value);
            setFocusDuration(newDuration);
            if (phase === "focus") {
              setTimeLeft(newDuration);
            }
          }}
          className="text-[#02022d] font-semibold bg-gradient-to-br from-sky-400 to-green-800  outline-none px-1 py-1 rounded"
        >
          <option value={25 * 60}>25 min</option>
          <option value={45 * 60}>45 min</option>
          <option value={55 * 60}>55 min</option>
        </select>
      </div>
    </div>
  );
};

export default Timer;
