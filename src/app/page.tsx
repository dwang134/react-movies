import Image from "next/image";
// import {fetchMovies} from '../../api/API';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default async function Home() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjM2MGZjOTVkYjQxNTVjYjM1ZDkxYTc0ZWUxODMzNCIsIm5iZiI6MTcxOTgxODgxMy45OTQ4MjQsInN1YiI6IjY2N2Y0YzNiMjdkZTkxMGE2YWE4MzEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.abbuDtRjd6iVuYc1CocnbUarRc2tUdOv0aLs-2CjYCQ",
    },
  };

  

  const movieRes = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2",
    options
  );

  const tvRes = await fetch(
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
    options
  );

  const mostDemandMoviesRes = await fetch ('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
  const featuerdMovieRes = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options);
  const featuerdTVRes= await fetch ('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);

  const movies = await movieRes.json();
  const tvShows = await tvRes.json();
  const demandMovies = await mostDemandMoviesRes.json();
  const featuredMovie = await featuerdMovieRes.json();
  const featuredTV = await featuerdTVRes.json();

  // fetch('https://api.themoviedb.org/3/movie/987685/images', options)
  // .then(response => response.json())
  // .then(response => console.log(response))
  // .catch(err => console.error(err));

  console.log();

  // const movieRes = await fetch(
  //   "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2",
  //   options
  // );

  // const tvRes = await fetch(
  //   "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
  //   options
  // );

  // const movieData = await movieRes.json();
  // const tvData = await tvRes.json();

  // fetchMovies().then(movies => console.log(movies)).catch(err => console.log(err));

  return (
    <div className="homeContainer w-screen">
    <Header/>

      {/* <div className='bg-red-300 w-full min-h-10'>
        Testnig
      </div> */}

      {/* Hero Section */}
      <div className="heroSection w-auto h-screen bg-red-400">
        <h2>Hero Section (Slideshow/Banners)</h2>
        {}
        {/* Implement your slideshow or banners for top movies and TV shows */}
      </div>

      {/* Featured Movies Section */}
      <div className="featuredMoviesSection">
        <h2>Featured Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.results.map((movie: any) => (
            <div
              key={movie.id}
              className="movieCard bg-white p-4 rounded-lg shadow-md"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={500}
                height={750}
                className="rounded-lg"
              />
              <h3 className="text-lg font-bold mt-2">{movie.title}</h3>
              <p className="text-gray-600 line-clamp-3">{movie.overview}</p>
              <p className="text-gray-500 mt-2">
                Released: {movie.release_date}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured TV Shows Section */}
      <div className="featuredTvShowsSection">
        <h2>Featured TV Shows</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tvShows.results.map((show: any) => (
            <div
              key={show.id}
              className="tvShowCard bg-white p-4 rounded-lg shadow-md"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
                width={500}
                height={750}
                className="rounded-lg"
              />
              <h3 className="text-lg font-bold mt-2">{show.name}</h3>
              <p className="text-gray-600">{show.overview}</p>
              <p className="text-gray-500 mt-2">
                First Air Date: {show.first_air_date}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="contentSections">
        <section>
          <h2>Content Section 1</h2>
          <p>Static content about Hollywood or services.</p>
        </section>
        <section>
          <h2>Content Section 2</h2>
          <p>More static content or exciting details.</p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
