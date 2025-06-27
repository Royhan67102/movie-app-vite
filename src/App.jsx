import {Route, Routes} from 'react-router-dom'
import { useState } from 'react';
// import Hello from './components/Hello'
import './App.css'
import Home from './pages/Home'
import Create from './pages/Create'
import NowPlaying from './pages/NowPlaying'
import Popular from './pages/Popular'
import TopRated from './pages/TopRated'
import Layout from './Layout'
import DetailMovie from './pages/Detail'
import data from './utils/constans/data'
import MoviesContext from './components/context/MoviesContext';

function App() {

  const [movies, setMovies] = useState(data);
  const contextValue = {
    movies, setMovies 
  };
  return (
  <>
  {/* <Home/> */}

  <MoviesContext.Provider value={contextValue}>
  <Layout>
  <Routes>
    <Route path='/' element={<Home />} ></Route>
    <Route path='/movie/create' element={<Create />} ></Route>
    <Route path='/movie/now' element={<NowPlaying />} ></Route>
    <Route path='/movie/popular' element={<Popular />} ></Route>
    <Route path='/movie/top' element={<TopRated />} ></Route>
    <Route path='/movie/:id' element={<DetailMovie />} ></Route>
  </Routes>
  </Layout>
  </MoviesContext.Provider>
  </>
  )
}

export default App
