'use client'; // This line is crucial for Framer Motion

import Image from 'next/image';
import Container from './Container';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    // <Container className="bg-[#eee7f7]">
    //   <section className="pt-5 body-font">
    //     <div className="container mx-auto flex px-5 pt-5 md:flex-row flex-col items-center">
    //       <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    //         <h1 className="title-font sm:text-5xl text-4xl mb-4 font-extrabold text-gray-800">
    //           Take the help of our Coaching to make a big Business.
    //         </h1>
    //         <p className="mb-8 leading-relaxed">
    //           We are here for supporting new and small, medium business to grow
    //           fast by explore our services. Copper mug try-hard pitchfork
    //           pour-over freegan heirloom neutra air plant cold-pressed tacos
    //           poke beard tote bag.
    //         </p>
    //         <div className="flex justify-center">

    //           <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px py-2 px-3 text-xs font-semibold leading-6  text-white inline-block">
    //             <span className="absolute inset-0 overflow-hidden rounded-full">
    //               <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
    //             </span>
    //             <div className="relative flex space-x-2 items-center z-10 rounded-full py-0.5 px-4  ">
    //               <span>{`Get Started`}</span>
    //               <svg
    //                 width="16"
    //                 height="16"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   stroke="currentColor"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="1.5"
    //                   d="M10.75 8.75L14.25 12L10.75 15.25"
    //                 ></path>
    //               </svg>
    //             </div>
    //             <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    //           </button>
    //         </div>
    //       </div>
    //       <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    //         <div className="w-full md:w-auto px-5 h-auto ">
    //           <div className="w-full md:w-[480px] md:h-[540px] bg-indigo-700 rounded-tl-[230px] rounded-tr-[230px] flex items-end justify-center overflow-hidden">
    //             <Image
    //               src="/images/cute-girl.jpg"
    //               width={300}
    //               height={340}
    //               className="w-full h-full object-fill"
    //               alt="girl image"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </Container>
    <>
      
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300 lg:leading-20 py-6">
          {'Building Bright Futures for Classes 1st to 8th in Kanpur with G.B. TECH'
            .split(' ')
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: 'easeInOut',
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Expert tiution in all subjects with personal attention and regular feedback for parents.
          We are here for supporting new and small, medium business to grow fast
          by explore our services.
          
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Explore Now
          </button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
          </button>
        </motion.div>
        {/* <motion.div
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
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src="https://assets.aceternity.com/pro/aceternity-landing.webp"
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div> */}
      </div>
    </>
  );
};

export default HeroSection;
