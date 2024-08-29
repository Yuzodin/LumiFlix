import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const SearchUrl = import.meta.env.VITE_SEARCH
const apikey = import.meta.env.VITE_API_KEY

import './MoviesLayout.css'

const Search = () => {

    const [searchParams] = useSearchParams()
    const [Movies, Setmovies] = useState([])
    const query = searchParams.get('q')

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        Setmovies(data.results);
      };
    
      useEffect(() => {
        const searchWithQueryURL = `${SearchUrl}?${apikey}&query=${query}`;
        getSearchedMovies(searchWithQueryURL);
      }, [query]);

    return (
        <div className="container">
            <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
            <div className="movies-container">
            {Movies.length > 0 && Movies.map((Movie) => <MovieCard key={Movie.id} Movie={Movie}/>)}
            </div>
        </div>
    );
};

export default Search;