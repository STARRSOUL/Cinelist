import "../CSS/Favourites.css"
import {useMovieContext} from "../Contexts/movieContext"
import MovieCard from "../Components/MovieCard"

function Favourite(){
    const {favourites} = useMovieContext();

    if(favourites){
      return (<div className="favourites">
        <h2>Your favourites</h2>
      <div className="movies-grid">
          {Array.isArray(favourites) &&
            favourites.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
        </div>
        </div>)
    }
    return(
      <>
      <div className="favourites-empty">
      <h2>No Favourite Movies Yet</h2>
      <p>Start adding movies to your favourites and they will appear here</p>
      </div>
      
      </>
    )
}

export default Favourite