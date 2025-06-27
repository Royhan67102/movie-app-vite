import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMovie = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;

  img {
    max-width: 100%;
    border-radius: 20px;
    margin-bottom: 1rem;
    height: auto;
  }

  h3 {
    font-size: 1.2rem;
    color: #1e3a8a;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.9rem;
    color: #64748b;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    flex-basis: 50%;
    padding: 0 1rem;
  }

  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

function Movie(props) {
  const { movie } = props;
  const tmdbImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  const year = movie.year || movie.release_date;

  return (
    <StyledMovie>
      <img
        src={movie.poster || tmdbImage}
        alt={movie.title}
      />
      <Link to={`/movie/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>
      <p>{year}</p>
    </StyledMovie>
  );
}

export default Movie;