import React from "react";
import slideshow1 from "../../public/slideshow-1.png";
import activity from "../../public/activity.png";
import bug from "../../public/bug.png";
import learning from "../../public/learning.png";
export default function HomePage() {
  return (
    <>
      <div className="bg-[#000746] h-max">
        <div className="flex justify-center p-5 mb-6 h-[10vh]">
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
        <h1 className="text-3xl text-center text-[#b25ffb] text-[5vw] font-bold mt-10 mb-10">
          HACKER'S PARADISE
        </h1>
        <p className="text-white text-[0.8vw] m-8 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          iure molestiae at dolorum amet dolor perspiciatis distinctio sit
          ullam. Veritatis, molestiae deserunt! Reprehenderit a, non assumenda
          impedit aperiam rerum placeat. Perspiciatis obcaecati repellendus
          corrupti similiq a, rcorporis vero sunt re similique rem enim illo,
          ratione at voluptatibus eaque accusantium velit aspernatur facere!
          Excepturi optio aliquid repudiandae harum, ipsum illo porro quas
          rerum!
        </p>
        <div className="text-center">
          <button className="bg-[#b25ffb] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2">
            LOGIN
          </button>
          <button className="border-2 border-[#b25ffb] rounded text-white font-bold py-1.5 px-4">
            GET STARTED
          </button>
        </div>

        <div className="flex justify-center mt-[8vh] mb-[10vh]">
          <img
            src={slideshow1}
            alt="image"
            className="h-[50vh] rounded-xl"
          ></img>
          <div className="h-[40vh] m-8">
            <h2 className="text-7xl text-[4vw] w-[500px] text-[#b25ffb] font-bold leading-snug">
              LEARN FROM OUR CURATED MODULES!
            </h2>
          </div>
        </div>
        <div className="flex justify-center w-full h-[40vh] text-white mt-6">
          <div className="flex flex-col place-items-center justify-center h-full w-[20vw] m-4 border-2 border-[#b25ffb]">
          <img src={learning} alt="" className="w-[15vw] h-[25vh] m-6"></img>
          <button className=" bg-[#b25ffb] font-bold leading-snug text-[1.2vw] h-[5vh] mt-6 mb-8 py-2 px-4 rounded mr-2">
            Learn</button>
          </div>
          <div className="flex flex-col place-items-center justify-center h-full w-[20vw] m-4 border-2 border-[#b25ffb]">
          <img src={bug} alt="" className="w-[15vw] h-[25vh] m-6"></img>
          <button className=" bg-[#b25ffb] font-bold leading-snug text-[1.2vw] h-[5vh] mt-6 mb-8 py-2 px-4 rounded mr-2">Bug Bounties</button>
          </div>
          <div className=" flex flex-col place-items-center justify-center h-full w-[20vw] m-4 border-2 border-[#b25ffb]">
          <img src={activity} alt="" className="w-[15vw] h-[25vh] m-6"></img>
          <button className=" bg-[#b25ffb] font-bold leading-snug text-[1.2vw] h-[5vh] mt-6 mb-8 py-2 px-4 rounded mr-2">Hactivity</button>
          </div>
        </div>
        <div className="h-[35vh] flex justify-center">
          <div className=" h-full w-[20vw] bg-[#b25ffb] m-4 "></div>
          <div className=" h-full w-[20vw] bg-[#b25ffb] m-4 "></div>
          <div className=" h-full w-[20vw] bg-[#b25ffb] m-4 "></div>
        </div>
      </div>
    </>
  );
}
