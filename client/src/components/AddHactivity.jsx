import React, { useState } from 'react';

export default function AddHactivity() {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Activity submitted:', formData);
    setFormData({
        title: '',
        content: ''
    });
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Submit
                </button>
            </form>
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
    );
}
