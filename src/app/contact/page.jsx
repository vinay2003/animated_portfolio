"use client"; // Ensure this is a Client Component if needed

import React from 'react';
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }} // Slide in from top
      animate={{ y: "0%" }}     // Animate to final position
      transition={{ duration: 1 }} // Set the animation duration to 1 second
    >
      Contact
    </motion.div>
  );
};

export default ContactPage;
