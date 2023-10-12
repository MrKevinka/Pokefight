import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokemonImage from "./PokemonImage";

import "./CSS/Getallpokemons.css";
import Search from "./Search";

export default function Getallpokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await response.json();

      setPokemons(data.results);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="heading_pokedex">
        <h1>Pokédex</h1>
        <h3>Choose your Pokémon!</h3>
      </div>
      <Search />
      <div className="all_poke">
        {pokemons
          ? pokemons.map((pokemon, index) => (
              <div className="Pokemon" key={index}>
                <h2>
                  <Link to={`/pokemon/${index + 1}`} style={{ color: "white" }}>
                    {pokemon.name}
                  </Link>
                </h2>
                <PokemonImage pokemonName={pokemon.name} />
              </div>
            ))
          : null}
      </div>
    </>
  );
}
