import React from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
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
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 px-4 drop-shadow-xl">
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <div className="flex items-center bg-white bg-opacity-50 p-2 rounded-full shadow-lg">
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-3 rounded-l-full outline-none border-none w-72 md:w-96 lg:w-128 text-black bg-white bg-opacity-0 placeholder-gray-300"
          />
          <button className="p-3 bg-blue-500 text-white rounded-r-full">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
