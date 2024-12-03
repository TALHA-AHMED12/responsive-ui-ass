// components/NavBar.tsx
"use client"
import { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
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
  );
}
