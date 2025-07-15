'use client';
import React from 'react';
import { motion } from 'motion/react';
import { CardHoverEffectDemo } from './CardHover';

const AvailableClasses = () => {
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
      id="courses"
      className="relative z-10 pt-22 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
    >
        <div className="flex-center flex-col gap-3">
          <p className="font-semibold ">Our Courses</p>
          <h2 className="text-center pt-2 pb-4">
            Learning & Teaching Coaching <br /> for Improving Students Knowledge
          </h2>
          <div className="flex items-center justify-center flex-wrap">
            <CardHoverEffectDemo />
          </div>
        </div>
    </motion.div>
  );
};

export default AvailableClasses;
