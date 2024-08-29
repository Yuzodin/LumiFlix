import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ Movie, showLink = true}) => {
    return(
        <div className="movie-card">
            <img src={imageUrl + Movie.poster_path} alt={Movie.title} />
            <h2>{Movie.title}</h2>
            <p>
            <FaStar/> {Movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${Movie.id}`}>Detalhes</Link>}
        </div>
    )
} 

export default MovieCard