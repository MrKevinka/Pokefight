import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CSS/Fight.css";
import "./CSS/pokeball.css";
import PokemonThemeAudio from "../sounds/Pokemon-Theme-Song.mp3";

function PokemonPage() {
  const { name } = useParams();
  const [computerData, setComputerData] = useState(null);
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonen, setPokemonen] = useState(null);

  const [playerPokemonName, setPlayerPokemonName] = useState("Name");
  const [playerPokemonImage, setPlayerPokemonImage] = useState(0);
  const [playerPokemonAttack, setPlayerPokemonAttack] = useState(0);
  const [playerPokemonDefense, setPlayerPokemonDefense] = useState(0);
  const [playerPokemonSpeed, setPlayerPokemonSpeed] = useState(0);

  const [randomId1, setRandomId1] = useState();
  const [randomId2, setRandomId2] = useState(Math.floor(Math.random() * 898));
  const [winStatus, setWinStatus] = useState(null);
  const [computerPokemonName, setComputerPokemonName] = useState("Name");
  const [computerPokemonImage, setComputerPokemonImage] = useState(0);
  const [computerPokemonAttack, setComputerPokemonAttack] = useState(0);
  const [computerPokemonDefense, setComputerPokemonDefense] = useState(0);
  const [computerPokemonSpeed, setComputerPokemonSpeed] = useState(0);

  const playerWin = () => {
    return <h1>🎉Player Wins!🎉</h1>;
  };
  const computerWin = () => {
    return <h1>🎉Computer Wins!🎉</h1>;
  };

  const draw = () => {
    return <h1>🎉It's a Draw!🎉</h1>;
  };

  useEffect(() => {
    // Fetch Pokémon data based on the name parameter
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.error(error));
  }, [name]);
  function playFromTwoMinutes() {
    // Get a reference to the audio element
    const audio = document.getElementById("myAudio");

    // Check if the audio element is available and can be played
    if (audio && audio.readyState > 2) {
      // Set the currentTime to 120 seconds (2 minutes)
      audio.currentTime = 33;
      audio.volume = 0.1;
      // Play the audio
      audio.play();
      setTimeout(() => {
        audio.pause();
      }, 10000); // Adjust the timeout duration (in milliseconds) as needed
    }
  }
  const weightConverter = (weight) => {
    return Math.floor(weight / 10) + ".0 kg.";
  };

  const heightConverter = (height) => {
    return height / 10 + " m.";
  };

  return (
    <>
      <div className="fight-container">
        {pokemonData && (
          <div className="fighter">
            <h1>{pokemonData.name.toUpperCase()}</h1>
            <img
              className="zoom-image"
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
            />
            <div className="data">
              <p>ID:{pokemonData.id}</p>
              <p>Height:{heightConverter(pokemonData.height)}</p>
              <p>weight: {weightConverter(pokemonData.weight)}</p>
              <p>
                Type: {pokemonData.types[0].type.name}
                {", "}
                {pokemonData.types[1] ? pokemonData.types[1].type.name : null}
              </p>
              <p>
                Attack:
                {
                  pokemonData.stats.find(({ stat }) => stat.name === "attack")
                    ?.base_stat
                }
              </p>
              <p>
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
          </div>
        )}

        <div className="container-2">
          <div className="pokeball"></div>

          <button
            className="battle"
            onClick={async () => {
              setRandomId1(pokemonData.id);
              setRandomId2((randomId2) => Math.floor(Math.random() * 898));

              const randomPokemonId = Math.floor(Math.random() * 898) + 1;
              await new Promise((resolve) => setTimeout(resolve, 100));
              await axios
                .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then((response) => {
                  console.log(response);
                  setPlayerPokemonName(
                    (playerPokemonName) => response.data.name
                  );
                  setPlayerPokemonImage(
                    (playerPokemonImage) => response.data.sprites.front_default
                  );
                  setPlayerPokemonAttack(
                    (playerPokemonAttack) =>
                      response.data.stats.find(
                        ({ stat }) => stat.name === "attack"
                      )?.base_stat
                  );
                  setPlayerPokemonDefense(
                    (playerPokemonDefense) => response.data.stats.defense
                  );
                  setPlayerPokemonSpeed(
                    (playerPokemonSpeed) =>
                      response.data.stats.find(
                        ({ stat }) => stat.name === "speed"
                      )?.base_stat
                  );
                });
              await new Promise((resolve) => setTimeout(resolve, 100));
              await axios
                .get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
                .then((response) => {
                  console.log(response);
                  setComputerPokemonName(
                    (computerPokemonName) => response.data.name
                  );
                  setComputerPokemonImage(
                    (computerPokemonImage) =>
                      response.data.sprites.front_default
                  );
                  setComputerPokemonAttack(
                    (computerPokemonAttack) =>
                      response.data.stats.find(
                        ({ stat }) => stat.name === "attack"
                      )?.base_stat
                  );
                  setComputerPokemonDefense(
                    (computerPokemonDefense) => response.data.stats.defense
                  );
                  setComputerPokemonSpeed(
                    (computerPokemonSpeed) =>
                      response.data.stats.find(
                        ({ stat }) => stat.name === "speed"
                      )?.base_stat
                  );
                  setComputerData(response);
                });
              playFromTwoMinutes();
            }}
          >
            Fight
          </button>
        </div>
        <div className="fighter">
          <h1>{computerData ? computerPokemonName.toUpperCase() : null}</h1>
          <img
            className="zoom-image"
            src={computerPokemonImage}
            alt="Your Enemey is about to apporach!"
          ></img>

          <div className="data">
            <p>ID:{computerData ? computerData.data.id : null}</p>
            <p>
              Height:{" "}
              {computerData ? heightConverter(computerData.data.height) : null}
            </p>
            <p>
              weight:{" "}
              {computerData ? weightConverter(computerData.data.weight) : null}
            </p>
            <p>
              Type: {computerData ? computerData.data.types[0].type.name : null}
              {", "}
            </p>
            <p>Attack: {computerPokemonAttack}</p>
            <p>Speed: {computerPokemonSpeed}</p>
            <p>
              HP: {computerData ? computerData.data.stats[0].base_stat : null}
            </p>
          </div>
        </div>
      </div>
      <audio id="myAudio">
        <source src={PokemonThemeAudio} type="audio/mpeg" className="audio" />
        Your browser does not support the audio element.
      </audio>

      <div className="results">
        {playerPokemonAttack + playerPokemonSpeed >
        computerPokemonAttack + computerPokemonSpeed ? (
          playerWin()
        ) : playerPokemonAttack + playerPokemonSpeed <
          computerPokemonAttack + computerPokemonSpeed ? (
          computerWin()
        ) : (
          <h1>Tie!</h1>
        )}
      </div>
    </>
  );
}

export default PokemonPage;
