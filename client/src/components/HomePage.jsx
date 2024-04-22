import React from 'react'

export default function HomePage() {
  return (
    <>
    <div className='bg-blue-900 h-screen'>
    <div className="flex justify-center mb-10">
    <button className="bg-blue-900 hover:bg-blue-900 text-white font-semibold py-2 px-4 mr-2">
        HOME
      </button>
      <button className="bg-blue-900 hover:bg-blue-900 text-white font-semibold py-2 px-4 mr-2">
        LEARN
      </button>
      <button className="bg-blue-900 hover:bg-blue-900 text-white font-semibold py-2 px-4 mr-2">
        BUG BOUNTIES
      </button>
      <button className="bg-blue-900 hover:bg-blue-900 text-white font-semibold py-2 px-4 mr-2">
      HACTIVITY
      </button>
    </div>
    <h1 className="text-3xl text-center text-purple-500 font-semibold mb-10">
      Welcome to the Learning Platform!
    </h1>
    <div className="text-center">
      <button href="#" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2">
        Logging in
      </button>
      <button href="#" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Signing up
      </button>
    </div>
    <h2 className="text-2xl text-center text-purple-500 font-semibold mt-8 mb-10">
      Learn from our curated modules!
    </h2>
    <div className="text-center mt-8">
      <button href="#" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Visit Our Curated Modules
      </button>
    </div>
  </div>
    </>
  )
}
