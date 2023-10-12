import Footer from "./Components/Footer";
import "./App.css";
import Navbar from "./Components/Navbar";
import Leaderboard from "./Components/Leaderboad";
import { Routes, Route } from "react-router-dom";
import Getallpokemons from "./Components/Getallpokemons";
import "./App.css";
import Fight from "./Components/Fight";
import CreatingUser from "./Components/CreatingUser";
import PokeIndividualInfo from "./Components/PokeIndividualInfo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/pokemon" element={<Getallpokemons />} />
        {/* <Route path="/pokemon" element={<GetAll />} /> */}

        <Route path="/leaderboard/users" element={<Leaderboard />} />
        <Route path="/Pokemon/:name/:type" element={<Fight />} />
        <Route path="/" element={<CreatingUser />} />
        <Route path="/pokemon/:id" element={<PokeIndividualInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
