import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Bounties from "./components/Bounties";
import Modules from "./components/Modules"; 
import Hactivity from "./components/Hactivity";
import ModUnits from "./components/ModUnits"
import AddHactivity from "./components/AddHactivity";
import Unit from "./components/Unit";
import SignUp from "./components/SignUp"
function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Bounties" element={<Bounties />} />
        <Route path="/Modules" element={<Modules />} />
        <Route path="/Hactivity" element={<Hactivity />} />
        <Route path="/ModUnits" element={<ModUnits />} />
        <Route path="/AddHactivity" element={<AddHactivity />} />
        <Route path="/Unit" element={<Unit />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
