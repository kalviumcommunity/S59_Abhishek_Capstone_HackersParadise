import React from 'react';
import { useForm } from 'react-hook-form';

export default function AddHactivity() {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/api/hactivity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to post hactivity');
            }

            const result = await response.json();
            console.log('Hactivity successfully submitted:', result);

            reset();
        } catch (error) {
            console.error('Error submitting hactivity:', error);
        }
    };

    return (
        <div className="bg-[#000746] h-full">
            <div className="max-w-md mx-auto p-4 bg-[#9f54ff] rounded-xl shadow-lg mb-[5vh]">
                <h2 className="text-2xl font-semibold mb-4 text-white">Add a New Hactivity</h2>
                <form onSubmit={handleSubmit(onSubmit)}> 
                    <div className="mb-4">
                        <label htmlFor="company" className="block text-sm font-medium text-white">
                            Company
                        </label>
                        <input
                            type="text"
                            id="company"
                            {...register('company', { required: true })}
                            className="w-full p-2 border rounded placeholder-[#d48ff9] border-[#d48ff9]"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="topic" className="block text-sm font-medium text-white">
                            Topic
                        </label>
                        <input
                            type="text"
                            id="topic"
                            {...register('topic')}
                            className="w-full p-2 border rounded placeholder-[#d48ff9] border-[#d48ff9]"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="level" className="block text-sm font-medium text-white">
                            Level
                        </label>
                        <input
                            type="text"
                            id="level"
                            {...register('level')}
                            className="w-full p-2 border rounded placeholder-[#d48ff9] border-[#d48ff9]"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="info" className="block text-sm font-medium text-white">
                            Info
                        </label>
                        <textarea
                            id="info"
                            {...register('info')}
                            className="w-full p-2 border rounded placeholder-[#d48ff9] border-[#d48ff9]"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="tags" className="block text-sm font-medium text-white">
                            Tags
                        </label>
                        <input
                            type="text"
                            id="tags"
                            {...register('tags')}
                            className="w-full p-2 border rounded placeholder-[#d48ff9] border-[#d48ff9]"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="bountyreward" className="block text-sm font-medium text-white">
                            Bounty Reward
                        </label>
                        <input
                            type="text"
                            id="bountyreward"
                            {...register('bountyreward')}
                            className="w-full p-2 border roundedx placeholder-[#d48ff9] border-[#d48ff9]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full p-2 bg-gradient-to-r from-[#b25ffb] to-[#6300ff] text-white font-bold rounded hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
