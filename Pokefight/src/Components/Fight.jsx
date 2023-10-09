import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PokemonPage() {
  const { name } = useParams();

  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonen, setPokemonen] = useState(null);


  const [playerPokemonName, setPlayerPokemonName] = useState("Name")
  const [playerPokemonImage, setPlayerPokemonImage] = useState(0)
  const [playerPokemonAttack, setPlayerPokemonAttack] = useState(0)
  const [playerPokemonDefense, setPlayerPokemonDefense] = useState(0)
  const [playerPokemonSpeed, setPlayerPokemonSpeed] = useState(0)

  const [randomId1, setRandomId1] = useState()
  const [randomId2, setRandomId2] = useState(Math.floor(Math.random() * 898));
  const [winStatus, setWinStatus] = useState(null);
  const [computerPokemonName, setComputerPokemonName] = useState("Name")
  const [computerPokemonImage, setComputerPokemonImage] = useState(0)
  const [computerPokemonAttack, setComputerPokemonAttack] = useState(0)
  const [computerPokemonDefense, setComputerPokemonDefense] = useState(0)
  const [computerPokemonSpeed, setComputerPokemonSpeed] = useState(0)

  const playerWin = () => {
    return <p>Player Wins!</p>
  }
  const computerWin = () => {
    return <p>Computer Wins!</p>
  }
  
  
  useEffect(() => {
    // Fetch Pokémon data based on the name parameter
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.error(error));  

  }, [name]);

  
  const weightConverter = weight => {
    return Math.floor(weight / 10) + ".0 kg.";
  }

  const heightConverter = height => {
    return (height / 10) + " m."
  }

  return (
    <div>
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />
          <p>id:{pokemonData.id}</p>
          <p>Height:{heightConverter(pokemonData.height)}</p>
          <p>weight: {weightConverter(pokemonData.weight)}</p>
          <p>Type: {pokemonData.types[0].type.name}  {pokemonData.types[1].type.name} </p>
          <p>Attack: {pokemonData.stats.find(({stat}) => stat.name === 'attack')?.base_stat}</p>
          <p> Speed:{pokemonData.stats.find(({stat}) => stat.name === 'speed')?.base_stat}</p>
          <p>Hp:{pokemonData.stats.find(({stat}) => stat.name === 'hp')?.base_stat}</p>

        </div>
        

        
      )}
      <button onClick={
         async () => {
            setRandomId1(pokemonData.id);
            setRandomId2(randomId2 => Math.floor(Math.random() * 898));

            const randomPokemonId = Math.floor(Math.random() * 898) + 1;
          

            await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
                console.log(response)
                setPlayerPokemonName(playerPokemonName => response.data.name)
                setPlayerPokemonImage(playerPokemonImage => response.data.sprites.front_default)
                setPlayerPokemonAttack(playerPokemonAttack => response.data.stats.find(({stat}) => stat.name === 'attack')?.base_stat)
                setPlayerPokemonDefense(playerPokemonDefense => response.data.stats.defense)
                setPlayerPokemonSpeed(playerPokemonSpeed => response.data.stats.find(({stat}) => stat.name === 'speed')?.base_stat)
              })
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`).then(response => {
                console.log(response)
                setComputerPokemonName(computerPokemonName => response.data.name)
                setComputerPokemonImage(computerPokemonImage => response.data.sprites.front_default)
                setComputerPokemonAttack(computerPokemonAttack => response.data.stats.find(({stat}) => stat.name === 'attack')?.base_stat)
                setComputerPokemonDefense(computerPokemonDefense => response.data.stats.defense)
                setComputerPokemonSpeed(computerPokemonSpeed => response.data.stats.find(({stat}) => stat.name === 'speed')?.base_stat)
              })
        }
      }>Fight</button>
      <div>
        <p>{playerPokemonName}</p>
       
        <p>{playerPokemonAttack}</p>
        <p>{playerPokemonSpeed}</p>
        <img src={playerPokemonImage}></img>
        <br/>
        <p>{computerPokemonName}</p>

        <p>{computerPokemonAttack}</p>
        
        <p>{computerPokemonSpeed}</p>
        
        <img src={computerPokemonImage}></img>
      </div>
      <div className="results">
        {playerPokemonAttack  + playerPokemonSpeed > computerPokemonAttack +  computerPokemonSpeed ? playerWin() : playerPokemonAttack + playerPokemonSpeed < computerPokemonAttack + computerPokemonSpeed ? computerWin() : <p>Tie!</p>}
      </div>
    </div>
  );
}

export default PokemonPage;
