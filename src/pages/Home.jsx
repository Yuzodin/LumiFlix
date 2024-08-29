import { useState, useEffect } from "react";
import Movie from "./Movie";
import MovieCard from "../components/MovieCard";
import './MoviesLayout.css'

const MoviesUrl = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [TopMovies, SetTopMovies] = useState([])

    const getTopRatedMovies = async(url) => {
        const res = await fetch(url)
        const data = await res.json();

        SetTopMovies(data.results)
    };

    useEffect (() => {
        const TopRateUrl =`${MoviesUrl}top_rated?${apikey}`;
        getTopRatedMovies(TopRateUrl)
    }, [])

    return (
    <div className="container">
        <h2 className="title">Mais bem avaliados</h2>
        <div className="movies-container">
        {TopMovies.length > 0 && TopMovies.map((Movie) => <MovieCard key={Movie.id} Movie={Movie}/>)}
        </div>
    </div>);
    //Stop no minuto 27:40
};

export default Home;