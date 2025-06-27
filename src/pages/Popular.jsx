// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
import { useContext, useEffect} from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constans/endpoint";
import MoviesContext from "../components/context/MoviesContext";

function Popular() {
    // const [movies, setMovies] = useState([]);
    const {setMovies} = useContext(MoviesContext);

    useEffect(function() {
        async function fetchPopularMovies() {
            // const API_KEY = import.meta.env.VITE_API_KEY;
            // const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
            // const response = await axios.get(URL);
            const response = await axios(ENDPOINTS.POPULAR);
            setMovies(response.data.results);
        }
        fetchPopularMovies();
    }, [setMovies]);

    return (
        <>
        <Hero />
        <Movies title="Popular Movies" />
        </>
    );
}
export default Popular;