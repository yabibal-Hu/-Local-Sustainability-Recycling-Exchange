import React from "react";
import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

export default function Chat() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}

      <Sidebar />
      {/* Main Message Panel */}
      <div className="flex-1 flex flex-col bg-gray-50">
        <div className="p-4 ">
          <h2 className="text-2xl font-semibold">Sustainable shoes</h2>
          <p className="text-sm font-semibold text-[#A0C2BC]">
            Listed 1 day ago
          </p>
        </div>
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
}
