import Footer from "./Components/Footer";
import "./App.css";

import Navbar from "./Components/Navbar";

import { Routes, Route } from "react-router-dom";
import Getallpokemons from "./Components/Getallpokemons";
import Pokemondetail from "./Components/Pokemondetail";
import Search from "./Components/Search";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";

import "./App.css";
import PokemonImage from "./Components/PokemonImage";
import PokemonPage from "./Components/Pokemonpage";
import Fight from "./Components/Fight";


import { BrowserRouter , Routes, Route, Navigate} from "react-router-dom";
import Leaderboard from "./Components/Leaderboard";
import Searchbar from "./Components/Searchbar";
import Randomfight from "./Components/Randomfight";
import Page404 from "./Components/Page404";
import Homepage from "./Components/Homepage";

import EnterYourNameModule from "./Components/CreatingUser";
import { useState, useEffect } from "react";
import axios from "axios";
import PokeIndividualInfo from "./Components/PokeIndividualInfo";


function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  return (

     <div className="App">
    
    
    <BrowserRouter>
    <Navbar/>

    <Routes>
    
      <Route path = "/" element = {<Navbar/>} />
      <Route path = "/Homepage" element = {<Homepage/>} />
      <Route path = "/Leaderboard" element = {<Leaderboard/>} />
      <Route path = "/Searchbar" element = {<Searchbar/>} />
      <Route path = "/Randomfight" element = {<Randomfight/>} />
      <Route path = "/*" element = {<Navigate to = "/"/>} />
      
      </Routes>
      </BrowserRouter>
      
      </div>
    

    <>
      {" "}
      <div
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <div>It's a {isDark ? "Dark" : "Light"} theme</div>
        <br />
      </div>{" "}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Navbar />
      <Routes>
        <Route path="/pokemon" element={<Getallpokemons />} />
        <Route path="/leaderboard/users" element={<Leaderboard />} />

        {fullPokeInfo ? (
          <Route
            path="/"
            element={<EnterYourNameModule id={`${fullPokeInfo?.id}`} />}
          />
        ) : null}
        {fullPokeInfo ? (
          <Route
            path="/pokemon/:id"
            element={<PokeIndividualInfo pokemon={fullPokeInfo} />}
          />
        ) : null}

        {/* <Route path="/Pokemon/:name/" element={<PokemonPage />} /> */}

        {/* <Route path="/Pokemon/:name/" element={<Fight />} /> */}
        {/* <Route path="/Pokemon/fight" element={<Fight />} /> */}
      </Routes>
      {/* <Search /> */}
      <Routes>
        <Route path="/pokemon" element={<Getallpokemons />} />

        {/* <Route path="/Pokemon/:name/:type" element={ <PokemonPage/>} /> */}

        <Route path="/Pokemon/:name/:type" element={<Fight />} />
      </Routes>
      {/* <Search /> */}
      {/* <Navbar /> */}
      <Footer />
    </>

  );
}

export default App;
