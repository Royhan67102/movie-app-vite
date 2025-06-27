// import React, { useState } from "react";
// import Footer from "../components/Footer/Footer";  
// import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero"; 
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovie/AddMovie";
// import data from "../utils/constans/data";
import Button from "../components/UI/Button"; 

function Home() {
  // const [movies, setMovies] = useState(data); 
  // const[movies] = useState(data);

  return (
    <div>
        {/* <Navbar /> */}
        <main>
            <Hero />
            {/* <Button variant="primary">Lihat</Button>
            <Button variant="secondary">Lihat</Button>
            <Button variant="secondary" full>Lihat</Button> */}
            {/* <Movies movies={movies} setMovies={setMovies} /> */}
            <Movies />
            {/* <AddMovieForm movies={movies} setMovies={setMovies} /> */}
        </main>
        <footer>
            {/* <Footer /> */}
        </footer>
    </div>
  );
}

export default Home;