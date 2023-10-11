import React from "react";
import { Link,  NavLink } from "react-router-dom";


function NavBar() {
return ( 
 <>
 <div className="nav-container">
  
<ul className="navbar">
<li><NavLink className="nav-bar-link"  to = "/"></NavLink></li>
<li><NavLink className="nav-bar-link" to="/Leaderboard">LeaderBoard</NavLink></li>
<li><NavLink className="nav-bar-link" to="/Randomfight">Random Fight</NavLink></li>
  <li><NavLink className="nav-bar-link" to="/Searchbar">SearchBar</NavLink></li>

</ul>

</div>
<div className="header-container">
<img src="src/images/pokemonhero.jpg" alt="pokemon" />

</div> 
</>

)
} 
export default NavBar;
