import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Loading from "../Loading";

const API_URL = import.meta.env.VITE_API_URL;

interface Item {
  category?: string;
  condition?: string;
  distance?: number;
  featured?: boolean;
  isClaimed?: boolean;
  createdAt?: string;
  description?: string;
  image?: string;
  name?: string;
  price?: number;
  owner?: {
    name?: string;
    email?: string;
    profilePicture?: string;  

  }
}

interface User {
  name?: string;
  email?: string;
}

export default function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [item, setItem] = useState<Item | null>(null);
  const [userr, setUser] = useState<User>({});
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/items/${id}`)
      .then((response) => {
        setItem(response.data);
        setUser(response.data.owner || {});
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!item || !user) {
    return (
      <div className="w-36 h-36 absolute top-1/2 left-1/2 transform">
        <Loading />
      </div>
    );
  }
  return (
    <div className="m-16 mt-8 p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Item Header */}
      <div className="flex items-center justify-between p-6 bg-white rounded-md shadow-sm">
        <div className="flex items-center">
          <img
            src={API_URL + (item?.image || "https://via.placeholder.com/250")}
            alt={item?.name || "Item Image"}
            className="w-32 h-32 object-cover rounded-lg shadow cursor-pointer"
            onClick={() => setIsImageModalOpen(true)} // Open modal on click
          />
          <div className="ml-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {item?.name || "Item Name"}
            </h2>
            <p className="text-sm text-gray-500">
              Posted by{" "}
              <span className="font-semibold">{userr.name || "Unknown"}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-2xl font-semibold text-[#38CEBC] mr-4">
            ${item?.price || "0"}
          </span>
          {user?.email !== userr.email && (
            <button
              className="flex items-center p-2 bg-[#91c4be] text-white rounded-lg shadow hover:bg-[#1ACAB7]"
              onClick={() => navigate("/chat")}
            >
              <img
                src="https://img.icons8.com/?size=100&id=81271&format=png&color=000000"
                alt=""
                className="w-6 h-6 mr-2"
              />
              Message
            </button>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setIsImageModalOpen(false)} // Close modal on background click
        >
          <div className="relative bg-white rounded-lg p-4 shadow-lg">
            <button
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2"
              onClick={() => setIsImageModalOpen(false)}
            >
              ✕
            </button>
            <img
              src={API_URL + (item?.image || "https://via.placeholder.com/250")}
              alt={item?.name || "Item Image"}
              className="max-w-screen-sm max-h-screen object-contain"
            />
          </div>
        </div>
      )}

      {/* Item Details */}
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-700">Details</h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="space-y-2">
            <p className="text-gray-500">
              <span className="font-semibold text-gray-700">Category:</span>{" "}
              {item?.category || "N/A"}
            </p>
            <p className="text-gray-500">
              <span className="font-semibold text-gray-700">Condition:</span>{" "}
              {item?.condition || "N/A"}
            </p>
            {/* <p className="text-gray-500">
              <span className="font-semibold text-gray-700">Distance:</span>{" "}
              {item?.distance || "0"} km
              </p> */}
              <p className="text-gray-500">
                <span className="font-semibold text-gray-700">Posted On:</span>{" "}
                {item?.createdAt
                  ? new Date(item.createdAt).toLocaleDateString()
                  : "N/A"}
              </p>
          </div>
          <div>
            <p className="text-gray-500">
              <span className="font-semibold text-gray-700">Featured:</span>{" "}
              {item?.featured ? "Yes" : "No"}
            </p>
            <p className="text-gray-500 mt-2">
              <span className="font-semibold text-gray-700">Claimed:</span>{" "}
              {item?.isClaimed ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-700">Description</h3>
        <p className="mt-2 text-gray-600">
          {item?.description || "No description available."}
        </p>
      </div>

      {/* Owner Contact */}
      <div className="mt-6 p-4 bg-white rounded-md shadow-sm">
        <h3 className="text-lg font-medium text-gray-700">Owner Information</h3>
        <div className="flex items-center gap-2 mt-2">
          <div>

          {item?.owner?.profilePicture ? (
              <img
              src={`${API_URL}${item.owner.profilePicture}`}
              alt=""
              className=" h-10 w-10 rounded-full border-2 border-[#E7F3F1]"
              />
          ) : (
              <div className="  h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center text-white text-4xl font-semibold">
              <p className="uppercase p-2 m-2">
                  {item.owner?.name?.charAt(0).toUpperCase() || "U"}
              </p>
              </div>
          )}
          </div>
          <div>
            <p className=" text-gray-500">
              <span className="font-semibold text-gray-700">Name:</span>{" "}
              {item.owner?.name || "N/A"}
            </p>
            <p className="text-gray-500">
              <span className="font-semibold text-gray-700">Email:</span>{" "}
              {item.owner?.email || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
