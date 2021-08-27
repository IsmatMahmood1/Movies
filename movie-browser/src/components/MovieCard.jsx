import { Link } from "react-router-dom"
import "../styles/MovieCard.scss"

export function MovieCard({ movie }) {
    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    return (
        <div className="card">
            <img src={posterUrl} className="card-image" alt="poster" />
            <div class="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <Link to={`/movie/${movie.id}`} className="details-button">Details</Link>
            </div>
        </div>

    )
}