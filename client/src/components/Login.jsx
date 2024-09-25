import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import create from "/create.png";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [resp, setResp] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const authUser = async (data) => {
    console.log("hello");
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mail: data.mail }),
      });
      const responseText = await response.json();
      if (response.ok) {
        console.log("Login Successful");
        const accessToken = responseText.accessToken;
        console.log(accessToken);
        setResp(responseText);
        if (accessToken) {
          setLoggedIn(true);
          document.cookie = `user=${responseText.name}; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/;`;
          document.cookie = `accessToken=${responseText.accessToken}; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/;`;
        }
      } else {
        console.log("Login Failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const responseText = await response.json();

      if (response.ok) {
        console.log("Logout Successful");
        setResp(responseText);
        setLoggedIn(false);
        document.cookie = `user=; expires=Thu, 10 Jan 1950 00:00:00 GMT; path=/;`;
      } else {
        console.log("Logout failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(resp);
  }, [resp]);

  return (
    <>
      <div className="bg-[#000746] h-full">
        <form
          className="shadow-2xl w-[40vw] m-auto pt-[11vw] pb-[11vw] rounded"
          onSubmit={handleSubmit(authUser)}
        >
          <h3 className="text-center text-[5vw] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#9b41f8] to-[#6300ff]">
            LOGIN
          </h3>
          <div className="flex flex-col mt-5 justify-center items-center">
            <input
              type="email"
              className="shadow-md rounded border border-grey px-1.5 py-[5px] w-[400px] m-3"
              placeholder="Enter Email"
              {...register("mail", {
                required: "Please enter the email",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
            />

            <input
              type="password"
              className="shadow-md rounded border border-grey px-1.5 py-[5px] w-[400px] m-3"
              placeholder="Enter password"
              {...register("password", {
                required: "Please enter the password",
                minLength: {
                  value: 10,
                  message: "The password should be at least 10 characters long",
                },
              })}
            />
          </div>
          {!loggedIn && (
            <div className="w-[100%] mt-[30px] flex justify-center">
              <Link to="/SignUp">
                <div className="w-[15vw] p-[0.2rem] m-4 bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] rounded-md">
                  <div className=" flex justify-center bg-[#000746] ">
                    <img
                      src={create}
                      alt="add"
                      className="h-[3rem] p-2 pr-0"
                    ></img>
                    <button className="text-white font-bold py-2 pr-4 pl-0 rounded">
                      Create Account
                    </button>
                  </div>
                </div>
              </Link>
              <div className="flex justify-center flex-col place-items-center">
                <button
                  className="font-bold h-[6vh] w-[10vw] rounded-[0.6rem] m-4 bg-gradient-to-b from-[#d48ff9] via-[#b25ffb] to-[#6300ff]"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </div>
          )}
        </form>
        {loggedIn && (
          <div className="flex justify-center">
            {
              <Link to="/">
                <button
                  onClick={logout}
                  className="bg-blue-500 rounded px-3 py-1.5 text-white hover:bg-blue-700"
                >
                  Log Out
                </button>
              </Link>
            }
          </div>
        )}

        <p>OR</p>
      </div>
    </>
  );
}
