import { useContext, useEffect} from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constans/endpoint";
import MoviesContext from "../components/context/MoviesContext";

function TopRated() {
    // const [movies, setMovies] = useState([]);
    const {movies, setMovies} = useContext(MoviesContext);

    useEffect(() => {
        async function fetchTopRatedMovies() {
            // const API_KEY = import.meta.env.VITE_API_KEY;
            // const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
            // const response = await axios.get(URL);
            const response = await axios(ENDPOINTS.TOPRATED);
            setMovies(response.data.results);
        }
        fetchTopRatedMovies();
    }, [setMovies]);

    return (
        <>
            <Hero movie={movies[0]} />
            <Movies title="Top Rated Movies" />
        </>
    );
}

export default TopRated;