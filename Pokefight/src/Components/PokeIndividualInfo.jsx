import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function PokeIndividualInfo() {
  const { id } = useParams();
  console.log("hello from random IDDDDDD", typeof id);

  const [pokemon, setComputerData] = useState(null);

  const randomFetch = async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${Number(id)}`)
      .then((response) => {
        console.log(response);
        setComputerData(response.data);
      });
  };

  useEffect(() => {
    randomFetch();
  }, []);

  console.log("hello from random", pokemon);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{pokemon?.name}</h1>
        <img src={pokemon?.sprites.front_default} />
        <div
          style={{ border: "solid white 4px", margin: "25px", padding: "10px" }}
        >
          <h3>Attack: {pokemon?.stats[1].base_stat}</h3>
          <h3>Defense: {pokemon?.stats[2].base_stat}</h3>
          <h3>HP: {pokemon?.stats[0].base_stat}</h3>
          <h3>Speed: {pokemon?.stats[5].base_stat}</h3>
          <h3>Type: {pokemon?.types[0].type.name}</h3>
        </div>
        <Button>FIGHT</Button>
      </div>
    </div>
  );
}
