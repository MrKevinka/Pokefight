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
import Spinner from "./Components/Spinner";
import React, { useState, useEffect } from "react";
import LandingPage from "./Components/LandingPage";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, []);
  return (
    <>
      <div className="hero">
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" element={<CreatingUser />} /> */}
          {/* <Route path="/pokemon" element={<Getallpokemons />} /> */}
          {/* <Route path="/pokemon" element={<GetAll />} />  */}

          {/* <Route path="/leaderboard/users" element={<Leaderboard />} /> */}
          {/* <Route path="/Pokemon/:name/:type" element={<Fight />} /> */}

          {/* <Route path="/" element={<CreatingUser />} /> */}
          {/* <Route path="/pokemon/:id" element={<PokeIndividualInfo />} /> */}
        </Routes>

        {/* <Footer /> */}
        {/* {loading && (
          <div id="cover-spin">
            <Spinner />
          </div>
        )} */}
        {loading ? (
          <div id="cover-spin">
            <Spinner />
          </div>
        ) : (
          <LandingPage />
        )}
      </div>
      <Footer className="footer" />
    </>
  );
}

export default App;
