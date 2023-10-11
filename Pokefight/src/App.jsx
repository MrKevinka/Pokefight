import Footer from "./Components/Footer";
import "./App.css";
import Navbar from "./Components/Navbar";
import Leaderboard from "./Components/Leaderboad";
import { Routes, Route } from "react-router-dom";
import Getallpokemons from "./Components/Getallpokemons";
import "./App.css";
import Fight from "./Components/Fight";
import CreatingUser from "./Components/CreatingUser";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreatingUser />} />
        <Route path="/pokemon" element={<Getallpokemons />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/Pokemon/:name/:type" element={<Fight />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
