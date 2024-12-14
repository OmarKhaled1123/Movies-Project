import { useEffect, useState } from 'react';
import axios from 'axios'
// import MovieCard from './components/MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import '../src/App.css'
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';

// import ProductCard  from './components/ProductCard';

function App() {
 
  const [movies, setMovies] = useState([])
  const [pageCount,setpageCount] = useState(0)




  const getAllMovies = async () => {

   const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6e26f8ebd56d303004ad9811668ca662&language=en-US")
   setMovies(res.data.results)
   setpageCount(res.data.total_pages)
   
  }
  useEffect (() => {
    getAllMovies();
    
  } ,[])

  const getPages = async (page) => {

    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6e26f8ebd56d303004ad9811668ca662&language=en-US&page=${page}`)
    setMovies(res.data.results)
    setpageCount(res.data.total_pages)
    
   }
  
  

  const search = async (word) => {
   if(word === "") {
    getAllMovies()

   }
   else{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6e26f8ebd56d303004ad9811668ca662&query=${word}&language=en-US`)
    setMovies(res.data.results)
    setpageCount(res.data.total_pages)
   }
   }

   


  return (
    <div >
      
      <NavBar search={search}/>
      <Container>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieList movies={movies} getPages={getPages} pageCount={pageCount}/>} />
          <Route path="/mov/:id" element ={<MovieDetails/>} />
     
     </Routes>
     </BrowserRouter>
     </Container>
     
    </div>
  );
}

export default App;
