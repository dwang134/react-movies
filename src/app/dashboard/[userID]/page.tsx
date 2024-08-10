import React from 'react';
import Navbar from '@/components/Navbar';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

async function fetchUserData(userID: string): Promise<User | null> {
  try {
    const response = await fetch(`https://react-movies-backend-knbt.onrender.com/api/users/${userID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const userData: User = await response.json();
    return userData;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function Dashboard({ params }: { params: { userID: string } }) {
  const userID = params.userID;
  const user = await fetchUserData(userID);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">User not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center p-8">
        <div className="bg-gray-800 p-10 rounded-lg shadow-lg max-w-lg w-full text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome, {user.firstName} {user.lastName}!</h1>
          <p className="text-xl mb-2">Email: {user.email}</p>
          <p className="text-lg mb-4">User ID: {user.id}</p>
          <div className="mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Edit Profile
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-4">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
