import React from "react";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Users from "./Users";

export default function AdminRoute() {


  return (
    <div className="flex gap-4 h-screen">
      <div className="w-1/4">
      <Sidebar />
      </div>
      <div className="w-3/4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users/>} />
        </Routes>
      </div>
    </div>
  );
}
