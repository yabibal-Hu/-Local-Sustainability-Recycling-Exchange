import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import ItemPost from "../../components/item/ItemPost";

const API_URL = import.meta.env.VITE_API_URL;

export default function Sidebar() {
  const { profiles, user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const profilePicture = profiles?.profilePicture || "";
  const name = profiles?.name || "";
  const isActive = useLocation().pathname.split("/")[2];

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <aside className="w-full flex flex-col px-10 py-10 bg-gray-50 h-screen shadow-lg">
      <div className="flex items-center mb-6">
        {profilePicture ? (
          <img
            src={`${API_URL}${profilePicture}`}
            alt="Profile"
            className="w-12 h-12 p-1 rounded-full border object-cover"
          />
        ) : (
          <div className="w-12 h-12 p-1 border rounded-full bg-gray-600 flex items-center justify-center text-white text-lg font-semibold">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
        )}
        <h2 className="ml-4 text-lg font-medium">{name}</h2>
      </div>
      <nav>
        <ul className="space-y-3">
          {[
            { path: "/", label: "Home", icon: "OXVih02dFZ53" },
            {
              path: "/profile/messages",
              label: "Messages",
              icon: "pxwMA3mOFcdW",
            },
            {
              path: "/profile/listing",
              label: "Listings",
              icon: "bLM2wAzB8B24",
            },
            { path: "/profile/claims", label: "Claims", icon: "dYlE5wUzIeEx" },
            { path: "/profile/help", label: "Help", icon: "CtviHbVsMacY" },
            { path: "/profile/", label: "Profile", icon: "2oRq7VXjDba7" },
          ].map((item) => (
            <Link
              to={item.path}
              key={item.label}
              className={`flex items-center p-3 rounded-lg hover:bg-[#eff7f5] ${
                isActive === item.label.toLowerCase()
                  ? "bg-[#E7F3F1] text-gray-600"
                  : ""
              }`}
            >
              <img
                src={`https://img.icons8.com/?size=100&id=${item.icon}&format=png&color=000000`}
                alt={item.label}
                className="w-6 h-6"
              />
              <span className="ml-3">{item.label}</span>
            </Link>
          ))}
        </ul>
      </nav>
      <button
        className="flex items-center mx-auto mt-6 px-4 py-2 rounded hover:bg-[#eff7f5]"
        onClick={handleModalOpen}
      >
        <img
          src="https://img.icons8.com/?size=100&id=37787&format=png&color=000000"
          alt="Add"
          className="w-6 h-6"
        />
        <span className="ml-2">New Listing</span>
      </button>
      {isModalOpen && <ItemPost onClose={handleModalClose} />}
    </aside>
  );
}


