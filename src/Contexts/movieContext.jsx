import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
       const [favourites, setFavourites] = useState([])
       
       useEffect(() => {
             const storedFavs = localStorage.getItem("favourites")

             if(storedFavs) setFavourites(JSON.parse(storedFavs))
       },[])
       
       useEffect(()=>{
        console.log("Updated favourites:", favourites);
          localStorage.setItem('favourites',JSON.stringify(favourites))

       },[favourites])

       const addToFavourites = (movie) => {
        setFavourites(prev =>[...prev,movie])
       }
    
       const removeFromFavourites = (movieID) => {
        setFavourites(prev => prev.filter(movie => movie.imdbID!== movieID))
       }

       const isFavourite = (movieId) =>  {
         return favourites.some( movie => movie.imdbID === movieId)
       }

       const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
       }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}