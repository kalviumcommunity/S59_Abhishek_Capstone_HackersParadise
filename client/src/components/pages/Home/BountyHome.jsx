import React from "react";
import { useState, useEffect } from "react";
import arrow from "../../../../public/arrow.png";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import axios from "axios";

export default function BountyHome() {
  const [bounties, setBounties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://s59-abhishek-capstone-hackersparadise.onrender.com/api/bounties"
      )
      .then((response) => {
        setBounties(response.data.slice(0, 3));
      })
      .catch((error) => {
        console.error("Error fetching bounties:", error);
        setError("Failed to fetch bounties.");
      });
  }, []);

  return (
    <>
     <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold text-[4vw] text-center m-10">
            Discover Opportunities
          </h1>
      {bounties.length != 0 ? (
        <>
          <div className="flex justify-center">
            <div className="h-fit w-[80%] mt-[2vh] flex justify-center mb-2 text-white">
              {bounties.map((bounty, index) => (
                <div
                  key={index}
                  className=" h-full w-[20vw] bg-[#b25ffb] m-4 rounded"
                >
                  <div className="flex place-items-center justify-between h-[10vh] w-full shadow-2xl p-4 font-bold">
                    <div className="flex place-items-center">
                      <img src={bounty.imgURL} alt="" className="h-[6vh]"></img>
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
                    <a
                      href={bounty.info}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="h-[4vh] w-[17vw] bg-purple-700 p-[0.5vh] rounded text-white font-bold mb-2">
                        See Details
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center ml-[57vw]">
            <Link to="/Bounties">
              <div className="w-[7vw] flex justify-center place-items-center rounded font-bold bg-gradient-to-r from-[#b25ffb] to-[#6300ff] cursor-pointer">
                <p className="text-white font-bold">See more</p>
                <img src={arrow} alt="image" className=""></img>
              </div>
            </Link>
          </div>
        </>
      ) : (
        <div className="flex justify-center my-10">
          <HashLoader color="#b25ffb" size={80} />
        </div>
      )}
    </>
  );
}
