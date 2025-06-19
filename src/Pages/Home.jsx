import MovieCard from "../Components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../Services/api";
import "../CSS/Home.css";

function Home() {
  const [searchQuery, SetSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularmovies = async () => {
      try {
        const PopularMovies = await getPopularMovies();
        setMovies(PopularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load due to an error");
      } finally {
        setLoading(false);
      }
    };

    loadPopularmovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return 
    if(loading) return;

      setLoading(true)
      try{
        const searchResult = await searchMovies(searchQuery);
         setMovies(searchResult);
         setError(null)
      }catch(err){
        console.log(err)
        setError("Failed to search movie..")
      }finally{
        setLoading(false)
      }
      

      SetSearchQuery("");
    
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => SetSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

       {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {Array.isArray(movies) &&
            movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;
