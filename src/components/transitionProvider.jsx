"use client";
import React from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import Navbar from "./navbar"; // Ensure correct Navbar import
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname(); // Get the current path to trigger animations

  return (
    <AnimatePresence mode="wait">
      {/* Use key to trigger re-mounting of the children on route change */}
      <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
        {/* Background animation */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}  // Animating the height to 0vh
          exit={{ height: "140vh" }}   // Animating the height on exit
          transition={{ duration: 0.5, ease: "easeOut" }}  // Smooth transition
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}  // Animating the height to 0vh
          animate={{ opacity: 0 }} 
          exit={{ opacity: 0 }}  // Animating the height on exit
          transition={{ duration: 0.8, ease: "easeOut" }}  // Smooth transition
        >
            {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40"
          initial={{ height: "140vh" }}  // Animating the height to 0vh
          animate={{ height: "0vh", transition:{delay: 0.5} }}   // Animating the height on exit
        />
        {/* Navbar */}
        <div className="h-24">
          <Navbar />
        </div>
        {/* Main content */}
        <div className="h-[calc(100vh-6rem)] z-10 relative">
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
