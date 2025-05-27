// FaqItem.jsx
import React, { useEffect, useRef, useState } from "react";

const FaqItem = ({ faq, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      onClick={onClick}
      className="item cursor-pointer my-2 p-2 sm:p-3 w-full md:w-[95%] bg-[#05052b] rounded-md"
    >
      <div className="faq-title text-lg flex justify-between items-center">
        <h2 className="font-semibold text-sky-300">{faq.question}</h2>
        <span className="font-bold sm:mr-4 text-2xl">{isOpen ? "-" : "+"}</span>
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          transition: "max-height 0.4s ease",
          overflow: "hidden",
        }}
        className="faq-answer pr-5 text-slate-200"
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
