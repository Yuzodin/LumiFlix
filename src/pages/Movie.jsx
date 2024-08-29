import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import MovieCard from '../components/MovieCard'
import './Movie.css';

const MoviesUrl = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Movie = () => {
    const {id} = useParams()
    const [Movie, setMovie] = useState(null)

    const getMovie = async(url) => {
        const res = await fetch(url)
        const data = await res.json();

        setMovie(data)
    }

    const FormatDollar = (Number) => {
        return Number.toLocaleString("en-Us", {
            style: "currency",
            currency: "USD"
        })
    }

    useEffect(() => {
        const MovieUrl = `${MoviesUrl}${id}?${apikey}`
        getMovie(MovieUrl)
    }, [])

    return <div className="MoviePage"> {Movie && (
        <>
        <MovieCard Movie={Movie} showLink={false}/>
        <p className="tagline">{Movie.tagline}</p>
        <div className="info">
            <h3>
                <strong>Orçamento</strong>
            </h3>
            <p>{FormatDollar(Movie.budget)}</p>
        </div>
        <div className="info">
            <h3>
                <strong>Receita</strong>
            </h3>
            <p>{FormatDollar(Movie.revenue)}</p>
        </div>
        <div className="info">
            <h3>
               <strong>Duração</strong>
            </h3>
            <p>{Movie.runtime} Minutos</p>
        </div>
        <div className="info description">
            <h3>
                <strong>Descrição</strong>
            </h3>
            <p>{Movie.overview}</p>
        </div>
        </>
        )}

    </div>;
};

export default Movie;