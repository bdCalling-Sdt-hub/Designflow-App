import React from 'react';

const Page = () => {
    return (
        <div>
            <div className="bg-white p-8 rounded-lg shadow-lg md:w-[40%] w-full mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Admin</h2>
                <form>
                    {/* Full Name Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="fullName">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Assign Accessibility Dropdown */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="accessibility">
                            Assign Accessibility
                        </label>
                        <select
                            id="accessibility"
                            name="accessibility"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled>Select accessibility</option>
                            <option value="admin">Admin</option>
                            <option value="editor">Editor</option>
                            <option value="viewer">Viewer</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-[#637f5c] text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
