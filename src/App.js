import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Hero from "./components/hero/Hero";
import Dossier from "./components/Dossier/Dossier";
import Navbar from "./components/Navbar/Navbar";
{
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/Dossier" element={<Dossier />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
