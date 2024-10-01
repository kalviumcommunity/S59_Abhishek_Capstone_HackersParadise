import React from "react";
import search from "/search.svg";
import module from "/module.png";
import { Link, useNavigate } from "react-router-dom";

export default function Modules() {
  const navigate = useNavigate();
  const userId = '66f536da9431adb5f7a802ce';
  navigate("/profile", { state: { userId } });
  const addToWishlist = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/user/wishlist/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          wishlist: [{ name: "NETWORKING" }]
        }),
      });
  
      const result = await response.json();
      if (response.ok) {
        console.log("Wishlist updated successfully:", result);
        alert("Module added to your wishlist!");

      } else {
        console.error("Failed to update wishlist:", result);
        alert("Module is already in wishlist.");
      }
    } catch (error) {
      console.error("Error while adding to wishlist:", error);
      alert("Error occurred while adding to wishlist.");
    }
  };
  

  return (
    <>
      <div className="bg-[#000746] h-full">
        <div className="pt-[4vh] pb-[4vh]">
          <div className="m-auto p-[0.2rem] bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] rounded-[0.9rem] w-[40vw]">
            <div className="flex justify-between bg-[#000746] p-[0.2rem] pr-[1rem] pl-[1rem] rounded-xl">
              <input
                placeholder="Search Modules here..."
                className="text-[#d48ff9] placeholder-[#d48ff9] bg-[#000746] text-[1vw] w-full focus:outline-none focus:ring-0 font-semibold"
              ></input>
              <img
                src={search}
                alt="search"
                className="cursor-pointer w-[2vw]"
              ></img>
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-[2vh]">
          <div className="m-[2vw] ml-[5vw] w-[50vh] bg-[#5711af] rounded-xl">
            <img src={module} alt="module" className="h-full w-full"></img>
          </div>
          <div className="text-white p-4">
            <ol className="list-inside list-decimal text-[4vw]">
              <li>
                <span className="font-bold">NETWORKING</span>
                <div className="text-[1vw] ml-[3vw] p-4">
                  <p className="w-[80%]">
                    Networking is the process of making connections and building
                    relationships. These connections can provide you with advice
                    and contacts, which can help you make informed career
                    decisions.
                  </p>
                  <ol type="i" className="list-inside list-decimal mt-2">
                    <li>Router</li>
                    <li>MAC Address</li>
                    <li>IP Address</li>
                  </ol>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="flex justify-between ml-[60vw] w-[25vw] h-[5vh] mb-[21vh]">
          <button
            onClick={addToWishlist}
            className="h-full flex p-4 place-items-center rounded font-bold bg-gradient-to-r from-[#b25ffb] via-[#b25ffb] to-[#6300ff] text-white"
          >
            Add to Wishlist
          </button>
          <Link to="/ModUnits">
            <button className="h-full flex p-4 place-items-center rounded font-bold bg-gradient-to-r from-[#b25ffb] via-[#b25ffb] to-[#6300ff] text-white">
              Start the Course
            </button>
          </Link>
        </div>

        <hr className="bg-[#5711af] w-full h-[1vh]" />
      </div>
    </>
  );
}
