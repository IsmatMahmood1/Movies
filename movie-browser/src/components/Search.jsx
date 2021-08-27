import { Hero } from "./Hero";
import { MovieCard } from "./MovieCard";
import "../styles/Search.scss"

export function Search({ keyword, searchResults }) {
    const title = `You are searching for ${keyword}`;
    console.log(searchResults);
    const resultsHtml = searchResults.map((movie, i) => {
        return <div key={i}> <MovieCard movie={movie} /> </div>
    });
    return (
        <div>
            <Hero text={title} />
            <div className="search-container">
                <div className="search-results">
                    {resultsHtml}
                </div>
            </div>
        </div>
    )
}