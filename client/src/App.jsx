import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home/HomePage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Bounties from "./components/pages/Bounties"
import Modules from "./components/pages/Modules/Modules"; 
import Hactivity from "./components/pages/Hactivity/Hactivity";
import ModUnits from "./components/pages/Modules/ModUnits"
import AddHactivity from "./components/pages/Hactivity/AddHactivity";
import Unit from "./components/pages/Modules/Unit";
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
