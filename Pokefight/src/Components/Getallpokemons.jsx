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
      console.log(data.results);
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
      {/* {pokemon.map((pokemon) => (
        <div key={pokemon.id}>
        
        <Link to={`/Pokemon/${pokemon.id}`}>
            <h2>{JSON.stringify(pokemon.name.english)}</h2>
            </Link>
         
        </div>
      ))} */}

      <div className="all_poke">
        {pokemons &&
          pokemons.map(({ name, url, type }) => (
            <div className="Pokemon">
              {/* <li key={url}>{name}</li> */}
              <h2>
                <Link
                  to={`/Pokemon/${name}/${type}`}
                  style={{ color: "white" }}
                >
                  {name.toUpperCase()}
                </Link>
              </h2>
              <PokemonImage pokemonName={name} />
              {/* <li> <img src={pokemons.sprites.front_default}  alt={name} /></li>  */}
            </div>
          ))}
      </div>
    </>
  );
}
