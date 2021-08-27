import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Hero } from "./Hero";
import "../styles/MovieDetails.scss"

export function MovieDetails() {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const backDropUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b68ca8ffb62a546da9148ee2f59c2348&language=en-US`)
            .then(response => response.json())
            .then(data => setMovieDetails(data));
    }, [id]);

    return (
        <div>
            <Hero text={movieDetails.title} backdrop={backDropUrl} />
            <div className="movie-details">
                <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} className="details-poster" alt="poster" />

                <div className="movie-blurb">
                    <h2>{movieDetails.tagline}</h2>
                    <p>{movieDetails.overview}</p>
                </div>
            </div>
        </div>
    )
}