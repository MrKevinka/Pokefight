import Footer from "./Footer";

import Navbar from "./Navbar";
import Leaderboard from "./Leaderboad";
import { Routes, Route } from "react-router-dom";
import Getallpokemons from "./Getallpokemons";
//  import "./App.css";
import Fight from "./Fight";
import CreatingUser from "./CreatingUser";
import PokeIndividualInfo from "./PokeIndividualInfo";
import Spinner from "./Spinner";
import React, { useState, useEffect } from "react";

function LandingPage() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<CreatingUser />} /> */}
        <Route path="/pokemon" element={<Getallpokemons />} />
        <Route path="/leaderboard/users" element={<Leaderboard />} />
        <Route path="/Pokemon/:name/:type" element={<Fight />} />

        <Route path="/" element={<CreatingUser />} />
        <Route path="/pokemon/:id" element={<PokeIndividualInfo />} />
      </Routes>
    </>
  );
}

export default LandingPage;
