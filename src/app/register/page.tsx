"use client";
import Navbar from '@/components/Navbar';
import React, { useRef, FormEvent } from 'react';
 // Ensure Navbar is imported

const Register: React.FC = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log('User Info:', { firstName, lastName, email, password });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />  {/* Navbar at the top */}
      <div className="flex-grow flex items-center justify-center bg-gray-900"> {/* Dark background */}
        <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Create a New Account</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              ref={firstNameRef}
              type="text"
              placeholder="First Name"
              className="mt-1 block w-full p-3 border border-gray-500 rounded-full shadow-sm text-gray-900"
              required
            />
            <input
              ref={lastNameRef}
              type="text"
              placeholder="Last Name"
              className="mt-1 block w-full p-3 border border-gray-500 rounded-full shadow-sm text-gray-900"
              required
            />
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
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-500 rounded-full"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                  I agree to the <a href="#" className="text-blue-400 hover:underline">Terms</a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition duration-300"
              >
                Sign Up
              </button>
            </div>
            <p className="text-center text-sm text-gray-400 mt-4">
              Or sign up with
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

export default Register;
