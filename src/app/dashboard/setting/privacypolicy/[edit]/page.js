'use client'
import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
// import { Link, useNavigate } from "react-router-dom";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Button, Form } from "antd";
import Link from "next/link";

// Function to decode HTML entities
const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const Page = () => {
 

  // console.log(privacyPolicy.data.attributes[0]?.content);

  // State for holding content
  const [content, setContent] = useState("");
  const [isInitialized, setIsInitialized] = useState(false); // Prevent unnecessary re-renders

 
  // Function to handle form submission
  const handlePostTerms = async () => {
    try {
      // Update terms and conditions with the content
      const res = await updateTC({ content }).unwrap();

      navigate("/dashboard/setting/privacypolicy"); // Redirect after success

      if (res?.code === 200) {
        toast.success(res?.message); // Show success notification
        setTimeout(() => {}, 1000);
      }
    } catch (error) {
      toast.error("Failed to update terms and conditions"); // Show error notification
      console.error("Error:", error);
    }
  };

  return (
    <div className="mt-8 md:mr-6 md:px-0 px-5">
      <Link
        href="/dashboard/setting/privacypolicy"
        className="flex items-center flex-wrap gap-2"
      >
        <FaCircleArrowLeft className="text-primaryBg w-8 h-8" />
        <p className="font-semibold text-[30px]">Privacy Policy</p>
      </Link>

      <Form
        labelCol={{ span: 22 }}
        wrapperCol={{ span: 40 }}
        layout="vertical"
        onFinish={handlePostTerms}
      >
        <div className="mt-6">
          <JoditEditor
            // ref={editor}
            value={`lkdsfjhskldjfh shdflksjhdf lkjsd f`} // Controlled by state content
            // onChange={(newContent) => setContent(newContent)} // Update content on change
            // config={{
            //   readonly: isLoading // Disable editing while loading
            // }}
          />
        </div>

        <div className="text-right mt-6">
          <Form.Item>
            <Button
              htmlType="submit"
              className="h-[44px] w-[260px] !text-white !bg-primaryBg text-[#fff] rounded-[8px]"
            //   loading={isLoading} // Add loading state to button
            >
              Update Privacy & Policy
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Page;
