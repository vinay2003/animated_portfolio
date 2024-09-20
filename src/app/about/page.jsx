"use client"; // Ensure this is a Client Component if needed

import React from 'react';
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }} // Initial position off the screen
      animate={{ y: "0%" }}     // Animate to final position
      transition={{ duration: 1 }} // Set the duration of the transition
    >
      About
    </motion.div>
  );
};

export default AboutPage;
