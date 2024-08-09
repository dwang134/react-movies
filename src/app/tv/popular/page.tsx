import Navbar from '@/components/Navbar';
import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface TVShow {
  id: number;
  poster_path: string;
  name: string;
  overview: string;
  first_air_date: string;
}

const fetchTVShows = async (): Promise<TVShow[]> => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjM2MGZjOTVkYjQxNTVjYjM1ZDkxYTc0ZWUxODMzNCIsIm5iZiI6MTcxOTg2MDE5Ny41NTA4NTQsInN1YiI6IjY2N2Y0YzNiMjdkZTkxMGE2YWE4MzEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qH8i4dGbnl_2-e24RPLbwEnWhUsaKlMPY0z3BHOlUNI'
    }
  };

  const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options);
  const data = await response.json();
  // console.log("POPULAR TV: ", JSON.stringify(data.results));
  return data.results.slice(0, 18);
  // Movies
  // “Most watched” —> Popular 
  // “Recently added” —> now playing
  // “Release Date” —> upcomingMovies = upcomingMovies

  // TV
  // “Recently added” —> airing today
  // “Most watched” —> Popular
  // “Release Date” —> on the air 

};

const TelevisionList = async () => {
  const tvShows: TVShow[] = await fetchTVShows();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-900 p-10">
      <div className="flex justify-center mb-6">
          <a href="/tv/popular" className="text-white px-4 py-2 border border-blue-500 rounded-md mx-2 bg-blue-500 hover:bg-blue-700 transition duration-300">Most Watched</a>
          <a href="/tv/upcoming" className="text-white px-4 py-2 border border-gray-500 rounded-md mx-2 bg-gray-800 hover:bg-gray-600 transition duration-300">Release Date</a>
          <a href="/tv/recent" className="text-white px-4 py-2 border border-gray-500 rounded-md mx-2 bg-gray-800 hover:bg-gray-600 transition duration-300">Recently Added</a>
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Popular TV Shows</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {tvShows.map((show) => (
            <div key={show.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <Link href={`/tv/popular/${show.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
                width={500}
                height={750}
                className="w-full h-auto rounded-lg mb-4"
              />
              </Link>
              <h3 className="text-lg font-bold text-white mb-2">{show.name}</h3>
              <p className="text-gray-400 text-sm line-clamp-3">{show.overview}</p>
              <p className="text-gray-500 text-sm mt-2">First Air Date: {show.first_air_date}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TelevisionList;
