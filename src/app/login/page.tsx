"use client";
import Navbar from '@/components/Navbar';
import React, { useRef, FormEvent } from 'react';

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log('Login Info:', { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />  {/* Navbar at the top */}
      <div className="flex-grow flex items-center justify-center bg-gray-900"> {/* Dark background */}
        <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Login to Your Account</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="mt-1 block w-full p-3 border border-gray-500 rounded-full shadow-sm text-gray-900"
              required
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="mt-1 block w-full p-3 border border-gray-500 rounded-full shadow-sm text-gray-900"
              required
            />
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition duration-300"
              >
                Login
              </button>
            </div>
            <p className="text-center text-sm text-gray-400 mt-4">
              Or login with
            </p>
            <div className="flex gap-4 justify-center">
              <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full">Facebook</button>
              <button className="py-2 px-4 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-full">Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
