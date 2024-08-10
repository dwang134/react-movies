"use client";
import React, { useEffect, useState } from 'react';

function isLoggedIn(): boolean {
  return typeof window !== 'undefined' && !!localStorage.getItem('userId');
}

const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null); // Start with null to avoid mismatch

  useEffect(() => {
    // Set the loggedIn state once the component has mounted
    setLoggedIn(isLoggedIn());

    const handleStorageChange = () => {
      setLoggedIn(isLoggedIn());
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setLoggedIn(false);
    window.location.href = '/login'; // Redirect to the login page after logout
  };

  return (
    <nav className="bg-gray-800 p-4 relative z-10 shadow-lg shadow-black">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-xl font-bold text-white">
            MovieDB
          </a>
          <a href="/movies/popular" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium">
            Movies
          </a>
          <a href="/tv/popular" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium">
            TV
          </a>
        </div>

        <div className="flex-1"></div>

        <div className="flex items-center space-x-4">
          {loggedIn === null ? null : loggedIn ? (
            <button
              onClick={handleLogout}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium"
            >
              Log out
            </button>
          ) : (
            <>
              <a href="/register" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium">
                Register
              </a>
              <a href="/login" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium">
                Login
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
