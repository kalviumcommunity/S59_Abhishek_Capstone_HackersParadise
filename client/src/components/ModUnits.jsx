import React, { useState, useEffect } from "react";
import search from "/search.svg";
import { Link } from "react-router-dom";

export default function ModUnits() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/units");
      const result = await response.json();
      console.log("Fetched data:", result);
      setData(result);
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-[#000746] h-full">
      {data.map((unit) => (
        <div key={unit.unitName} className="m-[7vw]">
          <h1 className="text-[4vw] text-white ml-[2vw]">{unit.unitName}</h1>
          <div className="pt-[4vh] pb-[4vh] flex justify-items-start">
            <div className="p-[0.2rem] bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] rounded-[0.9rem] w-[40vw]">
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
          <div className="flex flex-wrap w-[50vw]">
            {unit.names.map((name, index) => (
              <Link to="/Unit">
                <div
                  key={index}
                  className="bg-[#9f54ff] w-[50vw] m-auto mb-[5vh] text-white flex justify-between rounded-xl"
                >
                  <div className="bg-[#8e35ff] p-4 rounded-xl flex items-center w-[20%]">
                    <div className="flex flex-col items-center mr-4">
                      <div className="p-6">
                        <p className="text-[1.5rem] font-semibold">{name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
