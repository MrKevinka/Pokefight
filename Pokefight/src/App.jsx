import Footer from "./Components/Footer";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [poke, setPoke] = useState([]); //array of fetched pokes
  const [randomPokeState, setRandomPokeState] = useState([]); //random poke

  const fetchPoke = async () => {
    try {
      const data = await axios.get("http://localhost:8080/pokemons");

      setPoke(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect(() => {
  //   fetchPoke();
  // }, []);

  const randomPokeIndex = Math.floor(Math.random() * poke?.length);
  const randomPoke = poke[randomPokeIndex - 1];
  console.log(typeof randomPokeIndex);

  const fetchPokeById = async () => {
    try {
      const data = await axios.get(
        `http://localhost:8080/pokemons/info/${randomPokeIndex}`
      );

      setRandomPokeState(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPoke();
    fetchPokeById(); //it wont console log random poke additional info unless you run ctrl+s for some reason
  }, []);

  console.log(randomPoke);
  console.log(randomPokeState);
  return (
    <>
      <h1>Hello Trainer, welcome to PokéFight!</h1>
      <Footer />
    </>
  );
}

export default App;
