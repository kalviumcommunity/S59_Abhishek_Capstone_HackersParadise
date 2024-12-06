import React, { useState, useEffect } from "react";
import search from "../../../../public/search.svg";
import like from "../../../../public/like.png";
import comment from "../../../../public/comment.png";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";

export default function Hactivity() {
  const [hactivities, setHactivities] = useState([]);
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/hactivity")
      .then((response) => response.json())
      .then((data) => {
        setHactivities(data);
      })
      .catch((error) => {
        console.error("Error fetching hactivities:", error);
        setError("Failed to fetch hactivities.");
      });
  }, []);

  const handleLike = (hactivityId) => {
    const newLikes = (likes[hactivityId] || 0) + 1;
    setLikes((prevLikes) => ({
      ...prevLikes,
      [hactivityId]: newLikes,
    }));

    fetch(`http://localhost:8080/api/hacktivity/${hactivityId}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: newLikes }),
    }).catch((error) => {
      console.error("Error updating likes:", error);
      setError("Failed to update likes.");
    });
  };

  const handleComment = (hactivityId) => {
    const newComment = { text: commentText, date: new Date() };

    fetch(`http://localhost:8080/api/hacktivity/${hactivityId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((data) => {
        setComments(data.comments);
        setCommentText("");
        setError(null);
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
        setError("Failed to add comment.");
      });
  };

  return (
    <>
      <div className="bg-[#000746] h-full">
        <div className="flex justify-between m-auto w-[80%]">
          {/* search */}
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

          {/* functional buttons */}
          <div className="flex justify-between place-items-center w-[30%]">
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
            <div className="p-0.5 h-[5.47vh]  w-[6vw] bg-gradient-to-r from-[#b25ffb] to-[#6300ff] rounded">
              <Link to="/AddHactivity">
                <button className="text-white w-full bg-[#000746] font-bold p-2 rounded">
                  Add
                </button>
              </Link>
            </div>
          </div>
        </div>

        {hactivities.length > 0 ? (
          // info about hactivity
          hactivities.map((hactivity) => (
            <div>
            <div
              key={hactivity.id}
              className="bg-[#9f54ff] w-[80%] m-auto text-white flex justify-between rounded-xl"
            >
              <div className="p-6">
                <p className="text-[1.5rem] font-semibold">
                  {hactivity.company}
                </p>
                <p>{hactivity.info}</p>
              </div>

              {/* likes and comments counter */}
              <div className="bg-[#8e35ff] p-4 rounded-xl flex items-center">
                <div className="flex flex-col items-center mr-4">
                  <img
                    src={like}
                    alt="likes Icon"
                    className="w-[3rem] p-2 cursor-pointer"
                    onClick={() => handleLike(hactivity.id)}
                  />
                  <span>{likes[hactivity.id] || hactivity.likes || 0}</span>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={comment}
                    alt="comment Icon"
                    className="w-[3rem] p-2 cursor-pointer"
                  />
                  <span>{comments.length}</span>
                </div>
              </div>
            </div>
            {/* comment section */}
            <div className="bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] w-[80%] m-auto mb-[5vh] text-white flex justify-between items-center p-4 rounded-xl">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full p-2 mr-4 text-black bg-white rounded-lg outline-none"
                />
                <button
                  onClick={handleComment}
                  className="p-2 bg-[#6300ff] hover:bg-[#8e35ff] text-white font-bold rounded-lg transition-all"
                >
                  Add Comment
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center my-10">
            <HashLoader color="#b25ffb" size={80} />
          </div>
        )}
      </div>
    </>
  );
}
