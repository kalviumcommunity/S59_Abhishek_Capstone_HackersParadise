import React from "react";
import search from "/search.svg";
import like from "/like.png";
import comment from "/comment.png";

export default function Hactivity() {
    // const [data, setData] = useState([]);
    // const fetchData = () => {
    //   fetch("http://localhost:8080/api/hacktivity")
    //     .then((response) => response.json())
    //     .then((result) => {
    //       console.log("Fetched data:", result);
    //       setData(result);
    //     })
    //     .catch((err) => {
    //       console.error("Error fetching data:", err);
    //     });
    // };
    // useEffect(() => {
    //   fetchData();
    // }, []);
  
  return (
    <>
      <div className="bg-[#000746] h-full">
        <div className="flex justify-between m-auto w-[80%]">
          <div className="pt-[4vh] pb-[4vh]">
            <div className="m-auto p-[0.2rem] bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] rounded-[0.9rem] w-[40vw]">
              <div className="flex justify-between bg-[#000746] p-[0.2rem] pr-[1rem] pl-[1rem] rounded-xl">
                <input
                  placeholder="Search Modules here..."
                  className="text-[#d48ff9] placeholder-[#d48ff9] bg-[#000746] text-[1vw] w-full focus:outline-none focus:ring-0 font-semibold"
                ></input>
                <img
                  src={search}
                  alt="search Icon"
                  className="cursor-pointer w-[2vw]"
                ></img>
              </div>
            </div>
          </div>
          <div className="flex justify-between place-items-center w-[22%]">
            <div className="p-0.5 h-[5.4vh] w-[6vw] bg-gradient-to-r from-[#b25ffb] to-[#6300ff] rounded ml-[4rem]">
              <button className="text-white w-full bg-[#000746] font-bold p-2 rounded">
                Filter
              </button>
            </div>
            <div className="p-0.5 h-[5.4vh]  w-[6vw] bg-gradient-to-r from-[#b25ffb] to-[#6300ff] rounded">
              <button className="text-white w-full bg-[#000746] font-bold p-2 rounded">
                Sort By
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#9f54ff] w-[80%] m-auto mb-[5vh] text-white flex justify-between rounded-xl">
          <div className="p-6">
            <p className="text-[1.5rem] font-semibold">
              PORTSWIGGER WEB SECURITY
            </p>
            <p>
              Incorrect logic when buy one more license which may lead to extend
              the expire date of existing license
            </p>
          </div>
          <div className="bg-[#8e35ff] p-4 rounded-xl">
            <img src={like} alt="likes Icon" className="w-[3rem] p-2 cursor-pointer"></img>
            <img src={comment} alt="comment Icon" className="w-[3rem] p-2 cursor-pointer"></img>
          </div>
        </div>
      </div>
    </>
  );
}
