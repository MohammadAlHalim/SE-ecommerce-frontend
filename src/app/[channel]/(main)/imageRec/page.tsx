import React from "react";
import { UploadIcon, SendIcon } from "lucide-react"; // Icons for upload and send
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Recognition · PcandMore",
  description: "Use our advanced AI tool to build the best PC.",
};

const CameraPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <main className="flex-grow mx-auto max-w-7xl px-4 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-neutral-900 mb-6 text-center">
          Upload a Photo and Chat with Us
        </h1>

        {/* Chat Section */}
        <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
          <h2 className="text-xl font-bold text-neutral-900 mb-4">Chat with Us</h2>
          <div className="h-64 border border-neutral-300 rounded-md p-4 overflow-y-auto">
            {/* Chat messages */}
            <p className="text-sm text-neutral-700">Chatbot: How can I help you today?</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            {/* Upload Button */}
            <label
              htmlFor="chat-upload"
              className="cursor-pointer inline-flex items-center justify-center w-10 h-10 text-black rounded-full shadow-sm hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500"
            >
              <UploadIcon className="h-5 w-5" aria-hidden="true" />
            </label>
            <input
              type="file"
              id="chat-upload"
              name="chat-upload"
              accept="image/*"
              className="hidden"
            />
           
            {/* Send Button */}
            <button
              type="button"
              className="text-black px-4 py-2 rounded-md hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 flex items-center justify-center"
            >
              <SendIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CameraPage;