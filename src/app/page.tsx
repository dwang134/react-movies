import Image from "next/image";
// import {fetchMovies} from '../../api/API';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {useEffect, useState} from 'react';


export default async function Home() {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjM2MGZjOTVkYjQxNTVjYjM1ZDkxYTc0ZWUxODMzNCIsIm5iZiI6MTcxOTgxODgxMy45OTQ4MjQsInN1YiI6IjY2N2Y0YzNiMjdkZTkxMGE2YWE4MzEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.abbuDtRjd6iVuYc1CocnbUarRc2tUdOv0aLs-2CjYCQ'
    }
  };

  const res= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2', options);
  const data = await res.json();
  console.log(data);

  // fetchMovies().then(movies => console.log(movies)).catch(err => console.log(err));

  return (
    <div className="homeContainer w-screen h-screen border-4 border-sky-500">
    <Header/>
    <div className='heroSection'>
    </div>
    <Footer/>
    </div>
  );
}
