import { Routes , Route } from "react-router-dom";
import "./CSS/App.css"
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import Favourite from "./Pages/Favourites";
import {MovieProvider} from "./Contexts/movieContext"


function App() {
 

  return (
    <MovieProvider>
      <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favourites" element={<Favourite/>}/>
      </Routes>
    </main>
    </MovieProvider>
  );
}



export default App;
