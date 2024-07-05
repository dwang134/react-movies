import Navbar from '@/components/Navbar';
import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
}

const fetchMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjM2MGZjOTVkYjQxNTVjYjM1ZDkxYTc0ZWUxODMzNCIsIm5iZiI6MTcxOTg2MDE5Ny41NTA4NTQsInN1YiI6IjY2N2Y0YzNiMjdkZTkxMGE2YWE4MzEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qH8i4dGbnl_2-e24RPLbwEnWhUsaKlMPY0z3BHOlUNI'
    }
  };

  const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
  const data = await response.json();
  return data.results.slice(0, 18); // Limit to 12 movies
};

const MovieList: React.FC = async () => {
  const movies: Movie[] = await fetchMovies();

  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="flex-grow bg-gray-900 p-10">
      <div className="flex justify-center mb-6">
        <a href="/movies/popular" className="text-white px-4 py-2 border border-gray-500 rounded-md mx-2 bg-gray-800 hover:bg-gray-600 transition duration-300">Most Watched</a>
        <a href="/movies/upcoming" className="text-white px-4 py-2 border border-blue-500 rounded-md mx-2 bg-blue-500 hover:bg-blue-700 transition duration-300">Release Date</a>
        <a href="/movies/recent" className="text-white px-4 py-2 border border-gray-500 rounded-md mx-2 bg-gray-800 hover:bg-gray-600 transition duration-300">Recently Added</a>
      </div>
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Upcoming Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width="500"
              height="300"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-white mb-2">{movie.title}</h3>
            <p className="text-gray-400 text-sm line-clamp-3">{movie.overview}</p>
            <p className="text-gray-500 text-sm mt-2">Released: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default MovieList;
