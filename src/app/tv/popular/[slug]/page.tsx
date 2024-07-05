'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface TV {
  id: number;
  backdrop_path: string;
  name: string;
  overview: string;
  first_air_date: string;
  genres: { id: number; name: string }[];
  tagline: string;
  vote_average: number;
  poster_path: string;
  production_companies: { id: number; logo_path: string | null; name: string; origin_country: string }[];
  last_episode_to_air: {
    name: string;
    air_date: string;
    episode_number: number;
    season_number: number;
    still_path: string;
  };
  next_episode_to_air: {
    name: string;
    air_date: string;
    episode_number: number;
    season_number: number;
    still_path: string | null;
  };
}

const fetchTelevisionDetail = async (id: number): Promise<TV> => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjM2MGZjOTVkYjQxNTVjYjM1ZDkxYTc0ZWUxODMzNCIsIm5iZiI6MTcxOTg2MDE5Ny41NTA4NTQsInN1YiI6IjY2N2Y0YzNiMjdkZTkxMGE2YWE4MzEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qH8i4dGbnl_2-e24RPLbwEnWhUsaKlMPY0z3BHOlUNI'
    }
  };

  const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options);
  const data = await response.json();
  return data;
};

const TelevisionDetail = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const [tvShow, setTvShow] = useState<TV | null>(null);

  useEffect(() => {
    if (id) {
      fetchTelevisionDetail(Number(id)).then(setTvShow);
    }
  }, [id]);

  if (!tvShow) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto max-w-screen-lg p-10">
        <h1 className="text-3xl font-bold mb-6">{tvShow.name}</h1>
        <div className="flex flex-col md:flex-row items-start md:items-start mb-6">
          {tvShow.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
              alt={tvShow.name}
              width="300"
              height="450"
              className="rounded-lg mb-6 md:mb-0 md:mr-6"
            />
          ) : (
            <h1>No image</h1>
          )}
          <div className="flex flex-col space-y-4">
            <p className="text-lg">{tvShow.overview}</p>
            <p><strong>First Air Date:</strong> {tvShow.first_air_date}</p>
            <p><strong>Tagline:</strong> {tvShow.tagline}</p>
            <p><strong>Vote Average:</strong> {tvShow.vote_average}</p>
            <div>
              <strong>Genres:</strong>
              <ul className="list-disc list-inside">
                {tvShow.genres && tvShow.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Production Companies:</strong>
              <ul className="list-disc list-inside">
                {tvShow.production_companies && tvShow.production_companies.map(company => (
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
            <div>
              <strong>Last Episode to Air:</strong>
              {tvShow.last_episode_to_air ? (
                <div className="mt-2">
                  <p className="mb-1"><strong>Title:</strong> {tvShow.last_episode_to_air.name}</p>
                  <p className="mb-1"><strong>Air Date:</strong> {tvShow.last_episode_to_air.air_date}</p>
                  <p className="mb-1"><strong>Season:</strong> {tvShow.last_episode_to_air.season_number}, Episode: {tvShow.last_episode_to_air.episode_number}</p>
                  {tvShow.last_episode_to_air.still_path && (
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${tvShow.last_episode_to_air.still_path}`}
                      alt={tvShow.last_episode_to_air.name}
                      width="500"
                      height="300"
                      className="rounded-lg mb-4"
                    />
                  )}
                </div>
              ) : (
                <p>No information available.</p>
              )}
            </div>
            <div>
              <strong>Next Episode to Air:</strong>
              {tvShow.next_episode_to_air ? (
                <div className="mt-2">
                  <p className="mb-1"><strong>Title:</strong> {tvShow.next_episode_to_air.name}</p>
                  <p className="mb-1"><strong>Air Date:</strong> {tvShow.next_episode_to_air.air_date}</p>
                  <p className="mb-1"><strong>Season:</strong> {tvShow.next_episode_to_air.season_number}, Episode: {tvShow.next_episode_to_air.episode_number}</p>
                  {tvShow.next_episode_to_air.still_path && (
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${tvShow.next_episode_to_air.still_path}`}
                      alt={tvShow.next_episode_to_air.name}
                      width="500"
                      height="300"
                      className="rounded-lg mb-4"
                    />
                  )}
                </div>
              ) : (
                <p>No information available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TelevisionDetail;
