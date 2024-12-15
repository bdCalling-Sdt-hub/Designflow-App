'use client'
import React, { useState } from 'react'
import DashboardHomeHeader from '@/components/dashboard/dashboardHome/DashboardHomeHeader'
import { Tabs } from 'antd';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { FiPaperclip } from 'react-icons/fi';
import { useParams } from 'next/navigation';

export default function Page() {
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const onChange = (key) => {
    console.log(key);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
    }
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name); // Store file name to display
    }
  };


  const { chat } = useParams();

  console.log(chat);




  return (
    <div className="">
      <Tabs
        className="w-[60vw]"
        onChange={onChange}
        // tabBarStyle={{
        //   background: 'linear-gradient(to right, #4CAF50, #8BC34A)', // Gradient background
        //   color: 'white', 
        //   borderRadius: '12px',
        //   padding: '5px',
        //   marginBottom: '20px',
        // }}
        type="card"
        items={new Array(2).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `${id == 1 ? 'Designers  ' : "Clients"}`,
            key: id,
            children: (
              <div>
                <div className="h-[80vh] md:flex justify-center items-center">
                  <div className="w-full mx-auto rounded-3xl overflow-hidden bg-[#f7f7f7]">
                    <div className="flex items-center justify-between bg-[#a7bca2] p-5">
                      <div className="flex items-center gap-5">
                        <img className="w-12" src="/image/Dashboard/userImage.png" alt="" />
                        <h2> user {chat} Jon Deo {id}</h2>
                      </div>
                      <div className="p-2 bg-[#f7f7f7] w-10 h-10 flex justify-center items-center rounded-full cursor-pointer" >
                        <BsThreeDotsVertical className="text-2xl " />
                      </div>
                    </div>
                    <div className="py-5 pl-10 pr-5">
                      <div className="h-[60vh] overflow-y-scroll">
                        {/* Messages */}
                        {/* Message Structure */}
                        <div className="flex flex-col gap-4">
                          {/* Example Messages */}
                          <div className=" items-start">
                            <p className="p-5 bg-[#ede9e9] md:w-[350px] w-[250px] mb-1 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
                              Auctor urna, varius duis suspendisse mi in dictum.
                            </p>
                            <p className="font-semibold ml-1">
                              Anika <span className="font-normal text-sm">08:23 AM</span>
                            </p>
                          </div>
                          <div className="flex items-end justify-end">
                            <div>
                              <p className="p-5 bg-[#a7bca2] md:w-[350px] w-[250px] mb-1 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl">
                                Auctor urna, varius duis suspendisse mi in dictum.
                              </p>
                              <p className="">
                                <span className="font-normal text-sm">08:23 AM</span> You
                              </p>
                            </div>
                          </div>
                          {/* Add more messages here */}
                        </div>
                      </div>
                    </div>
                    {/* Message Input and Send Button */}
                    <div className="py-5 px-10 flex items-center gap-3">
                      {/* File Attachment Input */}
                      <div className="relative">
                        <input
                          type="file"
                          id="fileInput"
                          className="absolute opacity-0 w-0 h-0"
                          onChange={handleFileChange}
                        />
                        {/* Custom File Attachment Icon */}
                        <label htmlFor="fileInput" className="cursor-pointer text-gray-600">
                          <FiPaperclip className="text-xl" />
                        </label>
                        {/* Display the file name if file is selected */}
                        {fileName && <span className="text-sm text-gray-500 ml-2">{fileName}</span>}
                      </div>

                      {/* Message Input */}
                      <input
                        type="text"
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Type your message..."
                        className="p-3 w-full rounded-full border-2 border-gray-400"
                      />

                      {/* Send Button */}
                      <button
                        onClick={handleSendMessage}
                        className="p-3 bg-blue-500 text-white rounded-full"
                      >
                        <FaPaperPlane className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ),
          };
        })}
      />
    </div>
  )
}
