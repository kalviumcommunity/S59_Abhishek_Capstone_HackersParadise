import React from 'react';
import { useForm } from 'react-hook-form';
import search from "/search.svg";

export default function AddHactivity() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log('Hactivity submitted:', data);
        reset();
    };

    return (
        <div className="bg-[#000746] h-full">
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Add a New Hactivity</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                    <input
                        type="text"
                        id="company"
                        {...register('company', { required: true })}
                        className="w-full p-2 border rounded"
                    />
                </div>
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
                <div className="mb-4">
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
                    <input
                        type="text"
                        id="tags"
                        {...register('tags', { required: true })}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="bountyReward" className="block text-sm font-medium text-gray-700">Bounty Reward</label>
                    <input
                        type="number"
                        id="bountyReward"
                        {...register('bountyReward', { required: true })}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300">
                    Submit
                </button>
            </form>
        </div>
        </div>
    );
}
