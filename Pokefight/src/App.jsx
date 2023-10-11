import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter , Routes, Route, Navigate} from "react-router-dom";
import Leaderboard from "./Components/Leaderboard";
import Searchbar from "./Components/Searchbar";
import Randomfight from "./Components/Randomfight";
import Page404 from "./Components/Page404";
import Homepage from "./Components/Homepage";


function App() {
  return (
     <div className="App">
    
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
      <Route path = "/" element = {<Navbar/>} />
      <Route path = "/Homepage" element = {<Homepage/>} />
      <Route path = "/Leaderboard" element = {<Leaderboard/>} />
      <Route path = "/Searchbar" element = {<Searchbar/>} />
      <Route path = "/Randomfight" element = {<Randomfight/>} />
      <Route path = "/*" element = {<Navigate to = "/"/>} />
      
      </Routes>
      </BrowserRouter>
      
      </div>
    
  );
  }

export default App;

