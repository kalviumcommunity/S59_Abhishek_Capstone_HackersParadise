import React from "react";
import search from "/search.svg";
import module from "/module.png";
export default function Modules() {
  // const [data, setData] = useState([]);
  // const fetchData = () => {
  //   fetch("http://localhost:8080/api/modules")
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
        <div className="pt-[4vh] pb-[4vh] ">
          <div className="m-auto p-[0.2rem] bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] rounded-[0.9rem] w-[40vw]">
            <div className="flex justify-between bg-[#000746] p-[0.2rem] pr-[1rem] pl-[1rem] rounded-xl">
              <input
                placeholder="Search Modules here..."
                className="text-[#d48ff9] placeholder-[#d48ff9] bg-[#000746] text-[1vw] w-full focus:outline-none focus:ring-0 font-semibold"
              ></input>
              <img
                src={search}
                alt="search"
                className="cursor-pointer w-[2vw]"
              ></img>
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-[10vh]">
          <div className="m-[2vw] ml-[5vw] w-[50vh] bg-[#5711af] rounded-xl">
            <img src={module} alt="module" className="h-full w-full"></img>
          </div>
          <div className="text-white p-4">
            <ol className="list-inside list-decimal text-[4vw]">
              <li>
                <span class="font-bold">NETWORKING</span>
                <div class="text-[1vw] ml-[3vw] p-4">
                  <p className="w-[80%]">
                    Networking is the process of making connections and building
                    relationships. These connections can provide you with advice
                    and contacts, which can help you make informed career
                    decisions.
                  </p>
                  <ol type="i" class="list-inside list-decimal mt-2">
                    <li>Router</li>
                    <li>MAC Address</li>
                    <li>IP Address</li>
                  </ol>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex items-end w-[7vw]">
        <button className="w-full flex justify-center place-items-center rounded font-bold bg-gradient-to-r from-[#b25ffb] via-[#b25ffb] to-[#6300ff] text-white">
          Start the Course
        </button>
        </div>
        <hr className="bg-[#5711af] w-full" />
      </div>
    </>
  );
}
