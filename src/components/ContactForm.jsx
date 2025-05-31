import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
      .sendForm(
        "service_vtc1ags",      // Replace with your EmailJS service ID
        "template_5fyhfgi",     // Replace with your EmailJS template ID
        form.current,
        "f5nWM93Mzlh5HMKs9"       // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Email sending error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
    }

  return (
    <div className="w-full flex justify-center  items-center">
          <div className="w-full md:w-[60%] flex flex-col py-4 my-6 items-center">
            <form ref={form} onSubmit={handleSubmit} className="w-full md:w-[70%]" action="">
              <label
                className="block mb-2 uppercase tracking-widest text-sm"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="border-b-[1px] p-1 w-[100%] border-slate-600 mb-4 outline-none"
              />

              <label
                className="block mb-2 uppercase tracking-widest text-sm"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email ID"
                className="border-b-[1px] p-1 w-[100%] border-slate-600 mb-4  outline-none"
              />

              
              <label
                className="block mb-2 uppercase tracking-widest text-sm"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter Your Subject"
                className="border-b-[1px] p-1 w-[100%] border-slate-600 mb-4  outline-none"
              />

              <label
                className="block mb-3 uppercase tracking-widest text-sm"
                htmlFor="subject"
              >
                Your Message
              </label>
              <textarea placeholder="Write Your Message Here" className="border-[1px] outline-none p-1 w-[100%] h-[10rem] border-slate-600" name="message" id="message"></textarea>

              <button className="mt-5 outline-none px-6 py-2 md:px-7 md:py-3 text-md rounded-full bg-gradient-to-r from-sky-400 via-indigo-600 to-indigo-950 border-none">SUBMIT</button>

            </form>
          </div>
        </div>
  )
}

export default ContactForm