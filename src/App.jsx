import { Routes , Route } from "react-router-dom";
import "./CSS/App.css"
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Favourite from "./Pages/Favourites";
import {MovieProvider} from "./Contexts/movieContext"


function App() {
 

  return (
    <MovieProvider>
      <Navbar/>
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
