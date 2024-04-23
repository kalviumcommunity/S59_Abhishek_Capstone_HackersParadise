import React from "react";
import slideshow1 from "../../public/slideshow-1.png";
export default function HomePage() {
  return (
    <>
      <div className="bg-[#000746] h-screen">
        <div className="flex justify-center p-5 mb-10 h-[10vh]">
          <button className="hover:border-b-2 hover:border-purple-500 text-white font-semibold py-2 px-4 mr-2">
            HOME
          </button>
          <button className="hover:border-b-2 hover:border-purple-500 text-white font-semibold py-2 px-4 mr-2">
            LEARN
          </button>
          <button className="hover:border-b-2 hover:border-purple-500 text-white font-semibold py-2 px-4 mr-2">
            BUG BOUNTIES
          </button>
          <button className="hover:border-b-2 hover:border-purple-500 text-white font-semibold py-2 px-4 mr-2">
            HACTIVITY
          </button>
        </div>
        <h1 className="text-3xl text-center text-purple-500 text-[5vw] font-bold mb-10">
          HACKER'S PARADISE
        </h1>
        <p className="text-white text-[1vw] m-6 text-center">
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
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2">
            LOGIN
          </button>
          <button className="border-2 border-purple-500 rounded text-white font-bold py-1.5 px-4">
            GET STARTED
          </button>
        </div>

        <div className="flex justify-center  mt-10">
          <img
            src={slideshow1}
            alt="image"
            className="h-[50vh] rounded-xl"
          ></img>
          <div className="h-[40vh] ml-8 p-6">
            <h2 className="text-7xl text-[4vw] w-[500px] text-purple-500 font-bold leading-snug">
              LEARN FROM OUR CURATED MODULES!
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
