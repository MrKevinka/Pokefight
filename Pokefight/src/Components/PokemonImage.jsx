import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PokemonImage({ pokemonName }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchPokemonImage = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const imageUrl = response.data.sprites.front_default;
        setImageUrl(imageUrl);
      } catch (error) {
        console.error("Error fetching Pokemon image:", error);
      }
    };

    fetchPokemonImage();
  }, [pokemonName]);

  return <>{imageUrl && <img src={imageUrl} alt={pokemonName} />}</>;
}
