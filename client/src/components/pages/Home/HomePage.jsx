import React from "react";
import activity from "../../../../public/activity.png";
import bug from "../../../../public/bug.png";
import learning from "../../../../public/learning.png";
import SliderHome from "./SliderHome";
import { Link } from "react-router-dom";
import BountyHome from "./BountyHome";
import Footer from "../../Footer"

export default function HomePage() {
  return (
    <>
      <div className="bg-[#000746] h-full">
        <h1 className="text-[10vh] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#9b41f8] to-[#6300ff] text-[5vw] font-bold mb-4">
          HACKER'S PARADISE
        </h1>
        <p className="text-white text-[1vw] m-10 mt-2 text-center">
        From beginners to expert level, Hacker’s Paradise is one for everyone. We have got you covered for all your ethical hacking needs, 
        from curated courses to bug bounty programs and practice, we are your one stop for ethical hacking.
         Dive into curated courses on all ethical hacking on your schedule spanning all the way up from basic to advanced levels.
        </p>
        <div className="flex justify-center text-center">
          <Link to="/Login">
            <button className="h-[6vh] bg-gradient-to-b from-[#d48ff9] via-[#b25ffb] to-[#6300ff] text-white font-bold py-2 px-4 rounded mr-2">
              LOGIN
            </button>
          </Link>
          <Link to="/Modules">
            <div className="p-0.5 h-[6vh] bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] rounded">
              <button className="text-white bg-[#000746] font-bold p-2 rounded">
                GET STARTED
              </button>
            </div>
          </Link>
        </div>
        <SliderHome />
        <div className="flex justify-center w-full h-[30vh] text-white mt-6">
          <div className="flex flex-col place-items-center justify-center h-full w-[15vw] p-10 m-4 border-2 border-[#b25ffb]">
            <img src={learning} alt="" className="w-[8vw] h-[18vh] m-6"></img>
            <Link to="/Modules">
              <button className=" bg-gradient-to-b from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold leading-snug text-[1vw] h-[5vh] mt-6 mb-8 p-[0.5vw] rounded">
                Learn
              </button>
            </Link>
          </div>
          <div className="flex flex-col place-items-center justify-center h-full w-[15vw] m-4 border-2 border-[#b25ffb]">
            <img src={bug} alt="" className="w-[8vw] h-[18vh] m-6"></img>
            <Link to="/Bounties">
              <button className="bg-gradient-to-b from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold leading-snug text-[1vw] h-[5vh] mt-6 mb-8 p-[0.5vw] mb-8 py-2 px-4 rounded">
                Bug Bounties
              </button>
            </Link>
          </div>
          <div className=" flex flex-col place-items-center justify-center h-full w-[15vw] m-4 border-2 border-[#b25ffb]">
            <img src={activity} alt="" className="w-[8vw] h-[18vh] m-6"></img>
            <Link to="/Hactivity">
            <button className=" bg-gradient-to-b from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold leading-snug text-[1vw] h-[5vh] mt-6 mb-8 p-[0.5vw] rounded">
              Hactivity
            </button>
            </Link>
          </div>
        </div>
        <BountyHome />
        <Footer/>
      </div>
    </>
  );
}
