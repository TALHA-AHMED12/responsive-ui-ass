'use client';

import { useState } from 'react';

export default function Home(){
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div>
      {/* Responsive Menu Bar */}
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="text-white text-2xl font-bold">
            My Website
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">Home</a>
            <a href="#" className="text-white hover:text-gray-400">About</a>
            <a href="#" className="text-white hover:text-gray-400">Services</a>
            <a href="#" className="text-white hover:text-gray-400">Contact</a>
          </div>

          {/* Burger Menu Button for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 text-center">
            <a href="#" className="block text-white hover:text-gray-400">Home</a>
            <a href="#" className="block text-white hover:text-gray-400">About</a>
            <a href="#" className="block text-white hover:text-gray-400">Services</a>
            <a href="#" className="block text-white hover:text-gray-400">Contact</a>
          </div>
        )}
      </nav>

      {/* Responsive Layout */}
      <div className="container mx-auto p-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="bg-blue-500 h-64 md:col-span-2  ">
            {/* Full-width div on medium devices */}
            First Div (Full Width on Medium Screens)
          </div>
          <div className="bg-green-500 h-64">
            {/* Half-width div on medium devices */}
            Second Div (Half Width on Medium Screens)
          </div>
          <div className="bg-red-500 h-64">
            {/* Half-width div on medium devices */}
            Third Div (Half Width on Medium Screens)
          </div>
        </div>
      </div>
    </div>
  );
};

