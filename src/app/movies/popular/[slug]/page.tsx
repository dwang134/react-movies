'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Movie {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  genres: { id: number; name: string }[];
  runtime: number;
  tagline: string;
  vote_average: number;
  poster_path: string;
  production_companies: { id: number; logo_path: string | null; name: string; origin_country: string }[];
}

const fetchMovieDetails = async (id: number): Promise<Movie> => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjM2MGZjOTVkYjQxNTVjYjM1ZDkxYTc0ZWUxODMzNCIsIm5iZiI6MTcxOTg2MDE5Ny41NTA4NTQsInN1YiI6IjY2N2Y0YzNiMjdkZTkxMGE2YWE4MzEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qH8i4dGbnl_2-e24RPLbwEnWhUsaKlMPY0z3BHOlUNI'
    }
  };

  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
  const data = await response.json();
  return data;
};

const MovieDetail = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (id) {
      fetchMovieDetails(Number(id)).then(setMovie);
    }
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto max-w-screen-lg p-10">
        <h1 className="text-3xl font-bold mb-6">{movie.title}</h1>
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width="300"
              height="450"
              className="rounded-lg mb-6 md:mb-0 md:mr-6"
            />
          ) : (
            <h1>No image</h1>
          )}
          <div>
            <p className="text-lg mb-6">{movie.overview}</p>
            <p className="mb-2"><strong>Release Date:</strong> {movie.release_date}</p>
            <p className="mb-2"><strong>Runtime:</strong> {movie.runtime} minutes</p>
            <p className="mb-2"><strong>Tagline:</strong> {movie.tagline}</p>
            <p className="mb-2"><strong>Vote Average:</strong> {movie.vote_average}</p>
            <div className="mb-6">
              <strong>Genres:</strong>
              <ul className="list-disc list-inside">
                {movie.genres && movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Production Companies:</strong>
              <ul className="list-disc list-inside">
                {movie.production_companies && movie.production_companies.map(company => (
                  <li key={company.id} className="flex items-center">
                    {company.logo_path && (
                      <Image
                        src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                        alt={company.name}
                        width="50"
                        height="50"
                        className="inline-block mr-2"
                      />
                    )}
                    {company.name} ({company.origin_country})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetail;
