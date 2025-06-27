import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import StyledDetailMovie from "../components/UI/Button/DetailMovie.styled";


function DetailMovie() {

    const { id } = useParams();
    const [movie, setMovie] = useState("");

    useEffect(()=> {
        async function getDetailMovie() {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const params = `?api_key=${API_KEY}&append_to_response=videos`;
        const url = `https://api.themoviedb.org/3/movie/${id}${params}`;
        const response = await axios.get(url);
        setMovie(response.data);
    }
        getDetailMovie();
    },[id]);

    return (
        <>
        {/* <h2*>Detail Movie Id: {params.id}</h2*/}
        <StyledDetailMovie>
        <div>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
            {/* <h2>{movie.title}</h2>
            <p>{movie.overview}</p> */}
        </div>

        <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <button>Watch</button>
        </div>
        </StyledDetailMovie>
        </>
    )
 }

export default DetailMovie;