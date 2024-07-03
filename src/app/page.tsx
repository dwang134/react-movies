// import {fetchMovies} from '../../api/API';
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedMovies from "@/components/FeaturedMovies";
import FeaturedTV from "@/components/FeaturedTV";


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

  const mostDemandMoviesRes = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );

  const trendingPeopleRes = await fetch('https://api.themoviedb.org/3/trending/person/week?language=en-US', options);

  const demandMovies = await mostDemandMoviesRes.json();
  const movies = await movieRes.json();
  const tvShows = await tvRes.json();
  const trendingPeople = await trendingPeopleRes.json();


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
      <Header />
      <HeroSection demandMovies={demandMovies}/>
    {/* Featured Movies Section */}
      <FeaturedMovies movies={movies}/>
      <FeaturedTV tvShows={tvShows}/>      

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
