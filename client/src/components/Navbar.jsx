import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex justify-center pt-2 h-[8vh] sticky top-0 bg-[#000746] w-full shadow-2xl">
        <Link to='/'>
          <button className="border-b-4 border-[#000746] hover:border-purple-500  text-white font-semibold py-2 px-4 mr-2">
            HOME
          </button>
          </Link>
          <Link to='/Modules'>
          <button className="border-b-4 border-[#000746] hover:border-purple-500 text-white font-semibold py-2 px-4 mr-2">
            LEARN
          </button>
          </Link>
          <Link to='/Bounties'>
          <button className="border-b-4 border-[#000746] hover:border-purple-500 text-white font-semibold py-2 px-4 mr-2">
            BUG BOUNTIES
          </button>
          </Link>
          <Link to='/Hactivity'>
          <button className="border-b-4 border-[#000746] hover:border-purple-500 text-white font-semibold py-2 px-4 mr-2">
            HACTIVITY
          </button>
          </Link>
        </div>
  )
}
