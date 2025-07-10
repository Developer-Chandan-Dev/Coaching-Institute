"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTestimonialsDemo } from './AnimatedTestimonialsDemo';

const Testimonials = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
        delay: 1.2,
      }}
      className="relative z-10 mt-20 border-neutral-200 bg-neutral-100 px-4 py-5 shadow-md dark:border-neutral-800 dark:bg-neutral-900 w-full mx-auto flex-center flex-col"
    >
      <div className="text-center">
        <p>Explore</p>
        <h2>Testimonials</h2>
      </div>
      <AnimatedTestimonialsDemo />
    </motion.div>
  );
};

export default Testimonials;
