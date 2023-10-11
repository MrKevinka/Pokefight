// import axios from "axios";

// const scoreChange = () => {
//   const playerWin = async () => {
//     const storage = sessionStorage.getItem("user");
//     const user = JSON.parse(storage);

//     user.game_won++;
//     user.score += 50;

//     const updateUser = async () => {
//       try {
//         const res = await axios.put(
//           `https://pokefight-lk6g.onrender.com/leaderboard/users/${this.user._id}`,
//           {
//             game_won: this.user.game_won,
//             score: this.user.score,
//           }
//         );

//         // setUser(res.data);

//         sessionStorage.setItem("user", JSON.stringify(res.data));
//       } catch (err) {
//         console.error("Error updating player:", err);
//       }
//     };

//     // sessionStorage.setItem("game_won", JSON.stringify(user.game_won));
//     // sessionStorage.setItem("score", JSON.stringify(user.score));
//     updateUser();
//     console.log(user);

//     return <p>Player Wins!</p>;
//   };
//   const computerWin = async () => {
//     // const updateUser = async () => {
//     const storage = sessionStorage.getItem("user");
//     const user = JSON.parse(storage);

//     console.log("NOW USER", user.user);

//     user.game_lost++;
//     user.score -= 50;

//     const newData = {
//       // _id: user._id,
//       game_lost: user.user.game_lost,
//       score: user.user.score,
//     };
//     try {
//       const res = await axios.put(
//         `http://localhost:8080/leaderboard/users/${user.user._id}`,
//         {
//           newData,
//         }
//       );

//       // setUser(res.data);
//       // console.log("data before set", res.data.user);

//       sessionStorage.setItem("user", res.data.user);
//     } catch (err) {
//       console.error("Error updating player:", err);
//       console.log("Error  player:", user);
//     }
//     // console.log("lost", user.user);
//     // const storage = sessionStorage.getItem("user");
//     // console.log("final data", JSON.parse(sessionStorage.getItem("user")));

//     return <p>Computer Wins!</p>;
//   };
//   return (
//     <>
//       <div className="results">
//         {playerPokemonAttack + playerPokemonSpeed >
//         computerPokemonAttack + computerPokemonSpeed
//           ? playerWin()
//           : computerWin()}

//         {/* // }  else if(playerPokemonAttack + playerPokemonSpeed <
//         //   computerPokemonAttack + computerPokemonSpeed){ */}

//         {/* //   <p>Tie!</p> */}
//       </div>
//     </>
//   );
// };
