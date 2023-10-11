import { Button } from "react-bootstrap";

export default function PokeIndividualInfo({ pokemon }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{pokemon.name}</h1>
      <img src={pokemon.pic} />
      <div
        style={{ border: "solid white 4px", margin: "25px", padding: "10px" }}
      >
        <h3>Attack: {pokemon.baseinfo.Attack}</h3>
        <h3>Defense: {pokemon.baseinfo.Defense}</h3>
        <h3>HP: {pokemon.baseinfo.HP}</h3>
        <h3>Speed: {pokemon.baseinfo.Speed}</h3>
        <h3>Type: {pokemon.type}</h3>
      </div>
      <Button>FIGHT</Button>
    </div>
  );
}
