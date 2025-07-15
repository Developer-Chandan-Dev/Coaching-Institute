"use client";
import React from 'react'
import { motion } from 'framer-motion';
import DemoForm from "@/components/user/DemoForm";

const FreeDemo = () => {
    return (
        <motion.section
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
            id="demo"
            className="text-gray-600 body-font overflow-hidden relative z-10 mt-20 rounded-3xl p-4 dark:bg-neutral-900 mb-20"
        >
            <div className="container px-5 pb-10 pt-20 mx-auto">
                <div className="lg:w-11/12 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm ml-1 title-font text-gray-500 tracking-widest">
                            G.B. TECH
                        </h2>
                        <h2 className="text-neutral-900 font-bold text-3xl title-font mb-1">
                            Book A Free Demo
                        </h2>

                        <div className="md:pr-10 md:py-3">
                          <p>If you want take trails classes for checking our teaching methods and techniques you can fill a demo class form and submit that form. Our teachers will connect with and schedule you trial class and you will get demo classes.</p><br/>
                            <p>Fill this form and connect with us we will schedule your demo classes. You can know about us our teaching style and methods, If you are confused that we are providing good services or not you can take a trail class.</p>
                        </div>
                    </div>
                    <DemoForm />
                </div>
            </div>
        </motion.section>
    )
}
export default FreeDemo
