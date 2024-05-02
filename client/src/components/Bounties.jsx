import React from "react";
import { useState, useEffect } from 'react'
import icon from "/icon-g.png";

export default function Bounties() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:8081/api/bounties/")
      .then((response) => response.json())
      .then((result) => {
        console.log("Fetched data:", result);
        setData(result);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className="bg-[#000746] h-full pt-2">
    {data.map((bounty) => (
      <div className=" h-full w-[20vw] bg-[#b25ffb] m-4 rounded">
        <div className="flex place-items-center justify-between place-h-[10vh] w-full shadow-2xl p-4 font-bold">
          <div className="flex place-items-center">
            <img src={icon} alt="" className="h-[6vh]"></img>
            <p className="ml-2">{bounty.company}</p>
          </div>
          <div>
            <p>{bounty.reward}</p>
          </div>
        </div>
        <div className="m-6">
          <p className="font-bold mb-2">Bug Bounty Program</p>
          <button className="h-[4vh] bg-green-200 p-[0.5vh] rounded text-green-700 font-bold mb-2">
            campaign
          </button>
          <p className="text-[0.8vw]">
            Triaged by HackerOne, Retesting, Collaboration
          </p>
          <button className="h-[4vh] bg-gray-200 p-[0.5vh] rounded text-gray-900 font-bold mt-2 mr-2">
            Other Asset
          </button>
          <button className="h-[4vh] bg-gray-200 p-[0.5vh] rounded text-gray-900 font-bold mt-2 mr-2">
            Executable
          </button>
          <br />
          <button className="h-[4vh] bg-gray-200 p-[0.5vh] rounded text-gray-900 font-bold mt-2 mr-2">
            Wildcard
          </button>
        </div>
        <div className="flex justify-center">
          <button className="h-[4vh] w-[90%] bg-purple-700 p-[0.5vh] rounded text-white font-bold mb-2">
            See Details
          </button>
        </div>
      </div>
    ))}
    </div>
    </>
  )
}
