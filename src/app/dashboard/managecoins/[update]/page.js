'use client'
import React, { useState } from 'react';


const Page = () => {

    const [formData, setFormData] = useState({
        creditCode: '',
        discount: '',
        validityDate: '',
        coinCount: '',
        targetedPayment: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    return (
        <div>
            <div className="bg-white p-8 rounded-lg shadow-lg md:w-[40%] w-full mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Eidt Credit</h2>
                <form onSubmit={handleSubmit}>
                    {/* Credit Code Field */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-semibold mb-2"
                            htmlFor="creditCode"
                        >
                            Credit Code
                        </label>
                        <input
                            type="text"
                            id="creditCode"
                            name="creditCode"
                            value={formData.creditCode}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter credit code"
                            required
                        />
                    </div>

                    {/* Discount Field */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-semibold mb-2"
                            htmlFor="discount"
                        >
                            Discount
                        </label>
                        <input
                            type="number"
                            id="discount"
                            name="discount"
                            value={formData.discount}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter discount percentage"
                            required
                        />
                    </div>

                    {/* Validity Date Field */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-semibold mb-2"
                            htmlFor="validityDate"
                        >
                            Validity Date
                        </label>
                        <input
                            type="date"
                            id="validityDate"
                            name="validityDate"
                            value={formData.validityDate}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Coin Count Field */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-semibold mb-2"
                            htmlFor="coinCount"
                        >
                            Coin Count
                        </label>
                        <input
                            type="number"
                            id="coinCount"
                            name="coinCount"
                            value={formData.coinCount}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter coin count"
                            required
                        />
                    </div>

                    {/* Targeted Payment Field */}
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 font-semibold mb-2"
                            htmlFor="targetedPayment"
                        >
                            Targeted Payment
                        </label>
                        <input
                            type="number"
                            id="targetedPayment"
                            name="targetedPayment"
                            value={formData.targetedPayment}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter targeted payment"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-[#637f5c] text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#4f6b4a] transition duration-200"
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
