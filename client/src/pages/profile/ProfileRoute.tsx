import { Route, Routes } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import Sidebar from "./Sidebar";
import Listing from "./Listing";
import Claims from "./Claims";
import Help from "./Help";
import Messages from "./Messages";

export default function ProfileRoute() {
  return (
    <div className="flex gap-4 h-screen">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4">
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/help" element={<Help />} />
          <Route path="/messages" element={<Messages />} />
          {/* <Route path="/users" element={<Users/>} /> */}
        </Routes>
      </div>
    </div>
  );
}
