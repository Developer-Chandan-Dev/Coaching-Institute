'use client';
import { useState } from 'react';
import NavItem from './NavItem';
import Image from 'next/image';
import Link from 'next/link';
import { AlignJustify, XIcon } from 'lucide-react';
import CustomButton from './CustomButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <span className="text-base font-bold md:text-2xl hidden md:block">
          G.B. TECH
        </span>
      </div>
      <NavItem className="hidden md:flex" />

      {isOpen && (
        <div
          className={
            'bg-white fixed dark:bg-[#090a22] z-100 py-5 px-10 w-full top-0 left-0 h-screen gap-7 md:hidden'
          }
        >
          <div className={'flex items-center justify-between gap-3'}>
            <Link href={'/'}>
              <div className={'flex items-center gap-3'}>
                <div className="w-7 h-7 rounded-full ring ring-indigo-500"></div>
              </div>
            </Link>
            <div
              className={
                'w-8 h-8 rounded-md flex-center border border-gray-200 text-gray-800 dark:text-gray-100 dark:bg-[#14152c] bg-white dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer'
              }
              onClick={() => setIsOpen(false)}
            >
              <XIcon size={'20'} />
            </div>
          </div>
          <NavItem className={'py-10 text-xl !text-left font-semibold'} />
        </div>
      )}
      <div className="flex items-center gap-2">
        <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
          Login
        </button>
        <div
          className={
            'w-9 h-9 rounded-md flex-center border border-gray-200 bg-white text-gray-800 dark:text-gray-100 dark:bg-[#14152c] dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer md:hidden'
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          <AlignJustify size={'20'} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
