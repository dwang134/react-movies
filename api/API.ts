// export const fetchMovies = async(language?: string, page?: number, region?: string) => {

//     //following documentation
//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjM2MGZjOTVkYjQxNTVjYjM1ZDkxYTc0ZWUxODMzNCIsIm5iZiI6MTcxOTgxODgxMy45OTQ4MjQsInN1YiI6IjY2N2Y0YzNiMjdkZTkxMGE2YWE4MzEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.abbuDtRjd6iVuYc1CocnbUarRc2tUdOv0aLs-2CjYCQ'
//         }
//       };

//       const res= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
//       const data = await res.json();

//       return data;
// }