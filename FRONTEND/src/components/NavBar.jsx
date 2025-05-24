import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-300 shadow-md">
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between h-16 items-center">
          {/* Left side - App Name */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-extrabold text-blue-600 tracking-wide hover:text-blue-700 transition-colors duration-300"
            >
              URL Shortener
            </Link>
          </div>

          {/* Right side - Auth buttons */}

          {/* Buttons visible above sm breakpoint */}
          <div className="hidden sm:flex items-center space-x-5">
            <Link
              to="/auth"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg 
                         hover:scale-110 hover:from-blue-600 hover:to-indigo-700 transition transform duration-300 ease-in-out"
            >
              Login
            </Link>
            <Link
              to="/auth"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold shadow-lg 
                         hover:scale-110 hover:from-green-500 hover:to-green-700 transition transform duration-300 ease-in-out"
            >
              Sign Up
            </Link>
          </div>

          {/* Dropdown menu visible below sm */}
          <div className="sm:hidden relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
            >
              {/* Animated Hamburger / X Icon */}
              <svg
                className="h-7 w-7 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {menuOpen && (
              <div
                className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-30
                           animate-fadeInDown"
                style={{ animationDuration: '300ms', animationTimingFunction: 'ease-out' }}
              >
                <Link
                  to="/auth"
                  onClick={() => setMenuOpen(false)}
                  className="block px-5 py-2 text-indigo-700 font-semibold hover:bg-indigo-50 rounded-lg transition"
                >
                  Login
                </Link>
                <Link
                  to="/auth"
                  onClick={() => setMenuOpen(false)}
                  className="block px-5 py-2 text-green-700 font-semibold hover:bg-green-50 rounded-lg transition"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Extra styles for animation */}
      <style>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation-name: fadeInDown;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
