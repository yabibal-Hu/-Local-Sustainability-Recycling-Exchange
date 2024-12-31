import React from "react";

const ChatHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
      <div>
        <h1 className="text-2xl font-semibold">Sustainable shoes</h1>
        <p className="text-sm text-[#A0C2BC] font-semibold">Listed 1 day ago</p>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default ChatHeader;
