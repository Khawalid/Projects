"use client";
import './globals.css';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import { useState, useEffect, ReactNode } from 'react';
import { ChevronDownIcon, ChevronUpIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  useEffect(() => {
    const servicesTab = document.getElementById('services-tab');
    const dropdownMenu = document.getElementById('dropdown-menu');

    const handleClickOutside = (event: MouseEvent) => {
      if (servicesTab && !servicesTab.contains(event.target as Node) && dropdownMenu && !dropdownMenu.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Irteqa Welfare Organization</title>
        <meta name="description" content="Irteqa Welfare Organization provides multiple health services in Pakistan, focusing on innovative and enduring methods in healthcare and research." />
        <meta name="keywords" content="Irteqa Welfare Organization, health services, Pakistan, nonprofit, healthcare, research, animal shelter" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} bg-white text-gray-900`}>
        <header className="bg-blue-500 text-white p-4 shadow-md z-20 relative">
          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-between items-center">
            <button onClick={handleToggleMenu}>
              {isMenuOpen ? (
                <XMarkIcon className="h-8 w-8 text-white" />
              ) : (
                <Bars3Icon className="h-8 w-8 text-white" />
              )}
            </button>
            <div className="flex items-center">
              <Image src="/images/logo.jpg" alt="Irteqa Welfare Organization Logo" width={60} height={60} className="object-contain" />
              <h1 className="text-xl font-bold ml-2">Irteqa Welfare Organization</h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex container mx-auto justify-between items-center">
            <div className="flex items-center">
              <Link href="/" legacyBehavior>
                <a className="flex items-center">
                  <Image src="/images/logo.jpg" alt="Irteqa Welfare Organization Logo" width={80} height={80} className="object-contain" />
                  <span className="text-2xl font-bold ml-2">Irteqa Welfare Organization</span>
                </a>
              </Link>
            </div>
            <ul className="flex space-x-6">
              <li className="hover:text-gray-300 transition-colors px-3 py-2">
                <Link href="/">Home</Link>
              </li>
              <li id="services-tab" className="relative group">
                <span
                  onClick={handleToggleDropdown}
                  className="cursor-pointer hover:text-gray-300 transition-colors flex items-center px-3 py-2"
                >
                  Services
                  {isDropdownOpen ? (
                    <ChevronUpIcon className="h-5 w-5 ml-1" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 ml-1" />
                  )}
                </span>
                {isDropdownOpen && (
                  <ul
                    id="dropdown-menu"
                    className="absolute left-0 mt-2 bg-blue-500 p-2 space-y-2 rounded shadow-lg w-48 z-30"
                  >
                    <li className="hover:bg-blue-700 transition-colors p-2 rounded">
                      <Link href="/services/school-health" onClick={handleMenuItemClick}>School Health Services</Link>
                    </li>
                    <li className="hover:bg-blue-700 transition-colors p-2 rounded">
                      <Link href="/services/health-care-centers" onClick={handleMenuItemClick}>Health Care Centers</Link>
                    </li>
                    <li className="hover:bg-blue-700 transition-colors p-2 rounded">
                      <Link href="/services/health-workshops" onClick={handleMenuItemClick}>Medical Research</Link>
                    </li>
                    <li className="hover:bg-blue-700 transition-colors p-2 rounded">
                      <Link href="/services/animal-shelter" onClick={handleMenuItemClick}>Animal Shelter</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="hover:text-gray-300 transition-colors px-3 py-2">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-blue-500 text-white p-4 z-20">
              <ul className="space-y-4">
                <li className="hover:text-gray-300 transition-colors">
                  <Link href="/" onClick={handleMenuItemClick}>Home</Link>
                </li>
                <li className="hover:text-gray-300 transition-colors">
                  <span
                    onClick={handleToggleDropdown}
                    className="cursor-pointer hover:text-gray-300 transition-colors flex items-center"
                  >
                    Services
                    {isDropdownOpen ? (
                      <ChevronUpIcon className="h-5 w-5 ml-1" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 ml-1" />
                    )}
                  </span>
                  {isDropdownOpen && (
                    <ul
                      id="dropdown-menu-mobile"
                      className="mt-2 bg-blue-500 p-2 space-y-2 rounded shadow-lg"
                    >
                      <li className="hover:bg-blue-700 transition-colors p-2 rounded">
                        <Link href="/services/school-health" onClick={handleMenuItemClick}>School Health Services</Link>
                      </li>
                      <li className="hover:bg-blue-700 transition-colors p-2 rounded">
                        <Link href="/services/health-care-centers" onClick={handleMenuItemClick}>Health Care Centers</Link>
                      </li>
                      <li className="hover:bg-blue-700 transition-colors p-2 rounded">
                        <Link href="/services/health-workshops" onClick={handleMenuItemClick}>Medical Research</Link>
                      </li>
                      <li className="hover:bg-blue-700 transition-colors p-2 rounded">
                        <Link href="/services/animal-shelter" onClick={handleMenuItemClick}>Animal Shelter</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="hover:text-gray-300 transition-colors">
                  <Link href="/contact-us" onClick={handleMenuItemClick}>Contact Us</Link>
                </li>
              </ul>
            </div>
          )}
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-blue-500 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>This organization is a non-political, non-sectarian voluntary Social Welfare Association.</p>
            <p>Registered with Social Welfare Department, Government of Sindh, Pakistan. Registration number: DSW 3314-K.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
