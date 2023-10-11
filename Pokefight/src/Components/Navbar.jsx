import React from "react";
import { Link, Routes, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="image">
          <img src="src/images/pokemonlogo.png" alt="" />
          <p>POKEFIGHT</p>
        </div>
        <div className="nav-icon">
          <ul>
            <Link to="/pokemon">
              <h5> Pokemons</h5>
            </Link>
            <li>Leaderboard</li>
            <li>Searchbar</li>
            <li>Random Fight</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
