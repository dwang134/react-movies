import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 relative z-10 shadow-lg shadow-black">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Left Section: Logo and Navigation Links */}
        <div className="flex items-center space-x-4">
          <a
            href="/"
            className="text-xl font-bold text-white"
          >
          MovieDB
          </a>
          <a
            href="/movies/popular"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Movies
          </a>
          <a
            href="/tv/popular"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            TV
          </a>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Right Section: User Links */}
        <div className="flex items-center space-x-4">
          <a
            href="/register"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Register
          </a>
          <a
            href="/login"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
