import Footer from "./Components/Footer";
import "./App.css";


import { Routes, Route } from "react-router-dom";
import Getallpokemons from "./Components/Getallpokemons";
import Pokemondetail from "./Components/Pokemondetail";
import Search from "./Components/Search";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";


import './App.css';
import PokemonImage from "./Components/PokemonImage";
import PokemonPage from "./Components/Pokemonpage";
import Fight from "./Components/Fight"




function App() {
  
   const [{theme,isDark,},toggleTheme]=useContext(ThemeContext);  
    return ( <>  <div  style={{backgroundColor:theme.backgroundColor,color:theme.color}}>
        <div >It's a {isDark ? "Dark" :"Light"} theme</div><br/>
      
   </div> <button onClick={toggleTheme}>Toggle Theme</button>

 <Routes>
  
 <Route path="/pokemon" element={<Getallpokemons/>} />
  
  {/* <Route path="/Pokemon/:name/:type" element={ <PokemonPage/>} /> */}
 
  <Route path="/Pokemon/:name/:type" element={ <Fight/>} />
          </Routes>
          <Search/>
     <Navbar />
    <Footer />
  </>);

// import React from "react";
// import Navbar from "./Components/Navbar";

// function App() {
//   return (
//     <>   
     
//       </>
    
//   );
//   }
// import { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [poke, setPoke] = useState([]); //array of fetched pokes
//   const [randomPokeState, setRandomPokeState] = useState([]); //random poke

//   const fetchPoke = async () => {
//     try {
//       const data = await axios.get("http://localhost:8080/pokemons");

//       setPoke(data.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // useEffect(() => {
//   //   fetchPoke();
//   // }, []);

//   const randomPokeIndex = Math.floor(Math.random() * poke?.length);
//   const randomPoke = poke[randomPokeIndex - 1];
//   console.log(typeof randomPokeIndex);

//   const fetchPokeById = async () => {
//     try {
//       const data = await axios.get(
//         `http://localhost:8080/pokemons/info/${randomPokeIndex}`
//       );

//       setRandomPokeState(data.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchPoke();
//     fetchPokeById(); //it wont console log random poke additional info unless you run ctrl+s for some reason
//   }, []);

//   console.log(randomPoke);
//   console.log(randomPokeState);
//   return (
//     <>
//       <h1>Hello Trainer, welcome to PokéFight!</h1>
      
//     </>
//   );

}


export default App;

