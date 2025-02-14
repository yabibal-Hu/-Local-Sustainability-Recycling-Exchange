import React from "react";

const Messages: React.FC = () => {


  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div>
          <p className="font-medium">Sarah</p>
          <p className="p-2 bg-green-100 text-sm text-gray-800 rounded-lg max-w-md">
            Hi, I'm interested in the shoes. Are they still available?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Messages;
