"use client";

import React from 'react';
import { motion } from 'framer-motion';

const TestPage = () => {
  return (
    <div className='h-full flex items-center justify-center'>
      <motion.div 
        className='w-96 h-96 bg-red-400 rounded'
        initial={{ opacity: 0 }} // Initial state
        animate={{ opacity: 1 }} // Animation state
        whileHover={{ scale: 1.1 }} // Scale effect on hover
        transition={{ duration: 2 }} // Duration for the animation
      ></motion.div>
    </div>
  );
};

export default TestPage;
