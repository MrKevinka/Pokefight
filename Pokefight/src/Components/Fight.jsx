import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./CSS/Fight.css";
import "./CSS/pokeball.css";
import PokemonThemeAudio from "../sounds/Pokemon-Theme-Song.mp3";

export default function PokemonPage() {
  const { name } = useParams();
  const [computerData, setComputerData] = useState(null);
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonen, setPokemonen] = useState(null);

  const [playerPokemonName, setPlayerPokemonName] = useState("Name");
  const [playerPokemonImage, setPlayerPokemonImage] = useState(0);
  // const [playerPokemonAttack, setPlayerPokemonAttack] = useState(0);
  const [playerPokemonDefense, setPlayerPokemonDefense] = useState(0);
  // const [playerPokemonSpeed, setPlayerPokemonSpeed] = useState(0);

  const [randomId1, setRandomId1] = useState();
  const [randomId2, setRandomId2] = useState(Math.floor(Math.random() * 898));
  const [winStatus, setWinStatus] = useState(null);
  const [computerPokemonName, setComputerPokemonName] = useState("Name");
  const [computerPokemonImage, setComputerPokemonImage] = useState(0);
  // const [computerPokemonAttack, setComputerPokemonAttack] = useState(0);
  const [computerPokemonDefense, setComputerPokemonDefense] = useState(0);
  // const [computerPokemonSpeed, setComputerPokemonSpeed] = useState(0);

  let playerWinState = false;
  let computerWinState = false;

  let computerPokemonAttack = null;
  let playerPokemonAttack = null;

  let playerPokemonSpeed = null;
  let computerPokemonSpeed = null;

  let battleResultMessage = null;
  // let winStatus = null;

  const draw = () => {
    return <h1>🎉It's a Draw!🎉</h1>;
  };

  const playerWin = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      user.game_won++;
      user.score += 50;

      console.log("NOW USER GAME won", user.score);

      const newData = {
        game_won: user.game_won,
        score: user.score,
      };
      try {
        const res = await axios.put(
          `https://pokefight-lk6g.onrender.com/leaderboard/users/${user._id}`,

          newData
        );

        localStorage.setItem("user", JSON.stringify(res.data.user));
      } catch (err) {
        console.error("Error updating player:", err);
        console.log("Error  player:", user);
      }
    }
    const updatedUser = JSON.parse(localStorage.getItem("user"));

    console.log(updatedUser);
    return <h1>🎉Player Wins!🎉</h1>;
  };
  const computerWin = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      user.game_lost++;
      user.score -= 50;

      const newData = {
        game_lost: user.game_lost,
        score: user.score,
      };
      try {
        const res = await axios.put(
          `https://pokefight-lk6g.onrender.com/leaderboard/users/${user._id}`,
          newData
        );

        localStorage.setItem("user", JSON.stringify(res.data.user));
      } catch (err) {
        console.error("Error updating player:", err);
        console.log("Error  player:", user);
      }
    }
    const updatedUser = JSON.parse(localStorage.getItem("user"));

    console.log(updatedUser);
    return <h1>🎉Computer Wins!🎉</h1>;
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

  const handleBattleResult = async () => {
    if (pokemonData && computerData) {
      const playerTotal = playerPokemonAttack + playerPokemonSpeed;
      const computerTotal = computerPokemonAttack + computerPokemonSpeed;

      if (playerTotal > computerTotal) {
        await playerWin();
        battleResultMessage = "🎉Player Wins!🎉";
      } else if (playerTotal < computerTotal) {
        await computerWin();
        battleResultMessage = "🎉Computer Wins!🎉";
      } else {
        <h1>Its a draw!!!!</h1>;
      }
    }
    setWinStatus(battleResultMessage);
  };

  return (
    <>
      <div className="fight-container">
        {pokemonData && (
          <div className="fighter">
            <h1 style={{ color: "#1F1300" }}>
              {pokemonData.name.toUpperCase()}
            </h1>
            <img
              className="zoom-image"
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
            />
            <div
              className="data"
              style={{
                backgroundColor: "#CC5803",
                padding: "7%",
                opacity: "80%",
                borderRadius: "5%",
              }}
            >
              {/* <p style={{ fontSize: "1.5rem" }}>ID:{pokemonData.id}</p> */}
              <p style={{ fontSize: "1.5rem" }}>
                Height:{heightConverter(pokemonData.height)}
              </p>
              <p style={{ fontSize: "1.5rem" }}>
                weight: {weightConverter(pokemonData.weight)}
              </p>
              <p style={{ fontSize: "1.5rem" }}>
                Type: {pokemonData.types[0].type.name}
                {", "}
                {pokemonData.types[1] ? pokemonData.types[1].type.name : null}
              </p>
              <p style={{ fontSize: "1.5rem" }}>
                Attack:
                {
                  (playerPokemonAttack = pokemonData?.stats.find(
                    ({ stat }) => stat.name === "attack"
                  )?.base_stat)
                }
              </p>

              <p style={{ fontSize: "1.5rem" }}>
                Speed:
                {
                  (playerPokemonSpeed = pokemonData?.stats.find(
                    ({ stat }) => stat.name === "speed"
                  )?.base_stat)
                }
              </p>
              <p style={{ fontSize: "1.5rem" }}>
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
              await new Promise((resolve) => setTimeout(resolve, 1000));
              await new Promise((resolve) => setTimeout(resolve, 1000));
              await axios
                .get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
                .then((response) => {
                  console.log(response);
                  setComputerData(response);
                });
              playFromTwoMinutes();
              setWinStatus(null);
            }}
          >
            Get enemy
          </button>
          <button
            className="battle"
            onClick={async () => await handleBattleResult()}
          >
            Fight!
          </button>
        </div>
        <div className="fighter">
          <h1 style={{ color: "#1F1300" }}>
            {computerData ? computerData.data.name.toUpperCase() : null}
          </h1>
          <img
            className="zoom-image"
            src={computerData ? computerData.data.sprites.front_default : null}
            alt="Your Enemey is about to apporach!"
          ></img>

          <div
            className="data"
            style={{
              backgroundColor: "#CC5803",
              padding: "7%",
              opacity: "80%",
              borderRadius: "5%",
            }}
          >
            {/* <p style={{ fontSize: "1.5rem" }}>
              ID:{computerData ? computerData.data.id : null}
            </p> */}
            <p style={{ fontSize: "1.5rem" }}>
              Height:{" "}
              {computerData ? heightConverter(computerData.data.height) : null}
            </p>
            <p style={{ fontSize: "1.5rem" }}>
              weight:{" "}
              {computerData ? weightConverter(computerData.data.weight) : null}
            </p>
            <p style={{ fontSize: "1.5rem" }}>
              Type: {computerData ? computerData.data.types[0].type.name : null}
              {", "}
            </p>
            <p style={{ fontSize: "1.5rem" }}>
              Attack:{" "}
              {computerData
                ? (computerPokemonAttack = computerData.data.stats[1].base_stat)
                : null}
            </p>
            <p style={{ fontSize: "1.5rem" }}>
              Speed:{" "}
              {computerData
                ? (computerPokemonSpeed = computerData.data.stats[5].base_stat)
                : null}
            </p>
            <p style={{ fontSize: "1.5rem" }}>
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
        {/* <h1>{winStatus || "Waiting for a fight..."}</h1> */}
        <h1 style={{ fontSize: "4rem", color: "#1F1300" }}>
          {winStatus || null}
        </h1>
      </div>
    </>
  );
}
