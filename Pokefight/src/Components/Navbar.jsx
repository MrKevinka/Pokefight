import React from "react";


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
<li>LeaderBoard</li>
<li>SearchBar</li>
  <li>Random Fight</li>

</ul>
</div>
</div>
<div className="header-container">
<img src="src/images/pokemonhero.jpg" alt="pokemon" />

</div>
</>
)
} 
export default Navbar;
