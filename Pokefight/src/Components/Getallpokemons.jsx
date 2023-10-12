import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokemonImage from "./PokemonImage";
import Spinner from "./Spinner";
import "./CSS/Getallpokemons.css";
import Search from "./Search";

export default function Getallpokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="heading_pokedex">
        <h1>Pokédex</h1>
        <h3>Choose your Pokémon!</h3>
        <Search />
      </div>
      <div className="all_poke">
        {pokemons && !isLoading ? (
          pokemons.map((pokemon, index) => (
            <div className="Pokemon" key={index}>
              <h2>
                <Link to={`/pokemon/${index + 1}`} style={{ color: "white" }}>
                  {pokemon.name}
                </Link>
              </h2>
              <PokemonImage pokemonName={pokemon.name} />
            </div>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}
