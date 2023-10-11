import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "../App.css";
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
            <Link to="/">
              <h5 className="btn btn-round b-level-1 b-type-4">Home</h5>
            </Link>
            <Link to="/pokemon">
              <h5 className="btn btn-round b-level-1 b-type-4"> Pokemons</h5>
            </Link>
            <Link to="/leaderboard">
              <h5 className="btn btn-round b-level-1 b-type-4">Leaderboard</h5>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
