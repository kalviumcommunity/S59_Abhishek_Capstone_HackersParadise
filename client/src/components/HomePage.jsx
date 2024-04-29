import React from "react";
import activity from "../../public/activity.png";
import bug from "../../public/bug.png";
import learning from "../../public/learning.png";
import SliderHome from "./SliderHome";
import icon from "../../public/icon-g.png";
export default function HomePage() {
  return (
    <>
      <div className="bg-[#000746] h-full">
        <div className="flex justify-center pt-2 mb-4 h-[8vh] sticky top-0 bg-[#000746] w-full">
          <button className="border-b-2 border-[#000746] hover:border-purple-500  text-white font-semibold py-2 px-4 mr-2">
            HOME
          </button>
          <button className="border-b-2 border-[#000746] hover:border-purple-500 text-white font-semibold py-2 px-4 mr-2">
            LEARN
          </button>
          <button className="border-b-2 border-[#000746] hover:border-purple-500 text-white font-semibold py-2 px-4 mr-2">
            BUG BOUNTIES
          </button>
          <button className="border-b-2 border-[#000746] hover:border-purple-500 text-white font-semibold py-2 px-4 mr-2">
            HACTIVITY
          </button>
        </div>
        <h1 className="text-5 xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] text-[5vw] font-bold mt-[2vh] mb-6">
          HACKER'S PARADISE
        </h1>
        <p className="text-white text-[0.8vw] m-6 mt-2 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          iure molestiae at dolorum amet dolor perspiciatis distinctio sit
          ullam. Veritatis, molestiae deserunt! Reprehenderit a, non assumenda
          impedit aperiam rerum placeat. Perspiciatis obcaecati repellendus
          corrupti similiq a, rcorporis vero sunt re similique rem enim illo,
          ratione at voluptatibus eaque accusantium velit aspernatur facere!
          Excepturi optio aliquid repudiandae harum, ipsum illo porro quas
          rerum!
        </p>
        <div className="flex justify-center text-center">
          <button className=" bg-gradient-to-b from-[#d48ff9] via-[#b25ffb] to-[#6300ff] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2">
            LOGIN
          </button>
          <div className="p-0.5 bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] rounded ">
            <button className="text-white bg-[#000746] font-bold py-2 px-4 rounded">
              GET STARTED
            </button>
          </div>
        </div>
        <SliderHome />
        <div className="flex justify-center w-full h-[30vh] text-white mt-6">
          <div className="flex flex-col place-items-center justify-center h-full w-[15vw] p-10 m-4 border-2 border-[#b25ffb]">
            <img src={learning} alt="" className="w-[8vw] h-[18vh] m-6"></img>
            <button className=" bg-[#b25ffb] font-bold leading-snug text-[1vw] h-[5vh] mt-6 mb-8 p-[0.5vw] rounded">
              Learn
            </button>
          </div>
          <div className="flex flex-col place-items-center justify-center h-full w-[15vw] m-4 border-2 border-[#b25ffb]">
            <img src={bug} alt="" className="w-[8vw] h-[18vh] m-6"></img>
            <button className="bg-[#b25ffb] font-bold leading-snug text-[1vw] h-[5vh] mt-6 mb-8 p-[0.5vw] mb-8 py-2 px-4 rounded">
              Bug Bounties
            </button>
          </div>
          <div className=" flex flex-col place-items-center justify-center h-full w-[15vw] m-4 border-2 border-[#b25ffb]">
            <img src={activity} alt="" className="w-[8vw] h-[18vh] m-6"></img>
            <button className=" bg-[#b25ffb] font-bold leading-snug text-[1vw] h-[5vh] mt-6 mb-8 p-[0.5vw] rounded">
              Hactivity
            </button>
          </div>
        </div>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold text-[4vw] text-center m-10">
          Discover Opportunities
        </h1>
        <div className="flex justify-center">
        <div className="w-[80%] mt-[2vh] flex justify-center mb-10 text-white">
          <div className=" h-full w-[20vw] bg-[#b25ffb] m-6 rounded">
            <div className="flex place-items-center justify-between place-h-[10vh] w-full shadow-2xl p-4 font-bold">
              <div className="flex place-items-center">
              <img src={icon} alt="" className="h-[6vh]"></img>
              <p className="ml-2">Grammarly</p>
              </div>
              <div>
                <p>$500-$1000</p>
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
          <div className=" h-full w-[20vw] bg-[#b25ffb] m-4 rounded">
            <div className="flex place-items-center justify-between place-h-[10vh] w-full shadow-2xl p-4 font-bold">
              <div className="flex place-items-center">
              <img src={icon} alt="" className="h-[6vh]"></img>
              <p className="ml-2">Grammarly</p>
              </div>
              <div>
                <p>$500-$1000</p>
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
          <div className=" h-full w-[20vw] bg-[#b25ffb] m-4 rounded">
            <div className="flex place-items-center justify-between place-h-[10vh] w-full shadow-2xl p-4 font-bold">
              <div className="flex place-items-center">
              <img src={icon} alt="" className="h-[6vh]"></img>
              <p className="ml-2">Grammarly</p>
              </div>
              <div>
                <p>$500-$1000</p>
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
        </div>
        </div>
        <footer className="h-fit text-white text-center bg-[#242424]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibuslitaque, cupiditate atque dolore nulla!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibuslitaque, cupiditate atque dolore nulla!ing elit.
            Temporibuslitaque, cupiditate atque dolore nulla!</p>
        </footer>
      </div>
    </>
  );
}
