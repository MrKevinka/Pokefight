import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PokemonPage() {
  const { name } = useParams();

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    // Fetch Pokémon data based on the name parameter
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.error(error));
  }, [name]);
  const weightConverter = (weight) => {
    return Math.floor(weight / 10) + ".0 kg.";
  };

  const heightConverter = (height) => {
    return height / 10 + " m.";
  };

  return (
    <div>
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>id:{pokemonData.id}</p>
          <p>Height:{heightConverter(pokemonData.height)}</p>
          <p>weight: {weightConverter(pokemonData.weight)}</p>
          {/* <p>Type: {pokemonData.types[0].type.name}  {pokemonData.types[1].type.name} </p> */}
          <p>
            Attack:{" "}
            {
              pokemonData.stats.find(({ stat }) => stat.name === "attack")
                ?.base_stat
            }
          </p>
          <p>
            {" "}
            Speed:
            {
              pokemonData.stats.find(({ stat }) => stat.name === "speed")
                ?.base_stat
            }
          </p>
          <p>
            Hp:
            {
              pokemonData.stats.find(({ stat }) => stat.name === "hp")
                ?.base_stat
            }
          </p>
        </div>
      )}
    </div>
  );
}

export default PokemonPage;
