import React from "react";

const MessageInput: React.FC = () => {
  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
      <div className="py-4 flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="relative rounded w-2/3">
          <input
            type="text"
            placeholder="Type a message"
            className="w-full rounded-lg  focus:ring-0 focus:outline-none bg-[#E7F4F1] py-3 pl-4 pr-16 text-sm"
          />
          <button className="absolute inset-y-0 right-4 flex items-center pr-3 my-2  p-2 bg-[#38CEBC] text-white rounded-md hover:bg-[#1ACAB7]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
