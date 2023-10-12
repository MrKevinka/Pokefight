import React from "react";
import { Link,  NavLink } from "react-router-dom";
import "../App.css";




function NavBar() {
return ( 
 <>
 <div className="nav-container">

  
<ul className="navbar">
<div className="logo-container">
  <img src="pokemonlogo.png" alt="" />
  </div>
<li><NavLink className="nav-bar-link"  to = "/"></NavLink></li>
<li><NavLink className="nav-bar-link" to="/Homepage">Homepage</NavLink></li>
<li><NavLink className="nav-bar-link" to="/Leaderboard">LeaderBoard</NavLink></li>
<li><NavLink className="nav-bar-link" to="/Randomfight">Random Fight</NavLink></li>
  <li><NavLink className="nav-bar-link" to="/Searchbar">SearchBar</NavLink></li>
</ul>
</div>
<div className="header-container">
  <div className="img-class"> 
  <img src="Heroimage.png" alt="image" />
  </div>

</div></>
)
} 
export default NavBar;


