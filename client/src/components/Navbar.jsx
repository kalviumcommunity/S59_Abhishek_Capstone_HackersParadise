import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

export default function Navbar() {
  return (
    <>
      <div className='sticky pt-2 h-[8vh] sticky top-0 bg-[#000746] w-full shadow-2xl z-10'>
        <div className="navbar flex justify-between items-center pb-2 sticky top-0 bg-[#000746] w-full shadow-2xl z-10">
          <div className="flex-grow"></div>
          <div className="flex space-x-4">
            <Link to='/'>
              <button className="border-b-4 border-[#000746] text-white hover:border-purple-500 font-semibold py-2 px-4">
                HOME
              </button>
            </Link>
            <Link to='/Modules'>
              <button className="border-b-4 border-[#000746] text-white hover:border-purple-500 font-semibold py-2 px-4">
                LEARN
              </button>
            </Link>
            <Link to='/Bounties'>
              <button className="border-b-4 border-[#000746] text-white hover:border-purple-500 font-semibold py-2 px-4">
                BUG BOUNTIES
              </button>
            </Link>
            <Link to='/Hactivity'>
              <button className="border-b-4 border-[#000746] text-white hover:border-purple-500 font-semibold py-2 px-4">
                HACTIVITY
              </button>
            </Link>
          </div>
          <div className="flex-grow flex justify-end">
            <Link to='/Profile'>
              <button className="border-b-4 border-[#000746] text-white hover:border-purple-500 font-semibold py-2 px-4">
                Account
              </button>
            </Link>
          </div>
        </div>
        <div className='gradient-bar h-[0.6vh]'></div>
      </div>
    </>
  );
}
