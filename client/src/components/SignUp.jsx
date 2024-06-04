import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    mail: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('/register', formData);
      setSuccess('User registered successfully!');
    } catch (err) {
      setError(err.response.data.Error || 'An error occurred');
    }
  };

  return (
    <div className="bg-[#000746] h-full">
      <div className="flex justify-center pt-[12vh] pb-[20vh]">
        <div className="flex flex-col text-white">
          <h1 className="text-[5vw] w-full text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] via-[#6300ff] to-[#6300ff]">
            SIGN UP
          </h1>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col place-items-center">
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                value={formData.fname}
                onChange={handleChange}
                className="m-4 text-[1vw] h-[6vh] p-2 rounded-[0.8rem] w-[20vw]"
              />
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                value={formData.lname}
                onChange={handleChange}
                className="m-4 text-[1vw] h-[6vh] p-2 rounded-[0.8rem] w-[20vw]"
              />
              <input
                type="email"
                name="mail"
                placeholder="Enter Email"
                value={formData.mail}
                onChange={handleChange}
                className="m-4 text-[1vw] h-[6vh] p-2 rounded-[0.8rem] w-[20vw]"
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="m-4 text-[1vw] h-[6vh] p-2 rounded-[0.8rem] w-[20vw]"
              />
              <button type="submit" className="h-[4vh] w-[10vw] rounded-[0.6rem] m-4 bg-gradient-to-b from-[#d48ff9] via-[#b25ffb] to-[#6300ff]">
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center">OR</p>
          <Link to="/SignIn">
            <div className="p-[0.2rem] m-4 bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] rounded-md">
              <div className="flex justify-center bg-[#000746]">
                <img src={create} alt="add" className="h-[3rem] p-2 pr-0" />
                <button className="text-white font-bold py-2 pr-4 pl-0 rounded">
                  Sign In
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
