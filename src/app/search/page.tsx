"use client";
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from "next/image";

const SearchResults: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryParam = searchParams.get('query');
  const [query, setQuery] = useState(queryParam || '');
  const [filteredResults, setFilteredResults] = useState<any[]>([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const movieRes = await fetch(
          "https://react-movies-backend-knbt.onrender.com/api/movie/now_playing"
        );

        const tvRes = await fetch(
          "https://react-movies-backend-knbt.onrender.com/api/tv/airing_today"
        );

        const movies = await movieRes.json();
        const tvs = await tvRes.json();
        
        const media = movies.concat(tvs); // Combine the movie and TV arrays

        if (query) {
          const lowerCaseQuery = query.toLowerCase();

          const results = media.filter((item: any) => {
            if (item.title) {
              return item.title.toLowerCase().includes(lowerCaseQuery);
            } else if (item.name) {
              return item.name.toLowerCase().includes(lowerCaseQuery);
            }
            return false;
          });

          setFilteredResults(results);
        }
      } catch (error) {
        console.error("Failed to fetch media:", error);
      }
    };

    fetchMedia();
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  const handleRowClick = (item: any) => {
    if (item.title) {
      router.push(`/movies/upcoming/${item.id}`);
    } else if (item.name) {
      router.push(`/tv/upcoming/${item.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="p-8">
        {/* Search Bar */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex items-center bg-gray-800 rounded-full p-2 shadow-lg">
            <input 
              type="text" 
              placeholder="Search..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-grow p-3 rounded-l-full outline-none border-none bg-transparent text-white placeholder-gray-400"
            />
            <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
              Search
            </button>
          </form>
        </div>

        {/* Results */}
        <h2 className="text-3xl mb-6">Search Results</h2>
        {filteredResults.length > 0 ? (
          <div className="flex flex-col space-y-6">
            {filteredResults.map((item, index) => (
              <div 
                key={item.id || index} // Ensure unique key
                className="flex items-start bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer"
                onClick={() => handleRowClick(item)}
              >
                <Image 
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title || item.name} 
                  width={100}
                  height={150}
                  className="rounded-lg" 
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title || item.name}
                  </h3>
                  <p className="text-gray-400">{item.overview}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No results found for &quot;{query}&quot;.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
