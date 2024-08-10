// import {fetchMovies} from '../../api/API';
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedMovies from "@/components/FeaturedMovies";
import FeaturedTV from "@/components/FeaturedTV";
import Image from 'next/image';
import AllTrending from "@/components/AllTrending";


export default async function Home() {
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjM2MGZjOTVkYjQxNTVjYjM1ZDkxYTc0ZWUxODMzNCIsIm5iZiI6MTcxOTgxODgxMy45OTQ4MjQsInN1YiI6IjY2N2Y0YzNiMjdkZTkxMGE2YWE4MzEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.abbuDtRjd6iVuYc1CocnbUarRc2tUdOv0aLs-2CjYCQ",
  //   },
  // };

  const movieRes = await fetch(
    "https://react-movies-backend-knbt.onrender.com/api/movie/now_playing"
  );

  const tvRes = await fetch(
    "https://react-movies-backend-knbt.onrender.com/api/tv/airing_today"
  );

  const mostDemandMoviesRes = await fetch(
    "https://react-movies-backend-knbt.onrender.com/api/trending/all"
  );

  const trendingPeopleRes = await fetch('https://react-movies-backend-knbt.onrender.com/api/trending/person');
  const allTrendingRes = await fetch('https://react-movies-backend-knbt.onrender.com/api/trending/all');

  const demandMovies = await mostDemandMoviesRes.json();
  const movies = await movieRes.json();
  const tvShows = await tvRes.json();
  const trendingPeople = await trendingPeopleRes.json();
  const allTrendingStuff = await allTrendingRes.json();
  console.log("tv LENGTH: ", tvShows.length);
  // console.log("trending stuff: ", JSON.stringify(allTrendingStuff));


  // fetch('https://api.themoviedb.org/3/movie/987685/images', options)
  // .then(response => response.json())
  // .then(response => console.log(response))
  // .catch(err => console.error(err));

  // console.log(demandMovies.results);

  // const movieRes = await fetch(
  //   "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2",
  //   options
  // );

  // const tvRes = await fetch(
  //   "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
  //   options
  // );

  // const movieData = await movieRes.json();`
  // const tvData = await tvRes.json();

  // fetchMovies().then(movies => console.log(movies)).catch(err => console.log(err));


  return (
    <div className="homeContainer w-screen">
      <Header media={movies.concat(tvShows)}/>
      <HeroSection demandMovies={demandMovies}/>
    {/* Featured Movies Section */}
      <FeaturedMovies movies={movies}/>
      <FeaturedTV tvShows={tvShows}/>

      {/* Content Sections */}
      <div className="contentSections bg-gray-900">
      <div className="text-white py-8 px-12">
      <h2 className="text-2xl font-bold mb-4">Actors Spotlight</h2>
      <div className="flex overflow-x-auto space-x-6">
        {trendingPeople.map((person: any) => (
          <div key={person.id} className="flex-shrink-0 w-44">
            <Image
              src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
              alt={person.name}
              width={176}  // These dimensions are examples
              height={264}
              className="rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{person.name}</h3>
          </div>
        ))}
      </div>
    </div>
        <AllTrending allTrendingStuff={allTrendingStuff}/>
      </div>

      <Footer />
    </div>
  );
}
