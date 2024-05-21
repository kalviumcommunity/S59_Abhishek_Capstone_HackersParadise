import React from 'react'

export default function SignUp() {
  return (
    <div className="bg-[#000746] h-full">
    <div className="flex justify-center pt-[12vh] pb-[20vh]">
      <div className="flex flex-col text-white">
        <h1 className="text-[5vw] w-full text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] via-[#6300ff] to-[#6300ff]">
          LOGIN
        </h1>
        <div className="flex justify-center">
          <img src={user} alt="user image" className="h-[50%] mt-4"></img>
          <input
          type="text"
          placeholder="Enter Email"
          className="m-4 text-[1vw] h-[6vh] p-2 rounded-[0.8rem] w-[20vw]"
        /></div>
        <br />
        <div className="flex justify-center">
          <img src={password} alt="password image"></img>
        <input
          type="password"
          placeholder="Enter Password"
          className="m-4 text-[1vw] h-[6vh] p-2 rounded-[0.8rem] w-[20vw]"
        /></div>
        <br />
        <div className="flex justify-center flex-col place-items-center">
        <button className="h-[4vh] w-[10vw] rounded-[0.6rem] m-4 bg-gradient-to-b from-[#d48ff9] via-[#b25ffb] to-[#6300ff]">Sign In</button>
        <p>OR</p>
        <Link to="/SignUp">
        <div className="p-[0.2rem] m-4 bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] rounded-md">
          <div className=" flex justify-center bg-[#000746] ">
          <img src={create} alt="add" className="h-[3rem] p-2 pr-0"></img>
        <button className="text-whitefont-bold py-2 pr-4 pl-0 rounded">
          Create Account
        </button>
        </div>
        
      </div>
      </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
