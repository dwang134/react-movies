import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 relative z-10 shadow-lg shadow-black">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo or Branding */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-white">MovieDB</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Movies
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            TV Shows
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
