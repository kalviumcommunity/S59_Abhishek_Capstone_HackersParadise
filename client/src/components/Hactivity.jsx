import React, { useState, useEffect } from "react";
import search from "/search.svg";
import like from "/like.png";
import { Link } from 'react-router-dom';

export default function Hactivity() {
  const [likes, setLikes] = useState(0);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/hacktivity")
      .then(response => response.json())
      .then(data => {
        setLikes(data.likes || 0);
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data.");
      });
  }, []);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);

    fetch("http://localhost:8080/api/hacktivity/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: newLikes }),
    }).catch(error => {
      console.error("Error updating likes:", error);
      setError("Failed to update likes.");
    });
  };


  return (
    <>
      <div className="bg-[#000746] h-full">
        <div className="flex justify-between m-auto w-[80%]">
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
          <div className="flex justify-between place-items-center w-[30%]">
            <div className="p-0.5 h-[5.4vh] w-[6vw] bg-gradient-to-r from-[#b25ffb] to-[#6300ff] rounded ml-[4rem]">
              <button className="text-white w-full bg-[#000746] font-bold p-2 rounded">
                Filter
              </button>
            </div>
            <div className="p-0.5 h-[5.4vh]  w-[6vw] bg-gradient-to-r from-[#b25ffb] to-[#6300ff] rounded">
              <button className="text-white w-full bg-[#000746] font-bold p-2 rounded">
                Sort By
              </button>
            </div>
            <div className="p-0.5 h-[5.4vh]  w-[6vw] bg-gradient-to-r from-[#b25ffb] to-[#6300ff] rounded">
              <Link to="/AddHactivity"> 
                <button className="text-white w-full bg-[#000746] font-bold p-2 rounded">
                  Add
                </button>
              </Link>  
            </div>
          </div>
        </div>
        <div className="bg-[#9f54ff] w-[80%] m-auto mb-[5vh] text-white flex justify-between rounded-xl">
          <div className="p-6">
            <p className="text-[1.5rem] font-semibold">
              PORTSWIGGER WEB SECURITY
            </p>
            <p>
              Incorrect logic when buy one more license which may lead to extend
              the expire date of existing license
            </p>
          </div>
          <div className="bg-[#8e35ff] p-4 rounded-xl flex items-center">
            <div className="flex flex-col items-center mr-4">
              <img src={like} alt="likes Icon" className="w-[3rem] p-2 cursor-pointer" onClick={handleLike}></img>
              <span>{likes}</span>
            </div>
          </div>
        </div>
        <div className="bg-[#9f54ff] w-[80%] m-auto mb-[5vh] text-white flex justify-between rounded-xl">
          <button className="p-2 bg-[#8e35ff] text-white">
            Add Comment
          </button>
        </div>
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </>
  );
}
