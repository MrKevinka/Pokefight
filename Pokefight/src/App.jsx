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

// import Navbar from "./Components/Navbar";
import Leaderboard from "./Components/Leaderboad";
import EnterYourNameModule from "./Components/CreatingUser";
import { useState, useEffect } from "react";
import axios from "axios";
import PokeIndividualInfo from "./Components/PokeIndividualInfo";

// import RandomPoke from "./Components/RandomPoke";

function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  const [poke, setPoke] = useState(null);
  const [randomPokeState, setRandomPokeState] = useState(null);
  const [fullPokeInfo, setFullPokeInfo] = useState(null);

  //this part generates random poke and passes it down as props to show info about this pokemon on button click
  const getRandomPoke = async () => {
    const randomPokeIndex = Math.floor(Math.random() * 890);
    console.log("random index is ", randomPokeIndex);
    try {
      const data = await axios.get(
        `http://localhost:8080/pokemons/info/${randomPokeIndex}` //on this fetch it only works with localhost for now. idk why
      );
      // const anotherData = await axios.get(
      //   `https://pokefight-lk6g.onrender.com/pokemons/${randomPokeIndex}`
      // );
      const anotherData = await axios.get(
        `http://localhost:8080/pokemons/${randomPokeIndex}`
      );

      setPoke(data.data);
      setRandomPokeState(anotherData.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRandomPoke();
  }, []);

  useEffect(() => {
    setFullPokeInfo({
      id: randomPokeState?.id,
      pic: poke?.front_default,
      baseinfo: randomPokeState?.base,
      name: randomPokeState?.name.english,
      type: randomPokeState?.type[0],
    });
    console.log("poke is", fullPokeInfo);
  }, [poke]);

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
