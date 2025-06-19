import "../CSS/MovieCard.css";
import { useMovieContext } from "../Contexts/movieContext";

function MovieCard({ movie }) {
  const { addToFavourites, removeFromFavourites, isFavourite } = useMovieContext();
 

  function FavouriteClick(e) {
    e.preventDefault()
    if(isFavourite(movie.imdbID)) removeFromFavourites(movie.imdbID)
    else addToFavourites(movie)
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie-overlay">
          <button className={`favourite-btn ${isFavourite(movie.imdbID) ? "active" : ""}`} onClick={FavouriteClick}>
          ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
