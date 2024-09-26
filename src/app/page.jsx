"use client"; // Ensure this is a Client Component

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from Next.js

const Homepage = () => {
  const [hasError, setHasError] = useState(false); // State to track image loading

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/Vinay-removebg-preview.png"
            alt="Profile Image" // Add a descriptive alt text
            fill
            className="object-contain"
            onError={() => setHasError(true)} // Handle image loading error
          />
          {hasError && <p>Error loading image</p>}{" "}
          {/* Display error message if image fails to load */}
        </div>
        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Shaping the Future of Digital Experiences Through Creative
            Engineering
          </h1>
          {/* Description */}
          <p className="md:text-xl">
            Vinay Kumar Sharma is a passionate B.Tech Computer Science Engineer
            specializing in software development and innovative web solutions.
            With a strong foundation in modern technologies, he crafts
            responsive and user-friendly applications that address real-world
            challenges.
          </p>
          {/* Buttons */}
          <div className="flex gap-4 w-full">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black bg-white text-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
