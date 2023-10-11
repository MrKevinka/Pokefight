// import { useState, useEffect } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";

// export default function RandomPoke() {
//   const [poke, setPoke] = useState([]); //array of fetched pokes
//   const [randomPokeState, setRandomPokeState] = useState(null); //random poke

//   const [randomPoke, setRandomPoke] = useState(null);

//   const fetchPoke = async () => {
//     try {
//       const data = await axios.get("http://localhost:8080/pokemons");

//       setPoke(data.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const fetchPokeById = async () => {
//     const randomPokeIndex = Math.floor(Math.random() * poke?.length);
//     const selectedRandomPoke = poke[randomPokeIndex - 1];
//     try {
//       const data = await axios.get(
//         `http://localhost:8080/pokemons/info/${randomPokeIndex}`
//       );

//       setRandomPokeState(data.data);
//       setRandomPoke(selectedRandomPoke);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchPoke(); // Fetch the list of pokemons
//   }, []);

//   useEffect(() => {
//     if (poke.length > 0) {
//       fetchPokeById(); // Fetch random pokemon after poke state is set
//     }
//   }, [poke]);

//   console.log(randomPoke);
//   console.log(randomPokeState);

//   return (
//     <>
//       {randomPoke ? (
//         <NavLink
//           to={`/Pokemon/${randomPoke?.name?.english}/${randomPoke.type[0]}`}
//         >
//           Random Fight
//         </NavLink>
//       ) : null}
//     </>
//   );
// }
