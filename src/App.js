import './App.css';
import Movie from './Components/Movie';
import { useEffect, useState } from 'react';


const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])
  
  const getMovies = (API) => {
    fetch(API)
    .then(res => res.json())
    .then(data => { 
      console.log(data);
      setMovies(data.results) 
    });
  }

  const handleOnSubmit = (e) =>  {
    e.preventDefault();

    if(searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm('')
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <header>
        <div className='movie-logo-input'>
          <img src="https://i.ibb.co/zsLBBpQ/movie-search-high-resolution-logo-transparent.png" alt="movie-search-high-resolution-logo-transparent"/>
          <form onSubmit={handleOnSubmit}>
            <input className='search' type='search' placeholder='Search for movies' value={searchTerm} onChange={handleOnChange}/>
          </form>
        </div>
      </header>
      <div className='movie-content'>
        <h1>Most complete movie information search engine</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar erat in arcu tempor bibendum. Donec molestie quam ligula, et blandit diam scelerisque at. Cras quis auctor dui. <br/>

          Phasellus aliquet dictum nulla ac scelerisque. Quisque convallis orci ac convallis venenatis. Nullam volutpat et nisi nec pulvinar. Pellentesque nulla tortor, auctor at accumsan ac, blandit ornare est. Aliquam eget faucibus tellus.</p>

      </div>
      <div className='movie-container'>
        {movies.length > 0 && movies.map((movie) => (
          <Movie key={movie.id} {...movie}/>
        ))}
      </div>
    </>
  );
}

export default App;
