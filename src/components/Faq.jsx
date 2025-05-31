// Faq.jsx
import React, { useState } from "react";
import FaqItem from "./FaqItem";

const Faq = () => {
  const faqDetail = [
    {
      question: "What is the Pomodoro Technique?",
      answer:
        "The Pomodoro Technique is a time management method where you work in focused intervals (usually 25 minutes) followed by short breaks. It helps improve focus, reduce mental fatigue, and boost productivity.",
    },
    {
      question: "How long is a Pomodoro session?",
      answer:
        "A standard Pomodoro session is 25 minutes of focused work, followed by a 5-minute break. After four Pomodoros, you take a longer break of 15–30 minutes.",
    },
    {
      question: "Can I customize the timer durations?",
      answer:
        "Yes! You can adjust the length of work sessions, short breaks, and long breaks according to your preference.",
    },
    {
      question: "Do I need to sign up to use the timer?",
      answer:
        "No, signup is not required. You can start using the timer right away without creating an account.",
    },
    {
      question: "Will my progress be saved?",
      answer:
        "Basic progress is stored locally in your browser using local storage. It will reset if you clear your browser data or use a different device.",
    },

    {
      question: "How is this different from a regular timer?",
      answer:
        "This timer is tailored specifically for the Pomodoro Technique. It includes automatic break management, session counting, and a distraction-free interface designed to enhance focus.",
    },

  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section w-full px-6 pt-5 pb-8">
      <h4 className="text-center text-sm opacity-50 tracking-wide">FAQ</h4>
      <h1 className="text-center text-3xl sm:text-4xl mt-2">
        Got{" "}
        <span className="font-anton bg-gradient-to-r from-sky-400 via-indigo-600 to-sky-700 bg-clip-text text-transparent">
          Doubts?
        </span>
      </h1>

      <div className="faq-container w-full flex justify-center items-center mt-8 py-2">
        <div className="faq-box w-full md:w-[50%] flex flex-col justify-center">
          {faqDetail.map((faq, idx) => (
            <FaqItem
              key={idx}
              faq={faq}
              isOpen={openIndex === idx}
              onClick={() => toggleFaq(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
