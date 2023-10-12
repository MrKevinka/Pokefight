import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "../App.css";

// function NavBar() {
// return (
//  <>
//  <div className="nav-container">

// <ul className="navbar">
// <div className="logo-container">
//   <img src="pokemonlogo.png" alt="" />
//   </div>
// <li><NavLink className="nav-bar-link"  to = "/"></NavLink></li>
// <li><NavLink className="nav-bar-link" to="/Homepage">Homepage</NavLink></li>
// <li><NavLink className="nav-bar-link" to="/Leaderboard">LeaderBoard</NavLink></li>
// <li><NavLink className="nav-bar-link" to="/Randomfight">Random Fight</NavLink></li>
//   <li><NavLink className="nav-bar-link" to="/Searchbar">SearchBar</NavLink></li>
// </ul>
// </div>
// <div className="header-container">
//   <div className="img-class">
//   <img src="Heroimage.png" alt="image" />
//   </div>

// </div></>
// )
// }
// export default NavBar;

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="image"></div>
        <div className="nav-icon">
          <ul>
            <Link to="/">
              <h5 className="btn btn-round b-level-1 b-type-4">Home</h5>
            </Link>
            <Link to="/pokemon">
              <h5 className="btn btn-round b-level-1 b-type-4"> Pokemons</h5>
            </Link>
            <Link to="/leaderboard/users">
              <h5 className="btn btn-round b-level-1 b-type-4">Leaderboard</h5>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
