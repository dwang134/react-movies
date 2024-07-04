import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800  py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-4">
            <a href="#" className="text-white">Watch</a>
            <a href="#" className="text-white">My Account</a>
            <a href="#" className="text-white">Features</a>
            <a href="#" className="text-white">Help</a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white">App Store</a>
            <a href="#" className="text-white">Google Play</a>
            <a href="#" className="text-white">Microsoft Store</a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between text-white">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">Watch</h3>
            <ul>
              <li><a href="#" className="hover:underline">Spotlight</a></li>
              <li><a href="#" className="hover:underline">Movies</a></li>
              <li><a href="#" className="hover:underline">TV</a></li>
              <li><a href="#" className="hover:underline">Free</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">My Account</h3>
            <ul>
              <li><a href="#" className="hover:underline">My Vudu</a></li>
              <li><a href="#" className="hover:underline">Account</a></li>
              <li><a href="#" className="hover:underline">Settings</a></li>
              <li><a href="#" className="hover:underline">Manage Devices</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">Features</h3>
            <ul>
              <li><a href="#" className="hover:underline">Lists</a></li>
              <li><a href="#" className="hover:underline">Family</a></li>
              <li><a href="#" className="hover:underline">Disc to Digital</a></li>
              <li><a href="#" className="hover:underline">InstaWatch</a></li>
              <li><a href="#" className="hover:underline">Movies Anywhere</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">Help</h3>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Devices</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Forums</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <a href="#" className="text-white hover:text-gray-400">LinkedIn</a>
          <a href="#" className="text-white hover:text-gray-400">Facebook</a>
          <a href="#" className="text-white hover:text-gray-400">Twitter</a>
          <a href="#" className="text-white hover:text-gray-400">YouTube</a>
          <a href="#" className="text-white hover:text-gray-400">RSS</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
