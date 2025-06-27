import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column
  padding: 2rem 1rem;
  gap: 2rem;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4rem; 
    padding: 8rem 4rem;
    text-align: left;
  }
`;

const HeroText = styled.div`
  max-width: 600px;
  flex: 1;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2563eb;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Genre = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #be185d;
  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.6;
`;


const WatchButton = styled.button`
  margin-top: 1.5rem;
  background-color: #3b82f6;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  /* Small (sm) */
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;

  /* Medium (md/default) */
  @media (min-width: 576px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  /* Large (lg) */
  @media (min-width: 992px) {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
  }

  &:hover {
    background-color: #2563eb;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  flex: 1;

  @media (min-width: 992px) {
    max-width: 500px; // Lebih besar di desktop
  }
`;

// function Hero() {
//   const [movie, setMovie] = useState({});

//   useEffect(() => {
//     const API_KEY = import.meta.env.VITE_API_KEY;
//     async function fetchTrandingMovies(){
//       const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
//       const response = await axios(URL);
//       const firstMovie = response.data.results[0];
//       return firstMovie;
//     }

//   //   async function fetcDetailMovie(){
//   //     const trendingMovie = await fetchTrandingMovies();
//   //     const id = trendingMovie.id;
//   //     const params = `?api_key=${API_KEY}&append_to_response=videos`;
//   //     const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
//   //     const response = await axios(URL);
//   //     setMovie(response.data.results);
//   //   }

//   //   fetcDetailMovie();
//     fetchTrandingMovies();
//   }, []);

  

//   useEffect(() => {
//     async function fetchMovie() {
//       const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");
//       const data = await response.json();
//       setMovie(data);
//     }
//     fetchMovie();
//   }, []);

//   return (
//     <HeroSection>
//       <HeroText>
//         <Title>{movie.Title}</Title>
//         <Genre>Genre : {movie.Genre}</Genre>
//         <Description>{movie.Plot}</Description>
//         <WatchButton>Watch</WatchButton>
//       </HeroText>
//       {movie.Poster && <HeroImage src={movie.Poster} alt={movie.Title} />}
//     </HeroSection>
//   );
// }

// function Hero() {
//   const [movie, setMovie] = useState(null);
//   const [genres, setGenres] = useState([]);

//   useEffect(() => {
//     const API_KEY = import.meta.env.VITE_API_KEY;

//     async function fetchMovieDetails() {
//       try {
//         // 1. Fetch trending movie
//         const trendingUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
//         const trendingRes = await axios.get(trendingUrl);
//         const firstTrendingMovie = trendingRes.data.results[0];

//         // 2. Fetch detail movie by ID
//         const detailUrl = `https://api.themoviedb.org/3/movie/${firstTrendingMovie.id}?api_key=${API_KEY}&append_to_response=videos`;
//         const detailRes = await axios.get(detailUrl);

//         setMovie(detailRes.data);
//         setGenres(detailRes.data.genres || []);
//       } catch (error) {
//         console.error("Failed to fetch hero movie data:", error);
//       }
//     }

//     fetchMovieDetails();
//   }, []);

//   if (!movie) return <p>Loading...</p>;

//   return (
//     <HeroSection>
//       <HeroText>
//         <Title>{movie.title}</Title>
//         <Genre>
//           Genre: {genres.map((g) => g.name).join(", ")}
//         </Genre>
//         <Description>{movie.overview}</Description>
//         <WatchButton>Watch</WatchButton>
//       </HeroText>
//       {movie.poster_path && (
//         <HeroImage
//           src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//           alt={movie.title}
//         />
//       )}
//     </HeroSection>
//   );
// }

function Hero() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    async function fetchTrendingMovies() {
      const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
      const response = await axios.get(url);
      const firstMovie = response.data.results[0];
      return firstMovie;
    }

    async function fetchDetailMovie() {
      const trendingMovie = await fetchTrendingMovies();
      const id = trendingMovie.id;
      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const url = `https://api.themoviedb.org/3/movie/${id}${params}`;
      const response = await axios.get(url);
      setMovie(response.data);
    }

    fetchDetailMovie();
  }, []);

  const genres = movie.genres ? movie.genres.map((g) => g.name).join(", ") : "";
  const trailer =
    movie.videos && movie.videos.results && movie.videos.results.length > 0
      ? movie.videos.results[0].key
      : null;

  return (
    <HeroSection>
      <HeroText>
        <Title>{movie.title}</Title>
        <Genre>Genre : {genres}</Genre>
        <Description>{movie.overview}</Description>
        {trailer && (
          <WatchButton
            as="a"
            href={`https://www.youtube.com/watch?v=${trailer}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch
          </WatchButton>
        )}
      </HeroText>
      {movie.backdrop_path && (
        <HeroImage
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
        />
      )}
    </HeroSection>
  );
}

export default Hero;
