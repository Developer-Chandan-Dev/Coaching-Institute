'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItems = [
  { label: 'Home', name: '', href: '/' },
  { label: 'Courses', name: 'courses', href: '#courses' },
  { label: 'Free Demo', name: 'demo', href: '#demo' },
  { label: 'Testimonials', name: 'testimonials', href: '#testimonials' },
  { label: 'Contact Us', name: 'contact', href: '#contact' },
];

interface NavItemProps {
  className?: string;
}

const NavItem = ({ className = '' }: NavItemProps) => {
  const pathname = usePathname();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' }); //
  };

  return (
    <nav className={`${className}`}>
      <ul
        className={
          'md:flex items-center gap-8 lg:gap-12 text-gray-700 uppercase text-[14px] font-semibold '
        }
      >
        {navItems.map(({ label,name, href }) => (
          <li key={label} className={'max-md:text-4xl max-md:my-10'}>
            <Link
              href={href}
              scroll={false}
              onClick={() => handleScroll(name)}
              className={cn(
                pathname === href && 'font-bold gradient2-text',
                'hover:gradient2-text transition-colors'
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavItem;
