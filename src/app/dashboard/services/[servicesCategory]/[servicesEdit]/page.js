'use client'
import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { CiImageOn } from 'react-icons/ci';

const Page = () => {
    // State to store the file list
    const [fileList, setFileList] = useState([]);

    // Handle change event (when files are uploaded or removed)
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    // Handle preview event (to preview the uploaded file)
    const handlePreview = async (file) => {
        let previewUrl;
        if (file.url) {
            previewUrl = file.url;
        } else if (file.preview) {
            previewUrl = file.preview;
        }
        const imageWindow = window.open(previewUrl);
        imageWindow.document.write('<img src="' + previewUrl + '" />');
    };

    // Handle file upload action
    const handleUpload = async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch("https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload", {
                method: 'POST',
                body: formData,
            });
            const result = await res.json();
            if (result && result.url) {
                message.success(`${file.name} file uploaded successfully.`);
                return { url: result.url }; // This must return an object with a url property.
            }
        } catch (error) {
            message.error(`${file.name} file upload failed.`);
        }

        return {
            url: 'https://example.com/fallback_image_url', // Use a fallback URL or handle error gracefully.
        };
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // Example: You can collect form data and send it to an API.
        const formData = new FormData(e.target);
        const data = {
            functionClass: formData.get("functionClass"),
            functionName: formData.get("functionName"),
            price: formData.get("price"),
            file: fileList[0]?.url, // File URL from the upload list
        };
        console.log(data);
        message.success("Form Submitted Successfully");
    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg my-10">
            <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-8 text-center">Function Details</h2>

                {/* Upload Section */}
                <div className="w-48 mx-auto">
                    <Upload
                        className="w-full"
                        customRequest={handleUpload}
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                        beforeUpload={() => false} // Disable default upload action; we're using our custom function.
                        maxCount={1} // Optional: limit the number of files to be uploaded.
                    >

                        <div className='text-center flex items-center justify-center flex-col'>
                            <CiImageOn className='block text-3xl' />
                            <h2>Upload</h2>
                        </div>

                        {fileList.length >= 1 ? null : (
                            <Button className='hidden' icon={<UploadOutlined />}>Upload</Button>
                        )}
                    </Upload>
                </div>

                {/* Function Class, Function Name, and Price */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
                    <div>
                        <label className="block text-sm font-semibold mb-2">Function Class</label>
                        <input
                            name="functionClass"
                            type="text"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter function class"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2">Function Name</label>
                        <input
                            name="functionName"
                            type="text"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter function name"
                            required
                        />
                    </div>
                </div>

                {/* Price Field */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Price</label>
                    <input
                        name="price"
                        type="number"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter price"
                        required
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 mt-8">

                    <button
                        type="submit"
                        className="py-2 px-8 bg-primaryBg text-white rounded-lg font-semibold  focus:outline-none"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Page;
