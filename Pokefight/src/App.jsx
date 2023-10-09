import Footer from "./Components/Footer";
import "./App.css";

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
import Navbar from "./Components/Navbar";
import Leaderboard from "./Components/Leaderboad";
import EnterYourNameModule from "./Components/CreatingUser";
import RandomPoke from "./Components/RandomPoke";

function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
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
        <Route path="/" element={<EnterYourNameModule />} />

        {/* <Route path="/Pokemon/:name/:type" element={ <PokemonPage/>} /> */}

        {/* <Route path="/Pokemon/:name/:type" element={<Fight />} /> */}
        <Route path="/Pokemon/:name/:type" element={<Fight />} />
      </Routes>
      {/* <Search /> */}
      <Footer />
    </>
  );

  // import React from "react";
  // import Navbar from "./Components/Navbar";

  // function App() {
  //   return (
  //     <>

  //       </>

  //   );
  //   }
}

export default App;
