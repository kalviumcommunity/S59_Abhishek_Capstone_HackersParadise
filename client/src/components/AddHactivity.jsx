import React from 'react';
import { useForm } from 'react-hook-form';

export default function AddHactivity() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log('Hactivity submitted:', data);
        reset();
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Add a New Blog</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        {...register('title', { required: true })}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                    <textarea
                        id="content"
                        {...register('content', { required: true })}
                        className="w-full p-2 border rounded"
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
    );
}
