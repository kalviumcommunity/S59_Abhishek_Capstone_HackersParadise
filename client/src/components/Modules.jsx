import React from 'react'
import search from '/search.svg'
export default function Modules() {
  return (
    <>
    <div className="bg-[#000746] h-full">
    <div className='border-2 bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] rounded'>
      <input placeholder="Search Modules here..." className='text-purple-500 bg-[#000746]'></input> 
      <img src={search} alt=""></img> 
    </div>
    </div>

    <div className="flex justify-center w-full h-[30vh] text-white mt-6">
          <div className="flex flex-col place-items-center justify-center h-full w-[15vw] p-10 m-4 border-2 border-[#b25ffb]">
            <img src={learning} alt="" className="w-[8vw] h-[18vh] m-6"></img>
            <Link to="/Modules">
            <button className=" bg-[#b25ffb] font-bold leading-snug text-[1vw] h-[5vh] mt-6 mb-8 p-[0.5vw] rounded">
              Learn
            </button>
            </Link>
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
        <div className="h-fit w-[80%] mt-[2vh] flex justify-center mb-2 text-white">
          <div className=" h-full w-[20vw] bg-[#b25ffb] m-4 rounded">
            <div className="flex place-items-center justify-between h-[10vh] w-full shadow-2xl p-4 font-bold">
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
        <div className="flex justify-center ml-[57vw]">
          <Link to="/Bounties">
          <div className="w-[7vw] flex justify-center place-items-center rounded font-bold bg-gradient-to-r from-[#b25ffb] to-[#6300ff] cursor-pointer">
          <p className="text-white font-fold">See more</p>
          <img src={arrow} alt="image" className=""></img>
          </div>
          </Link>
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
    </>
  )
}
