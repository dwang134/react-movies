"use client";
import React, { useState } from 'react';
import Navbar from './Navbar';
import { useRouter } from 'next/navigation';

const Header: React.FC<{ media: any[] }> = ({ media }) => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Redirect to the search results page with the query as a query string
    router.push(`/search?query=${query}`);
  };

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Navbar />
      <video 
        src="./shinyWaterAnimation.mp4" 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-8 px-4 drop-shadow-xl bg-opacity-50 p-4 rounded-lg">
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <form onSubmit={handleSearch} className="flex items-center bg-black bg-opacity-50 p-2 rounded-full shadow-lg backdrop-blur-lg">
          <input 
            type="text" 
            placeholder="Search..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-3 rounded-l-full outline-none border-none w-72 md:w-96 lg:w-128 text-white bg-white bg-opacity-0 placeholder-gray-300"
          />
          <button className="p-3 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 transition duration-300">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
