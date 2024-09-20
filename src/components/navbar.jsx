"use client"; // Ensure this is a Client Component

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false); // State variable for menu toggle

  const toggleMenu = () => setOpen(!open); // Function to toggle menu

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };

  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href="/" className="text-xl font-bold">
          Vinay
        </Link>
      </div>
      <div className="hidden md:flex gap-4">
        <Link href="https://github.com/vinay2003">
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/vinay2003">
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/vinay2003">
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        </Link>
        <Link href="https://www.facebook.com/vinay2003">
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        </Link>
      </div>
      {/* Responsive Menu Placeholder */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={toggleMenu}
          aria-expanded={open} // For accessibility
          aria-label="Toggle menu"
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          />
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
        </button>

        {/* Menu list */}
        <motion.div
          variants={listVariants}
          initial="closed" // Set the initial state
          animate={open ? "opened" : "closed"} // Animate based on the open state
          className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
        >
          {open && 
            links.map((link) => (
              <motion.div
                key={link.title}
                variants={listItemVariants}
              >
                <Link
                  href={link.url}
                  className="hover:text-gray-600 transition"
                  onClick={() => setOpen(false)} // Close menu after clicking a link
                >
                  {link.title}
                </Link>
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
