import React from "react";

const Sidebar: React.FC = () => {
  const chats = [
    { title: "Sustainable shoes", date: "1 day ago", time: "12:47 PM" },
    { title: "Vintage dress", date: "2 days ago", time: "11:20 AM" },
    { title: "Eco friendly...", date: "3 days ago", time: "10:03 AM" },
    { title: "Reusable water...", date: "4 days ago", time: "9:30 AM" },
  ];

  return (
    <div className="w-1/4 bg-gray-100 mx-6">
      <div className="relative w-full rounded my-4">
        <input
          type="search"
          placeholder="Search in messages"
          className=" w-full rounded-lg  focus:ring-0 focus:outline-none bg-[#E7F3F1] py-3 pr-4 pl-12 text-sm placeholder:text-[#94BDB6]"
        />
        <div className="absolute inset-y-0 left-4 flex items-center pr-3">
          <img
            className="h-5 w-5 text-gray-400"
            src="https://img.icons8.com/ios-glyphs/30/94BDB6/search--v1.png"
            alt="Search Icon"
          />
        </div>
      </div>
      <div>
        <div className="p-4  hover:bg-gray-200 cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-semibold">Sustainable shoes</p>
              <p className="text-sm text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>
        <div className="p-4  hover:bg-gray-200 cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-semibold">Vintage dress</p>
              <p className="text-sm text-gray-500">2 days ago</p>
            </div>
          </div>
        </div>
        <div className="p-4  hover:bg-gray-200 cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-semibold">Eco friendly...</p>
              <p className="text-sm text-gray-500">3 days ago</p>
            </div>
          </div>
        </div>
        <div className="p-4  hover:bg-gray-200 cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-semibold">Reusable water...</p>
              <p className="text-sm text-gray-500">4 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
