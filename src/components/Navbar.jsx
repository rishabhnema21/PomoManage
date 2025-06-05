import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 left-0 md:backdrop-blur-xl z-99 md:z-99 text-white py-5 px-8">
      <nav className="flex justify-between items-center">
        <Logo />

        {/* Desktop Navbar Menu */}
        <ul className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="relative  font-semibold group hover:text-blue-400 ease-in duration-200"
                href={link.href}
              >
                {link.label}{" "}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>{" "}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Icon */}
        <div
          id="hamburger-icon"
          className="md:hidden cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoCloseSharp className="text-blue-400" size={25} />
          ) : (
            <IoMdMenu className="text-blue-400" size={25} />
          )}
        </div>

        {/* Mobile Navbar Menu */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="inset-0 flex flex-col items-start px-9 text-4xl tracking-tighter font-semibold fixed justify-center bg-[#01011e] space-y-6 z-40"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  href={link.href}
                  key={index}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
