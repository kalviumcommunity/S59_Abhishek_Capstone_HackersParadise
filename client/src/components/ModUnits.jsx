import React from "react";
import search from '/search.svg'
import {Link} from 'react-router-dom'


export default function ModUnits() {
  return (
    <div className="bg-[#000746] h-full">
      <h1>1. NETWORKING</h1>
      <div className="pt-[4vh] pb-[4vh]">
        <div className="m-auto p-[0.2rem] bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] rounded-[0.9rem] w-[40vw]">
          <div className="flex justify-between bg-[#000746] p-[0.2rem] pr-[1rem] pl-[1rem] rounded-xl">
            <input
              placeholder="Search Modules here..."
              className="text-[#d48ff9] placeholder-[#d48ff9] bg-[#000746] text-[1vw] w-full focus:outline-none focus:ring-0 font-semibold"
            ></input>
            <img
              src={search}
              alt="search Icon"
              className="cursor-pointer w-[2vw]"
            ></img>
          </div>
        </div>
      </div>
      <div className="flex items-end w-[7vw]">
          <Link to="/Unit">
        <button className="w-full flex justify-center place-items-center rounded font-bold bg-gradient-to-r from-[#b25ffb] via-[#b25ffb] to-[#6300ff] text-white">
          Start the Unit
        </button>
        </Link>
        </div>
    </div>
  );
}
