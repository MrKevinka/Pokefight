import Footer from "./Components/Footer";
import "./App.css";
import Navbar from "./Components/Navbar";

import { Link, Routes, Route } from "react-router-dom";
import Getallpokemons from "./Components/Getallpokemons";
import Pokemondetail from "./Components/Pokemondetail";

import { useContext } from "react";

import "./App.css";
import PokemonImage from "./Components/PokemonImage";
import PokemonPage from "./Components/Pokemonpage";
import Fight from "./Components/Fight";
import Search from "./Components/Search";
import Spinner from "./Components/Spinner";

function App() {
  return (
    <>
      <Navbar />
      <div className="link"></div>
      <Routes>
        <Route path="/pokemon" element={<Getallpokemons />} />

        {/* <Route path="/Pokemon/:name/:type" element={ <PokemonPage/>} /> */}

        <Route path="/Pokemon/:name/:type" element={<Fight />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
