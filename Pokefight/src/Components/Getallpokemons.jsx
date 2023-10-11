import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokemonImage from "./PokemonImage";

export default function Getallpokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=50"
      );
      const data = await response.json();

      setPokemons(data.results);
      console.log(data.results);
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Pokemon List</h1>

      {/* {pokemon.map((pokemon) => (
        <div key={pokemon.id}>
        
        <Link to={`/Pokemon/${pokemon.id}`}>
            <h2>{JSON.stringify(pokemon.name.english)}</h2>
            </Link>
         
        </div>
      ))} */}

      <ul>
        {pokemons &&
          pokemons.map(({ name, url, type }) => (
            <>
              {/* <li key={url}>{name}</li> */}
              {/* <Link to={`/Pokemon/${name}/${type}`}> */}
              <Link to={`/Pokemon/${name}`}>
                <h2>{name}</h2>
              </Link>
              <PokemonImage pokemonName={name} />
              {/* <li> <img src={pokemons.sprites.front_default}  alt={name} /></li>  */}
            </>
          ))}
      </ul>
    </>
  );
}
